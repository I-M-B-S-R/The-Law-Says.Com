
export const AVONDALE_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '3', name: 'Chapter 3: Advertising', reserved: false },
  { id: '4', name: 'Chapter 4: Alcoholic Beverages', reserved: false },
  { id: '5', name: 'Chapter 5: Animals', reserved: false },
  { id: '6', name: 'Chapter 6: Buildings and Building Regulations', reserved: false },
  { id: '7', name: 'Chapter 7: Cable Communications', reserved: false },
  { id: '8', name: 'Chapter 8: Courts', reserved: false },
  { id: '9', name: 'Chapter 9: Fire Prevention and Protection', reserved: false },
  { id: '10', name: 'Chapter 10: Garbage and Refuse', reserved: false },
  { id: '11', name: 'Chapter 11: Health and Sanitation', reserved: false },
  { id: '12', name: 'Chapter 12: Licenses and Miscellaneous Business Regulations', reserved: false },
  { id: '13', name: 'Chapter 13: Minors', reserved: false },
  { id: '14', name: 'Chapter 14: Mobile Homes and Mobile Home Parks', reserved: false },
  { id: '15', name: 'Chapter 15: Offenses', reserved: false },
  { id: '16', name: 'Chapter 16: Parks and Recreation', reserved: false },
  { id: '17', name: 'Chapter 17: Motor Vehicles and Traffic', reserved: false },
  { id: '18', name: 'Chapter 18: Personnel', reserved: false },
  { id: '19', name: 'Chapter 19: Planning and Zoning', reserved: false },
  { id: '20', name: 'Chapter 20: Police', reserved: false },
  { id: '21', name: 'Chapter 21: Streets, Sidewalks and Other Public Places', reserved: false },
  { id: '22', name: 'Chapter 22: Subdivisions', reserved: false },
  { id: '23', name: 'Chapter 23: Taxation', reserved: false },
  { id: '24', name: 'Chapter 24: Telecommunications', reserved: false },
  { id: '25', name: 'Chapter 25: Utilities', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
