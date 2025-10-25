
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const FOUNTAIN_HILLS_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Fountain Hills Town Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
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
    summary: "Chapter 2, Administration, Council and Elections, details the structure and organization of the town government. It defines the roles and responsibilities of the Town Council, town manager, and various town departments.",
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
  '4': {
    summary: "Chapter 4, Courts, establishes the Fountain Hills Municipal Court as a limited jurisdiction court and defines its powers and procedures.",
    purpose: "To provide for the administration of justice for violations of town ordinances and state laws that occur within the town limits.",
    keyProvisions: [
      {
        title: "Establishment and Jurisdiction",
        content: "Formally establishes the municipal court and gives it jurisdiction over all violations of the town code and all misdemeanor offenses committed within the town's boundaries."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Alcoholic Beverages, governs the sale and consumption of liquor within the Town of Fountain Hills. It primarily adopts state law but also includes local regulations.",
    purpose: "To regulate the sale and consumption of alcoholic beverages in a manner that protects public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The town adopts the comprehensive alcoholic beverage laws of the State of Arizona found in A.R.S. Title 4, making them fully enforceable within town limits."
      },
      {
        title: "Local Licensing Review",
        content: "Applications for a state liquor license for a location within Fountain Hills are forwarded to the Town Council for a recommendation to the State Liquor Board."
      }
    ]
  },
  '7': {
    summary: "Chapter 7, Animals, establishes the rules for the keeping of animals within the town to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with Maricopa County and vaccinated against rabies."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs and other domestic animals from running 'at large.' Animals must be confined to the owner's property or restrained by a leash."
      },
       {
        title: "Feeding of Wildlife",
        content: "Prohibits the intentional feeding of wildlife, such as coyotes and javelina, to prevent them from becoming a nuisance or danger to the public."
      }
    ]
  },
  '8': {
    summary: "Chapter 8, Buildings and Construction, adopts the set of codes that govern all building and construction within the town.",
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
  '9': {
    summary: "Chapter 9, Businesses, Peddlers, Solicitors and Vending, governs the licensing and operation of various businesses within the town.",
    purpose: "To provide for the regulation of businesses and commercial activities to protect public welfare and maintain community standards.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating in Fountain Hills to obtain a Town Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and art shows."
      }
    ]
  },
  '10': {
    summary: "Chapter 10, Health and Sanitation; Nuisances, covers a wide range of rules related to public health and welfare.",
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
  '11': {
    summary: "Chapter 11, Offenses and Crimes, defines various local-level public order offenses to maintain a peaceful and safe community.",
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
  '12': {
    summary: "Chapter 12 outlines the rules and regulations for the use of town parks and recreational facilities.",
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
  '13': {
    summary: "Chapter 13 governs the use and maintenance of public ways and property, including streets, sidewalks, and the famous Fountain.",
    purpose: "To ensure that public property and rights-of-way are kept safe, clean, and accessible for public use.",
    keyProvisions: [
      {
        title: "Street and Sidewalk Obstructions",
        content: "Makes it unlawful to place obstructions on any public street or sidewalk without a permit."
      },
      {
        title: "Fountain Lake",
        content: "Specifies rules for the town's iconic fountain and lake, including prohibiting swimming, wading, and the operation of unauthorized boats."
      }
    ]
  },
  '14': {
    summary: "Chapter 14 contains the town's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on town streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The town adopts the comprehensive traffic laws of the State of Arizona by reference."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including rules for time-limited parking and prohibiting parking in fire lanes."
      }
    ]
  },
  '15': {
    summary: "Chapter 15, Water and Sewers, governs the town's utility systems.",
    purpose: "To provide for the safe and efficient operation of the town's public utilities and to establish fair rates for service.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to the town water and sewer systems and the conditions for service."
      },
      {
        title: "Water Conservation",
        content: "Includes measures to conserve water, which is a critical resource in the desert."
      }
    ]
  },
  '19': {
    summary: "Chapter 19, Finance and Taxation, establishes the town's authority to levy taxes, including the Transaction Privilege (Sales) Tax.",
    purpose: "To provide a legal framework for the town to raise revenue to fund municipal services.",
    keyProvisions: [
      {
        title: "Transaction Privilege Tax",
        content: "Adopts the Model City Tax Code and levies a transaction privilege tax on the gross income of businesses from certain activities, such as retail sales and construction."
      }
    ]
  }
};
