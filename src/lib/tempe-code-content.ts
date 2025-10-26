
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const TEMPE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Tempe City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
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
    summary: "Chapter 4, Airport, contains regulations for the operation and use of city-owned aviation facilities, most notably Phoenix Sky Harbor International Airport, which is owned by the City of Phoenix but has property and impacts within Tempe.",
    purpose: "To ensure the safe and efficient operation of aviation facilities and to regulate land use in their vicinity to protect public safety and airport functions.",
    keyProvisions: [
      {
        title: "Airport Zoning",
        content: "Establishes height restrictions and other land use controls in the vicinity of the airport to prevent obstructions to air navigation."
      },
      {
        title: "Noise Mitigation",
        content: "Includes policies and programs aimed at reducing aircraft noise impacts on surrounding neighborhoods."
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
        title: "Leash Law",
        content: "Prohibits dogs from being 'at large.' Dogs must be confined to the owner's property or restrained by a leash."
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
    summary: "Chapter 10, Community Development, contains regulations related to housing and community revitalization efforts.",
    purpose: "To promote safe and decent housing, prevent blight, and support community development and revitalization projects.",
    keyProvisions: [
      {
        title: "Property Maintenance",
        content: "Establishes minimum standards for the maintenance of all residential and nonresidential properties to prevent blight and unsafe conditions."
      }
    ]
  },
  '11': {
    summary: "Chapter 11, Contracts and Purchasing, governs the city's procurement procedures.",
    purpose: "To ensure fairness, transparency, and fiscal responsibility in the city's purchasing and contracting processes.",
    keyProvisions: [
      {
        title: "Competitive Bidding",
        content: "Requires competitive bidding for most public contracts over a certain dollar amount to ensure the city obtains goods and services at the best possible price."
      }
    ]
  },
  '12': {
    summary: "Chapter 12, Courts, establishes the Tempe Municipal Court as a limited jurisdiction court and defines its powers and procedures.",
    purpose: "To provide for the administration of justice for violations of city ordinances and state laws that occur within city limits.",
    keyProvisions: [
      {
        title: "Establishment and Jurisdiction",
        content: "Formally establishes the municipal court and gives it jurisdiction over all violations of the city code and all misdemeanor offenses committed within the city's boundaries."
      }
    ]
  },
  '13': {
    summary: "Chapter 13, Elections, provides the specific rules and procedures for conducting municipal elections in Tempe.",
    purpose: "To ensure fair, impartial, and transparent elections for Mayor and City Council.",
    keyProvisions: [
      {
        title: "Campaign Finance",
        content: "Establishes local campaign contribution limits and financial disclosure requirements for candidates running for city office."
      }
    ]
  },
  '14': {
    summary: "Chapter 14, Finance, governs the city's fiscal procedures. It covers the budget process and the collection of taxes.",
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
  '15': {
    summary: "Chapter 15, Fire Prevention and Protection, adopts the International Fire Code to establish minimum safety standards to protect life and property from fire and explosion hazards.",
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
    summary: "Chapter 16, Human Relations, establishes the city's policy against discrimination and provides for a commission to promote equality and fair treatment for all residents.",
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
  '18': {
    summary: "Chapter 18 outlines the rules and regulations for the use of the city's public libraries and museums.",
    purpose: "To ensure that public libraries and museums are safe, welcoming, and accessible environments for all users.",
    keyProvisions: [
      {
        title: "Patron Conduct",
        content: "Establishes rules of conduct for patrons, prohibiting disruptive behavior, theft, and damage to property."
      }
    ]
  },
  '19': {
    summary: "Chapter 19 governs the licensing and operation of various businesses within the city.",
    purpose: "To provide for the regulation of businesses and commercial activities to protect public welfare and consumer rights.",
    keyProvisions: [
      {
        title: "Business License",
        content: "Requires most businesses operating in Tempe to obtain a City Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades."
      }
    ]
  },
  '20': {
    summary: "Chapter 20 regulates mobile homes and mobile home parks, establishing standards for their design, construction, and operation to ensure safe living conditions.",
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
  '21': {
    summary: "Chapter 21, Neighborhood Services, contains nuisance abatement regulations to protect the health, safety, and quality of life for residents.",
    purpose: "To protect and preserve neighborhoods from blight and deterioration by defining, prohibiting, and providing for the abatement of public nuisances.",
    keyProvisions: [
      {
        title: "Nuisance Defined",
        content: "Declares a wide range of conditions to be public nuisances, including overgrown weeds, accumulation of trash, and stagnant water ('green pools')."
      },
      {
        title: "Abatement Procedure",
        content: "Provides a process for the city to notify property owners of a nuisance and require its correction. If the owner fails to comply, the city may abate the nuisance and place a lien on the property for the costs."
      }
    ]
  },
  '22': {
    summary: "Chapter 22, Offenses, defines various local-level public order offenses to maintain a peaceful and safe community.",
    purpose: "To prohibit conduct that is disruptive to public peace, safety, and order and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Noise",
        content: "Prohibits loud and unreasonable noise that disturbs the peace of a neighborhood, with specific restrictions on construction hours and amplified sound."
      },
      {
        title: "Curfew for Minors",
        content: "Establishes a curfew, making it unlawful for minors to be in public places during specified late-night hours without a valid reason."
      }
    ]
  },
  '23': {
    summary: "Chapter 23 outlines the rules and regulations for the use of city parks and recreational facilities, including Tempe Town Lake.",
    purpose: "To ensure that public parks and recreational areas are safe, clean, and available for the enjoyment of all residents.",
    keyProvisions: [
      {
        title: "Park Hours",
        content: "Establishes operating hours for city parks and trails."
      },
      {
        title: "Tempe Town Lake",
        content: "Includes specific rules for boating, fishing, and other recreational activities on and around Tempe Town Lake."
      }
    ]
  },
  '26': {
    summary: "Chapter 26, Police, provides for the establishment and organization of the Tempe Police Department.",
    purpose: "To establish a municipal police department to enforce city and state laws and to protect the lives and property of residents.",
    keyProvisions: [
      {
        title: "Police Department Created",
        content: "Formally establishes the Tempe Police Department and the position of Chief of Police."
      }
    ]
  },
  '29': {
    summary: "Chapter 29, Solid Waste, regulates the storage, collection, and disposal of trash and recycling to ensure public health and sanitation.",
    purpose: "To protect public health and the environment by establishing standards for the safe and sanitary management of solid waste.",
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
  '31': {
    summary: "Chapter 31 governs the use and maintenance of public streets, sidewalks, and other rights-of-way.",
    purpose: "To regulate the use of public rights-of-way to ensure they remain safe and accessible for public travel.",
    keyProvisions: [
      {
        title: "Obstructions",
        content: "Makes it unlawful to place any obstruction on a public sidewalk or street without a permit."
      }
    ]
  },
  '33': {
    summary: "Chapter 33 contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including rules for time-limited parking, particularly in the downtown and university areas."
      }
    ]
  },
  '34': {
    summary: "Chapter 34, Utilities, governs the city's water and wastewater utility systems, including rates and service rules.",
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
