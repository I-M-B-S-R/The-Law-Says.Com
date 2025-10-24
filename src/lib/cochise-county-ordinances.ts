
export const COCHISE_COUNTY_ORDINANCES = [
  { id: 'animal-control', name: 'Animal Control Ordinance' },
  { id: 'floodplain', name: 'Floodplain Regulations' },
  { id: 'subdivision', name: 'Subdivision Regulations' },
  { id: 'zoning', name: 'Zoning Regulations' },
].sort((a, b) => a.name.localeCompare(b.name));
