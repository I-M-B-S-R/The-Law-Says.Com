
export const PRESCOTT_CITY_CODE = [
  { id: '1', name: 'Title I: General and Administration', reserved: false },
  { id: '2', name: 'Title II: Administration', reserved: false },
  { id: '3', name: 'Title III: Revenue and Finance', reserved: false },
  { id: '4', name: 'Title IV: Business and License Regulations', reserved: false },
  { id: '5', name: 'Title V: Health and Sanitation', reserved: false },
  { id: '6', name: 'Title VI: Animals', reserved: false },
  { id: '7', name: 'Title VII: Peace, Morals and Good Order', reserved: false },
  { id: '8', name: 'Title VIII: Vehicles and Traffic', reserved: false },
  { id: '10', name: 'Title X: Land Development Code', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});

    