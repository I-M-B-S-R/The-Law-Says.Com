
export const PARADISE_VALLEY_TOWN_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '3', name: 'Chapter 3: (Reserved)', reserved: true },
  { id: '4', name: 'Chapter 4: Revenue and Finance', reserved: false },
  { id: '5', name: 'Chapter 5: (Reserved)', reserved: true },
  { id: '6', name: 'Chapter 6: Animals', reserved: false },
  { id: '7', name: 'Chapter 7: Buildings and Construction', reserved: false },
  { id: '8', name: 'Chapter 8: Businesses', reserved: false },
  { id: '9', name: 'Chapter 9: Fire Code', reserved: false },
  { id: '10', name: 'Chapter 10: Health and Safety', reserved: false },
  { id: '11', name: 'Chapter 11: Offenses and Public Nuisances', reserved: false },
  { id: '12', name: 'Chapter 12: Parks and Recreation', reserved: false },
  { id: '13', name: 'Chapter 13: Streets, Sidewalks and Public Property', reserved: false },
  { id: '14', name: 'Chapter 14: Traffic and Vehicles', reserved: false },
  { id: '15', name: 'Chapter 15: Utilities', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
