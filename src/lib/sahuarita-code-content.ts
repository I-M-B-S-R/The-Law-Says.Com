
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const SAHUARITA_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title 1 of the Sahuarita Town Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the Town Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the Town Code where a more specific penalty is not stated, making all parts of the code enforceable."
      }
    ]
  },
  '3': {
    summary: "Title 3, Administration, details the structure and organization of the town government. It defines the roles and responsibilities of the Town Council, Town Manager, and various departments.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The Town operates under a Council-Manager form of government. The Town Council is the legislative body, while the Town Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and six Councilmembers who set policy, approve the budget, and oversee town governance."
      }
    ]
  },
  '5': {
    summary: "Title 5, Public Works, governs the essential infrastructure and services managed by the town, including regulations for streets, public property, and utilities.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the town's public infrastructure.",
    keyProvisions: [
      {
        title: "Street Regulations",
        content: "Establishes rules for the use and maintenance of public streets, including prohibiting obstructions and requiring permits for any work performed in the public right-of-way."
      },
      {
        title: "Water and Wastewater Systems",
        content: "Contains regulations for connecting to and using the town's water and sewer utilities to protect public health and ensure system integrity."
      }
    ]
  },
  '8': {
    summary: "Title 8, Health and Safety, covers a wide range of rules related to public health and welfare, including nuisance abatement.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and hazardous buildings to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Solid Waste",
        content: "Regulates the storage and disposal of garbage and refuse, requiring proper containers and mandating collection to prevent health hazards."
      }
    ]
  },
  '9': {
    summary: "Title 9, Public Peace, Morals and Welfare, defines various local-level public order offenses to maintain a peaceful and safe community.",
    purpose: "To prohibit conduct that is disruptive to public peace, safety, and order and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      },
      {
        title: "Curfew for Minors",
        content: "Establishes a curfew, making it unlawful for minors to be in public places during specified late-night hours without a valid reason."
      }
    ]
  },
  '10': {
    summary: "Title 10 is the Sahuarita Traffic Code. It adopts state traffic laws and establishes additional local regulations for vehicle operation and parking.",
    purpose: "To provide for the safe and orderly movement of vehicular and pedestrian traffic within the Town of Sahuarita.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The Town adopts by reference the comprehensive traffic laws found in Title 28 of the Arizona Revised Statutes."
      },
      {
        title: "Parking Regulations",
        content: "Prohibits parking in certain areas and for extended periods on public streets to ensure safety and access."
      }
    ]
  },
  '11': {
    summary: "Title 11, Business Regulations, governs the licensing and operation of various businesses within the town.",
    purpose: "To provide for the regulation of businesses to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating in Sahuarita to obtain a Town Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services."
      }
    ]
  },
  '13': {
    summary: "Title 13, General Offenses, is reserved for future use and contains no ordinances.",
    purpose: "",
    keyProvisions: []
  },
  '18': {
    summary: "Title 18, Zoning, contains the comprehensive Zoning and Subdivision regulations for the town. It is the primary tool for managing growth in this rapidly expanding community.",
    purpose: "To guide the physical development of the town in a manner that promotes public health and safety and ensures high-quality, orderly growth.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes a wide range of zoning districts, including specific planned area development (PAD) zones, and specifies the permitted uses, density, and development standards for each."
      },
      {
        title: "Subdivision Regulations",
        content: "Contains the rules and procedures for dividing land into smaller parcels, ensuring new developments are properly designed and served by public infrastructure."
      },
      {
        title: "Building Codes",
        content: "Adopts by reference various building and safety codes to ensure all construction is safe and habitable."
      }
    ]
  }
};
