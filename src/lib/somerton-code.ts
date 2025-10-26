
export const SOMERTON_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration and Government', reserved: false },
  { id: '4', name: 'Chapter 4: Animals', reserved: false },
  { id: '5', name: 'Chapter 5: Building Regulations', reserved: false },
  { id: '6', name: 'Chapter 6: Business Regulations and Licensing', reserved: false },
  { id: '8', name: 'Chapter 8: Health and Sanitation', reserved: false },
  { id: '9', name: 'Chapter 9: Public Peace and Good Order', reserved: false },
  { id: '10', name: 'Chapter 10: Vehicles and Traffic', reserved: false },
  { id: '12', name: 'Chapter 12: Streets, Sidewalks and Public Places', reserved: false },
  { id: '13', name: 'Chapter 13: Public Services', reserved: false },
  { id: '14', name: 'Chapter 14: Development Code', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
