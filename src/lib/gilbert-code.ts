
export const GILBERT_TOWN_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '6', name: 'Chapter 6: Alcoholic Beverages', reserved: false },
  { id: '10', name: 'Chapter 10: Animals', reserved: false },
  { id: '14', name: 'Chapter 14: Buildings and Building Regulations', reserved: false },
  { id: '18', name: 'Chapter 18: Businesses', reserved: false },
  { id: '22', name: 'Chapter 22: Environment', reserved: false },
  { id: '26', name: 'Chapter 26: Fire Prevention and Protection', reserved: false },
  { id: '30', name: 'Chapter 30: Floodplain Management', reserved: false },
  { id: '34', name: 'Chapter 34: Land Development Code', reserved: false },
  { id: '38', name: 'Chapter 38: Law Enforcement', reserved: false },
  { id: '42', name: 'Chapter 42: Offenses and Miscellaneous Provisions', reserved: false },
  { id: '46', name: 'Chapter 46: Parks and Recreation', reserved: false },
  { id: '50', name: 'Chapter 50: Solid Waste', reserved: false },
  { id: '54', name: 'Chapter 54: Streets, Sidewalks and Other Public Places', reserved: false },
  { id: '58', name: 'Chapter 58: Subdivisions', reserved: false },
  { id: '62', name: 'Chapter 62: Taxation', reserved: false },
  { id: '66', name: 'Chapter 66: Traffic', reserved: false },
  { id: '70', name: 'Chapter 70: Utilities', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
