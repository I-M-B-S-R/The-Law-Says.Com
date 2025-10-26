
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const PHOENIX_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Phoenix City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the City Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the City Code where a more specific penalty is not stated, making all parts of the code enforceable."
      }
    ]
  },
  '2': {
    summary: "Chapter 2, Administration, details the structure and organization of the city government. It defines the roles and responsibilities of the City Council, City Manager, and various city departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The City operates under a Council-Manager form of government. The City Council is the legislative body, while the City Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "City Council",
        content: "The Council consists of a Mayor elected citywide and eight Councilmembers elected by district. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      }
    ]
  },
  '4': {
    summary: "Chapter 4, Alcoholic Beverages, governs the sale and consumption of liquor within the City of Phoenix. It primarily adopts state law but also includes local regulations.",
    purpose: "To regulate the sale and consumption of alcoholic beverages in a manner that protects public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive alcoholic beverage laws of the State of Arizona found in A.R.S. Title 4."
      },
      {
        title: "Local Licensing Review",
        content: "Applications for a state liquor license for a location within Phoenix are forwarded to the City Council for a recommendation to the State Liquor Board."
      }
    ]
  },
  '7': {
    summary: "Chapter 7, Aviation, contains regulations for the operation and use of city-owned airports, including Phoenix Sky Harbor International Airport.",
    purpose: "To ensure the safe, secure, and efficient operation of the city's airport system.",
    keyProvisions: [
      {
        title: "Airport Rules",
        content: "Establishes rules for all persons and vehicles on airport property, including regulations for commercial activities, ground transportation, and general conduct."
      },
      {
        title: "Security",
        content: "Implements federal security directives and establishes local security requirements for access to restricted areas of the airport."
      }
    ]
  },
  '8': {
    summary: "Chapter 8, Animals, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs over three months of age to be licensed with Maricopa County and vaccinated against rabies. The license tag must be worn at all times."
      },
      {
        title: "Leash Law",
        content: "Prohibits dogs from being 'at large.' Dogs must be confined to the owner's property or restrained by a leash not to exceed six feet in length."
      }
    ]
  },
  '11': {
    summary: "Chapter 11 governs the licensing and operation of various businesses within the city to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "While Phoenix does not have a general business license, it requires specific licenses for certain activities, such as operating a special event or a mobile food vending unit."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades."
      }
    ]
  },
  '16': {
    summary: "Chapter 16, Fire Prevention, adopts the International Fire Code to establish minimum safety standards to protect life and property from fire and explosion hazards.",
    purpose: "To prevent fires and protect public safety through the enforcement of modern fire prevention codes.",
    keyProvisions: [
      {
        title: "Adoption of Fire Code",
        content: "The city adopts a specific edition of the International Fire Code (IFC) with local amendments."
      },
      {
        title: "Fire Lanes",
        content: "Prohibits parking or otherwise obstructing designated fire lanes to ensure emergency vehicle access."
      }
    ]
  },
  '23': {
    summary: "Chapter 23, Nuisances, defines and prohibits conditions that are detrimental to public health, safety, and welfare, and which can lead to neighborhood blight.",
    purpose: "To protect the health, safety, and quality of life for residents by defining, prohibiting, and providing for the abatement of public nuisances.",
    keyProvisions: [
      {
        title: "Public Nuisance Defined",
        content: "Declares a wide range of conditions to be public nuisances, including overgrown weeds ('blight'), accumulation of trash, stagnant water ('green pools'), and unsecured vacant buildings."
      },
      {
        title: "Abatement Procedure",
        content: "Provides a process for the city to notify property owners of a nuisance and require its correction. If the owner fails to comply, the city may abate the nuisance and place a lien on the property for the costs."
      }
    ]
  },
  '24': {
    summary: "Chapter 24 outlines the rules and regulations for the use of city parks and preserves, including the vast Phoenix Mountains Preserve.",
    purpose: "To ensure that public parks and natural preserves are safe, clean, and available for the enjoyment of all residents, while protecting natural resources.",
    keyProvisions: [
      {
        title: "Park Hours",
        content: "Establishes operating hours for city parks and trails, making it unlawful to be in these areas after closing."
      },
      {
        title: "Prohibited Activities",
        content: "Prohibits certain activities within parks, such as the consumption of alcohol without a special permit, use of glass containers, and operating motor vehicles off designated paths."
      },
      {
        title: "Trail Rules",
        content: "Includes specific rules for trail use, such as 'Dogs on Leash' requirements and yielding protocols for hikers, bikers, and equestrians."
      }
    ]
  },
  '27': {
    summary: "Chapter 27, Solid Waste and Recycling, regulates the storage, collection, and disposal of trash and recycling to ensure public health and sanitation.",
    purpose: "To protect public health and the environment by establishing standards for the safe and sanitary management of solid waste and to promote recycling.",
    keyProvisions: [
      {
        title: "Mandatory Collection",
        content: "Requires all occupied residences and businesses to subscribe to the city's solid waste collection service."
      },
      {
        title: "Container Requirements",
        content: "Specifies that residents must use city-provided containers for trash and recycling and sets rules for their placement on collection days."
      }
    ]
  },
  '28': {
    summary: "Chapter 28, Housing, establishes minimum standards for the maintenance of residential properties to ensure they are safe and habitable.",
    purpose: "To protect the health and safety of residents by setting minimum standards for housing conditions and providing for the abatement of substandard properties.",
    keyProvisions: [
      {
        title: "Minimum Standards",
        content: "Sets minimum standards for dwelling units regarding space, light, ventilation, plumbing, and structural integrity."
      },
      {
        title: "Property Maintenance",
        content: "Requires that all residential properties be maintained in a clean, safe, and sanitary condition, free from insect and rodent infestation."
      }
    ]
  },
  '31': {
    summary: "Chapter 31, Subdivisions, contains the detailed regulations for dividing land into smaller lots for development.",
    purpose: "To ensure that new developments are well-designed, safe, and adequately served by public infrastructure.",
    keyProvisions: [
      {
        title: "Platting Process",
        content: "Defines the process for submitting and gaining approval for preliminary and final subdivision plats."
      },
      {
        title: "Public Improvements",
        content: "Requires developers to install or provide financial assurances for all necessary public improvements, including streets, water lines, and sewer lines."
      }
    ]
  },
  '32A': {
    summary: "Chapter 32A, Historic Preservation, establishes the regulations and procedures for protecting the city's historic properties and districts.",
    purpose: "To protect, preserve, and enhance the historical, architectural, and cultural heritage of the City of Phoenix.",
    keyProvisions: [
      {
        title: "Historic Preservation Commission",
        content: "Creates the Historic Preservation Commission to recommend the designation of historic properties and districts and to review proposed work on designated properties."
      },
      {
        title: "Certificate of Appropriateness",
        content: "Requires a Certificate of Appropriateness before any exterior alteration, construction, or demolition can occur on a property within a designated historic district. This ensures that changes are compatible with the historic character of the district."
      }
    ]
  },
  '36': {
    summary: "Chapter 36 contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference, making it enforceable by Phoenix Police."
      },
      {
        title: "Parking Rules",
        content: "Establishes extensive local parking regulations, including rules for time-limited parking, residential permit parking zones, and prohibiting parking in fire lanes."
      }
    ]
  },
  '39': {
    summary: "Chapter 39, Utilities, governs the city's extensive water and wastewater utility systems, including rates and service rules.",
    purpose: "To provide for the safe and efficient operation of the city's public utilities and to establish fair rates for service.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to the city water and sewer systems and the conditions for service."
      },
      {
        title: "Water Conservation",
        content: "Includes robust water conservation measures and ordinances, reflecting the critical importance of water management in a desert metropolis."
      }
    ]
  }
};
