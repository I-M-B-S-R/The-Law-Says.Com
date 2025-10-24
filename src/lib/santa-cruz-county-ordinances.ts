
export const SANTA_CRUZ_COUNTY_ORDINANCES = [
  { id: 'animal-control', name: 'Animal Control Ordinance' },
  { id: 'floodplain', name: 'Floodplain and Erosion Hazard Management' },
  { id: 'subdivision', name: 'Subdivision Regulations' },
  { id: 'zoning', name: 'Zoning Regulations' },
].sort((a, b) => a.name.localeCompare(b.name));
