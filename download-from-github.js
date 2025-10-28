const axios = require('axios');
const fs = require('fs');
const path = require('path');

// GitHub repository with USC XML files
const GITHUB_REPO = 'BlackacreLabs/uscode-xml';
const GITHUB_BRANCH = 'main'; // or 'master', we'll check

const OUTPUT_DIR = path.join(__dirname, 'usc-xml-data');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function checkGitHubRepo() {
  console.log('Checking GitHub repository for USC XML files...');
  console.log(`Repository: ${GITHUB_REPO}\n`);
  
  try {
    // First, get the repository info
    const repoUrl = `https://api.github.com/repos/${GITHUB_REPO}`;
    const repoResponse = await axios.get(repoUrl, {
      headers: {
        'User-Agent': 'USC-Downloader',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    console.log(`✓ Repository found: ${repoResponse.data.full_name}`);
    console.log(`  Description: ${repoResponse.data.description}`);
    console.log(`  Default branch: ${repoResponse.data.default_branch}`);
    console.log(`  Last updated: ${repoResponse.data.updated_at}`);
    console.log(`  Size: ${(repoResponse.data.size / 1024).toFixed(2)} MB\n`);
    
    // Get the contents of the repository
    const contentsUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents`;
    const contentsResponse = await axios.get(contentsUrl, {
      headers: {
        'User-Agent': 'USC-Downloader',
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    console.log('Repository contents:');
    const xmlFiles = contentsResponse.data.filter(item => 
      item.name.endsWith('.xml') && item.type === 'file'
    );
    
    if (xmlFiles.length > 0) {
      console.log(`\n✓ Found ${xmlFiles.length} XML files:`);
      xmlFiles.forEach(file => {
        console.log(`  - ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
      });
      
      console.log('\n✓ This repository has USC XML files!');
      console.log('\nTo download all files, you can:');
      console.log('1. Clone the repository: git clone https://github.com/' + GITHUB_REPO);
      console.log('2. Download individual files using the GitHub API');
      console.log('3. Download as ZIP: https://github.com/' + GITHUB_REPO + '/archive/refs/heads/' + repoResponse.data.default_branch + '.zip');
      
      return xmlFiles;
    } else {
      // Check for subdirectories
      const dirs = contentsResponse.data.filter(item => item.type === 'dir');
      console.log(`\nNo XML files in root. Found ${dirs.length} directories:`);
      dirs.forEach(dir => console.log(`  - ${dir.name}/`));
      
      // Check the first directory for XML files
      if (dirs.length > 0) {
        console.log(`\nChecking ${dirs[0].name}/ directory...`);
        const dirContentsResponse = await axios.get(dirs[0].url, {
          headers: {
            'User-Agent': 'USC-Downloader',
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        
        const dirXmlFiles = dirContentsResponse.data.filter(item => 
          item.name.endsWith('.xml') && item.type === 'file'
        );
        
        if (dirXmlFiles.length > 0) {
          console.log(`✓ Found ${dirXmlFiles.length} XML files in ${dirs[0].name}/:`);
          dirXmlFiles.slice(0, 10).forEach(file => {
            console.log(`  - ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
          });
          if (dirXmlFiles.length > 10) {
            console.log(`  ... and ${dirXmlFiles.length - 10} more files`);
          }
        }
      }
    }
    
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error('✗ Repository not found or is private');
    } else if (error.response && error.response.status === 403) {
      console.error('✗ GitHub API rate limit exceeded. Try again later or use authentication.');
    } else {
      console.error(`✗ Error: ${error.message}`);
    }
    throw error;
  }
}

checkGitHubRepo().catch(console.error);
