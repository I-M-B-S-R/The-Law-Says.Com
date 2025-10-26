
export const KINGMAN_CITY_CODE = [
  { id: '1', name: 'Title I: General Provisions', reserved: false },
  { id: '2', name: 'Title II: Administration and Personnel', reserved: false },
  { id: '3', name: 'Title III: Revenue and Finance', reserved: false },
  { id: '4', name: 'Title IV: (Reserved)', reserved: true },
  { id: '5', name: 'Title V: Business Licenses and Regulations', reserved: false },
  { id: '6', name: 'Title VI: Animals', reserved: false },
  { id: '7', name: 'Title VII: (Reserved)', reserved: true },
  { id: '8', name: 'Title VIII: Health and Safety', reserved: false },
  { id: '9', name: 'Title IX: Public Peace, Morals and Welfare', reserved: false },
  { id: '10', name: 'Title X: Vehicles and Traffic', reserved: false },
  { id: '11', name: 'Title XI: (Reserved)', reserved: true },
  { id: '12', name: 'Title XII: Streets, Sidewalks and Public Places', reserved: false },
  { id: '13', name: 'Title XIII: Public Services', reserved: false },
  { id: '14', name: 'Title XIV: (Reserved)', reserved: true },
  { id: '15', name: 'Title XV: Buildings and Construction', reserved: false },
  { id: '16', name: 'Title XVI: Subdivisions', reserved: false },
  { id: '17', name: 'Title XVII: Zoning', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
