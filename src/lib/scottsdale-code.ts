
export const SCOTTSDALE_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '4', name: 'Chapter 4: Alcoholic Beverages', reserved: false },
  { id: '5', name: 'Chapter 5: Amusements', reserved: false },
  { id: '6', name: 'Chapter 6: Animals', reserved: false },
  { id: '7', name: 'Chapter 7: Aviation', reserved: false },
  { id: '8', name: 'Chapter 8: Buildings', reserved: false },
  { id: '10', name: 'Chapter 10: Elections', reserved: false },
  { id: '11', name: 'Chapter 11: Environment', reserved: false },
  { id: '13', name: 'Chapter 13: Finance', reserved: false },
  { id: '14', name: 'Chapter 14: Fire Prevention', reserved: false },
  { id: '16', name: 'Chapter 16: Licenses and Miscellaneous Business Regulations', reserved: false },
  { id: '17', name: 'Chapter 17: Motor Vehicles and Traffic', reserved: false },
  { id: '18', name: 'Chapter 18: Parks and Recreation', reserved: false },
  { id: '19', name: 'Chapter 19: Offenses and Miscellaneous Provisions', reserved: false },
  { id: '20', name: 'Chapter 20: Property', reserved: false },
  { id: '23', name: 'Chapter 23: Streets and Sidewalks', reserved: false },
  { id: '24', name: 'Chapter 24: Subdivisions', reserved: false },
  { id: '28', name: 'Chapter 28: Telecommunications', reserved: false },
  { id: '49', name: 'Chapter 49: Utilities', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
