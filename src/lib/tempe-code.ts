
export const TEMPE_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '4', name: 'Chapter 4: Airport', reserved: false },
  { id: '6', name: 'Chapter 6: Animals', reserved: false },
  { id: '8', name: 'Chapter 8: Buildings', reserved: false },
  { id: '10', name: 'Chapter 10: Community Development', reserved: false },
  { id: '11', name: 'Chapter 11: Contracts and Purchasing', reserved: false },
  { id: '12', name: 'Chapter 12: Courts', reserved: false },
  { id: '13', name: 'Chapter 13: Elections', reserved: false },
  { id: '14', name: 'Chapter 14: Finance', reserved: false },
  { id: '15', name: 'Chapter 15: Fire Prevention and Protection', reserved: false },
  { id: '16', name: 'Chapter 16: Human Relations', reserved: false },
  { id: '18', name: 'Chapter 18: Libraries and Museums', reserved: false },
  { id: '19', name: 'Chapter 19: Licenses, Permits and Miscellaneous Business Regulations', reserved: false },
  { id: '20', name: 'Chapter 20: Mobile Homes and Mobile Home Parks', reserved: false },
  { id: '21', name: 'Chapter 21: Neighborhood Services', reserved: false },
  { id: '22', name: 'Chapter 22: Offenses', reserved: false },
  { id: '23', name: 'Chapter 23: Parks and Recreation', reserved: false },
  { id: '26', name: 'Chapter 26: Police', reserved: false },
  { id: '29', name: 'Chapter 29: Solid Waste', reserved: false },
  { id: '31', name: 'Chapter 31: Streets and Sidewalks', reserved: false },
  { id: '33', name: 'Chapter 33: Traffic and Vehicles', reserved: false },
  { id: '34', name: 'Chapter 34: Utilities', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
