const axios = require('axios');
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
  'SOAPAction': 'http://azleg.gov/webservices/ARS'
};

async function fetchLaws() {
  console.log('Attempting to fetch ARS documents from the web service...');
  try {
    const response = await axios.post(url, xmlData, { headers: headers });
    
    const responseData = response.data;
    
    // Save the data to a new file in your project folder
    fs.writeFileSync('laws.xml', responseData);
    
    console.log('\nSUCCESS! ✅');
    console.log('The law data has been downloaded and saved to a new file named "laws.xml".');
    console.log('\n--- WHAT TO DO NEXT ---');
    console.log('Please find the "laws.xml" file, open it, and paste a small part of its contents here so we can see the data structure.');

  } catch (error) {
    console.error('\n--- AN ERROR OCCURRED ---');
    if (error.response) {
      console.error('Error Status:', error.response.status);
      console.error('Error Data:', error.response.data);
    } else {
      console.error('Error Message:', error.message);
    }
    console.error('\nThe request failed. This could be due to incorrect credentials or a temporary issue with the service.');
  }
}

// Run the function
fetchLaws();