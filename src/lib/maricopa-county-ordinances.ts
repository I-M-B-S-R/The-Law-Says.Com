
export const MARICOPA_COUNTY_ORDINANCES = [
  { id: 'zoning', name: 'Zoning Ordinance' },
  { id: 'subdivision', name: 'Subdivision Regulations' },
  { id: 'floodplain', name: 'Floodplain Regulations' },
  { id: 'building', name: 'Building Codes (Administrative)' },
  { id: 'air-quality', name: 'Air Quality Regulations' },
  { id: 'animal-care', name: 'Animal Care & Control Ordinance' },
  { id: 'waste-management', name: 'Solid Waste Management Ordinance' },
].sort((a, b) => a.name.localeCompare(b.name));
