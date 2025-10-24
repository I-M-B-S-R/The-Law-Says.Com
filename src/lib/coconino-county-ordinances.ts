
export const COCONINO_COUNTY_ORDINANCES = [
  { id: 'zoning', name: 'Zoning Ordinance' },
  { id: 'subdivision', name: 'Subdivision Ordinance' },
  { id: 'outdoor-lighting', name: 'Outdoor Lighting Ordinance' },
  { id: 'animal-control', name: 'Animal Control Ordinance' },
].sort((a, b) => a.name.localeCompare(b.name));
