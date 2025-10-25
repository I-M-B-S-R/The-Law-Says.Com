
export const BENSON_CITY_CODE = [
  { id: '1', name: 'Title 1: General Provisions', reserved: false },
  { id: '2', name: 'Title 2: Government and Administration', reserved: false },
  { id: '3', name: 'Title 3: Finance and Taxation', reserved: false },
  { id: '4', name: 'Title 4: Business, Occupation and License Regulations', reserved: false },
  { id: '5', name: 'Title 5: Health and Sanitation', reserved: false },
  { id: '6', name: 'Title 6: Animals', reserved: false },
  { id: '7', name: 'Title 7: Public Peace, Morals and Welfare', reserved: false },
  { id: '8', name: 'Title 8: Public Ways and Property', reserved: false },
  { id: '9', name: 'Title 9: Building Regulations', reserved: false },
  { id: '10', name: 'Title 10: Vehicles and Traffic', reserved: false },
  { id: '11', name: 'Title 11: Zoning Regulations', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
