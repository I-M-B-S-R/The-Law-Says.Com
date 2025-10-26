
export const NOGALES_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '4', name: 'Chapter 4: Alcoholic Beverages', reserved: false },
  { id: '6', name: 'Chapter 6: Animals', reserved: false },
  { id: '8', name: 'Chapter 8: Buildings and Building Regulations', reserved: false },
  { id: '10', name: 'Chapter 10: Businesses', reserved: false },
  { id: '14', name: 'Chapter 14: Fire Prevention', reserved: false },
  { id: '15', name: 'Chapter 15: Garbage and Refuse', reserved: false },
  { id: '19', name: 'Chapter 19: Offenses and Nuisances', reserved: false },
  { id: '22', name: 'Chapter 22: Parks and Recreation', reserved: false },
  { id: '25', name: 'Chapter 25: Streets, Sidewalks and Public Places', reserved: false },
  { id: '27', name: 'Chapter 27: Subdivisions', reserved: false },
  { id: '28', name: 'Chapter 28: Taxation', reserved: false },
  { id: '29', name: 'Chapter 29: Traffic', reserved: false },
  { id: '30', name: 'Chapter 30: Utilities', reserved: false },
  { id: '31', name: 'Appendix A: Zoning', reserved: false },
].sort((a, b) => {
  const idA = a.id.includes('Appendix') ? 99 : parseInt(a.id, 10);
  const idB = b.id.includes('Appendix') ? 99 : parseInt(b.id, 10);
  return idA - idB;
});
