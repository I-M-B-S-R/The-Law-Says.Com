const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Test different URL formats to find the correct one
const titleNum = 18;
const paddedNum = String(titleNum).padStart(2, '0');

const OUTPUT_DIR = path.join(__dirname, 'usc-xml-data');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Try different URL patterns including bulk download
const urlPatterns = [
  // Bulk download
  `https://uscode.house.gov/download/releasepoints/us/pl/119/36/xml_usc.zip`,
  // With @ symbol variations
  `https://uscode.house.gov/download/releasepoints/us/pl/119/36/xml_usc${paddedNum}@.xml`,
  `https://uscode.house.gov/download/releasepoints/us/pl/119/36/xml_usc${paddedNum}%40.xml`,
  // Without @ symbol
  `https://uscode.house.gov/download/releasepoints/us/pl/119/36/xml_usc${paddedNum}.xml`,
  // Different path structures
  `https://uscode.house.gov/download/releasepoints/us/pl/119/36/usc${paddedNum}.xml`,
  `https://uscode.house.gov/download/xml/usc${paddedNum}.xml`,
  // Try with title prefix
  `https://uscode.house.gov/download/releasepoints/us/pl/119/36/title${paddedNum}.xml`,
];

async function testURL(url, index) {
  console.log(`\nTest ${index + 1}: ${url}`);
  try {
    const response = await axios.head(url, {
      timeout: 10000,
      maxRedirects: 5,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    console.log(`✓ Status: ${response.status}`);
    console.log(`  Content-Type: ${response.headers['content-type']}`);
    console.log(`  Content-Length: ${response.headers['content-length']} bytes`);
    return url;
  } catch (error) {
    if (error.response) {
      console.log(`✗ Failed: HTTP ${error.response.status}`);
    } else {
      console.log(`✗ Failed: ${error.message}`);
    }
    return null;
  }
}

async function findWorkingURL() {
  console.log('Testing different URL patterns for USC downloads...\n');
  
  for (let i = 0; i < urlPatterns.length; i++) {
    const workingURL = await testURL(urlPatterns[i], i);
    if (workingURL) {
      console.log(`\n✓✓✓ Found working URL: ${workingURL}`);
      return workingURL;
    }
  }
  
  console.log('\n✗✗✗ No working URL found');
  console.log('\nNote: The download links on the website might require:');
  console.log('  - Session cookies');
  console.log('  - JavaScript execution');
  console.log('  - Form submission');
  console.log('\nConsider using the bulk ZIP download or checking the page source for actual URLs.');
  return null;
}

findWorkingURL().catch(console.error);
