
export const PINETOP_LAKESIDE_TOWN_CODE = [
  { id: '10', name: 'Chapter 10: General Provisions', reserved: false },
  { id: '30', name: 'Chapter 30: Administration', reserved: false },
  { id: '90', name: 'Chapter 90: Animals', reserved: false },
  { id: '92', name: 'Chapter 92: Nuisances', reserved: false },
  { id: '154', name: 'Chapter 154: Zoning', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
