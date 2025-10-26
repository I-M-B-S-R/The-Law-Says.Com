
export const SUPERIOR_TOWN_CODE = [
  { id: '1', name: 'Title I: General Provisions', reserved: false },
  { id: '3', name: 'Title III: Administration', reserved: false },
  { id: '5', name: 'Title V: Public Works', reserved: false },
  { id: '7', name: 'Title VII: Traffic Code', reserved: false },
  { id: '9', name: 'Title IX: General Regulations', reserved: false },
  { id: '11', name: 'Title XI: Business Regulations', reserved: false },
  { id: '13', name: 'Title XIII: General Offenses', reserved: false },
  { id: '15', name: 'Title XV: Land Usage', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
