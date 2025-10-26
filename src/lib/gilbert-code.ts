
import { GILBERT_CODE_CONTENT } from './gilbert-code-content';

export const GILBERT_TOWN_CODE = Object.keys(GILBERT_CODE_CONTENT).map(key => {
    const law = GILBERT_CODE_CONTENT[key as keyof typeof GILBERT_CODE_CONTENT];
    return {
        id: key,
        name: law.title,
        reserved: false
    };
}).sort((a, b) => {
  const titleA = parseInt(a.id);
  const titleB = parseInt(b.id);
  return titleA - titleB;
});
