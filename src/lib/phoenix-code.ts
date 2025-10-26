
export const PHOENIX_CITY_CODE = [
  { id: '1', name: 'Chapter 1: General Provisions', reserved: false },
  { id: '2', name: 'Chapter 2: Administration', reserved: false },
  { id: '4', name: 'Chapter 4: Alcoholic Beverages', reserved: false },
  { id: '7', name: 'Chapter 7: Aviation', reserved: false },
  { id: '8', name: 'Chapter 8: Animals', reserved: false },
  { id: '11', name: 'Chapter 11: Business and Licensing', reserved: false },
  { id: '16', name: 'Chapter 16: Fire Prevention', reserved: false },
  { id: '23', name: 'Chapter 23: Nuisances', reserved: false },
  { id: '24', name: 'Chapter 24: Parks and Recreation', reserved: false },
  { id: '27', name: 'Chapter 27: Solid Waste and Recycling', reserved: false },
  { id: '28', name: 'Chapter 28: Housing', reserved: false },
  { id: '31', name: 'Chapter 31: Subdivisions', reserved: false },
  { id: '32A', name: 'Chapter 32A: Historic Preservation', reserved: false },
  { id: '36', name: 'Chapter 36: Traffic', reserved: false },
  { id: '39', name: 'Chapter 39: Water and Wastewater', reserved: false },
].sort((a, b) => {
  const idA = parseFloat(a.id);
  const idB = parseFloat(b.id);
  return idA - idB;
});
