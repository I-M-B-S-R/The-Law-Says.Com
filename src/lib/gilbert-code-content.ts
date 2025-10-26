
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const GILBERT_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Gilbert Town Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
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
  '2': {
    summary: "Chapter 2, Administration, details the structure and organization of the town government. It defines the roles and responsibilities of the Town Council, Town Manager, and various town departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The Town operates under a Council-Manager form of government. The Town Council is the legislative body, while the Town Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Alcoholic Beverages, governs the sale and consumption of liquor within the Town of Gilbert. It primarily adopts state law but also includes local regulations.",
    purpose: "To regulate the sale and consumption of alcoholic beverages in a manner that protects public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The town adopts the comprehensive alcoholic beverage laws of the State of Arizona found in A.R.S. Title 4."
      },
      {
        title: "Local Licensing Review",
        content: "Applications for a state liquor license for a location within Gilbert are forwarded to the Town Council for a recommendation to the State Liquor Board."
      }
    ]
  },
  '10': {
    summary: "Chapter 10, Animals, establishes the rules for the keeping of animals within the town to protect public safety and ensure animal welfare.",
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
  '14': {
    summary: "Chapter 14, Buildings and Building Regulations, adopts the set of codes that govern all building and construction within the town.",
    purpose: "To safeguard public health and safety by establishing minimum standards for the design, construction, and maintenance of all buildings.",
    keyProvisions: [
      {
        title: "Adoption of Codes",
        content: "The town adopts specific editions of the International Building Code, Residential Code, and other related technical codes."
      },
      {
        title: "Building Permits",
        content: "A building permit is required for most new construction, additions, and significant alterations to ensure compliance with safety codes."
      }
    ]
  },
  '18': {
    summary: "Chapter 18, Businesses, governs the licensing and operation of various businesses within the town to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "All businesses operating in Gilbert must obtain a Town Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades."
      }
    ]
  },
  '22': {
    summary: "Chapter 22, Environment, contains regulations designed to protect the environment, focusing on issues like water quality and pollution control.",
    purpose: "To preserve and protect the town's natural resources and to prevent pollution of the air, water, and land.",
    keyProvisions: [
      {
        title: "Stormwater Management",
        content: "Requires measures to control stormwater runoff from development sites to prevent flooding and protect water quality."
      },
      {
        title: "Nuisance Abatement",
        content: "Prohibits conditions that are detrimental to public health or the environment, such as illegal dumping or unsanitary conditions."
      }
    ]
  },
  '26': {
    summary: "Chapter 26, Fire Prevention and Protection, adopts the International Fire Code to establish minimum safety standards to protect life and property from fire and explosion hazards.",
    purpose: "To prevent fires and protect public safety through the enforcement of modern fire prevention codes.",
    keyProvisions: [
      {
        title: "Adoption of Fire Code",
        content: "The town adopts a specific edition of the International Fire Code (IFC) with local amendments."
      },
      {
        title: "Fire Lanes",
        content: "Prohibits parking or otherwise obstructing designated fire lanes to ensure emergency vehicle access."
      }
    ]
  },
  '30': {
    summary: "Chapter 30, Floodplain Management, is designed to minimize flood risks. The ordinance restricts development in flood-prone areas and sets specific construction standards for any structures built in these zones.",
    purpose: "To protect human life and health, minimize property damage, and encourage the wise use of floodplains by managing development in areas identified as having a flood hazard.",
    keyProvisions: [
      {
        title: "Permit Requirement",
        content: "A floodplain use permit is required for all development, including construction, filling, and grading, within a designated flood hazard area."
      },
      {
        title: "Construction Standards",
        content: "Sets minimum construction standards for structures in floodplains, such as elevating the lowest floor of residential buildings above the base flood elevation."
      }
    ]
  },
  '34': {
    summary: "Chapter 34 contains the town's comprehensive Land Development Code, which combines zoning, design review, and other land use regulations into a single document.",
    purpose: "To guide the physical development of the town in a manner that promotes public health, safety, and welfare, and ensures high-quality, orderly growth.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes a variety of residential, commercial, and industrial zoning districts and specifies the permitted uses, density, and development standards for each."
      },
      {
        title: "Design Review",
        content: "Requires a design review process for many projects to ensure they meet the town's aesthetic standards and contribute positively to the community's character."
      }
    ]
  },
  '38': {
    summary: "Chapter 38, Law Enforcement, provides for the establishment and organization of the Gilbert Police Department.",
    purpose: "To establish a municipal police department to enforce town and state laws and to protect the lives and property of residents.",
    keyProvisions: [
      {
        title: "Department Created",
        content: "Formally establishes the Gilbert Police Department and the position of Chief of Police."
      },
      {
        title: "Powers and Duties",
        content: "Outlines the duties of police officers, including the enforcement of all town ordinances and state laws, crime prevention, and traffic control."
      }
    ]
  },
  '42': {
    summary: "Chapter 42, Offenses and Miscellaneous Provisions, defines various local-level public order offenses to maintain a peaceful and safe community.",
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
  '46': {
    summary: "Chapter 46 outlines the rules and regulations for the use of town parks and recreational facilities.",
    purpose: "To ensure that public parks are safe, clean, and available for the enjoyment of all residents.",
    keyProvisions: [
      {
        title: "Park Hours",
        content: "Establishes operating hours for town parks, making it unlawful to be in a park after it is closed."
      },
      {
        title: "Prohibited Activities",
        content: "Prohibits certain activities within parks, such as the consumption of alcohol without a special permit and the use of glass containers."
      }
    ]
  },
  '50': {
    summary: "Chapter 50, Solid Waste, regulates the storage, collection, and disposal of solid waste to ensure public health and sanitation.",
    purpose: "To protect public health and the environment by establishing standards for the safe and sanitary management of solid waste.",
    keyProvisions: [
      {
        title: "Mandatory Collection",
        content: "Requires all occupied residences and businesses to subscribe to the town's solid waste collection service."
      },
      {
        title: "Container Requirements",
        content: "Specifies that residents must use town-provided containers for trash and recycling and sets rules for their placement on collection days."
      }
    ]
  },
  '54': {
    summary: "Chapter 54 governs the use and maintenance of public streets, sidewalks, and other rights-of-way.",
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
  '58': {
    summary: "Chapter 58, Subdivisions, contains the detailed regulations for dividing land into smaller lots for development.",
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
  '62': {
    summary: "Chapter 62, Taxation, establishes the town's authority to levy taxes, including the Transaction Privilege (Sales) Tax.",
    purpose: "To provide a legal framework for the town to raise revenue to fund municipal services.",
    keyProvisions: [
      {
        title: "Transaction Privilege Tax",
        content: "Adopts the Model City Tax Code and levies a transaction privilege tax on the gross income of businesses from certain activities, such as retail sales and construction."
      }
    ]
  },
  '66': {
    summary: "Chapter 66 contains the town's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on town streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including prohibiting parking in fire lanes, and rules for parking in residential areas."
      }
    ]
  },
  '70': {
    summary: "Chapter 70, Utilities, governs the town's water, reclaimed water, and wastewater utility systems, including rates and service rules.",
    purpose: "To provide for the safe and efficient operation of the town's public utilities and to establish fair rates for service.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to the town water and sewer systems and the conditions for service."
      },
      {
        title: "Water Conservation",
        content: "Includes measures and potential restrictions to conserve water, a critical resource in the desert."
      }
    ]
  }
}

    