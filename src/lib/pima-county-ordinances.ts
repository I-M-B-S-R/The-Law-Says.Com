
export const PIMA_COUNTY_ORDINANCES = [
  { id: 'animal-control', name: 'Animal Control Ordinance (Title 6)' },
  { id: 'floodplain', name: 'Floodplain Management Ordinance' },
  { id: 'subdivision', name: 'Subdivision & Development Standards' },
  { id: 'zoning', name: 'Zoning Code (Title 18)' },
].sort((a, b) => a.name.localeCompare(b.name));
