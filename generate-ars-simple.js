const https = require('https');
const fs = require('fs');
const path = require('path');

// Title names from arizonaStatutes.js
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

// Function to make HTTPS request
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({ data, statusCode: res.statusCode });
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    if (options.body) {
      req.write(options.body);
    }
    
    req.end();
  });
}

// Function to fetch title data from Arizona Legislature API
async function fetchTitleData(titleNumber) {
  const USERNAME = 'bsreynolds';
  const PASSWORD = 'aJVe3$#42dD;';
  
  const soapRequest = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header>
    <SOAPLegServiceHeader xmlns="http://azleg.gov/webservices/">
      <UserName>${USERNAME}</UserName>
      <Password>${PASSWORD}</Password>
    </SOAPLegServiceHeader>
  </soap:Header>
  <soap:Body>
    <ARSTitle xmlns="http://azleg.gov/webservices/">
      <TitleNumber>${titleNumber}</TitleNumber>
    </ARSTitle>
  </soap:Body>
</soap:Envelope>`;

  const options = {
    hostname: 'www.azleg.gov',
    path: '/xml/legservice.asmx',
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'Content-Length': Buffer.byteLength(soapRequest),
      'SOAPAction': 'http://azleg.gov/webservices/ARSTitle'
    },
    body: soapRequest
  };

  try {
    const response = await makeRequest(`https://www.azleg.gov/xml/legservice.asmx`, options);
    return response.data;
  } catch (error) {
    console.error(`Error fetching title ${titleNumber}:`, error.message);
    return null;
  }
}

// Simple XML parser for extracting chapter/article/section data
function parseSimpleXML(xmlString) {
  const chapters = [];
  
  // Extract chapters
  const chapterRegex = /<Chapter[^>]*>[\s\S]*?<\/Chapter>/g;
  const chapterMatches = xmlString.match(chapterRegex) || [];
  
  chapterMatches.forEach(chapterXml => {
    const chapterNum = (chapterXml.match(/<Number>([^<]+)<\/Number>/) || [])[1];
    const chapterName = (chapterXml.match(/<Name>([^<]+)<\/Name>/) || [])[1];
    
    if (!chapterNum) return;
    
    const articles = [];
    const articleRegex = /<Article[^>]*>[\s\S]*?<\/Article>/g;
    const articleMatches = chapterXml.match(articleRegex) || [];
    
    articleMatches.forEach(articleXml => {
      const articleNum = (articleXml.match(/<Number>([^<]+)<\/Number>/) || [])[1];
      const articleName = (articleXml.match(/<Name>([^<]+)<\/Name>/) || [])[1];
      
      if (!articleNum) return;
      
      const sections = [];
      const sectionRegex = /<Section[^>]*>[\s\S]*?<\/Section>/g;
      const sectionMatches = articleXml.match(sectionRegex) || [];
      
      sectionMatches.forEach(sectionXml => {
        const sectionNum = (sectionXml.match(/<Number>([^<]+)<\/Number>/) || [])[1];
        const sectionName = (sectionXml.match(/<(?:Name|Title)>([^<]+)<\/(?:Name|Title)>/) || [])[1];
        
        if (sectionNum) {
          sections.push({
            id: sectionNum,
            name: sectionName || `Section ${sectionNum}`
          });
        }
      });
      
      articles.push({
        id: articleNum,
        name: articleName || `Article ${articleNum}`,
        sections: sections
      });
    });
    
    chapters.push({
      id: chapterNum,
      name: chapterName || `Chapter ${chapterNum}`,
      articles: articles
    });
  });
  
  return chapters;
}

// Generate a title file
function generateTitleFile(titleNumber, chapters) {
  const titleName = titleNames[titleNumber] || `Title ${titleNumber}`;
  
  const fileContent = `export const title${titleNumber}Data = {
  id: ${titleNumber},
  name: "${titleName}",
  chapters: ${JSON.stringify(chapters, null, 2)}
};
`;

  const arsDir = path.join(__dirname, 'src', 'data', 'ars');
  if (!fs.existsSync(arsDir)) {
    fs.mkdirSync(arsDir, { recursive: true });
  }

  const filePath = path.join(arsDir, `title${titleNumber}.js`);
  fs.writeFileSync(filePath, fileContent);
  console.log(`✅ Generated title${titleNumber}.js - ${titleName}`);
}

// Main function
async function generateAllTitles() {
  console.log('🚀 Starting ARS title generation...\n');
  console.log('📡 Fetching data from Arizona Legislature API...\n');
  
  for (let i = 1; i <= 47; i++) {
    console.log(`Fetching Title ${i}: ${titleNames[i]}...`);
    
    const xmlData = await fetchTitleData(i);
    
    if (xmlData) {
      // Save raw XML for debugging
      fs.writeFileSync(`title${i}-raw.xml`, xmlData);
      
      // Parse the XML
      const chapters = parseSimpleXML(xmlData);
      
      // Generate the file
      generateTitleFile(i, chapters);
    } else {
      // Generate empty file
      generateTitleFile(i, []);
    }
    
    // Add a small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n✨ All title files generated successfully!');
  console.log(`📁 Files location: src/data/ars/\n`);
}

// Run the script
generateAllTitles().catch(console.error);
