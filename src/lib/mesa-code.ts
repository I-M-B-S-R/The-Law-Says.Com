
export const MESA_CITY_CODE = [
  { id: '1', name: 'Title 1: General Provisions', reserved: false },
  { id: '3', name: 'Title 3: Administration', reserved: false },
  { id: '4', name: 'Title 4: Business Regulations', reserved: false },
  { id: '5', name: 'Title 5: Revenue and Finance', reserved: false },
  { id: '6', name: 'Title 6: Public Peace, Morals and Welfare', reserved: false },
  { id: '7', name: 'Title 7: Public Utilities', reserved: false },
  { id: '8', name: 'Title 8: Public Ways and Property', reserved: false },
  { id: '9', name: 'Title 9: Building Regulations', reserved: false },
  { id: '10', name: 'Title 10: Vehicles and Traffic', reserved: false },
  { id: '11', name: 'Title 11: Zoning Ordinance', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
