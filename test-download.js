const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Base URL for USC downloads
const BASE_URL = 'https://uscode.house.gov/download/releasepoints/us/pl/119/36/xml_usc';

// Create output directory
const OUTPUT_DIR = path.join(__dirname, 'usc-xml-data');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Test download with Title 18 (Crimes and Criminal Procedure)
async function testDownload() {
  const titleNum = 18;
  const paddedNum = String(titleNum).padStart(2, '0');
  const url = `${BASE_URL}${paddedNum}@.xml`;
  const outputPath = path.join(OUTPUT_DIR, `usc${paddedNum}.xml`);
  
  console.log('Testing USC download with Title 18...');
  console.log(`URL: ${url}`);
  console.log(`Output: ${outputPath}\n`);
  
  try {
    console.log('Downloading...');
    const response = await axios.get(url, {
      responseType: 'stream',
      timeout: 60000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);
    
    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        const stats = fs.statSync(outputPath);
        console.log(`✓ Download successful!`);
        console.log(`File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Saved to: ${outputPath}`);
        resolve();
      });
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`✗ Download failed: ${error.message}`);
    throw error;
  }
}

testDownload().catch(console.error);
