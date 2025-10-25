
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const GOODYEAR_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Goodyear City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
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
    summary: "Chapter 2, Administration, details the structure and organization of the city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments, boards, and commissions.",
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
  '3': {
    summary: "Chapter 3, Alcoholic Beverages, governs the sale and consumption of liquor within the City of Goodyear. It primarily adopts state law but also includes local regulations.",
    purpose: "To regulate the sale and consumption of alcoholic beverages in a manner that protects public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive alcoholic beverage laws of the State of Arizona found in A.R.S. Title 4."
      },
      {
        title: "Local Licensing Review",
        content: "Applications for a state liquor license for a location within Goodyear are forwarded to the City Council for a recommendation to the State Liquor Board."
      }
    ]
  },
  '4': {
    summary: "Chapter 4, Animals, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with Maricopa County and vaccinated against rabies."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs from running 'at large.' Dogs must be confined to the owner's property or restrained by a leash not to exceed six feet in length."
      }
    ]
  },
  '5': {
    summary: "Chapter 5, Buildings and Fire Prevention Regulations, adopts the set of codes that govern all building and construction within the city, as well as fire safety standards.",
    purpose: "To safeguard public health and safety by establishing minimum standards for the design, construction, maintenance of all buildings, and to protect life and property from the hazards of fire.",
    keyProvisions: [
      {
        title: "Adoption of Codes",
        content: "The city adopts specific editions of the International Building Code, Residential Code, Fire Code, and other related technical codes."
      },
      {
        title: "Building Permits",
        content: "A building permit is required for most new construction, additions, and significant alterations to ensure compliance with safety codes."
      }
    ]
  },
  '6': {
    summary: "Chapter 6 governs the licensing and operation of various businesses, as well as activities like peddling and soliciting, within the city.",
    purpose: "To provide for the regulation of businesses and commercial activities to protect public welfare and consumer rights.",
    keyProvisions: [
      {
        title: "Business License",
        content: "Requires most businesses operating in Goodyear to obtain a City Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades."
      }
    ]
  },
  '8': {
    summary: "Chapter 8, Health and Sanitation, covers a wide range of rules related to public health and welfare, including nuisance abatement and solid waste disposal.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and stagnant water ('green pools') to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Solid Waste",
        content: "Regulates the storage and disposal of garbage and refuse, requiring proper containers and mandating collection to prevent health hazards."
      }
    ]
  },
  '10': {
    summary: "Chapter 10, Offenses, defines various local-level public order offenses to maintain a peaceful and safe community.",
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
  '11': {
    summary: "Chapter 11 outlines the rules and regulations for the use of city parks and recreational facilities.",
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
  '12': {
    summary: "Chapter 12 governs the use and maintenance of public streets, sidewalks, and other rights-of-way.",
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
  '13': {
    summary: "Chapter 13, Subdivisions, contains the detailed regulations for dividing land into smaller lots for development.",
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
  '14': {
    summary: "Chapter 14, Taxation, establishes the city's authority to levy taxes, including the Transaction Privilege (Sales) Tax.",
    purpose: "To provide a legal framework for the city to raise revenue to fund municipal services.",
    keyProvisions: [
      {
        title: "Transaction Privilege Tax",
        content: "Adopts the Model City Tax Code and levies a transaction privilege tax on the gross income of businesses from certain activities, such as retail sales and construction."
      }
    ]
  },
  '15': {
    summary: "Chapter 15, Telecommunications, regulates telecommunications companies that use public rights-of-way to place their infrastructure.",
    purpose: "To manage the use of public rights-of-way by telecommunications providers and to receive fair compensation for such use.",
    keyProvisions: [
      {
        title: "License Requirement",
        content: "Requires any telecommunications company wishing to place facilities in the public right-of-way to obtain a license from the city."
      }
    ]
  },
  '16': {
    summary: "Chapter 16 contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference, making it enforceable by Goodyear Police."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including prohibiting parking in fire lanes, and rules for parking in residential areas."
      }
    ]
  },
  '17': {
    summary: "Chapter 17, Utilities, governs the city's water, reclaimed water, and wastewater utility systems, including rates and service rules.",
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
  },
  '18': {
    summary: "Chapter 18, the Zoning Ordinance, is the comprehensive ordinance that regulates land use and development throughout the city.",
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
