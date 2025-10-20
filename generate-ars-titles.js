const axios = require('axios');
const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

// User Credentials
const USERNAME = 'bsreynolds';
const PASSWORD = 'aJVe3$#42dD;';

// SOAP Request Configuration
const url = 'https://www.azleg.gov/xml/legservice.asmx';

// Headers for SOAP request
const headers = {
  'Content-Type': 'text/xml; charset=utf-8',
  'SOAPAction': 'http://azleg.gov/webservices/ARS'
};

// Create the SOAP request XML
const createSoapRequest = () => {
  return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header>
    <SOAPLegServiceHeader xmlns="http://azleg.gov/webservices/">
      <UserName>${USERNAME}</UserName>
      <Password>${PASSWORD}</Password>
    </SOAPLegServiceHeader>
  </soap:Header>
  <soap:Body>
    <ARS xmlns="http://azleg.gov/webservices/" />
  </soap:Body>
</soap:Envelope>`;
};

// Parse XML to JSON
async function parseXML(xmlData) {
  const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });
  return await parser.parseStringPromise(xmlData);
}

// Extract title information from parsed data
function extractTitleData(parsedData) {
  try {
    const body = parsedData['soap:Envelope']['soap:Body'];
    const arsResponse = body.ARSResponse;
    const arsResult = arsResponse.ARSResult;
    
    // Parse the inner XML
    return arsResult;
  } catch (error) {
    console.error('Error extracting title data:', error);
    return null;
  }
}

// Generate a title data file
function generateTitleFile(titleNumber, titleData) {
  const titleName = titleData.name || `Title ${titleNumber}`;
  const chapters = titleData.chapters || [];
  
  const fileContent = `export const title${titleNumber}Data = {
  id: ${titleNumber},
  name: "${titleName}",
  chapters: ${JSON.stringify(chapters, null, 2)}
};
`;

  const filePath = path.join(__dirname, 'src', 'data', 'ars', `title${titleNumber}.js`);
  fs.writeFileSync(filePath, fileContent);
  console.log(`✅ Generated title${titleNumber}.js`);
}

// Main function to fetch and generate all titles
async function generateAllTitles() {
  console.log('🚀 Starting ARS data fetch...\n');
  
  try {
    // Fetch the ARS data
    console.log('📡 Fetching data from Arizona Legislature API...');
    const response = await axios.post(url, createSoapRequest(), { headers });
    
    // Save raw XML for reference
    fs.writeFileSync('laws.xml', response.data);
    console.log('✅ Raw XML saved to laws.xml\n');
    
    // Parse the XML
    console.log('🔍 Parsing XML data...');
    const parsedData = await parseXML(response.data);
    
    // Extract and parse the inner XML content
    const body = parsedData['soap:Envelope']['soap:Body'];
    const arsResponse = body.ARSResponse || body['ARSResponse'];
    const arsResult = arsResponse.ARSResult || arsResponse['ARSResult'];
    
    // Parse the inner XML (the actual ARS data)
    console.log('🔍 Parsing ARS structure...');
    const arsData = await parseXML(arsResult);
    
    // Save parsed data for inspection
    fs.writeFileSync('parsed-ars-data.json', JSON.stringify(arsData, null, 2));
    console.log('✅ Parsed data saved to parsed-ars-data.json\n');
    
    // Extract titles
    const titles = arsData.ARS?.Title || [];
    const titlesArray = Array.isArray(titles) ? titles : [titles];
    
    console.log(`📚 Found ${titlesArray.length} titles\n`);
    console.log('🔨 Generating title files...\n');
    
    // Ensure the ars directory exists
    const arsDir = path.join(__dirname, 'src', 'data', 'ars');
    if (!fs.existsSync(arsDir)) {
      fs.mkdirSync(arsDir, { recursive: true });
    }
    
    // Generate files for each title
    for (let i = 1; i <= 47; i++) {
      const titleData = titlesArray.find(t => parseInt(t.Number || t.number) === i);
      
      if (titleData) {
        // Extract chapters
        const chapters = [];
        const chaptersData = titleData.Chapter || [];
        const chaptersArray = Array.isArray(chaptersData) ? chaptersData : [chaptersData];
        
        chaptersArray.forEach(chapter => {
          const chapterNum = chapter.Number || chapter.number;
          const chapterName = chapter.Name || chapter.name || `Chapter ${chapterNum}`;
          
          // Extract articles
          const articles = [];
          const articlesData = chapter.Article || [];
          const articlesArray = Array.isArray(articlesData) ? articlesData : articlesData ? [articlesData] : [];
          
          articlesArray.forEach(article => {
            const articleNum = article.Number || article.number;
            const articleName = article.Name || article.name || `Article ${articleNum}`;
            
            // Extract sections
            const sections = [];
            const sectionsData = article.Section || [];
            const sectionsArray = Array.isArray(sectionsData) ? sectionsData : sectionsData ? [sectionsData] : [];
            
            sectionsArray.forEach(section => {
              const sectionNum = section.Number || section.number;
              const sectionName = section.Name || section.name || section.Title || section.title || `Section ${sectionNum}`;
              
              sections.push({
                id: sectionNum,
                name: sectionName
              });
            });
            
            articles.push({
              id: articleNum,
              name: articleName,
              sections: sections
            });
          });
          
          chapters.push({
            id: chapterNum,
            name: chapterName,
            articles: articles
          });
        });
        
        const titleInfo = {
          name: titleData.Name || titleData.name || `Title ${i}`,
          chapters: chapters
        };
        
        generateTitleFile(i, titleInfo);
      } else {
        // Generate empty title file
        generateTitleFile(i, {
          name: `Title ${i}`,
          chapters: []
        });
      }
    }
    
    console.log('\n✨ All title files generated successfully!');
    console.log(`📁 Files location: src/data/ars/\n`);
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}

// Run the script
generateAllTitles();
