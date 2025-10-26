
export const SURPRISE_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '38', name: 'Chapter 38: Fire Prevention and Protection', reserved: false },
  { id: '50', name: 'Chapter 50: Offenses and Miscellaneous Provisions', reserved: false },
  { id: '62', name: 'Chapter 62: Parks and Recreation', reserved: false },
  { id: '70', name: 'Chapter 70: Solid Waste', reserved: false },
  { id: '74', name: 'Chapter 74: Streets, Sidewalks and Other Public Places', reserved: false },
  { id: '82', name: 'Chapter 82: Taxation', reserved: false },
  { id: '90', name: 'Chapter 90: Traffic and Vehicles', reserved: false },
  { id: '98', name: 'Chapter 98: Utilities', reserved: false },
  { id: '105', name: 'Chapter 105: Building and Construction', reserved: false },
  { id: '107', name: 'Chapter 107: Subdivisions', reserved: false },
  { id: '122', name: 'Chapter 122: Zoning', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
