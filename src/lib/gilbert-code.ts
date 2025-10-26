
export const GILBERT_TOWN_CODE = [
  { id: '10', name: 'Chapter 10: Buildings & Construction', reserved: false },
  { id: '14', name: 'Chapter 14: Businesses', reserved: false },
  { id: '30', name: 'Chapter 30: Environment', reserved: false },
  { id: '42', name: 'Chapter 42: Nuisances (Noise)', reserved: false },
  { id: '62', name: 'Chapter 62: Traffic and Vehicles', reserved: false },
  { id: '66', name: 'Chapter 66: Utilities Operations', reserved: false },
].sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
