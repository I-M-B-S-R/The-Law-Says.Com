const axios = require('axios');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'usc-xml-data');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function downloadBulkZip() {
  const url = 'https://uscode.house.gov/download/releasepoints/us/pl/119/36/xml_usc.zip';
  const outputPath = path.join(OUTPUT_DIR, 'usc-bulk.zip');
  
  console.log('Attempting to download bulk USC ZIP file...');
  console.log(`URL: ${url}`);
  console.log(`Output: ${outputPath}\n`);
  
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      timeout: 120000,
      maxRedirects: 5,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/zip,application/octet-stream,*/*'
      }
    });
    
    console.log(`Status: ${response.status}`);
    console.log(`Content-Type: ${response.headers['content-type']}`);
    console.log(`Content-Length: ${response.data.length} bytes`);
    
    // Check if it's actually a ZIP file by looking at the magic number
    const magicNumber = response.data.slice(0, 4);
    const isZip = magicNumber[0] === 0x50 && magicNumber[1] === 0x4B;
    
    if (isZip) {
      console.log('\n✓ File appears to be a valid ZIP archive');
      fs.writeFileSync(outputPath, response.data);
      console.log(`✓ Saved to: ${outputPath}`);
      console.log(`\nFile size: ${(response.data.length / 1024 / 1024).toFixed(2)} MB`);
    } else {
      console.log('\n✗ File is NOT a ZIP archive (likely HTML)');
      const textContent = response.data.toString('utf-8').substring(0, 500);
      console.log('\nFirst 500 characters:');
      console.log(textContent);
      
      // Save as HTML for inspection
      fs.writeFileSync(outputPath + '.html', response.data);
      console.log(`\nSaved HTML response to: ${outputPath}.html`);
    }
    
  } catch (error) {
    console.error(`✗ Download failed: ${error.message}`);
    throw error;
  }
}

downloadBulkZip().catch(console.error);
