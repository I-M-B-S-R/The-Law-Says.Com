
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const NOGALES_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Nogales City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
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
    summary: "Chapter 2, Administration, details the structure and organization of the city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The City operates under a Council-Manager form of government. The City Council is the legislative body, while the City Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "City Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      }
    ]
  },
  '4': {
    summary: "Chapter 4, Alcoholic Beverages, governs the sale and consumption of liquor within the City of Nogales. It primarily adopts state law but also includes local regulations.",
    purpose: "To regulate the sale and consumption of alcoholic beverages in a manner that protects public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive alcoholic beverage laws of the State of Arizona found in A.R.S. Title 4."
      },
      {
        title: "Local Licensing Review",
        content: "Applications for a state liquor license for a location within Nogales are forwarded to the City Council for a recommendation to the State Liquor Board."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Animals, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with the city and vaccinated against rabies."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs and other domestic animals from running 'at large.' Animals must be confined to the owner's property or restrained by a leash."
      }
    ]
  },
  '8': {
    summary: "Chapter 8, Buildings and Building Regulations, adopts the set of codes that govern all building and construction within the city.",
    purpose: "To safeguard public health and safety by establishing minimum standards for the design, construction, and maintenance of all buildings.",
    keyProvisions: [
      {
        title: "Adoption of Codes",
        content: "The city adopts specific editions of the International Building Code, Residential Code, and other related technical codes."
      },
      {
        title: "Building Permits",
        content: "A building permit is required for most new construction, additions, and significant alterations to ensure compliance with safety codes."
      }
    ]
  },
  '10': {
    summary: "Chapter 10, Businesses, governs the licensing and operation of various businesses within the city.",
    purpose: "To provide for the regulation of businesses to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating in Nogales to obtain a City Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades."
      }
    ]
  },
  '14': {
    summary: "Chapter 14, Fire Prevention and Protection, adopts the International Fire Code to establish minimum safety standards to protect life and property from fire and explosion hazards.",
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
  '15': {
    summary: "Chapter 15, Garbage and Refuse, regulates the storage, collection, and disposal of solid waste to ensure public health and sanitation.",
    purpose: "To protect public health and the environment by establishing standards for the safe and sanitary management of solid waste.",
    keyProvisions: [
      {
        title: "Mandatory Collection",
        content: "Requires all occupied residences and businesses to subscribe to the city's solid waste collection service."
      },
      {
        title: "Container Requirements",
        content: "Specifies that residents must use city-provided containers and sets rules for their placement on collection days."
      }
    ]
  },
  '19': {
    summary: "Chapter 19, Offenses and Nuisances, defines various local-level public order offenses to maintain a peaceful and safe community.",
    purpose: "To prohibit conduct that is disruptive to public peace, safety, and order and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      },
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and hazardous buildings to be public nuisances and provides a process for their abatement."
      }
    ]
  },
  '22': {
    summary: "Chapter 22 outlines the rules and regulations for the use of city parks and recreational facilities.",
    purpose: "To ensure that public parks are safe, clean, and available for the enjoyment of all residents.",
    keyProvisions: [
      {
        title: "Park Hours",
        content: "Establishes operating hours for city parks, making it unlawful to be in a park after it is closed."
      },
      {
        title: "Prohibited Activities",
        content: "Prohibits certain activities within parks, such as the consumption of alcohol without a special permit."
      }
    ]
  },
  '25': {
    summary: "Chapter 25 governs the use and maintenance of public streets, sidewalks, and other rights-of-way.",
    purpose: "To regulate the use of public rights-of-way to ensure they remain safe and accessible for public travel.",
    keyProvisions: [
      {
        title: "Obstructions",
        content: "Makes it unlawful to place any obstruction on a public sidewalk or street without a permit."
      }
    ]
  },
  '27': {
    summary: "Chapter 27, Subdivisions, contains the detailed regulations for dividing land into smaller lots for development.",
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
  '28': {
    summary: "Chapter 28, Taxation, establishes the city's authority to levy taxes, including the Transaction Privilege (Sales) Tax.",
    purpose: "To provide a legal framework for the city to raise revenue to fund municipal services.",
    keyProvisions: [
      {
        title: "Transaction Privilege Tax",
        content: "Adopts the Model City Tax Code and levies a transaction privilege tax on the gross income of businesses from certain activities, such as retail sales and construction."
      }
    ]
  },
  '29': {
    summary: "Chapter 29 contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including time limits and prohibiting parking in fire lanes."
      }
    ]
  },
  '30': {
    summary: "Chapter 30, Utilities, governs the city's water and wastewater utility systems, including rates and service rules.",
    purpose: "To provide for the safe and efficient operation of the city's public utilities and to establish fair rates for service.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to the city water and sewer systems and the conditions for service."
      }
    ]
  },
  '31': {
    summary: "Appendix A, Zoning, is the comprehensive ordinance that regulates land use and development throughout the city.",
    purpose: "To guide the physical development of the city in a manner that promotes public health, safety, and welfare by ensuring compatible land uses and orderly growth.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential, commercial, and industrial zoning districts and specifies the permitted uses, density, and development standards for each."
      },
      {
        title: "Sign Regulations",
        content: "Regulates the size, location, and type of signs allowed in different zoning districts."
      }
    ]
  }
};
