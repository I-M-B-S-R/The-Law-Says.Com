
export const YUMA_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '4', name: 'Chapter 4: Alcoholic Beverages', reserved: false },
  { id: '6', name: 'Chapter 6: Animals', reserved: false },
  { id: '8', name: 'Chapter 8: Building and Construction', reserved: false },
  { id: '10', name: 'Chapter 10: Business Regulations', reserved: false },
  { id: '14', name: 'Chapter 14: Fire Prevention', reserved: false },
  { id: '15', name: 'Chapter 15: Health and Sanitation', reserved: false },
  { id: '17', name: 'Chapter 17: Offenses', reserved: false },
  { id: '20', name: 'Chapter 20: Streets and Sidewalks', reserved: false },
  { id: '22', name: 'Chapter 22: Traffic and Vehicles', reserved: false },
  { id: '23', name: 'Chapter 23: Utilities', reserved: false },
  { id: '24', name: 'Chapter 24: Zoning and Land Use', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
