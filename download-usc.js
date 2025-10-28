const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Base URL for USC downloads
const BASE_URL = 'https://uscode.house.gov/download/releasepoints/us/pl/119/36/xml_usc';

// All USC titles (1-54, note that 53 is reserved)
const USC_TITLES = [
  { num: 1, name: 'General Provisions' },
  { num: 2, name: 'The Congress' },
  { num: 3, name: 'The President' },
  { num: 4, name: 'Flag and Seal, Seat of Government, and the States' },
  { num: 5, name: 'Government Organization and Employees' },
  { num: 6, name: 'Domestic Security' },
  { num: 7, name: 'Agriculture' },
  { num: 8, name: 'Aliens and Nationality' },
  { num: 9, name: 'Arbitration' },
  { num: 10, name: 'Armed Forces' },
  { num: 11, name: 'Bankruptcy' },
  { num: 12, name: 'Banks and Banking' },
  { num: 13, name: 'Census' },
  { num: 14, name: 'Coast Guard' },
  { num: 15, name: 'Commerce and Trade' },
  { num: 16, name: 'Conservation' },
  { num: 17, name: 'Copyrights' },
  { num: 18, name: 'Crimes and Criminal Procedure' },
  { num: 19, name: 'Customs Duties' },
  { num: 20, name: 'Education' },
  { num: 21, name: 'Food and Drugs' },
  { num: 22, name: 'Foreign Relations and Intercourse' },
  { num: 23, name: 'Highways' },
  { num: 24, name: 'Hospitals and Asylums' },
  { num: 25, name: 'Indians' },
  { num: 26, name: 'Internal Revenue Code' },
  { num: 27, name: 'Intoxicating Liquors' },
  { num: 28, name: 'Judiciary and Judicial Procedure' },
  { num: 29, name: 'Labor' },
  { num: 30, name: 'Mineral Lands and Mining' },
  { num: 31, name: 'Money and Finance' },
  { num: 32, name: 'National Guard' },
  { num: 33, name: 'Navigation and Navigable Waters' },
  { num: 34, name: 'Crime Control and Law Enforcement' },
  { num: 35, name: 'Patents' },
  { num: 36, name: 'Patriotic and National Observances, Ceremonies, and Organizations' },
  { num: 37, name: 'Pay and Allowances of the Uniformed Services' },
  { num: 38, name: 'Veterans\' Benefits' },
  { num: 39, name: 'Postal Service' },
  { num: 40, name: 'Public Buildings, Property, and Works' },
  { num: 41, name: 'Public Contracts' },
  { num: 42, name: 'The Public Health and Welfare' },
  { num: 43, name: 'Public Lands' },
  { num: 44, name: 'Public Printing and Documents' },
  { num: 45, name: 'Railroads' },
  { num: 46, name: 'Shipping' },
  { num: 47, name: 'Telecommunications' },
  { num: 48, name: 'Territories and Insular Possessions' },
  { num: 49, name: 'Transportation' },
  { num: 50, name: 'War and National Defense' },
  { num: 51, name: 'National and Commercial Space Programs' },
  { num: 52, name: 'Voting and Elections' },
  { num: 53, name: 'Reserved' },
  { num: 54, name: 'National Park Service and Related Programs' }
];

// Create output directory
const OUTPUT_DIR = path.join(__dirname, 'usc-xml-data');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Download a single title
async function downloadTitle(titleNum) {
  const paddedNum = String(titleNum).padStart(2, '0');
  const url = `${BASE_URL}${paddedNum}@.xml`;
  const outputPath = path.join(OUTPUT_DIR, `usc${paddedNum}.xml`);
  
  try {
    console.log(`Downloading Title ${titleNum}...`);
    const response = await axios.get(url, {
      responseType: 'stream',
      timeout: 60000, // 60 second timeout
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);
    
    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log(`✓ Downloaded Title ${titleNum} - ${USC_TITLES.find(t => t.num === titleNum)?.name}`);
        resolve();
      });
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`✗ Failed to download Title ${titleNum}: ${error.message}`);
    // Save error info
    fs.writeFileSync(
      path.join(OUTPUT_DIR, `usc${paddedNum}_error.txt`),
      `Error downloading Title ${titleNum}: ${error.message}\nURL: ${url}`
    );
  }
}

// Download all titles with rate limiting
async function downloadAllTitles() {
  console.log('Starting USC XML download...');
  console.log(`Output directory: ${OUTPUT_DIR}\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const title of USC_TITLES) {
    if (title.num === 53) {
      console.log(`Skipping Title 53 (Reserved)`);
      continue;
    }
    
    try {
      await downloadTitle(title.num);
      successCount++;
      // Rate limiting - wait 1 second between downloads
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      failCount++;
    }
  }
  
  console.log('\n=== Download Complete ===');
  console.log(`✓ Successfully downloaded: ${successCount} titles`);
  console.log(`✗ Failed: ${failCount} titles`);
  console.log(`\nFiles saved to: ${OUTPUT_DIR}`);
}

// Run the download
downloadAllTitles().catch(console.error);
