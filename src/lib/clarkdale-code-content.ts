
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const CLARKDALE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title 1 of the Clarkdale Town Code establishes the foundational legal principles for the entire code. It includes rules for interpretation, definitions of common terms, and the general penalties for violations.",
    purpose: "To provide a consistent and stable legal foundation for the town's ordinances, ensuring that all parts of the code are applied uniformly and fairly.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides rules for interpreting the code, such as 'shall' is mandatory while 'may' is permissive."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the Town Code where a specific penalty is not otherwise provided."
      },
      {
        title: "Severability",
        content: "Includes a clause stating that if any part of the Town Code is found to be invalid by a court, the remaining parts will still remain in full force and effect."
      }
    ]
  },
  '2': {
    summary: "Title 2 outlines the structure and administrative procedures of the town government, establishing the roles of the Town Council, Town Manager, and various departments.",
    purpose: "To establish a clear and efficient framework for the governance of the Town of Clarkdale, ensuring accountability and the orderly conduct of public business.",
    keyProvisions: [
      {
        title: "Council-Manager Government",
        content: "The code establishes a council-manager form of government. The Town Manager is appointed by the Council and serves as the chief administrative officer."
      },
      {
        title: "Town Council",
        content: "The Town Council is the legislative body, consisting of a directly elected Mayor and four Council members elected at large."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory boards, such as the Planning Commission and the Parks and Recreation Commission."
      }
    ]
  },
  '3': {
    summary: "Title 3, Revenue and Finance, governs the town's fiscal procedures. It covers the budget process, purchasing, and the collection of taxes, including the local Transaction Privilege (Sales) Tax.",
    purpose: "To ensure sound financial management, accountability, and transparency in the use of public funds.",
    keyProvisions: [
      {
        title: "Budget Process",
        content: "Outlines the annual process for preparing, holding public hearings on, and adopting the town budget."
      },
      {
        title: "Transaction Privilege Tax",
        content: "The town levies a transaction privilege tax on the gross income of businesses from certain activities. This chapter adopts the Model City Tax Code and sets the local tax rates."
      }
    ]
  },
  '5': {
    summary: "Title 5, Business Licenses and Regulations, governs the licensing and operation of various businesses within the town to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "All businesses operating in Clarkdale must obtain a Town Business License."
      },
      {
        title: "Special Events",
        content: "A Special Event Permit is required for temporary events on public or private property that affect ordinary public access or services."
      }
    ]
  },
  '6': {
    summary: "Title 6, Animals, establishes the rules for the keeping of animals within the town to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with the town and vaccinated against rabies."
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
  '8': {
    summary: "Title 8, Health and Safety, covers a wide range of rules related to public health, safety, and welfare, including nuisance abatement and solid waste.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and hazardous buildings to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Solid Waste",
        content: "Regulates the storage and disposal of garbage and refuse, requiring proper containers and mandating collection to prevent health hazards."
      }
    ]
  },
  '9': {
    summary: "Title 9, Public Peace, Morals and Welfare, defines various local-level public order offenses to maintain a peaceful and safe community.",
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
  '10': {
    summary: "Title 10 contains the town's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on town streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The town adopts the comprehensive traffic laws of the State of Arizona by reference, making them fully enforceable within Clarkdale."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, such as prohibiting parking in front of fire hydrants, in loading zones, or on sidewalks."
      },
      {
        title: "Off-Road Vehicles",
        content: "Regulates the operation of off-road vehicles on public streets, generally limiting them to streets with lower speed limits to provide access to trails."
      }
    ]
  },
  '12': {
    summary: "Title 12 governs the use and maintenance of public ways and property, including streets, sidewalks, and parks.",
    purpose: "To ensure that public property and rights-of-way are kept safe, clean, and accessible for public use.",
    keyProvisions: [
      {
        title: "Street and Sidewalk Obstructions",
        content: "Makes it unlawful to place obstructions on any public street or sidewalk without a permit."
      },
      {
        title: "Park Regulations",
        content: "Sets rules for the use of town parks, including park hours and prohibited activities."
      }
    ]
  },
  '13': {
    summary: "Title 13, Public Services, governs the town's utility systems, including water and wastewater (sewer) services.",
    purpose: "To provide for the safe and efficient operation of the town's public utilities and to establish fair rates for service.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to the town water and sewer systems and the conditions for service."
      },
      {
        title: "Water Conservation",
        content: "Includes measures to conserve water, which is a critical resource in Arizona."
      }
    ]
  },
  '15': {
    summary: "Title 15, Buildings and Construction, adopts the set of codes that govern all building and construction within the town.",
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
  '16': {
    summary: "Title 16, Subdivisions, contains the detailed regulations for dividing land into smaller lots for development.",
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
  '17': {
    summary: "Title 17, Zoning, is the comprehensive ordinance that regulates land use and development throughout the town, with special attention to its historic character.",
    purpose: "To guide the physical development of the town in a manner that promotes public health, safety, and welfare by ensuring compatible land uses and orderly growth.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential, commercial, and industrial zoning districts and specifies the permitted uses, density, and development standards for each."
      },
      {
        title: "Historic Preservation",
        content: "Includes regulations for the preservation of historic structures and districts, reflecting Clarkdale's history as a company town for mining operations."
      }
    ]
  }
};
