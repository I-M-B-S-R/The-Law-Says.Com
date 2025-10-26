
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const TUCSON_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Tucson City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
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
    summary: "Chapter 2, Administration, details the structure and organization of the city government. It defines the roles and responsibilities of the Mayor and Council, the City Manager, and various city departments.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The City operates under a Council-Manager form of government. The Mayor and Council is the legislative body, while the City Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "Mayor and Council",
        content: "The Council consists of a Mayor elected citywide and six Councilmembers elected by ward. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      }
    ]
  },
  '4': {
    summary: "Chapter 4, Animals and Fowl, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with Pima County and vaccinated against rabies, which is enforceable within city limits."
      },
      {
        title: "Leash Law",
        content: "Prohibits dogs from being 'at large.' Dogs must be confined to the owner's property or restrained by a leash not to exceed six feet in length."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Building and Construction, adopts the set of codes that govern all building and construction within the city.",
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
  '7': {
    summary: "Chapter 7 governs the licensing and operation of various businesses within the city.",
    purpose: "To provide for the regulation of businesses to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "Requires most businesses operating in Tucson to obtain a City Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades."
      }
    ]
  },
  '8': {
    summary: "Chapter 8, Civil Rights, establishes the city's policy against discrimination and provides for a commission to promote equality and fair treatment for all residents.",
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
  '10': {
    summary: "Chapter 10, Courts, establishes the Tucson City Court as a limited jurisdiction court and defines its powers and procedures.",
    purpose: "To provide for the administration of justice for violations of city ordinances and state laws that occur within city limits.",
    keyProvisions: [
      {
        title: "Establishment and Jurisdiction",
        content: "Formally establishes the city court and gives it jurisdiction over all violations of the city code and all misdemeanor offenses committed within the city's boundaries."
      }
    ]
  },
  '11': {
    summary: "Chapter 11, Elections, provides the specific rules and procedures for conducting municipal elections in Tucson.",
    purpose: "To ensure fair, impartial, and transparent elections for Mayor and Council.",
    keyProvisions: [
      {
        title: "Campaign Finance",
        content: "Establishes local campaign contribution limits and financial disclosure requirements for candidates running for city office."
      }
    ]
  },
  '12': {
    summary: "Chapter 12, Environment, contains regulations designed to protect the local environment, including water conservation and preservation of native plants.",
    purpose: "To protect and enhance the natural environment of Tucson, including its water resources and native Sonoran Desert vegetation.",
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
    summary: "Chapter 13, Finance, governs the city's fiscal procedures. It covers the budget process and the collection of taxes.",
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
  '16': {
    summary: "Chapter 16, Health and Sanitation, covers a wide range of rules related to public health and welfare, including nuisance abatement and food safety.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances or health hazards.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and stagnant water ('green pools') to be public nuisances and provides a process for their abatement."
      }
    ]
  },
  '17': {
    summary: "Chapter 17 outlines the rules and regulations for the use of the city's public libraries.",
    purpose: "To ensure that public libraries are safe, welcoming, and accessible environments for all users.",
    keyProvisions: [
      {
        title: "Patron Conduct",
        content: "Establishes rules of conduct for library patrons, prohibiting disruptive behavior, theft, and damage to library property."
      }
    ]
  },
  '19': {
    summary: "Chapter 19, Offenses, defines various local-level public order offenses to maintain a peaceful and safe community.",
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
  '20': {
    summary: "Chapter 20 outlines the rules and regulations for the use of city parks and recreational facilities.",
    purpose: "To ensure that public parks and natural preserves are safe, clean, and available for the enjoyment of all residents.",
    keyProvisions: [
      {
        title: "Park Hours",
        content: "Establishes operating hours for city parks and trails."
      },
      {
        title: "Prohibited Activities",
        content: "Prohibits certain activities within parks, such as the consumption of alcohol without a special permit and the use of glass containers."
      }
    ]
  },
  '21': {
    summary: "Chapter 21, Police, provides for the establishment and organization of the Tucson Police Department.",
    purpose: "To establish a municipal police department to enforce city and state laws and to protect the lives and property of residents.",
    keyProvisions: [
      {
        title: "Police Department Created",
        content: "Formally establishes the Tucson Police Department and the position of Chief of Police."
      }
    ]
  },
  '22': {
    summary: "Chapter 22, Property Maintenance, establishes minimum standards for the maintenance of all residential and nonresidential properties throughout the city.",
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
  '24': {
    summary: "Chapter 24 governs the use and maintenance of public streets, sidewalks, and other rights-of-way.",
    purpose: "To regulate the use of public rights-of-way to ensure they remain safe and accessible for public travel.",
    keyProvisions: [
      {
        title: "Obstructions",
        content: "Makes it unlawful to place any obstruction on a public sidewalk or street without a permit."
      }
    ]
  },
  '25': {
    summary: "Chapter 25, Telecommunications, regulates telecommunications companies that use public rights-of-way to place their infrastructure.",
    purpose: "To manage the use of public rights-of-way by telecommunications providers and to receive fair compensation for such use.",
    keyProvisions: [
      {
        title: "License Requirement",
        content: "Requires any telecommunications company wishing to place facilities in the public right-of-way to obtain a license from the city."
      }
    ]
  },
  '26': {
    summary: "Chapter 26 contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
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
  '27': {
    summary: "Chapter 27, Utilities, governs the city's water and wastewater utility systems, including rates and service rules.",
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
  },
  '29': {
    summary: "Chapter 29, the Unified Development Code (UDC), is the city's comprehensive ordinance for land use, combining zoning and subdivision regulations into a single document.",
    purpose: "To guide the physical development of the city in a manner that promotes public health, safety, and welfare, ensures orderly growth, and protects the city's unique character and environment.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential, commercial, and industrial zoning districts and specifies the permitted uses, density, and development standards for each."
      },
      {
        title: "Subdivision Regulations",
        content: "Contains the rules and procedures for dividing land into smaller parcels, ensuring new developments are properly designed and served by public infrastructure."
      }
    ]
  }
};
