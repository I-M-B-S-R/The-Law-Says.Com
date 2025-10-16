const fs = require('fs');
const admin = require('firebase-admin');
const convert = require('xml-js');

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

// A helper function to delete all documents in a collection
async function deleteCollection(collectionPath) {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.orderBy('__name__').limit(100);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(query, resolve).catch(reject);
  });
}

async function deleteQueryBatch(query, resolve) {
  const snapshot = await query.get();

  if (snapshot.size === 0) {
    return resolve();
  }

  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();

  process.nextTick(() => {
    deleteQueryBatch(query, resolve);
  });
}


async function main() {
  try {
    console.log('--- UPLOADER STARTING ---');

    // --- 1. Clear Old Data ---
    console.log('Deleting old data from "law_categories"...');
    await deleteCollection('law_categories');
    console.log('Deleting old data from "sub_categories"...');
    await deleteCollection('sub_categories');
    console.log('Old data cleared successfully.');

    // --- 2. Read and Parse the XML File ---
    console.log('Reading laws.xml file...');
    const xmlFile = fs.readFileSync('laws.xml', 'utf8');
    const options = { compact: true, attributesKey: 'attributes' };
    const result = convert.xml2js(xmlFile, options);
    
    // Navigate to the array of <TITLE> elements
    const titles = result['soap:Envelope']['soap:Body'].ARSResponse.ARSResult.ARS.TITLE;
    console.log(`Found ${titles.length} titles to process.`);

    // --- 3. Loop and Upload ---
    for (let i = 0; i < titles.length; i++) {
      const titleData = titles[i];
      const titleAttributes = titleData.attributes;

      // Skip repealed titles
      if (titleAttributes.Repealed === "1") {
        console.log(`Skipping repealed title: ${titleAttributes.Title_Name}`);
        continue;
      }
      
      console.log(`\nProcessing Title ${i + 1}: ${titleAttributes.Title_Name}`);
      
      // Create the main Title category
      const titleDoc = {
        name: titleAttributes.Title_Name,
        order: i + 1,
        parentCategoryId: null // Top-level items have no parent
      };
      const titleRef = await db.collection('law_categories').add(titleDoc);
      console.log(`  > Added Title to law_categories with ID: ${titleRef.id}`);

      // Handle Chapters within the Title
      let chapters = titleData.CHAPTER;
      if (chapters && !Array.isArray(chapters)) chapters = [chapters]; // Ensure chapters is an array

      if (chapters) {
        for (let j = 0; j < chapters.length; j++) {
          const chapterData = chapters[j];
          const chapterAttributes = chapterData.attributes;

          const chapterDoc = {
            name: chapterAttributes.Chapter_Heading,
            order: j + 1,
            parentCategoryId: titleRef.id, // Link to the parent Title
            content: '' // Add a placeholder for content later
          };
          const chapterRef = await db.collection('sub_categories').add(chapterDoc);
          console.log(`    - Added Chapter: ${chapterDoc.name}`);
        }
      }
    }

    console.log('\n--- UPLOAD COMPLETE! ---');
    console.log('Your database has been populated with the structure from laws.xml.');

  } catch (error) {
    console.error("\n--- AN ERROR OCCURRED ---");
    console.error(error);
  }
}

main();