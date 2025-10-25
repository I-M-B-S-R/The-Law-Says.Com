
export const FOUNTAIN_HILLS_TOWN_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration, Council and Elections', reserved: false },
  { id: '4', name: 'Chapter 4: Courts', reserved: false },
  { id: '6', name: 'Chapter 6: Alcoholic Beverages', reserved: false },
  { id: '7', name: 'Chapter 7: Animals', reserved: false },
  { id: '8', name: 'Chapter 8: Buildings and Construction', reserved: false },
  { id: '9', name: 'Chapter 9: Businesses, Peddlers, Solicitors and Vending', reserved: false },
  { id: '10', name: 'Chapter 10: Health and Sanitation; Nuisances', reserved: false },
  { id: '11', name: 'Chapter 11: Offenses and Crimes', reserved: false },
  { id: '12', name: 'Chapter 12: Parks and Recreation', reserved: false },
  { id: '13', name: 'Chapter 13: Streets, Sidewalks and Public Places', reserved: false },
  { id: '14', name: 'Chapter 14: Traffic and Vehicles', reserved: false },
  { id: '15', name: 'Chapter 15: Water and Sewers', reserved: false },
  { id: '19', name: 'Chapter 19: Finance and Taxation', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
