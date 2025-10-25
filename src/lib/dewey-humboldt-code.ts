
export const DEWEY_HUMBOLDT_TOWN_CODE = [
  { id: '10', name: 'Chapter 10: General Provisions', reserved: false },
  { id: '30', name: 'Chapter 30: Town Government', reserved: false },
  { id: '90', name: 'Chapter 90: Streets, Sidewalks and Public Places', reserved: false },
  { id: '110', name: 'Chapter 110: Business Regulations', reserved: false },
  { id: '130', name: 'Chapter 130: General Offenses', reserved: false },
  { id: '150', name: 'Chapter 150: Building Regulations', reserved: false },
  { id: '151', name: 'Chapter 151: Zoning', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
