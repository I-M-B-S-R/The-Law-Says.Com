/**
 * USC Data Integration Helper
 * 
 * This script helps integrate parsed USC JSON data into the application.
 * Run this after parsing the USC XML files with parse-usc.js
 * 
 * Usage: node integrate-usc-data.js
 */

const fs = require('fs');
const path = require('path');

// Directories
const JSON_DATA_DIR = path.join(__dirname, 'usc-json-data');
const OUTPUT_FILE = path.join(__dirname, 'src', 'data', 'usc-full.js');

// Check if JSON data directory exists
if (!fs.existsSync(JSON_DATA_DIR)) {
  console.error('❌ Error: usc-json-data directory not found!');
  console.log('Please run the following commands first:');
  console.log('  1. node download-usc.js');
  console.log('  2. node parse-usc.js');
  process.exit(1);
}

// Read all JSON files
console.log('📖 Reading USC JSON data...');
const jsonFiles = fs.readdirSync(JSON_DATA_DIR).filter(f => f.endsWith('.json'));

if (jsonFiles.length === 0) {
  console.error('❌ Error: No JSON files found in usc-json-data directory!');
  console.log('Please run: node parse-usc.js');
  process.exit(1);
}

console.log(`Found ${jsonFiles.length} USC title files`);

// Load all title data
const uscData = {};
let totalChapters = 0;
let totalSections = 0;

jsonFiles.forEach(file => {
  const titleNum = parseInt(file.match(/\d+/)[0]);
  const filePath = path.join(JSON_DATA_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  uscData[titleNum] = data;
  
  // Count chapters and sections
  if (data.chapters) {
    totalChapters += data.chapters.length;
    data.chapters.forEach(chapter => {
      if (chapter.sections) {
        totalSections += chapter.sections.length;
      }
    });
  }
  
  console.log(`  ✓ Title ${titleNum}: ${data.name || data.description}`);
});

console.log(`\n📊 Statistics:`);
console.log(`  Titles: ${Object.keys(uscData).length}`);
console.log(`  Chapters: ${totalChapters}`);
console.log(`  Sections: ${totalSections}`);

// Generate the JavaScript file
console.log('\n📝 Generating usc-full.js...');

let jsContent = `// Auto-generated USC data file
// Generated on: ${new Date().toISOString()}
// 
// This file contains the complete United States Code data
// including all titles, chapters, sections, and subsections.

`;

// Add the data
jsContent += `export const uscFullData = ${JSON.stringify(uscData, null, 2)};\n\n`;

// Add helper functions
jsContent += `
// Helper function to get a title by number
export function getUSCTitle(titleNumber) {
  return uscFullData[titleNumber];
}

// Helper function to get a chapter from a title
export function getUSCChapter(titleNumber, chapterNumber) {
  const title = getUSCTitle(titleNumber);
  if (!title || !title.chapters) return null;
  return title.chapters.find(ch => ch.number === String(chapterNumber));
}

// Helper function to get a section from a chapter
export function getUSCSection(titleNumber, chapterNumber, sectionNumber) {
  const chapter = getUSCChapter(titleNumber, chapterNumber);
  if (!chapter || !chapter.sections) return null;
  return chapter.sections.find(sec => sec.number === String(sectionNumber));
}

// Helper function to search sections by keyword
export function searchUSC(keyword) {
  const results = [];
  const lowerKeyword = keyword.toLowerCase();
  
  Object.values(uscFullData).forEach(title => {
    if (!title.chapters) return;
    
    title.chapters.forEach(chapter => {
      if (!chapter.sections) return;
      
      chapter.sections.forEach(section => {
        const heading = (section.heading || '').toLowerCase();
        const text = (section.text || '').toLowerCase();
        
        if (heading.includes(lowerKeyword) || text.includes(lowerKeyword)) {
          results.push({
            title: title.number,
            titleName: title.name || title.description,
            chapter: chapter.number,
            chapterName: chapter.name,
            section: section.number,
            sectionHeading: section.heading,
            citation: \`\${title.number} U.S.C. § \${section.number}\`
          });
        }
      });
    });
  });
  
  return results;
}

// Get all titles as a simple list
export const uscTitles = Object.values(uscFullData).map(title => ({
  number: title.number,
  description: title.name || title.description
})).sort((a, b) => a.number - b.number);
`;

// Write the file
fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf-8');

console.log(`✅ Successfully created ${OUTPUT_FILE}`);
console.log('\n📋 Next steps:');
console.log('  1. Update src/pages/federal/usc/[titleId].js to use uscFullData');
console.log('  2. Update src/pages/federal/usc/[titleId]/[chapterId].js to display sections');
console.log('  3. Update src/pages/federal/usc/[titleId]/[chapterId]/[sectionId].js to display full text');
console.log('  4. Consider implementing search functionality using searchUSC()');
console.log('\nExample import:');
console.log('  import { getUSCTitle, getUSCChapter, getUSCSection } from "../../../data/usc-full";');
