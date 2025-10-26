
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const PARADISE_VALLEY_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Paradise Valley Town Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
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
    summary: "Chapter 2, Administration, details the structure and organization of the town government. It defines the roles and responsibilities of the Town Council, Town Manager, and various departments.",
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
    summary: "Chapter 4, Revenue and Finance, governs the town's fiscal procedures. It covers the budget process, purchasing, and the collection of taxes.",
    purpose: "To ensure sound financial management, accountability, and transparency in the use of public funds.",
    keyProvisions: [
      {
        title: "Budget Process",
        content: "Outlines the annual process for preparing, holding public hearings on, and adopting the town budget."
      },
      {
        title: "Transaction Privilege Tax",
        content: "The town levies a transaction privilege tax on certain business activities. This chapter provides the authority and administrative rules for this tax."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Animals, establishes the rules for the keeping of animals within the town to protect public safety and ensure animal welfare, with regulations tailored to a low-density residential community.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with Maricopa County and vaccinated against rabies, which is enforceable within town limits."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs and other domestic animals from running 'at large.' Animals must be confined to the owner's property or restrained by a leash."
      }
    ]
  },
  '7': {
    summary: "Chapter 7, Buildings and Construction, adopts the set of codes that govern all building and construction within the town.",
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
  '8': {
    summary: "Chapter 8, Businesses, governs the licensing and operation of various businesses within the town, which are limited primarily to resorts and related services.",
    purpose: "To provide for the regulation of businesses to protect the town's residential character and public welfare.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires all businesses operating in Paradise Valley to obtain a Town Business License."
      },
      {
        title: "Home Occupations",
        content: "Allows for certain limited home-based businesses provided they do not alter the residential character of the neighborhood."
      }
    ]
  },
  '9': {
    summary: "Chapter 9, Fire Code, adopts the International Fire Code to establish minimum safety standards to protect life and property from fire and explosion hazards.",
    purpose: "To prevent fires and protect public safety through the enforcement of modern fire prevention codes.",
    keyProvisions: [
      {
        title: "Adoption of Fire Code",
        content: "The town adopts a specific edition of the International Fire Code (IFC) with local amendments."
      },
      {
        title: "Firewise Landscaping",
        content: "Encourages and may require landscaping practices that reduce wildfire risk, particularly for properties near natural desert areas."
      }
    ]
  },
  '10': {
    summary: "Chapter 10, Health and Safety, covers a wide range of rules related to public health and welfare, including nuisance abatement and solid waste disposal.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and hazardous structures to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Solid Waste",
        content: "Regulates the storage and disposal of garbage and refuse, requiring proper containers and mandating collection to prevent health hazards."
      }
    ]
  },
  '11': {
    summary: "Chapter 11, Offenses and Public Nuisances, defines various local-level public order offenses to maintain a peaceful and safe community.",
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
  '12': {
    summary: "Chapter 12 outlines the rules and regulations for the use of town parks and recreational facilities.",
    purpose: "To ensure that public parks and trails are safe, clean, and available for the enjoyment of all residents.",
    keyProvisions: [
      {
        title: "Park Hours",
        content: "Establishes operating hours for town parks, typically from sunrise to sunset."
      },
      {
        title: "Prohibited Activities",
        content: "Prohibits certain activities within parks, such as the consumption of alcohol and the operation of unauthorized motor vehicles."
      }
    ]
  },
  '13': {
    summary: "Chapter 13 governs the use and maintenance of public streets, sidewalks, and other rights-of-way.",
    purpose: "To regulate the use of public rights-of-way to ensure they remain safe and accessible for public travel.",
    keyProvisions: [
      {
        title: "Obstructions",
        content: "Makes it unlawful to place any obstruction on a public sidewalk or street without a permit."
      }
    ]
  },
  '14': {
    summary: "Chapter 14 contains the town's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on town streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference, making it enforceable by Paradise Valley Police."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including prohibitions on overnight street parking in many areas to maintain the residential character of the town."
      }
    ]
  },
  '15': {
    summary: "Chapter 15, Utilities, governs the town's utility systems, including water and wastewater (sewer) services.",
    purpose: "To provide for the safe and efficient operation of the town's public utilities and to establish fair rates for service.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to and using utility systems and the conditions for service."
      },
      {
        title: "Water Conservation",
        content: "Includes measures and potential restrictions to conserve water, a critical resource in the desert."
      }
    ]
  }
};
