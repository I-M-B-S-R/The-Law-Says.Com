
export const NAVAJO_COUNTY_ORDINANCES = [
  { id: 'zoning', name: 'Zoning Ordinance' },
  { id: 'subdivision', name: 'Subdivision Regulations' },
  { id: 'flood-damage', name: 'Flood Damage Prevention Ordinance' },
  { id: 'animal-control', name: 'Animal Control Ordinance' },
].sort((a, b) => a.name.localeCompare(b.name));
