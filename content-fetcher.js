const axios = require('axios');
const cheerio = require('cheerio');
const admin = require('firebase-admin');

// --- CONFIGURATION ---
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36';

// --- FIREBASE ADMIN SETUP ---
const serviceAccount = require('./serviceAccountKey.json');
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}
const db = admin.firestore();

// --- HELPER FUNCTIONS ---
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const baseUrl = 'https://www.azleg.gov';

async function scrapeTitles() {
  const url = `${baseUrl}/arstitle/`;
  const { data } = await axios.get(url, { headers: { 'User-Agent': USER_AGENT } });
  const $ = cheerio.load(data);
  const titles = [];
  $('table#arsTable tr').each((index, element) => {
    const linkElement = $(element).find('a');
    if (linkElement.length > 0) {
      titles.push({
        name: `${linkElement.text().trim()} - ${$(element).find('td').eq(2).text().trim()}`,
        url: linkElement.attr('href')
      });
    }
  });
  return titles;
}

async function scrapeChapters(titleUrl) {
  const { data } = await axios.get(titleUrl, { headers: { 'User-Agent': USER_AGENT } });
  const $ = cheerio.load(data);
  const chapters = [];
  $('div.accordion > h5').each((index, element) => {
    const header = $(element);
    const chapterNumber = header.find('a').text().trim();
    const chapterName = header.find('div.two-thirds').text().trim();
    const chapterContentDiv = header.next('div');
    const firstSectionLink = chapterContentDiv.find('a.stat').first().attr('href');
    if (chapterNumber && chapterName && firstSectionLink) {
        const sectionsListPageUrl = `${baseUrl}${firstSectionLink.substring(0, firstSectionLink.lastIndexOf('/') + 1)}`;
        chapters.push({
            name: `${chapterNumber} - ${chapterName}`,
            url: sectionsListPageUrl
        });
    }
  });
  return chapters;
}

async function scrapeSections(chapterUrl) {
    let allSectionsText = '';
    try {
        const { data: chapterIndexPage } = await axios.get(chapterUrl, { headers: { 'User-Agent': USER_AGENT } });
        const $ = cheerio.load(chapterIndexPage);

        const sectionLinks = [];
        $('div.body-content ul li a').each((i, el) => {
            const href = $(el).attr('href');
            if (href && href.endsWith('.htm')) {
                const fullUrl = new URL(href, chapterUrl).href;
                if (!sectionLinks.includes(fullUrl)) {
                    sectionLinks.push(fullUrl);
                }
            }
        });

        console.log(`        Found ${sectionLinks.length} section pages for this chapter.`);

        if (sectionLinks.length > 0) {
            for (const link of sectionLinks) {
                console.log(`        ... scraping sub-page: ${link.split('/').pop()}`);
                const { data: sectionPage } = await axios.get(link, { headers: { 'User-Agent': USER_AGENT } });
                const $$ = cheerio.load(sectionPage);
                allSectionsText += $$('div.body-content').text().trim() + '\n\n';
                await sleep(500 + Math.random() * 500);
            }
        } else {
            console.log(`        No sub-pages found. Scraping current page as content.`);
            allSectionsText = $('div.body-content').text().trim();
        }

    } catch (e) {
        console.error(`        Could not fetch sections from ${chapterUrl}: ${e.message}`);
    }
    return allSectionsText;
}


// --- MAIN LOGIC ---
async function main() {
  try {
    console.log('--- CONTENT FETCHER STARTING ---');
    console.log('This will be slow, as it pauses between requests. Please be patient.');

    const allTitles = await scrapeTitles();
    console.log(`Found ${allTitles.length} titles on the website. Now matching, scraping, and updating Firestore...`);

    for (let i = 0; i < allTitles.length; i++) {
      const title = allTitles[i];
      console.log(`\nProcessing Title ${i + 1}/${allTitles.length}: ${title.name}`);
      
      const titleNameParts = title.name.split(' - ');
      const descriptiveTitleName = titleNameParts.length > 1 ? titleNameParts[1] : title.name;

      const titleQuery = await db.collection('law_categories').where('name', '==', descriptiveTitleName).limit(1).get();
      
      if (titleQuery.empty) {
        console.log(`  > Title not found in database ("${descriptiveTitleName}"). Skipping.`);
        continue;
      }

      const titleDoc = titleQuery.docs[0];
      console.log(`  > Found matching Title in DB with ID: ${titleDoc.id}`);
      
      const chapters = await scrapeChapters(title.url);
      
      for (let j = 0; j < chapters.length; j++) {
        const chapter = chapters[j];
        
        // --- THIS IS THE NEW FIX FOR CHAPTERS ---
        // The scraper gets a name like "Chapter 1 - Name", but the DB has "Name".
        // We extract the descriptive part to use for matching.
        const chapterNameParts = chapter.name.split(' - ');
        const descriptiveChapterName = chapterNameParts.length > 1 ? chapterNameParts[1] : chapter.name;

        const chapterQuery = await db.collection('sub_categories')
          .where('name', '==', descriptiveChapterName) // Use the corrected chapter name
          .where('parentCategoryId', '==', titleDoc.id)
          .limit(1)
          .get();

        if (chapterQuery.empty) {
            console.log(`    - Chapter "${descriptiveChapterName}" not found in DB. Skipping.`);
            continue;
        }

        const chapterDoc = chapterQuery.docs[0];
        console.log(`    - Found Chapter in DB: "${chapter.name}"`);

        const sectionsContent = await scrapeSections(chapter.url);

        if (sectionsContent && sectionsContent.trim() !== '') {
            await db.collection('sub_categories').doc(chapterDoc.id).update({
                content: sectionsContent
            });
            console.log(`      ✅ Updated content successfully.`);
        } else {
            console.log(`      ⚠️ No content found on website for this chapter.`);
        }
        
        const delay = 1500 + Math.random() * 2000;
        console.log(`      ... waiting for ${Math.round(delay / 1000)}s`);
        await sleep(delay);
      }
    }

    console.log('\n--- ALL CONTENT FETCHING COMPLETE! ---');

  } catch (error) {
    console.error("An error occurred during the main process:", error);
  }
}

main();