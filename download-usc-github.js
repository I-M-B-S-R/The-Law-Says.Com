const axios = require('axios');
const fs = require('fs');
const path = require('path');

const GITHUB_REPO = 'BlackacreLabs/uscode-xml';
const OUTPUT_DIR = path.join(__dirname, 'usc-xml-data');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function downloadUSCFiles() {
  console.log('Downloading USC XML files from GitHub...\n');
  
  try {
    const contentsUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/data`;
    const response = await axios.get(contentsUrl, {
      headers: {
        'User-Agent': 'USC-Downloader',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    const xmlFiles = response.data.filter(item => 
      item.name.endsWith('.xml') && item.type === 'file'
    );
    
    console.log(`Found ${xmlFiles.length} XML files to download\n`);
    
    for (let i = 0; i < xmlFiles.length; i++) {
      const file = xmlFiles[i];
      const outputPath = path.join(OUTPUT_DIR, file.name);
      
      console.log(`[${i + 1}/${xmlFiles.length}] Downloading ${file.name}...`);
      
      const fileResponse = await axios.get(file.download_url, {
        responseType: 'stream'
      });
      
      const writer = fs.createWriteStream(outputPath);
      fileResponse.data.pipe(writer);
      
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
      
      console.log(`  ✓ Saved to ${outputPath}`);
    }
    
    console.log('\n✓ All files downloaded successfully!');
    
  } catch (error) {
    console.error('Error downloading files:', error.message);
    throw error;
  }
}

downloadUSCFiles().catch(console.error);
