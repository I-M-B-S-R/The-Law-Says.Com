
export const PRESCOTT_VALLEY_TOWN_CODE = [
  { id: '1', name: 'Title I: General Provisions' },
  { id: '2', name: 'Title II: (Reserved)' },
  { id: '3', name: 'Title III: Administration' },
  { id: '4', name: 'Title IV: (Reserved)' },
  { id: '5', name: 'Title V: Public Works' },
  { id: '6', name: 'Title VI: (Reserved)' },
  { id: '7', name: 'Title VII: Traffic Code' },
  { id: '8', name: 'Title VIII: (Reserved)' },
  { id: '9', name: 'Title IX: General Regulations' },
  { id: '10', name: 'Title X: (Reserved)' },
  { id: '11', name: 'Title XI: Business Regulations' },
  { id: '12', name: 'Title XII: (Reserved)' },
  { id: '13', name: 'Title XIII: General Offenses' },
  { id: '14', name: 'Title XIV: (Reserved)' },
  { id: '15', name: 'Title XV: Land Usage' },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
