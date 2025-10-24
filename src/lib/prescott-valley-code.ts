
export const PRESCOTT_VALLEY_TOWN_CODE = [
  { id: '3', name: 'Title III: Administration' },
  { id: '5', name: 'Title V: Public Works' },
  { id: '7', name: 'Title VII: Traffic Code' },
  { id: '9', name: 'Title IX: General Regulations' },
  { id: '11', name: 'Title XI: Business Regulations' },
  { id: '13', name: 'Title XIII: General Offenses' },
  { id: '15', name: 'Title XV: Land Usage' },
].sort((a, b) => {
    const titleA = parseInt(a.id);
    const titleB = parseInt(b.id);
    return titleA - titleB;
});
