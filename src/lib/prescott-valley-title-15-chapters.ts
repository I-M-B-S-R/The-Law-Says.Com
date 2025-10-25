
export const PRESCOTT_VALLEY_TITLE_15_CHAPTERS = [
    { id: '150', name: 'Chapter 150: Building Regulations', reserved: false },
    { id: '151', name: 'Chapter 151: (Reserved)', reserved: true },
    { id: '152', name: 'Chapter 152: Sign Code', reserved: false },
    { id: '153', name: 'Chapter 153: Subdivision Regulations', reserved: false },
    { id: '154', name: 'Chapter 154: Zoning', reserved: false },
].sort((a, b) => {
    const titleA = parseInt(a.id);
    const titleB = parseInt(b.id);
    return titleA - titleB;
});
