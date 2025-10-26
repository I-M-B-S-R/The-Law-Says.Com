
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const WILLCOX_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Willcox City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the City Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Interpretation",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the City Code where a more specific penalty is not stated, making all parts of the code enforceable."
      }
    ]
  },
  '3': {
    summary: "Title III, Administration, details the structure and organization of the city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The City operates under a Council-Manager form of government. The City Council is the legislative body, while the City Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "City Council",
        content: "The Council consists of a Mayor and six Councilmembers who set policy, approve the budget, and oversee city governance."
      }
    ]
  },
  '5': {
    summary: "Title V, Public Works, governs the essential infrastructure and services managed by the city, including regulations for streets, public property, and utilities.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the city's public infrastructure.",
    keyProvisions: [
      {
        title: "Street and Sidewalk Regulations",
        content: "Establishes rules for the use and maintenance of public streets and sidewalks, including prohibiting obstructions."
      },
      {
        title: "Water and Wastewater Systems",
        content: "Contains regulations for connecting to and using the city's water and sewer utilities to protect public health and ensure system integrity."
      }
    ]
  },
  '7': {
    summary: "Title VII is the Willcox Traffic Code. It adopts state traffic laws and establishes additional local regulations for vehicle operation and parking.",
    purpose: "To provide for the safe and orderly movement of vehicular and pedestrian traffic within the City of Willcox.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The City adopts by reference the comprehensive traffic laws found in Title 28 of the Arizona Revised Statutes."
      },
      {
        title: "Parking Regulations",
        content: "Prohibits parking in certain areas and for extended periods on public streets to ensure safety and access."
      }
    ]
  },
  '9': {
    summary: "Title IX, General Regulations, covers a wide range of rules related to public health, safety, and welfare, including animal control and nuisance abatement.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Animal Control",
        content: "Regulates the keeping of animals, requires licensing and vaccination of dogs, and prohibits animals from running at large."
      },
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and excessive noise to be public nuisances and provides a process for their abatement."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various businesses within the city.",
    purpose: "To provide for the regulation of businesses to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating in Willcox to obtain a City Business License."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses to maintain public order and safety within the city.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the City of Willcox.",
    keyProvisions: [
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      },
      {
        title: "Damage to Property",
        content: "Makes it unlawful to willfully damage, deface, or destroy public or private property."
      }
    ]
  },
  '15': {
    summary: "Title XV, Land Usage, contains the comprehensive Zoning and Subdivision regulations for the city. It is the primary tool for managing growth and ensuring development aligns with the city's character.",
    purpose: "To guide the physical development of the city in a manner that promotes public health and safety and ensures orderly growth.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential, commercial, and agricultural zoning districts and specifies the permitted uses, density, and development standards for each."
      },
      {
        title: "Building Codes",
        content: "Adopts by reference various building and safety codes to ensure all construction is safe and habitable."
      }
    ]
  }
};
