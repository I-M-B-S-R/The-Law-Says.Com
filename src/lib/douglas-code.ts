
export const DOUGLAS_CITY_CODE = [
  { id: '1', name: 'Title 1: General Provisions', reserved: false },
  { id: '3', name: 'Title 3: Administration', reserved: false },
  { id: '5', name: 'Title 5: Revenue and Finance', reserved: false },
  { id: '7', name: 'Title 7: (Reserved)', reserved: true },
  { id: '9', name: 'Title 9: Public Peace, Morals and Welfare', reserved: false },
  { id: '11', name: 'Title 11: Business Regulations', reserved: false },
  { id: '13', name: 'Title 13: Public Services', reserved: false },
  { id: '15', name: 'Title 15: Buildings and Construction', reserved: false },
  { id: '17', name: 'Title 17: (Reserved)', reserved: true },
  { id: '18', name: 'Title 18: Zoning', reserved: false },
  { id: '19', name: 'Title 19: Subdivisions', reserved: false },
  { id: '21', name: 'Title 21: Traffic', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
