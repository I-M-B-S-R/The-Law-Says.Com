
export const SHOW_LOW_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration and Personnel', reserved: false },
  { id: '3', name: 'Chapter 3: Revenue and Finance', reserved: false },
  { id: '4', name: 'Chapter 4: (Reserved)', reserved: true },
  { id: '5', name: 'Chapter 5: Business Licenses and Regulations', reserved: false },
  { id: '6', name: 'Chapter 6: Animals', reserved: false },
  { id: '7', name: 'Chapter 7: (Reserved)', reserved: true },
  { id: '8', name: 'Chapter 8: Health and Safety', reserved: false },
  { id: '9', name: 'Chapter 9: Public Peace, Morals and Welfare', reserved: false },
  { id: '10', name: 'Chapter 10: Vehicles and Traffic', reserved: false },
  { id: '11', name: 'Chapter 11: (Reserved)', reserved: true },
  { id: '12', name: 'Chapter 12: Streets, Sidewalks and Public Places', reserved: false },
  { id: '13', name: 'Chapter 13: Public Services', reserved: false },
  { id: '14', name: 'Chapter 14: (Reserved)', reserved: true },
  { id: '15', name: 'Chapter 15: Buildings and Construction', reserved: false },
  { id: '16', name: 'Chapter 16: Subdivisions', reserved: false },
  { id: '17', name: 'Chapter 17: Zoning', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
