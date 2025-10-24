
export const PINAL_COUNTY_ORDINANCES = [
  { id: 'zoning', name: 'Zoning Ordinance' },
  { id: 'subdivision', name: 'Subdivision Regulations' },
  { id: 'floodplain', name: 'Floodplain Management Ordinance' },
  { id: 'animal-control', name: 'Animal Control Ordinance' },
].sort((a, b) => a.name.localeCompare(b.name));
