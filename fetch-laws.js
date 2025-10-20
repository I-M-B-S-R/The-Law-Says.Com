const https = require('https');
const fs = require('fs');

// --- User Credentials ---
// These are the credentials you provided
const USERNAME = 'bsreynolds';
const PASSWORD = 'aJVe3$#42dD;';

// --- SOAP Request Configuration ---
const url = 'https://www.azleg.gov/xml/legservice.asmx';

// This is the XML "letter" we are sending, with your credentials filled in
const xmlData = `<?xml version="1.0" encoding="utf-8"?>
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

// These are the required headers for a SOAP request
const headers = {
  'Content-Type': 'text/xml; charset=utf-8',
  'Content-Length': Buffer.byteLength(xmlData),
  'SOAPAction': 'http://azleg.gov/webservices/ARS'
};

async function fetchLaws() {
  console.log('Attempting to fetch ARS documents from the web service...');
  
  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      method: 'POST',
      headers: headers
    }, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          // Save the data to a new file in your project folder
          fs.writeFileSync('laws.xml', data);
          
          console.log('\nSUCCESS! ✅');
          console.log('The law data has been downloaded and saved to a new file named "laws.xml".');
          console.log('\n--- WHAT TO DO NEXT ---');
          console.log('The data has been saved. Now we will parse it to generate individual title files.');
          
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    });
    
    req.on('error', (error) => {
      console.error('\n--- AN ERROR OCCURRED ---');
      console.error('Error Message:', error.message);
      console.error('\nThe request failed. This could be due to incorrect credentials or a temporary issue with the service.');
      reject(error);
    });
    
    req.write(xmlData);
    req.end();
  });
}

fetchLaws();
