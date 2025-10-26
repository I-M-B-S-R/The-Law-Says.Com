
export const PEORIA_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '3', name: 'Chapter 3: Advertising', reserved: false },
  { id: '4', name: 'Chapter 4: Alcoholic Beverages', reserved: false },
  { id: '5', name: 'Chapter 5: Animal Control', reserved: false },
  { id: '7', name: 'Chapter 7: Buildings and Building Regulations', reserved: false },
  { id: '8', name: 'Chapter 8: Civil Service', reserved: false },
  { id: '9', name: 'Chapter 9: Community Services', reserved: false },
  { id: '10', name: 'Chapter 10: Finance', reserved: false },
  { id: '11', name: 'Chapter 11: Fire Prevention', reserved: false },
  { id: '12', name: 'Chapter 12: Licenses, Permits and Miscellaneous Business Regulations', reserved: false },
  { id: '13', name: 'Chapter 13: Offenses', reserved: false },
  { id: '14', name: 'Chapter 14: Personnel', reserved: false },
  { id: '15', name: 'Chapter 15: Police', reserved: false },
  { id: '16', name: 'Chapter 16: Property', reserved: false },
  { id: '18', name: 'Chapter 18: Streets and Sidewalks', reserved: false },
  { id: '20', name: 'Chapter 20: Subdivisions', reserved: false },
  { id: '21', name: 'Chapter 21: Zoning', reserved: false },
  { id: '22', name: 'Chapter 22: Traffic', reserved: false },
  { id: '24', name: 'Chapter 24: Utilities', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
