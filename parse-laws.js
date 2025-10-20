const fs = require('fs');
const path = require('path');

// Title names
const titleNames = {
  1: "General Provisions",
  2: "THIS TITLE HAS BEEN REPEALED",
  3: "Agriculture",
  4: "Alcoholic Beverages",
  5: "Amusements and Sports",
  6: "Banks and Financial Institutions",
  7: "Business and Professions",
  8: "Children",
  9: "Cities and Towns",
  10: "Commerce",
  11: "Counties",
  12: "Courts and Civil Proceedings",
  13: "Criminal Code",
  14: "Decedents' Estates, Trusts, Etc.",
  15: "Education",
  16: "Elections and Electors",
  17: "Game and Fish",
  18: "Guardianship and Conservatorship",
  19: "Health and Safety",
  20: "Hospitalization and Medical Care",
  21: "Jails and Prisoners",
  22: "Justices of the Peace and Constables",
  23: "Labor",
  24: "Livestock",
  25: "Marital and Domestic Relations",
  26: "Military Affairs and Emergency Management",
  27: "Minerals, Oil and Gas",
  28: "Motor Vehicles",
  29: "Partnerships",
  30: "Power of Attorney",
  31: "Prisons and Prisoners",
  32: "Professions and Occupations",
  33: "Property",
  34: "Public Buildings and Improvements",
  35: "Public Finances",
  36: "Public Health and Safety",
  37: "Public Records, Printing and Notices",
  38: "Public Utilities and Carriers",
  39: "Public Welfare",
  40: "Real and Personal Property",
  41: "State Government",
  42: "Taxation",
  43: "Telecommunications and Information Technology",
  44: "Trade and Commerce",
  45: "Uniform Commercial Code",
  46: "Welfare",
  47: "Waters"
};

console.log('📖 Reading laws.xml...');
const xmlContent = fs.readFileSync('laws.xml', 'utf-8');

console.log('🔍 Parsing XML structure...\n');

// Extract the ARS data from SOAP envelope
const arsMatch = xmlContent.match(/<ARSResult>([\s\S]*?)<\/ARSResult>/);
if (!arsMatch) {
  console.error('❌ Could not find ARSResult in XML');
  process.exit(1);
}

const arsXml = arsMatch[1];

// Parse titles using regex for attributes
const titleRegex = /<TITLE\s+([^>]+)>([\s\S]*?)<\/TITLE>/g;
let titleMatch;
const titlesData = {};

while ((titleMatch = titleRegex.exec(arsXml)) !== null) {
  const titleAttrs = titleMatch[1];
  const titleContent = titleMatch[2];
  
  // Extract title ID (number)
  const titleIdMatch = titleAttrs.match(/Title_ID="(\d+)\.?\d*"/);
  if (!titleIdMatch) continue;
  
  const titleNum = parseInt(titleIdMatch[1]);
  
  // Extract chapters
  const chapters = [];
  const chapterRegex = /<CHAPTER\s+([^>]+)>([\s\S]*?)<\/CHAPTER>/g;
  let chapterMatch;
  
  while ((chapterMatch = chapterRegex.exec(titleContent)) !== null) {
    const chapterAttrs = chapterMatch[1];
    const chapterContent = chapterMatch[2];
    
    const chapterIdMatch = chapterAttrs.match(/Chapter_ID="([^"]+)"/);
    const chapterHeadingMatch = chapterAttrs.match(/Chapter_Heading="([^"]+)"/);
    
    if (!chapterIdMatch) continue;
    
    const chapterId = chapterIdMatch[1];
    const chapterHeading = chapterHeadingMatch ? chapterHeadingMatch[1] : `Chapter ${chapterId}`;
    
    // Extract articles
    const articles = [];
    const articleRegex = /<ARTICLE\s+([^>]+)\s*\/?>/g;
    let articleMatch;
    
    while ((articleMatch = articleRegex.exec(chapterContent)) !== null) {
      const articleAttrs = articleMatch[1];
      
      const articleIdMatch = articleAttrs.match(/Article_ID="([^"]+)"/);
      const articleHeadingMatch = articleAttrs.match(/Article_Heading="([^"]+)"/);
      
      if (!articleIdMatch) continue;
      
      const articleId = articleIdMatch[1];
      const articleHeading = articleHeadingMatch ? articleHeadingMatch[1] : `Article ${articleId}`;
      
      // For now, we'll add articles without sections
      // Sections would require additional API calls or scraping
      articles.push({
        id: articleId,
        name: articleHeading,
        sections: []
      });
    }
    
    chapters.push({
      id: chapterId,
      name: chapterHeading,
      articles: articles
    });
  }
  
  titlesData[titleNum] = chapters;
}

console.log(`✅ Parsed ${Object.keys(titlesData).length} titles\n`);
console.log('🔨 Generating title files...\n');

// Ensure the ars directory exists
const arsDir = path.join(__dirname, 'src', 'data', 'ars');
if (!fs.existsSync(arsDir)) {
  fs.mkdirSync(arsDir, { recursive: true });
}

// Generate files for all 47 titles
for (let i = 1; i <= 47; i++) {
  const titleName = titleNames[i] || `Title ${i}`;
  const chapters = titlesData[i] || [];
  
  const fileContent = `export const title${i}Data = {
  id: ${i},
  name: "${titleName}",
  chapters: ${JSON.stringify(chapters, null, 2)}
};
`;

  const filePath = path.join(arsDir, `title${i}.js`);
  fs.writeFileSync(filePath, fileContent);
  
  const chapterCount = chapters.length;
  const articleCount = chapters.reduce((sum, ch) => sum + ch.articles.length, 0);
  console.log(`✅ Generated title${i}.js - ${titleName} (${chapterCount} chapters, ${articleCount} articles)`);
}

console.log('\n✨ All title files generated successfully!');
console.log(`📁 Files location: src/data/ars/\n`);
