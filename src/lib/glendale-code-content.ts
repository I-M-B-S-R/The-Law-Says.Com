
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const GLENDALE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Glendale City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
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
        content: "The Council consists of a Mayor and six Councilmembers elected by district. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      }
    ]
  },
  '2.1': {
    summary: "Chapter 2.1, Human Relations, establishes the city's policy against discrimination and provides for a commission to promote equality and fair treatment for all residents.",
    purpose: "To promote mutual understanding and respect among all groups in the city and to discourage and prevent discrimination in employment, housing, and public accommodations.",
    keyProvisions: [
      {
        title: "Prohibition of Discrimination",
        content: "Prohibits discrimination based on race, color, religion, sex, age, disability, national origin, sexual orientation, gender identity, and other protected classes."
      },
      {
        title: "Human Relations Commission",
        content: "Creates a citizen commission to advise the City Council, conduct studies, and work to eliminate prejudice and discrimination."
      }
    ]
  },
  '5': {
    summary: "Chapter 5, Airport, contains regulations for the operation and use of the Glendale Municipal Airport.",
    purpose: "To ensure the safe and efficient operation of the airport and to regulate land use in its vicinity to protect public safety and airport functions.",
    keyProvisions: [
      {
        title: "Airport Zoning",
        content: "Establishes height restrictions and other land use controls in the vicinity of the airport to prevent obstructions to air navigation."
      },
      {
        title: "Operational Rules",
        content: "Sets rules for aircraft operation, fueling, and ground activities at the airport."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Alcoholic Beverages, governs the sale and consumption of liquor within the City of Glendale. It primarily adopts state law but also includes local regulations.",
    purpose: "To regulate the sale and consumption of alcoholic beverages in a manner that protects public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive alcoholic beverage laws of the State of Arizona found in A.R.S. Title 4."
      },
      {
        title: "Local Licensing Review",
        content: "Applications for a state liquor license for a location within Glendale are forwarded to the City Council for a recommendation to the State Liquor Board."
      }
    ]
  },
  '7': {
    summary: "Chapter 7, Animals and Fowl, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with Maricopa County and vaccinated against rabies."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs and other domestic animals from running 'at large.' Animals must be confined to the owner's property or restrained by a leash."
      }
    ]
  },
  '10': {
    summary: "Chapter 10, Buildings, adopts the set of codes that govern all building and construction within the city.",
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
  '11': {
    summary: "Chapter 11, Businesses, governs the licensing and operation of various businesses within the city to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "All businesses operating in Glendale must obtain a City Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades."
      }
    ]
  },
  '17': {
    summary: "Chapter 17, Fire Prevention and Protection, adopts the International Fire Code to establish minimum safety standards to protect life and property from fire and explosion hazards.",
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
  '20': {
    summary: "Chapter 20, Health and Sanitation, covers a wide range of rules related to public health and welfare, including nuisance abatement.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, stagnant water ('green pools'), and hazardous buildings to be public nuisances and provides a process for their abatement."
      }
    ]
  },
  '23.1': {
    summary: "Chapter 23.1 outlines the rules and regulations for the use of the city's public libraries.",
    purpose: "To ensure that public libraries are safe, welcoming, and accessible environments for all users.",
    keyProvisions: [
      {
        title: "Patron Conduct",
        content: "Establishes rules of conduct for library patrons, prohibiting disruptive behavior, theft, and damage to library property."
      },
      {
        title: "Borrowing Privileges",
        content: "Sets forth the requirements for obtaining a library card and the rules for borrowing and returning library materials."
      }
    ]
  },
  '24': {
    summary: "Chapter 24 regulates mobile homes and mobile home parks, establishing standards for their design, construction, and operation to ensure safe living conditions.",
    purpose: "To provide minimum standards for the development and operation of mobile home parks to protect the health and safety of residents.",
    keyProvisions: [
      {
        title: "Park Licensing and Permits",
        content: "Requires mobile home parks to be licensed and to obtain permits for construction and alteration."
      },
      {
        title: "Spacing Requirements",
        content: "Sets minimum distances between mobile homes to provide for fire safety and access."
      }
    ]
  },
  '25': {
    summary: "Chapter 25, Offenses, defines various local-level public order offenses to maintain a peaceful and safe community.",
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
  '26': {
    summary: "Chapter 26 outlines the rules and regulations for the use of city parks and recreational facilities.",
    purpose: "To ensure that public parks are safe, clean, and available for the enjoyment of all residents.",
    keyProvisions: [
      {
        title: "Park Hours",
        content: "Establishes operating hours for city parks, making it unlawful to be in a park after it is closed."
      },
      {
        title: "Prohibited Activities",
        content: "Prohibits certain activities within parks, such as the consumption of alcohol without a special permit and the use of glass containers."
      }
    ]
  },
  '29.1': {
    summary: "Chapter 29.1, Property Maintenance, establishes minimum standards for the maintenance of all residential and nonresidential properties throughout the city.",
    purpose: "To protect public health and safety, and to prevent blight and the deterioration of neighborhoods by requiring that properties be maintained in a clean, safe, and sanitary condition.",
    keyProvisions: [
      {
        title: "Exterior Maintenance",
        content: "Requires that the exterior of all structures be maintained in good repair and free from hazards, including broken windows, peeling paint, and deteriorating roofs."
      },
      {
        title: "Yard Maintenance",
        content: "Requires that yards be kept free of weeds, dead vegetation, and the accumulation of trash and debris. Landscaping must be maintained."
      }
    ]
  },
  '31': {
    summary: "Chapter 31, Sewers, governs the city's public sanitary sewer system.",
    purpose: "To provide for the safe and efficient operation of the city's wastewater collection and treatment system and to protect public health and the environment.",
    keyProvisions: [
      {
        title: "Connection Required",
        content: "Requires properties within a certain distance of a public sewer main to connect to the system."
      },
      {
        title: "Prohibited Discharges",
        content: "Prohibits the discharge of certain substances into the sewer system that could cause damage, create hazards, or interfere with the treatment process, such as grease, oil, and toxic chemicals."
      }
    ]
  },
  '32': {
    summary: "Chapter 32, Solid Waste, regulates the storage, collection, and disposal of solid waste to ensure public health and sanitation.",
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
  '34': {
    summary: "Chapter 34 governs the use and maintenance of public streets, sidewalks, and other rights-of-way.",
    purpose: "To regulate the use of public rights-of-way to ensure they remain safe and accessible for public travel.",
    keyProvisions: [
      {
        title: "Obstructions",
        content: "Makes it unlawful to place any obstruction on a public sidewalk or street without a permit."
      },
      {
        title: "Encroachment Permits",
        content: "Requires a permit for any private work conducted in the public right-of-way, such as driveway construction or utility repairs."
      }
    ]
  },
  '35': {
    summary: "Chapter 35, Subdivisions, contains the detailed regulations for dividing land into smaller lots for development.",
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
  '36': {
    summary: "Chapter 36, Taxation, establishes the city's authority to levy taxes, including the Transaction Privilege (Sales) Tax.",
    purpose: "To provide a legal framework for the city to raise revenue to fund municipal services.",
    keyProvisions: [
      {
        title: "Transaction Privilege Tax",
        content: "Adopts the Model City Tax Code and levies a transaction privilege tax on the gross income of businesses from certain activities, such as retail sales and construction."
      }
    ]
  },
  '37': {
    summary: "Chapter 37, Telecommunications, regulates telecommunications companies that use public rights-of-way to place their infrastructure.",
    purpose: "To manage the use of public rights-of-way by telecommunications providers and to receive fair compensation for such use.",
    keyProvisions: [
      {
        title: "License Requirement",
        content: "Requires any telecommunications company wishing to place facilities in the public right-of-way to obtain a license from the city."
      }
    ]
  },
  '38': {
    summary: "Chapter 38 contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference, making it enforceable by Glendale Police."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including rules for time-limited parking, prohibiting parking in fire lanes, and regulations for parking in residential areas."
      }
    ]
  },
  '40': {
    summary: "Chapter 40, the Zoning Ordinance, is the comprehensive ordinance that regulates land use and development throughout the city.",
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
