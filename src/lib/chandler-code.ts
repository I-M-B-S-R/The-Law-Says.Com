
export const CHANDLER_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '4', name: 'Chapter 4: Alcoholic Beverages', reserved: false },
  { id: '6', name: 'Chapter 6: Amusements', reserved: false },
  { id: '7', name: 'Chapter 7: Animals', reserved: false },
  { id: '8', name: 'Chapter 8: Building Regulations', reserved: false },
  { id: '10', name: 'Chapter 10: Offenses-Miscellaneous', reserved: false },
  { id: '11', name: 'Chapter 11: Fire Prevention', reserved: false },
  { id: '16', name: 'Chapter 16: Health and Sanitation', reserved: false },
  { id: '25', name: 'Chapter 25: Human Relations', reserved: false },
  { id: '30', name: 'Chapter 30: Licenses and Miscellaneous Business Regulations', reserved: false },
  { id: '32', name: 'Chapter 32: Parks and Recreation', reserved: false },
  { id: '35', name: 'Chapter 35: Zoning Code', reserved: false },
  { id: '44', name: 'Chapter 44: Streets and Sidewalks', reserved: false },
  { id: '49', name: 'Chapter 49: Subdivisions', reserved: false },
  { id: '51', name: 'Chapter 51: Taxation', reserved: false },
  { id: '52', name: 'Chapter 52: Traffic', reserved: false },
  { id: '53', name: 'Chapter 53: Utilities', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
