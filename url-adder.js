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

// --- MAIN LOGIC ---
async function main() {
  try {
    console.log('--- URL ADDER STARTING ---');
    
    const allTitles = await scrapeTitles();
    console.log(`Found ${allTitles.length} titles. Now finding matches and adding URLs to Firestore...`);

    for (let i = 0; i < allTitles.length; i++) {
      const title = allTitles[i];
      console.log(`\nProcessing Title ${i + 1}/${allTitles.length}: ${title.name}`);
      
      const titleNameParts = title.name.split(' - ');
      const descriptiveTitleName = titleNameParts.length > 1 ? titleNameParts[1] : title.name;
      const titleQuery = await db.collection('law_categories').where('name', '==', descriptiveTitleName).limit(1).get();
      
      if (titleQuery.empty) {
        console.log(`  > Title not found in DB ("${descriptiveTitleName}"). Skipping.`);
        continue;
      }

      const titleDoc = titleQuery.docs[0];
      console.log(`  > Found matching Title in DB.`);
      
      const chapters = await scrapeChapters(title.url);
      
      for (let j = 0; j < chapters.length; j++) {
        const chapter = chapters[j];
        
        const chapterNameParts = chapter.name.split(' - ');
        const descriptiveChapterName = chapterNameParts.length > 1 ? chapterNameParts[1] : chapter.name;

        const chapterQuery = await db.collection('sub_categories')
          .where('name', '==', descriptiveChapterName)
          .where('parentCategoryId', '==', titleDoc.id)
          .limit(1)
          .get();

        if (chapterQuery.empty) {
            console.log(`    - Chapter "${descriptiveChapterName}" not found in DB. Skipping.`);
            continue;
        }

        const chapterDoc = chapterQuery.docs[0];
        
        // Update the document with the URL we just scraped
        await db.collection('sub_categories').doc(chapterDoc.id).update({
            url: chapter.url 
        });
        console.log(`    - ✅ Added URL to: "${chapter.name}"`);
        
        // A short, polite pause between requests
        await sleep(200 + Math.random() * 300);
      }
    }

    console.log('\n--- ALL URLS ADDED! ---');

  } catch (error) {
    console.error("An error occurred during the main process:", error);
  }
}

main();