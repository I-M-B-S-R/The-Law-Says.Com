
export const MARANA_TOWN_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Mayor and Council', reserved: false },
  { id: '3', name: 'Chapter 3: Administration', reserved: false },
  { id: '4', name: 'Chapter 4: Public Health and Safety', reserved: false },
  { id: '5', name: 'Chapter 5: Law Enforcement', reserved: false },
  { id: '6', name: 'Chapter 6: Animals and Fowl', reserved: false },
  { id: '7', name: 'Chapter 7: Public Nuisances', reserved: false },
  { id: '8', name: 'Chapter 8: Business Licenses and Regulations', reserved: false },
  { id: '9', name: 'Chapter 9: Finance and Taxation', reserved: false },
  { id: '10', name: 'Chapter 10: Offenses', reserved: false },
  { id: '11', name: 'Chapter 11: Motor Vehicles and Traffic', reserved: false },
  { id: '12', name: 'Chapter 12: Parks and Recreation', reserved: false },
  { id: '13', name: 'Chapter 13: Utilities', reserved: false },
  { id: '14', name: 'Chapter 14: Streets, Sidewalks, and Public Places', reserved: false },
  { id: '15', name: 'Chapter 15: Library', reserved: false },
  { id: '16', name: 'Chapter 16: Building and Construction', reserved: false },
  { id: '17', name: 'Chapter 17: Land Development', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
