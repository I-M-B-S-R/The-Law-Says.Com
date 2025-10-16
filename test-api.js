// A simple script to test Node.js internet connectivity
async function runTest() {
  // We will try to connect to the Library of Congress API
  const url = 'https://api.loc.gov/v1/uscode/titles/1/chapters?format=json';
  
  console.log('Attempting to connect to:', url);

  try {
    // This tells Node.js to ignore the same certificate errors we've been fighting
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    
    const response = await fetch(url);

    if (response.ok) {
      console.log('\nSUCCESS! Connection to the API was successful.');
      const data = await response.json();
      console.log('Received data for', data.chapters.length, 'chapters.');
    } else {
      console.error('\nERROR: Connection failed. Status:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('\nCRITICAL ERROR: The fetch command failed completely.');
    console.error('This confirms something on your computer is blocking Node.js from accessing the internet.');
    console.error('The error was:', error.message);
  }
}

runTest();