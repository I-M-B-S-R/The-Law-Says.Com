
export const PRESCOTT_VALLEY_TITLE_9_CHAPTERS = [
    { id: '90', name: 'Chapter 90: Alarm Systems', reserved: false },
    { id: '91', name: 'Chapter 91: Cable Communications', reserved: false },
    { id: '92', name: 'Chapter 92: Animal Control', reserved: false },
    { id: '93', name: 'Chapter 93: Nuisances', reserved: false },
    { id: '94', name: 'Chapter 94: Emergency Management', reserved: false },
    { id: '95', name: 'Chapter 95: (Reserved)', reserved: true },
    { id: '96', name: 'Chapter 96: Parks and Recreation', reserved: false },
    { id: '97', name: 'Chapter 97: Streets and Sidewalks', reserved: false },
].sort((a, b) => {
    const titleA = parseInt(a.id);
    const titleB = parseInt(b.id);
    return titleA - titleB;
});
