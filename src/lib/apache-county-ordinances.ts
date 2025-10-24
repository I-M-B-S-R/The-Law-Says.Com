
export const APACHE_COUNTY_ORDINANCES = [
  { id: 'zoning', name: 'Zoning Ordinance' },
  { id: 'subdivision', name: 'Subdivision Regulations' },
  { id: 'floodplain', name: 'Floodplain Regulations' },
].sort((a, b) => a.name.localeCompare(b.name));
