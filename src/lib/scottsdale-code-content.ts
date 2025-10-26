
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const SCOTTSDALE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Scottsdale City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
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
    summary: "Chapter 4, Alcoholic Beverages, governs the sale and consumption of liquor within the City of Scottsdale. It primarily adopts state law but also includes local regulations.",
    purpose: "To regulate the sale and consumption of alcoholic beverages in a manner that protects public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive alcoholic beverage laws of the State of Arizona found in A.R.S. Title 4."
      },
      {
        title: "Local Licensing Review",
        content: "Applications for a state liquor license for a location within Scottsdale are forwarded to the City Council for a recommendation to the State Liquor Board."
      }
    ]
  },
  '5': {
    summary: "Chapter 5, Amusements, contains regulations for various places of public amusement and entertainment to ensure they operate safely and do not become a public nuisance.",
    purpose: "To provide standards for public amusement establishments to protect public safety and prevent disturbances.",
    keyProvisions: [
      {
        title: "Permit Requirements",
        content: "Requires permits for certain types of amusement establishments to ensure they meet safety and zoning requirements."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Animals, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with Maricopa County and vaccinated against rabies, which is enforceable within city limits."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs from running 'at large.' Dogs must be confined to the owner's property or restrained by a leash not to exceed six feet in length."
      }
    ]
  },
  '7': {
    summary: "Chapter 7, Aviation, contains regulations for the operation and use of Scottsdale Airport.",
    purpose: "To ensure the safe and efficient operation of the airport and to regulate land use in its vicinity to protect public safety and airport functions.",
    keyProvisions: [
      {
        title: "Airport Zoning",
        content: "Establishes height restrictions and other land use controls in the vicinity of the airport to prevent obstructions to air navigation."
      },
      {
        title: "Noise Abatement",
        content: "Includes procedures and policies aimed at reducing aircraft noise impacts on surrounding neighborhoods."
      }
    ]
  },
  '8': {
    summary: "Chapter 8, Buildings, adopts the set of codes that govern all building and construction within the city.",
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
    summary: "Chapter 10, Elections, provides the specific rules and procedures for conducting municipal elections in Scottsdale.",
    purpose: "To ensure fair, impartial, and transparent elections for Mayor and City Council.",
    keyProvisions: [
      {
        title: "Campaign Finance",
        content: "Establishes local campaign contribution limits and financial disclosure requirements for candidates running for city office."
      }
    ]
  },
  '11': {
    summary: "Chapter 11, Environment, contains regulations designed to protect the local environment, including water conservation and preservation of native plants.",
    purpose: "To protect and enhance the natural environment of Scottsdale, including its water resources and native Sonoran Desert vegetation.",
    keyProvisions: [
      {
        title: "Water Conservation",
        content: "Includes measures and potential restrictions to conserve water, a critical resource in the desert."
      },
      {
        title: "Native Plant Protection",
        content: "Requires the preservation or salvage of protected native plants during development and construction."
      }
    ]
  },
  '13': {
    summary: "Chapter 13, Finance, governs the city's fiscal procedures. It covers the budget process, purchasing, and the collection of taxes.",
    purpose: "To ensure sound financial management, accountability, and transparency in the use of public funds.",
    keyProvisions: [
      {
        title: "Budget Process",
        content: "Outlines the annual process for preparing, holding public hearings on, and adopting the city budget."
      },
      {
        title: "Transaction Privilege Tax",
        content: "The city levies a transaction privilege tax on the gross income of businesses from certain activities. This chapter provides the authority and administrative rules for this tax."
      }
    ]
  },
  '14': {
    summary: "Chapter 14, Fire Prevention, adopts the International Fire Code to establish minimum safety standards to protect life and property from fire and explosion hazards.",
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
  '16': {
    summary: "Chapter 16, Licenses and Miscellaneous Business Regulations, governs the licensing and operation of various businesses within the city.",
    purpose: "To provide for the regulation of businesses and commercial activities to protect public welfare and consumer rights.",
    keyProvisions: [
      {
        title: "Business License",
        content: "Requires most businesses operating in Scottsdale to obtain a City Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades."
      }
    ]
  },
  '17': {
    summary: "Chapter 17 contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference, making it enforceable by Scottsdale Police."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including rules for time-limited parking in Old Town Scottsdale and prohibiting parking in fire lanes."
      }
    ]
  },
  '18': {
    summary: "Chapter 18 outlines the rules and regulations for the use of city parks and recreational facilities, including the extensive McDowell Sonoran Preserve.",
    purpose: "To ensure that public parks and natural preserves are safe, clean, and available for the enjoyment of all residents, while protecting natural resources.",
    keyProvisions: [
      {
        title: "Park Hours",
        content: "Establishes operating hours for city parks and trails, making it unlawful to be in these areas after closing."
      },
      {
        title: "Prohibited Activities",
        content: "Prohibits certain activities within parks, such as the consumption of alcohol without a special permit and the use of glass containers."
      }
    ]
  },
  '19': {
    summary: "Chapter 19, Offenses and Miscellaneous Provisions, defines various local-level public order offenses to maintain a peaceful and safe community.",
    purpose: "To prohibit conduct that is disruptive to public peace, safety, and order and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Nuisances",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and excessive noise to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Curfew for Minors",
        content: "Establishes a curfew, making it unlawful for minors to be in public places during specified late-night hours without a valid reason."
      }
    ]
  },
  '20': {
    summary: "Chapter 20, Property, establishes minimum standards for the maintenance of all residential and nonresidential properties throughout the city.",
    purpose: "To protect public health and safety, and to prevent blight and the deterioration of neighborhoods by requiring that properties be maintained in a clean, safe, and sanitary condition.",
    keyProvisions: [
      {
        title: "Exterior Maintenance",
        content: "Requires that the exterior of all structures be maintained in good repair and free from hazards."
      },
      {
        title: "Yard Maintenance",
        content: "Requires that yards be kept free of weeds, dead vegetation, and the accumulation of trash and debris."
      }
    ]
  },
  '23': {
    summary: "Chapter 23 governs the use and maintenance of public streets, sidewalks, and other rights-of-way.",
    purpose: "To regulate the use of public rights-of-way to ensure they remain safe and accessible for public travel.",
    keyProvisions: [
      {
        title: "Obstructions",
        content: "Makes it unlawful to place any obstruction on a public sidewalk or street without a permit."
      }
    ]
  },
  '24': {
    summary: "Chapter 24, Subdivisions, contains the detailed regulations for dividing land into smaller lots for development.",
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
    summary: "Chapter 28, Telecommunications, regulates telecommunications companies that use public rights-of-way to place their infrastructure.",
    purpose: "To manage the use of public rights-of-way by telecommunications providers and to receive fair compensation for such use.",
    keyProvisions: [
      {
        title: "License Requirement",
        content: "Requires any telecommunications company wishing to place facilities in the public right-of-way to obtain a license from the city."
      }
    ]
  },
  '49': {
    summary: "Chapter 49, Utilities, governs the city's water and wastewater utility systems, including rates and service rules.",
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
