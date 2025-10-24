
export const GILA_COUNTY_ORDINANCES = [
  { id: 'zoning', name: 'Zoning Ordinance' },
  { id: 'subdivision', name: 'Subdivision Ordinance' },
  { id: 'floodplain', name: 'Floodplain Regulations' },
  { id: 'animal-control', name: 'Animal Control Ordinance' },
].sort((a, b) => a.name.localeCompare(b.name));
