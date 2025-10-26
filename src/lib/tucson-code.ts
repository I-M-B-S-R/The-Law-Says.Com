
export const TUCSON_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '4', name: 'Chapter 4: Animals and Fowl', reserved: false },
  { id: '6', name: 'Chapter 6: Building and Construction', reserved: false },
  { id: '7', name: 'Chapter 7: Business Licensing and Regulation', reserved: false },
  { id: '8', name: 'Chapter 8: Civil Rights', reserved: false },
  { id: '10', name: 'Chapter 10: Courts', reserved: false },
  { id: '11', name: 'Chapter 11: Elections', reserved: false },
  { id: '12', name: 'Chapter 12: Environment', reserved: false },
  { id: '13', name: 'Chapter 13: Finance', reserved: false },
  { id: '16', name: 'Chapter 16: Health and Sanitation', reserved: false },
  { id: '17', name: 'Chapter 17: Library', reserved: false },
  { id: '19', name: 'Chapter 19: Offenses', reserved: false },
  { id: '20', name: 'Chapter 20: Parks and Recreation', reserved: false },
  { id: '21', name: 'Chapter 21: Police', reserved: false },
  { id: '22', name: 'Chapter 22: Property Maintenance', reserved: false },
  { id: '24', name: 'Chapter 24: Streets and Sidewalks', reserved: false },
  { id: '25', name: 'Chapter 25: Telecommunications', reserved: false },
  { id: '26', name: 'Chapter 26: Transportation', reserved: false },
  { id: '27', name: 'Chapter 27: Utilities', reserved: false },
  { id: '29', name: 'Chapter 29: Unified Development Code', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
