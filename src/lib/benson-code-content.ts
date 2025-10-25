
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const BENSON_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title 1 of the Benson City Code establishes the foundational legal framework for the entire code. It sets forth rules for interpretation, defines common terms, and specifies the general penalty for violations of any ordinance where a specific penalty is not provided.",
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
    summary: "Title 2, Government and Administration, details the structure and organization of Benson's city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The City operates under a Council-Manager form of government. The City Council is the legislative body, setting policy and approving the budget, while the City Manager, appointed by the Council, serves as the chief executive officer responsible for daily operations."
      },
      {
        title: "City Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory bodies to provide recommendations and public input to the City Council on specific issues like planning and zoning."
      }
    ]
  },
  '3': {
    summary: "Title 3, Finance and Taxation, establishes the fiscal procedures for the city. It governs budgeting, purchasing, and the collection of taxes, including the local Transaction Privilege (Sales) Tax.",
    purpose: "To ensure sound financial management, accountability, and transparency in the use of public funds.",
    keyProvisions: [
      {
        title: "Budget Process",
        content: "Outlines the annual process for preparing, holding public hearings on, and adopting the city budget."
      },
      {
        title: "Transaction Privilege Tax",
        content: "The city levies a transaction privilege tax on the gross income of businesses from certain activities. This chapter adopts the Model City Tax Code and sets the local tax rates."
      },
      {
        title: "Purchasing",
        content: "Establishes a centralized purchasing system and requires competitive bidding for major purchases to ensure the city gets the best value for public money."
      }
    ]
  },
  '4': {
    summary: "Title 4 provides for the licensing and regulation of various businesses and occupations within the city to ensure they operate in a manner that is safe and fair to the public.",
    purpose: "To protect public welfare by regulating certain businesses and activities that have the potential to impact community health and safety.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating within the city to obtain a City Business License and to keep it in good standing."
      },
      {
        title: "Liquor Licenses",
        content: "Regulates the sale of alcoholic beverages, establishing procedures for the local review of state liquor license applications."
      },
      {
        title: "Peddlers and Solicitors",
        content: "Sets rules for door-to-door sales and solicitation, including registration requirements and limitations on hours of operation to protect residents' privacy and safety."
      }
    ]
  },
  '5': {
    summary: "Title 5, Health and Sanitation, contains regulations designed to protect the public health of the community. It covers topics such as solid waste disposal, nuisance abatement, and food handling.",
    purpose: "To prevent and control conditions that could be detrimental to public health and to maintain a clean and sanitary community.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions such as overgrown weeds, accumulation of trash, stagnant water, and other unsanitary conditions to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Solid Waste",
        content: "Regulates the storage and disposal of garbage and refuse, requiring proper containers and mandating collection to prevent health hazards."
      },
      {
        title: "Food Establishments",
        content: "Adopts county health regulations for food establishments, requiring permits and inspections to ensure food is handled and prepared safely."
      }
    ]
  },
  '6': {
    summary: "Title 6, Animals, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with the county and vaccinated against rabies."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs and other domestic animals from running 'at large.' Animals must be confined to the owner's property or restrained by a leash."
      },
      {
        title: "Nuisances",
        content: "Declares it a nuisance for an animal to bark excessively, damage property, or threaten the safety of people or other animals."
      }
    ]
  },
  '7': {
    summary: "Title 7, Public Peace, Morals and Welfare, defines a range of public order offenses to maintain a peaceful and safe community.",
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
        title: "Public Consumption of Alcohol",
        content: "Makes it unlawful to consume alcoholic beverages in public places, such as parks and streets, unless specifically permitted for a special event."
      }
    ]
  },
  '8': {
    summary: "Title 8 governs the use and maintenance of public ways and property, including streets, sidewalks, and parks.",
    purpose: "To ensure that public property and rights-of-way are kept safe, clean, and accessible for public use.",
    keyProvisions: [
      {
        title: "Street and Sidewalk Obstructions",
        content: "Makes it unlawful to place obstructions on any public street or sidewalk without a permit. Property owners are responsible for maintaining adjacent sidewalks."
      },
      {
        title: "Park Regulations",
        content: "Sets rules for the use of city parks, including park hours, prohibited activities (like alcohol consumption), and rules for reserving facilities."
      },
      {
        title: "Encroachment Permits",
        content: "Requires a permit for any private construction or activity that encroaches upon the public right-of-way."
      }
    ]
  },
  '9': {
    summary: "Title 9, Building Regulations, adopts the set of codes that govern all building and construction within the city.",
    purpose: "To safeguard public health and safety by establishing minimum standards for the design, construction, and maintenance of all buildings.",
    keyProvisions: [
      {
        title: "Adoption of Codes",
        content: "The city adopts specific editions of the International Building Code, Residential Code, and other related technical codes."
      },
      {
        title: "Building Permits",
        content: "A building permit is required for most new construction, additions, and significant alterations to ensure compliance with safety codes."
      },
      {
        title: "Inspections",
        content: "Requires mandatory inspections at various stages of construction to verify that work is being performed according to the approved plans and code."
      }
    ]
  },
  '10': {
    summary: "Title 10, Vehicles and Traffic, contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive traffic laws of the State of Arizona by reference, making them fully enforceable within Benson."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, such as prohibiting parking in front of fire hydrants, in loading zones, or on sidewalks."
      },
      {
        title: "Traffic Control Devices",
        content: "Grants the city authority to install and maintain traffic signs, signals, and markings to regulate traffic flow."
      }
    ]
  },
  '11': {
    summary: "Title 11, Zoning Regulations, is the comprehensive ordinance that regulates land use and development throughout the city.",
    purpose: "To guide the physical development of the city in a manner that promotes public health, safety, and welfare by ensuring compatible land uses and orderly growth.",
    keyProvisions: [
      {
        title: "Zoning Map and Districts",
        content: "Establishes the official zoning map and defines the various residential, commercial, and industrial zoning districts within the city."
      },
      {
        title: "Development Standards",
        content: "Specifies the development standards for each district, including minimum lot sizes, building setbacks, height limits, and parking requirements."
      },
      {
        title: "Conditional Use Permits",
        content: "Outlines the process for obtaining a permit for uses that may be appropriate in a district but require special review and conditions to ensure compatibility."
      }
    ]
  }
};
