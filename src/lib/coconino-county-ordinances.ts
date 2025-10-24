
export const COCONINO_COUNTY_ORDINANCES = [
  { id: 'animal-control', name: 'Animal Control Ordinance' },
  { id: 'outdoor-lighting', name: 'Outdoor Lighting Ordinance' },
  { id: 'subdivision', name: 'Subdivision Ordinance' },
  { id: 'zoning', name: 'Zoning Ordinance' },
].sort((a, b) => a.name.localeCompare(b.name));
