
export const SAHUARITA_TOWN_CODE = [
  { id: '1', name: 'Title 1: General Provisions', reserved: false },
  { id: '3', name: 'Title 3: Administration', reserved: false },
  { id: '5', name: 'Title 5: Public Works', reserved: false },
  { id: '8', name: 'Title 8: Health and Safety', reserved: false },
  { id: '9', name: 'Title 9: Public Peace, Morals and Welfare', reserved: false },
  { id: '10', name: 'Title 10: Vehicles and Traffic', reserved: false },
  { id: '11', name: 'Title 11: Business Regulations', reserved: false },
  { id: '13', name: 'Title 13: General Offenses', reserved: false },
  { id: '18', name: 'Title 18: Zoning', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
