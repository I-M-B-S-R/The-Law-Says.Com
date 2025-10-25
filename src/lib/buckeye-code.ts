
export const BUCKEYE_CITY_CODE = [
  { id: '1', name: 'Title I: General Provisions', reserved: false },
  { id: '2', name: 'Title II: (Reserved)', reserved: true },
  { id: '3', name: 'Title III: Administration', reserved: false },
  { id: '4', name: 'Title IV: (Reserved)', reserved: true },
  { id: '5', name: 'Title V: Public Works', reserved: false },
  { id: '6', name: 'Title VI: (Reserved)', reserved: true },
  { id: '7', name: 'Title VII: Traffic Code', reserved: false },
  { id: '8', name: 'Title VIII: (Reserved)', reserved: true },
  { id: '9', name: 'Title IX: General Regulations', reserved: false },
  { id: '10', name: 'Title X: (Reserved)', reserved: true },
  { id: '11', name: 'Title XI: Business Regulations', reserved: false },
  { id: '12', name: 'Title XII: (Reserved)', reserved: true },
  { id: '13', name: 'Title XIII: General Offenses', reserved: false },
  { id: '14', name: 'Title XIV: (Reserved)', reserved: true },
  { id: '15', name: 'Title XV: Land Development', reserved: false },
  { id: '16', name: 'Title XVI: (Reserved)', reserved: true },
  { id: '17', name: 'Title XVII: Fire Prevention', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
