const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// Function to extract chapter information from a title page
async function getChaptersForTitle(titleNumber) {
  try {
    const url = `https://www.law.cornell.edu/uscode/text/${titleNumber}`;
    console.log(`Fetching Title ${titleNumber}...`);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    const chapters = [];
    
    // Find all chapter links - they typically have "CHAPTER" in the text
    $('a').each((i, elem) => {
      const text = $(elem).text().trim();
      
      // Match patterns like "CHAPTER 1—NAME" or "CHAPTER 1A—NAME"
      const chapterMatch = text.match(/^CHAPTER\s+([\dA-Z]+)[—–-]\s*(.+?)(?:\s*\(|$)/i);
      
      if (chapterMatch) {
        const chapterNumber = chapterMatch[1];
        const chapterName = chapterMatch[2].trim();
        
        // Clean up the chapter name
        const cleanName = chapterName
          .replace(/\s+/g, ' ')
          .replace(/[""]/g, '"')
          .trim();
        
        chapters.push({
          number: chapterNumber,
          name: cleanName
        });
      }
    });
    
    // Remove duplicates based on chapter number
    const uniqueChapters = chapters.filter((chapter, index, self) =>
      index === self.findIndex((c) => c.number === chapter.number)
    );
    
    console.log(`  Found ${uniqueChapters.length} chapters for Title ${titleNumber}`);
    return uniqueChapters;
    
  } catch (error) {
    console.error(`Error fetching Title ${titleNumber}:`, error.message);
    return [];
  }
}

// Function to add delay between requests
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to scrape all titles
async function scrapeAllTitles() {
  const allTitlesData = [];
  
  // Title descriptions (from your existing data.js)
  const titleDescriptions = {
    1: "General Provisions",
    2: "The Congress",
    3: "The President",
    4: "Flag and Seal, Seat of Government, and the States",
    5: "Government Organization and Employees",
    6: "Domestic Security",
    7: "Agriculture",
    8: "Aliens and Nationality",
    9: "Arbitration",
    10: "Armed Forces",
    11: "Bankruptcy",
    12: "Banks and Banking",
    13: "Census",
    14: "Coast Guard",
    15: "Commerce and Trade",
    16: "Conservation",
    17: "Copyrights",
    18: "Crimes and Criminal Procedure",
    19: "Customs Duties",
    20: "Education",
    21: "Food and Drugs",
    22: "Foreign Relations and Intercourse",
    23: "Highways",
    24: "Hospitals and Asylums",
    25: "Indians",
    26: "Internal Revenue Code",
    27: "Intoxicating Liquors",
    28: "Judiciary and Judicial Procedure",
    29: "Labor",
    30: "Mineral Lands and Mining",
    31: "Money and Finance",
    32: "National Guard",
    33: "Navigation and Navigable Waters",
    34: "Crime Control and Law Enforcement",
    35: "Patents",
    36: "Patriotic and National Observances",
    37: "Pay and Allowances of the Uniformed Services",
    38: "Veterans' Benefits",
    39: "Postal Service",
    40: "Public Buildings, Property, and Works",
    41: "Public Contracts",
    42: "The Public Health and Welfare",
    43: "Public Lands",
    44: "Public Printing and Documents",
    45: "Railroads",
    46: "Shipping",
    47: "Telecommunications",
    48: "Territories and Insular Possessions",
    49: "Transportation",
    50: "War and National Defense",
    51: "National and Commercial Space Programs",
    52: "Voting and Elections",
    53: "Reserved",
    54: "National Park Service and Related Programs"
  };
  
  // Scrape all 54 titles
  for (let titleNum = 1; titleNum <= 54; titleNum++) {
    const chapters = await getChaptersForTitle(titleNum);
    
    const titleData = {
      number: titleNum,
      description: titleDescriptions[titleNum] || `Title ${titleNum}`
    };
    
    // Only add chapters array if there are chapters
    if (chapters.length > 0) {
      titleData.chapters = chapters;
    }
    
    allTitlesData.push(titleData);
    
    // Add delay to be respectful to the server (1 second between requests)
    await delay(1000);
  }
  
  return allTitlesData;
}

// Run the scraper and save to file
async function main() {
  console.log('Starting USC chapter scraper...\n');
  
  const titlesData = await scrapeAllTitles();
  
  // Generate JavaScript code for data.js
  const jsCode = `// src/data.js
export const federalTitles = ${JSON.stringify(titlesData, null, 2)};`;
  
  // Save to file
  fs.writeFileSync('usc-chapters-data.js', jsCode);
  
  console.log('\n✓ Scraping complete!');
  console.log('✓ Data saved to usc-chapters-data.js');
  console.log('\nYou can now copy this data to src/data.js');
  
  // Also save as JSON for easier inspection
  fs.writeFileSync('usc-chapters-data.json', JSON.stringify(titlesData, null, 2));
  console.log('✓ JSON version saved to usc-chapters-data.json');
}

// Run the script
main().catch(console.error);
