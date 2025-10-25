
export const GOODYEAR_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '3', name: 'Chapter 3: Alcoholic Beverages', reserved: false },
  { id: '4', name: 'Chapter 4: Animals', reserved: false },
  { id: '5', name: 'Chapter 5: Building and Fire Prevention Regulations', reserved: false },
  { id: '6', name: 'Chapter 6: Businesses, Peddlers, Solicitors, and Vending', reserved: false },
  { id: '8', name: 'Chapter 8: Health and Sanitation', reserved: false },
  { id: '10', name: 'Chapter 10: Offenses', reserved: false },
  { id: '11', name: 'Chapter 11: Parks and Recreation', reserved: false },
  { id: '12', name: 'Chapter 12: Streets and Sidewalks', reserved: false },
  { id: '13', name: 'Chapter 13: Subdivisions', reserved: false },
  { id: '14', name: 'Chapter 14: Taxation', reserved: false },
  { id: '15', name: 'Chapter 15: Telecommunications', reserved: false },
  { id: '16', name: 'Chapter 16: Vehicles and Traffic', reserved: false },
  { id: '17', name: 'Chapter 17: Water, Sewers and Public Sanitary Systems', reserved: false },
  { id: '18', name: 'Chapter 18: Zoning Ordinance', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
