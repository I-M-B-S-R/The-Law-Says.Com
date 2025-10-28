const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

// Directories
const INPUT_DIR = path.join(__dirname, 'usc-xml-data');
const OUTPUT_DIR = path.join(__dirname, 'usc-json-data');

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// USC Title names
const USC_TITLES = {
  1: 'General Provisions',
  2: 'The Congress',
  3: 'The President',
  4: 'Flag and Seal, Seat of Government, and the States',
  5: 'Government Organization and Employees',
  6: 'Domestic Security',
  7: 'Agriculture',
  8: 'Aliens and Nationality',
  9: 'Arbitration',
  10: 'Armed Forces',
  11: 'Bankruptcy',
  12: 'Banks and Banking',
  13: 'Census',
  14: 'Coast Guard',
  15: 'Commerce and Trade',
  16: 'Conservation',
  17: 'Copyrights',
  18: 'Crimes and Criminal Procedure',
  19: 'Customs Duties',
  20: 'Education',
  21: 'Food and Drugs',
  22: 'Foreign Relations and Intercourse',
  23: 'Highways',
  24: 'Hospitals and Asylums',
  25: 'Indians',
  26: 'Internal Revenue Code',
  27: 'Intoxicating Liquors',
  28: 'Judiciary and Judicial Procedure',
  29: 'Labor',
  30: 'Mineral Lands and Mining',
  31: 'Money and Finance',
  32: 'National Guard',
  33: 'Navigation and Navigable Waters',
  34: 'Crime Control and Law Enforcement',
  35: 'Patents',
  36: 'Patriotic and National Observances, Ceremonies, and Organizations',
  37: 'Pay and Allowances of the Uniformed Services',
  38: 'Veterans\' Benefits',
  39: 'Postal Service',
  40: 'Public Buildings, Property, and Works',
  41: 'Public Contracts',
  42: 'The Public Health and Welfare',
  43: 'Public Lands',
  44: 'Public Printing and Documents',
  45: 'Railroads',
  46: 'Shipping',
  47: 'Telecommunications',
  48: 'Territories and Insular Possessions',
  49: 'Transportation',
  50: 'War and National Defense',
  51: 'National and Commercial Space Programs',
  52: 'Voting and Elections',
  54: 'National Park Service and Related Programs'
};

// Helper function to extract text content from XML nodes
function extractText(node) {
  if (!node) return '';
  if (typeof node === 'string') return node.trim();
  if (Array.isArray(node)) {
    return node.map(extractText).join(' ').trim();
  }
  if (typeof node === 'object') {
    if (node._) return node._.trim();
    if (node.$t) return node.$t.trim();
    // Recursively extract text from child nodes
    return Object.values(node)
      .filter(v => v !== null && v !== undefined)
      .map(extractText)
      .join(' ')
      .trim();
  }
  return '';
}

// Helper function to get attribute value
function getAttr(node, attrName) {
  if (!node || !node.$) return null;
  return node.$[attrName] || null;
}

// Parse a section element
function parseSection(sectionNode) {
  const section = {
    id: getAttr(sectionNode, 'identifier') || getAttr(sectionNode, 'num'),
    number: getAttr(sectionNode, 'num'),
    heading: '',
    text: '',
    subsections: []
  };

  // Extract heading
  if (sectionNode.heading) {
    section.heading = extractText(sectionNode.heading);
  }

  // Extract section text and subsections
  if (sectionNode.content) {
    const content = Array.isArray(sectionNode.content) ? sectionNode.content : [sectionNode.content];
    content.forEach(contentNode => {
      if (contentNode.subsection) {
        const subsections = Array.isArray(contentNode.subsection) ? contentNode.subsection : [contentNode.subsection];
        subsections.forEach(sub => {
          section.subsections.push({
            id: getAttr(sub, 'identifier') || getAttr(sub, 'num'),
            heading: sub.heading ? extractText(sub.heading) : '',
            text: extractText(sub)
          });
        });
      } else {
        // General content text
        const text = extractText(contentNode);
        if (text) {
          section.text += (section.text ? ' ' : '') + text;
        }
      }
    });
  }

  return section;
}

// Parse a chapter element
function parseChapter(chapterNode) {
  const chapter = {
    id: getAttr(chapterNode, 'identifier') || getAttr(chapterNode, 'num'),
    number: getAttr(chapterNode, 'num'),
    name: '',
    sections: []
  };

  // Extract chapter heading/name
  if (chapterNode.heading) {
    chapter.name = extractText(chapterNode.heading);
  }

  // Extract sections
  if (chapterNode.section) {
    const sections = Array.isArray(chapterNode.section) ? chapterNode.section : [chapterNode.section];
    sections.forEach(sectionNode => {
      chapter.sections.push(parseSection(sectionNode));
    });
  }

  return chapter;
}

// Parse a subtitle element (some titles have subtitles)
function parseSubtitle(subtitleNode) {
  const subtitle = {
    id: getAttr(subtitleNode, 'identifier') || getAttr(subtitleNode, 'num'),
    number: getAttr(subtitleNode, 'num'),
    name: '',
    chapters: []
  };

  if (subtitleNode.heading) {
    subtitle.name = extractText(subtitleNode.heading);
  }

  if (subtitleNode.chapter) {
    const chapters = Array.isArray(subtitleNode.chapter) ? subtitleNode.chapter : [subtitleNode.chapter];
    chapters.forEach(chapterNode => {
      subtitle.chapters.push(parseChapter(chapterNode));
    });
  }

  return subtitle;
}

