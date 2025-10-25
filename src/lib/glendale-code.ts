
export const GLENDALE_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '2.1', name: 'Chapter 2.1: Human Relations', reserved: false },
  { id: '5', name: 'Chapter 5: Airport', reserved: false },
  { id: '6', name: 'Chapter 6: Alcoholic Beverages', reserved: false },
  { id: '7', name: 'Chapter 7: Animals and Fowl', reserved: false },
  { id: '10', name: 'Chapter 10: Buildings', reserved: false },
  { id: '11', name: 'Chapter 11: Businesses', reserved: false },
  { id: '17', name: 'Chapter 17: Fire Prevention and Protection', reserved: false },
  { id: '20', name: 'Chapter 20: Health and Sanitation', reserved: false },
  { id: '23.1', name: 'Chapter 23.1: Library', reserved: false },
  { id: '24', name: 'Chapter 24: Mobile Homes and Mobile Home Parks', reserved: false },
  { id: '25', name: 'Chapter 25: Offenses', reserved: false },
  { id: '26', name: 'Chapter 26: Parks and Recreation', reserved: false },
  { id: '29.1', name: 'Chapter 29.1: Property Maintenance', reserved: false },
  { id: '31', name: 'Chapter 31: Sewers', reserved: false },
  { id: '32', name: 'Chapter 32: Solid Waste', reserved: false },
  { id: '34', name: 'Chapter 34: Streets, Sidewalks and Public Places', reserved: false },
  { id: '35', name: 'Chapter 35: Subdivisions', reserved: false },
  { id: '36', name: 'Chapter 36: Taxation', reserved: false },
  { id: '37', name: 'Chapter 37: Telecommunications', reserved: false },
  { id: '38', name: 'Chapter 38: Traffic and Vehicles', reserved: false },
  { id: '40', name: 'Chapter 40: Zoning', reserved: false },
].sort((a, b) => {
  const titleA = parseFloat(a.id);
  const titleB = parseFloat(b.id);
  return titleA - titleB;
});
