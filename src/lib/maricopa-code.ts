
export const MARICOPA_CITY_CODE = [
  { id: '1', name: 'Title 1: General Provisions', reserved: false },
  { id: '3', name: 'Title 3: Administration', reserved: false },
  { id: '5', name: 'Title 5: Public Works', reserved: false },
  { id: '7', name: 'Title 7: Traffic Code', reserved: false },
  { id: '9', name: 'Title 9: General Regulations', reserved: false },
  { id: '11', name: 'Title 11: Business Regulations', reserved: false },
  { id: '13', name: 'Title 13: General Offenses', reserved: false },
  { id: '15', name: 'Title 15: Land Usage', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
