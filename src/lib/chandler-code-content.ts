
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const CHANDLER_CITY_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Chandler City Code establishes the foundational legal framework for the entire code. It sets forth rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the City Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the City Code where a more specific penalty is not stated, making all parts of the code enforceable."
      },
      {
        title: "Severability Clause",
        content: "A standard clause stating that if any part of the City Code is declared invalid by a court, the remaining portions will remain in effect."
      }
    ]
  },
  '2': {
    summary: "Chapter 2, Administration, details the structure and organization of Chandler's city government. It defines the roles and responsibilities of the City Council, the City Manager, and various city departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The City operates under a Council-Manager form of government. The City Council is the legislative body, setting policy and approving the budget, while the City Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "City Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of numerous citizen advisory bodies to provide recommendations and public input to the City Council on specific issues like planning, parks, and airport operations."
      }
    ]
  },
  '4': {
    summary: "Chapter 4, Alcoholic Beverages, governs the sale and consumption of liquor within the City of Chandler. It primarily adopts state law but also includes local regulations regarding licensing and public consumption.",
    purpose: "To regulate the sale and consumption of alcoholic beverages in a manner that protects public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive alcoholic beverage laws of the State of Arizona found in A.R.S. Title 4, making them fully enforceable within city limits."
      },
      {
        title: "Public Consumption",
        content: "It is unlawful to consume spirituous liquor in any public place, park, or thoroughfare within the city, except in areas specifically licensed for such activity."
      },
      {
        title: "Local Licensing Review",
        content: "Applications for a state liquor license for a location within Chandler are forwarded to the City Council for a recommendation to the State Liquor Board."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Amusements, contains regulations for various places of public amusement and entertainment to ensure they operate safely and do not become a public nuisance.",
    purpose: "To provide standards for public amusement establishments to protect public safety and prevent disturbances.",
    keyProvisions: [
      {
        title: "Permit Requirements",
        content: "Requires permits for certain types of amusement establishments, such as arcades and dance halls, to ensure they meet safety and zoning requirements."
      },
      {
        title: "Hours of Operation",
        content: "May set limits on the hours of operation for certain establishments to mitigate noise and other impacts on surrounding neighborhoods."
      }
    ]
  },
  '7': {
    summary: "Chapter 7, Animals, establishes the rules for the keeping of animals within the city to protect public health and safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs over four months old to be vaccinated against rabies and licensed with the county."
      },
      {
        title: "Leash Law",
        content: "Prohibits dogs from running 'at large.' Dogs must be confined to the owner's property or restrained by a leash not to exceed six feet in length."
      },
      {
        title: "Nuisance Animals",
        content: "It is unlawful for an owner to permit an animal to become a nuisance by making excessive noise, damaging property, or creating unsanitary conditions."
      }
    ]
  },
  '8': {
    summary: "Chapter 8, Building Regulations, adopts the set of international and national codes that govern all construction within Chandler to ensure buildings are safe.",
    purpose: "To safeguard public health, safety, and general welfare by establishing minimum standards for the design, construction, and maintenance of all buildings.",
    keyProvisions: [
      {
        title: "Adopted Codes",
        content: "The city adopts specific editions of the International Building Code (IBC), International Residential Code (IRC), and National Electrical Code (NEC)."
      },
      {
        title: "Permit Requirement",
        content: "A building permit is required for most new construction, additions, and alterations to ensure compliance with safety codes."
      },
      {
        title: "Inspections",
        content: "Mandatory inspections are required at various stages of construction to verify that work is being done correctly and safely."
      }
    ]
  },
  '10': {
    summary: "Chapter 10, Offenses-Miscellaneous, defines a range of public order offenses to maintain a peaceful and safe community.",
    purpose: "To prohibit conduct that is disruptive to public peace, safety, and order and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      },
      {
        title: "Curfew for Minors",
        content: "Establishes a curfew, making it unlawful for minors to be in public places during specified late-night hours without a valid reason."
      },
      {
        title: "Public Urination",
        content: "Makes it unlawful to urinate or defecate in any public place other than a designated restroom."
      }
    ]
  },
  '11': {
    summary: "Chapter 11, Fire Prevention, adopts the International Fire Code to establish minimum safety standards to protect life and property from the hazards of fire and explosion.",
    purpose: "To prevent fires and protect public safety through the enforcement of modern fire prevention codes.",
    keyProvisions: [
      {
        title: "Adoption of Fire Code",
        content: "The city adopts a specific edition of the International Fire Code (IFC) with local amendments."
      },
      {
        title: "Fire Inspections",
        content: "Authorizes the Fire Marshal to conduct inspections of commercial and public buildings to ensure compliance with the fire code."
      },
      {
        title: "Fire Lanes",
        content: "Prohibits parking or otherwise obstructing designated fire lanes to ensure emergency vehicle access."
      }
    ]
  },
  '16': {
    summary: "Chapter 16, Health and Sanitation, provides regulations to protect public health, focusing on issues like solid waste disposal and nuisance abatement.",
    purpose: "To prevent and control conditions that could be detrimental to public health and to maintain a clean and sanitary community.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions such as overgrown weeds, accumulation of trash, stagnant water ('green pools'), and other unsanitary conditions to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Solid Waste",
        content: "Regulates the storage and disposal of garbage and refuse, requiring proper containers and mandating collection to prevent health hazards."
      }
    ]
  },
  '25': {
    summary: "Chapter 25, Human Relations, establishes the city's policy against discrimination and provides for a Human Relations Commission to promote equality and understanding.",
    purpose: "To promote mutual understanding and respect among all groups in the city and to discourage and prevent discrimination.",
    keyProvisions: [
      {
        title: "Prohibition of Discrimination",
        content: "Prohibits discrimination in employment, housing, and public accommodations based on race, color, religion, sex, age, disability, national origin, and other protected classes."
      },
      {
        title: "Human Relations Commission",
        content: "Creates a citizen commission to advise the City Council, conduct studies, and work to eliminate prejudice and discrimination."
      }
    ]
  },
  '30': {
    summary: "Chapter 30 governs the licensing of various specific businesses and activities not covered elsewhere in the code, such as peddlers and special events.",
    purpose: "To provide for the regulation of certain businesses and activities to protect consumer welfare and public safety.",
    keyProvisions: [
      {
        title: "Business License Requirement",
        content: "Requires all persons conducting business within the city to obtain a City Business License."
      },
      {
        title: "Peddlers and Solicitors",
        content: "Sets rules for door-to-door sales and solicitation, including registration requirements and limitations on hours of operation."
      }
    ]
  },
  '32': {
    summary: "Chapter 32 outlines the rules and regulations for the use of city parks and recreational facilities.",
    purpose: "To ensure that public parks are safe, clean, and available for the enjoyment of all residents.",
    keyProvisions: [
      {
        title: "Park Hours",
        content: "Establishes operating hours for city parks, making it unlawful to be in a park after it is closed."
      },
      {
        title: "Prohibited Activities",
        content: "Prohibits certain activities within parks, such as the consumption of alcohol without a special permit, use of glass containers, and operating motor vehicles off designated paths."
      },
      {
        title: "Animal Regulations",
        content: "Requires that all pets within a park be on a leash and that owners clean up their pet's waste."
      }
    ]
  },
  '35': {
    summary: "Chapter 35 is the city's comprehensive Zoning Code, which is the primary tool for regulating land use and development.",
    purpose: "To guide the physical development of the city in a manner that promotes public health, safety, and welfare by ensuring compatible land uses and orderly growth.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential, commercial, and industrial zoning districts and specifies the permitted uses and development standards (setbacks, height, etc.) for each."
      },
      {
        title: "Site Plan Review",
        content: "Requires a detailed site plan review for most new non-residential and multi-family developments to ensure compliance with city standards."
      },
      {
        title: "Sign Regulations",
        content: "Contains detailed regulations for the size, location, and type of signs allowed in different zoning districts."
      }
    ]
  },
  '44': {
    summary: "Chapter 44 governs the use and maintenance of public streets, sidewalks, and other rights-of-way.",
    purpose: "To regulate the use of public rights-of-way to ensure they remain safe and accessible for public travel.",
    keyProvisions: [
      {
        title: "Obstructions",
        content: "Makes it unlawful to place any obstruction, such as merchandise or signs, on a public sidewalk or street without a permit."
      },
      {
        title: "Encroachment Permits",
        content: "Requires a permit for any private work conducted in the public right-of-way, such as driveway construction or utility repairs."
      }
    ]
  },
  '49': {
    summary: "Chapter 49 contains the detailed regulations for dividing land into smaller lots for development (subdividing).",
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
  '51': {
    summary: "Chapter 51, Taxation, establishes the city's authority to levy taxes, including the Transaction Privilege (Sales) Tax.",
    purpose: "To provide a legal framework for the city to raise revenue to fund municipal services.",
    keyProvisions: [
      {
        title: "Transaction Privilege Tax",
        content: "Adopts the Model City Tax Code and levies a transaction privilege tax on the gross income of businesses from certain activities, such as retail sales and construction."
      }
    ]
  },
  '52': {
    summary: "Chapter 52, Traffic, adopts the state traffic code and contains additional local regulations related to traffic and parking.",
    purpose: "To provide for the safe and efficient movement of traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference, making it enforceable by Chandler Police."
      },
      {
        title: "Parking Regulations",
        content: "Establishes local parking regulations, such as prohibiting parking in fire lanes, and sets rules for parking in residential areas."
      }
    ]
  },
  '53': {
    summary: "Chapter 53, Utilities, governs the city's water, wastewater, and solid waste utility systems, including rates and service rules.",
    purpose: "To provide for the safe and efficient operation of the city's public utilities and to establish fair rates for service.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to the city water and sewer systems and the conditions for service."
      },
      {
        title: "Water Conservation",
        content: "Includes measures and potential restrictions to conserve water, a critical resource in the desert."
      }
    ]
  }
};
