
export const PIMA_COUNTY_ORDINANCES = [
  { id: 'zoning', name: 'Zoning Code (Title 18)' },
  { id: 'subdivision', name: 'Subdivision & Development Standards' },
  { id: 'floodplain', name: 'Floodplain Management Ordinance' },
  { id: 'animal-control', name: 'Animal Control Ordinance (Title 6)' },
].sort((a, b) => a.name.localeCompare(b.name));
