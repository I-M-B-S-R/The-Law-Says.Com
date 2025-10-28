// src/data/usc.js
// United States Code - All Titles

export const uscTitles = [
  { number: 1, description: 'General Provisions' },
  { number: 2, description: 'The Congress' },
  { number: 3, description: 'The President' },
  { number: 4, description: 'Flag and Seal, Seat of Government, and the States' },
  { number: 5, description: 'Government Organization and Employees' },
  { number: 6, description: 'Domestic Security' },
  { number: 7, description: 'Agriculture' },
  { number: 8, description: 'Aliens and Nationality' },
  { number: 9, description: 'Arbitration' },
  { number: 10, description: 'Armed Forces' },
  { number: 11, description: 'Bankruptcy' },
  { number: 12, description: 'Banks and Banking' },
  { number: 13, description: 'Census' },
  { number: 14, description: 'Coast Guard' },
  { number: 15, description: 'Commerce and Trade' },
  { number: 16, description: 'Conservation' },
  { number: 17, description: 'Copyrights' },
  { number: 18, description: 'Crimes and Criminal Procedure' },
  { number: 19, description: 'Customs Duties' },
  { number: 20, description: 'Education' },
  { number: 21, description: 'Food and Drugs' },
  { number: 22, description: 'Foreign Relations and Intercourse' },
  { number: 23, description: 'Highways' },
  { number: 24, description: 'Hospitals and Asylums' },
  { number: 25, description: 'Indians' },
  { number: 26, description: 'Internal Revenue Code' },
  { number: 27, description: 'Intoxicating Liquors' },
  { number: 28, description: 'Judiciary and Judicial Procedure' },
  { number: 29, description: 'Labor' },
  { number: 30, description: 'Mineral Lands and Mining' },
  { number: 31, description: 'Money and Finance' },
  { number: 32, description: 'National Guard' },
  { number: 33, description: 'Navigation and Navigable Waters' },
  { number: 34, description: 'Crime Control and Law Enforcement' },
  { number: 35, description: 'Patents' },
  { number: 36, description: 'Patriotic and National Observances, Ceremonies, and Organizations' },
  { number: 37, description: 'Pay and Allowances of the Uniformed Services' },
  { number: 38, description: 'Veterans\' Benefits' },
  { number: 39, description: 'Postal Service' },
  { number: 40, description: 'Public Buildings, Property, and Works' },
  { number: 41, description: 'Public Contracts' },
  { number: 42, description: 'The Public Health and Welfare' },
  { number: 43, description: 'Public Lands' },
  { number: 44, description: 'Public Printing and Documents' },
  { number: 45, description: 'Railroads' },
  { number: 46, description: 'Shipping' },
  { number: 47, description: 'Telecommunications' },
  { number: 48, description: 'Territories and Insular Possessions' },
  { number: 49, description: 'Transportation' },
  { number: 50, description: 'War and National Defense' },
  { number: 51, description: 'National and Commercial Space Programs' },
  { number: 52, description: 'Voting and Elections' },
  { number: 54, description: 'National Park Service and Related Programs' }
];

// Helper function to get a title by number
export function getUSCTitle(titleNumber) {
  return uscTitles.find(t => t.number === parseInt(titleNumber));
}

// Placeholder for chapter data - will be populated from parsed XML data
export const uscChapters = {};

// Placeholder for section data - will be populated from parsed XML data
export const uscSections = {};
