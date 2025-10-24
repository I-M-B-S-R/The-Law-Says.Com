
export const GILA_COUNTY_ORDINANCES = [
  { id: 'animal-control', name: 'Animal Control Ordinance' },
  { id: 'floodplain', name: 'Floodplain Regulations' },
  { id: 'subdivision', name: 'Subdivision Ordinance' },
  { id: 'zoning', name: 'Zoning Ordinance' },
].sort((a, b) => a.name.localeCompare(b.name));
