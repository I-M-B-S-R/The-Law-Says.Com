
export const ORO_VALLEY_TOWN_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '4', name: 'Chapter 4: Alcoholic Beverages', reserved: false },
  { id: '6', name: 'Chapter 6: Animals', reserved: false },
  { id: '8', name: 'Chapter 8: Buildings and Building Regulations', reserved: false },
  { id: '10', name: 'Chapter 10: Businesses, Occupations and Industries', reserved: false },
  { id: '12', name: 'Chapter 12: Fire Prevention and Protection', reserved: false },
  { id: '13', name: 'Chapter 13: Health and Sanitation', reserved: false },
  { id: '15', name: 'Chapter 15: Offenses', reserved: false },
  { id: '16', name: 'Chapter 16: Parks and Recreation', reserved: false },
  { id: '19', name: 'Chapter 19: Streets, Sidewalks and Public Property', reserved: false },
  { id: '20', name: 'Chapter 20: Subdivisions', reserved: false },
  { id: '21', name: 'Chapter 21: Taxation', reserved: false },
  { id: '22', name: 'Chapter 22: Telecommunications', reserved: false },
  { id: '23', name: 'Chapter 23: Traffic and Vehicles', reserved: false },
  { id: '24', name: 'Chapter 24: Utilities', reserved: false },
  { id: '31', name: 'Chapter 31: Zoning Code', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
