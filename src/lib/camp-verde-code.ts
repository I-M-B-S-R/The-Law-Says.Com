
export const CAMP_VERDE_TOWN_CODE = [
  { id: '1', name: 'Title 1: General Provisions', reserved: false },
  { id: '2', name: 'Title 2: (Reserved)', reserved: true },
  { id: '3', name: 'Title 3: Administration', reserved: false },
  { id: '4', name: 'Title 4: (Reserved)', reserved: true },
  { id: '5', name: 'Title 5: Public Works', reserved: false },
  { id: '6', name: 'Title 6: (Reserved)', reserved: true },
  { id: '7', name: 'Title 7: (Reserved)', reserved: true },
  { id: '8', name: 'Title 8: (Reserved)', reserved: true },
  { id: '9', name: 'Title 9: General Regulations', reserved: false },
  { id: '10', name: 'Title 10: (Reserved)', reserved: true },
  { id: '11', name: 'Title 11: Business Regulations', reserved: false },
  { id: '12', name: 'Title 12: (Reserved)', reserved: true },
  { id: '13', name: 'Title 13: General Offenses', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
