
interface LawContent {
  summary: string;
  keyProvisions: { title: string; content: string }[];
  purpose: string;
}

export const ALABAMA_CODE_CONTENT: Record<string, LawContent> = {
  '1': {
    summary: "Title 1 of the Code of Alabama establishes the foundational legal framework for the entire state code. It provides general provisions, rules for statutory construction, and definitions of common legal terms to ensure consistency and clarity.",
    keyProvisions: [
      {
        title: "Statutory Construction",
        content: "Provides rules for how laws should be interpreted by courts and citizens, such as the meaning of 'shall' vs. 'may' and how to resolve conflicts between different statutes."
      },
      {
        title: "Definitions",
        content: "Defines common terms used throughout the Alabama Code, such as 'person,' 'property,' and 'oath,' to ensure consistent meaning across all laws."
      }
    ],
    purpose: "To provide a stable and consistent foundation for the entire body of Alabama law, acting as a universal guide for its interpretation and application."
  },
  '2': {
    summary: "Title 2 governs all aspects of agriculture in Alabama. It establishes the Department of Agriculture and Industries and covers regulations for crops, livestock, pests, and the marketing and sale of agricultural products.",
    keyProvisions: [
      {
        title: "Department of Agriculture and Industries",
        content: "Establishes the state agency responsible for regulating and promoting Alabama's agricultural sector."
      },
      {
        title: "Pest Control",
        content: "Provides regulations for controlling and eradicating pests and diseases that threaten crops and livestock."
      },
      {
        title: "Livestock Markets and Animal Health",
        content: "Sets standards for the operation of livestock markets and for the health and transportation of animals to prevent the spread of disease."
      }
    ],
    purpose: "To promote and protect the agricultural interests of Alabama, ensure food safety, protect against pests and diseases, and provide for the orderly marketing of farm products."
  },
};
