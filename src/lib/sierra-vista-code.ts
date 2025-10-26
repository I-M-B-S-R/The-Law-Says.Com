
export const SIERRA_VISTA_CITY_CODE = [
  { id: '10', name: 'Title 1, Chapter 10: General Provisions', reserved: false },
  { id: '30', name: 'Title 3, Chapter 30: Administration', reserved: false },
  { id: '50', name: 'Title 5, Chapter 50: Public Ways and Property', reserved: false },
  { id: '70', name: 'Title 7, Chapter 70: Traffic Code', reserved: false },
  { id: '90', name: 'Title 9, Chapter 90: General Regulations', reserved: false },
  { id: '110', name: 'Title 11, Chapter 110: Business Regulations', reserved: false },
  { id: '130', name: 'Title 13, Chapter 130: General Offenses', reserved: false },
  { id: '150', name: 'Title 15, Chapter 150: Building Regulations', reserved: false },
  { id: '151', name: 'Title 15, Chapter 151: Development Code', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
