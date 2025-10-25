
export const BISBEE_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration and Government', reserved: false },
  { id: '3', name: 'Chapter 3: (Reserved)', reserved: true },
  { id: '4', name: 'Chapter 4: Animals and Fowl', reserved: false },
  { id: '5', name: 'Chapter 5: (Reserved)', reserved: true },
  { id: '6', name: 'Chapter 6: Business, Peddlers, Solicitors, and Transient Merchants', reserved: false },
  { id: '7', name: 'Chapter 7: Finance and Taxation', reserved: false },
  { id: '8', name: 'Chapter 8: Health and Sanitation', reserved: false },
  { id: '9', name: 'Chapter 9: Historic Preservation', reserved: false },
  { id: '10', name: 'Chapter 10: Offenses', reserved: false },
  { id: '11', name: 'Chapter 11: Streets and Sidewalks', reserved: false },
  { id: '12', name: 'Chapter 12: Traffic', reserved: false },
  { id: '13', name: 'Chapter 13: Utilities', reserved: false },
  { id: '14', name: 'Chapter 14: Development Code', reserved: false },
  { id: '15', name: 'Chapter 15: Building Code', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
