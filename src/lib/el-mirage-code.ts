
export const EL_MIRAGE_CITY_CODE = [
  { id: '1', name: 'Title 1: General Provisions', reserved: false },
  { id: '2', name: 'Title 2: Administration and Government', reserved: false },
  { id: '4', name: 'Title 4: Health and Sanitation', reserved: false },
  { id: '5', name: 'Title 5: Business Licenses and Regulations', reserved: false },
  { id: '6', name: 'Title 6: Animals', reserved: false },
  { id: '8', name: 'Title 8: Alcoholic Beverages', reserved: false },
  { id: '9', name: 'Title 9: Public Peace, Morals and Welfare', reserved: false },
  { id: '10', name: 'Title 10: Vehicles and Traffic', reserved: false },
  { id: '12', name: 'Title 12: Streets, Sidewalks and Public Places', reserved: false },
  { id: '13', name: 'Title 13: Public Services', reserved: false },
  { id: '14', name: 'Title 14: Development Code', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
