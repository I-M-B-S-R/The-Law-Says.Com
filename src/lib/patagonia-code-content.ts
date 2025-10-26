
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const PATAGONIA_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Patagonia Town Code establishes the foundational legal framework for all other titles. It provides rules for interpreting the code, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the Town Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Interpretation",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty, typically a civil violation or misdemeanor, for any violation of the Town Code where a more specific penalty is not stated. This ensures all parts of the code are enforceable."
      }
    ]
  },
  '3': {
    summary: "Title III, Administration, details the structure and organization of the town government. It defines the roles and responsibilities of the Town Council and town manager.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The Town operates under a Council-Manager form of government. The Town Council is the legislative body, while the Town Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and Councilmembers who set policy, approve the budget, and oversee town governance."
      }
    ]
  },
  '5': {
    summary: "Title V, Public Works, governs the essential infrastructure and services managed by the town, with a focus on sustainable practices.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the town's public infrastructure in an environmentally responsible manner.",
    keyProvisions: [
      {
        title: "Street Maintenance",
        content: "Establishes rules for the use and maintenance of public streets, prioritizing pedestrian safety and minimal environmental impact."
      },
      {
        title: "Water and Wastewater Systems",
        content: "Contains regulations for connecting to and using the town's water and sewer utilities, emphasizing water conservation and protection of the local watershed."
      }
    ]
  },
  '9': {
    summary: "Title IX, General Regulations, covers a wide range of rules related to public health, safety, and welfare, reflecting Patagonia's commitment to its natural environment and community character.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances or harm the environment.",
    keyProvisions: [
      {
        title: "Animal Control",
        content: "Regulates the keeping of animals, requires licensing and vaccination of dogs, and prohibits animals from running at large to protect both residents and local wildlife."
      },
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and excessive noise to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Dark Sky Protection",
        content: "Establishes standards for outdoor lighting to minimize light pollution and preserve the visibility of the night sky, which is important for the area's ecotourism."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various businesses within the town, with an emphasis on supporting local and sustainable enterprises.",
    purpose: "To provide for the regulation of businesses to protect the public welfare while fostering a vibrant local economy that is in harmony with the town's character.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating in Patagonia to obtain a Town Business License."
      },
      {
        title: "Special Events",
        content: "A Special Event Permit is required for temporary events, such as art festivals and farmers markets, to ensure public safety and coordination."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses to maintain public order and safety within the town.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the Town of Patagonia.",
    keyProvisions: [
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      },
      {
        title: "Damage to Public and Private Property",
        content: "Makes it unlawful to willfully damage, deface, or destroy property, including natural features in public parks and open spaces."
      }
    ]
  },
  '15': {
    summary: "Title XV, Land Development, contains the comprehensive Zoning and Subdivision regulations for the town. It is the primary tool for managing growth and ensuring development is sustainable and respects the town's unique character and sensitive environment.",
    purpose: "To guide the physical development of the town in a manner that promotes public health, safety, and welfare; preserves natural resources and open space; and ensures orderly, environmentally responsible growth.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential and commercial zoning districts with standards designed to maintain the town's small-scale, historic character."
      },
      {
        title: "Environmental Protection",
        content: "Includes regulations for development near watercourses (like Sonoita Creek Preserve) and on steep slopes to prevent erosion and protect habitat."
      },
      {
        title: "Building and Design Standards",
        content: "Encourages the use of sustainable building materials and architectural styles that are compatible with the town's historic and natural setting."
      }
    ]
  }
};
