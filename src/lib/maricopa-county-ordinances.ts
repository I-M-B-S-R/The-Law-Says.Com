
export const MARICOPA_COUNTY_ORDINANCES = [
  { id: 'air-quality', name: 'Air Quality Regulations' },
  { id: 'animal-care', name: 'Animal Care & Control Ordinance' },
  { id: 'building', name: 'Building Codes (Administrative)' },
  { id: 'floodplain', name: 'Floodplain Regulations' },
  { id: 'subdivision', name: 'Subdivision Regulations' },
  { id: 'waste-management', name: 'Solid Waste Management Ordinance' },
  { id: 'zoning', name: 'Zoning Ordinance' },
].sort((a, b) => a.name.localeCompare(b.name));