// Parse a part element (some titles have parts)
function parsePart(partNode) {
  const part = {
    id: getAttr(partNode, 'identifier') || getAttr(partNode, 'num'),
    number: getAttr(partNode, 'num'),
    name: '',
    chapters: []
  };

  if (partNode.heading) {
    part.name = extractText(partNode.heading);
  }

  if (partNode.chapter) {
    const chapters = Array.isArray(partNode.chapter) ? partNode.chapter : [partNode.chapter];
    chapters.forEach(chapterNode => {
      part.chapters.push(parseChapter(chapterNode));
    });
  }

  return part;
}

// Parse a USC title XML file
async function parseUSCTitle(xmlFilePath, titleNum) {
  console.log(`Parsing Title ${titleNum}...`);
  
  try {
    const xmlContent = fs.readFileSync(xmlFilePath, 'utf-8');
    const parser = new xml2js.Parser({
      explicitArray: true,
      mergeAttrs: false,
      explicitChildren: false
    });

    const result = await parser.parseStringPromise(xmlContent);
    
    const titleData = {
      id: titleNum,
      name: USC_TITLES[titleNum] || `Title ${titleNum}`,
      chapters: [],
      subtitles: [],
      parts: []
    };

    // The structure is: uscDoc -> main -> title -> chapter
    let titleNode = null;
    
    if (result.uscDoc && result.uscDoc.main && result.uscDoc.main[0] && result.uscDoc.main[0].title) {
      titleNode = result.uscDoc.main[0].title[0];
    } else if (result.title) {
      titleNode = Array.isArray(result.title) ? result.title[0] : result.title;
    } else {
      titleNode = result;
    }

    // Check for parts first (e.g., Title 18)
    if (titleNode.part) {
      const parts = Array.isArray(titleNode.part) ? titleNode.part : [titleNode.part];
      parts.forEach(partNode => {
        titleData.parts.push(parsePart(partNode));
      });
    }

    // Check for subtitles
    if (titleNode.subtitle) {
      const subtitles = Array.isArray(titleNode.subtitle) ? titleNode.subtitle : [titleNode.subtitle];
      subtitles.forEach(subtitleNode => {
        titleData.subtitles.push(parseSubtitle(subtitleNode));
      });
    }

    // Check for direct chapters
    if (titleNode.chapter) {
      const chapters = Array.isArray(titleNode.chapter) ? titleNode.chapter : [titleNode.chapter];
      chapters.forEach(chapterNode => {
        titleData.chapters.push(parseChapter(chapterNode));
      });
    }


    // Save to JSON
    const outputPath = path.join(OUTPUT_DIR, `usc-title-${titleNum}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(titleData, null, 2));
    
    console.log(`✓ Parsed Title ${titleNum} - ${titleData.chapters.length} chapters, ${titleData.subtitles.length} subtitles, ${titleData.parts.length} parts`);

    
    return titleData;
  } catch (error) {
    console.error(`✗ Error parsing Title ${titleNum}: ${error.message}`);
    // Save error log
    fs.writeFileSync(
      path.join(OUTPUT_DIR, `usc-title-${titleNum}-error.txt`),
      `Error: ${error.message}\nStack: ${error.stack}`
    );
    return null;
  }
}

// Parse all USC XML files
async function parseAllUSCFiles() {
  console.log('Starting USC XML to JSON conversion...');
  console.log(`Input directory: ${INPUT_DIR}`);
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`Error: Input directory does not exist: ${INPUT_DIR}`);
    console.error('Please run download-usc.js first to download the XML files.');
    return;
  }

  const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.xml'));
  
  if (files.length === 0) {
    console.error('No XML files found in input directory.');
    console.error('Please run download-usc.js first to download the XML files.');
    return;
  }

  console.log(`Found ${files.length} XML files to parse\n`);

  let successCount = 0;
  let failCount = 0;

  for (const file of files) {
    const match = file.match(/usc(\d+)\.xml/);
    if (match) {
      const titleNum = parseInt(match[1], 10);
      const filePath = path.join(INPUT_DIR, file);
      
      const result = await parseUSCTitle(filePath, titleNum);
      if (result) {
        successCount++;
      } else {
        failCount++;
      }
    }
  }

  console.log('\n=== Parsing Complete ===');
  console.log(`✓ Successfully parsed: ${successCount} titles`);
  console.log(`✗ Failed: ${failCount} titles`);
  console.log(`\nJSON files saved to: ${OUTPUT_DIR}`);
  
  // Create an index file
  const indexPath = path.join(OUTPUT_DIR, 'index.json');
  const index = Object.entries(USC_TITLES).map(([num, name]) => ({
    title: parseInt(num),
    name: name,
    file: `usc-title-${num}.json`
  }));
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
  console.log(`\n✓ Created index file: ${indexPath}`);
}

// Run the parser
parseAllUSCFiles().catch(console.error);
