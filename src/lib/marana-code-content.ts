
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const MARANA_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Marana Town Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
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
    summary: "Chapter 2, Mayor and Council, details the structure and operation of the town's legislative body. It defines the composition, powers, duties, and meeting procedures of the Town Council.",
    purpose: "To establish a clear framework for the legislative governance of the Town of Marana.",
    keyProvisions: [
      {
        title: "Composition",
        content: "The Town Council consists of a Mayor and six Councilmembers, all elected at large by the qualified electors of the town."
      },
      {
        title: "Powers and Duties",
        content: "Outlines the legislative powers of the Council, including enacting ordinances, approving the budget, setting town policy, and appointing the Town Manager."
      }
    ]
  },
  '3': {
    summary: "Chapter 3, Administration, details the structure of the town's administrative branch, headed by the Town Manager.",
    purpose: "To establish an organized, efficient, and transparent structure for the day-to-day operations of the town.",
    keyProvisions: [
      {
        title: "Town Manager",
        content: "The Town Manager is appointed by the Council and serves as the chief administrative officer, responsible for implementing council policies and managing all town departments and staff."
      },
      {
        title: "Town Clerk and Town Attorney",
        content: "Defines the roles and responsibilities of key administrative officers, including the Town Clerk (custodian of records) and the Town Attorney (chief legal advisor)."
      }
    ]
  },
  '4': {
    summary: "Chapter 4, Public Health and Safety, covers a wide range of regulations designed to protect the community, including fire prevention and emergency services.",
    purpose: "To protect the health, safety, and general welfare of the public by establishing standards for fire safety and emergency preparedness.",
    keyProvisions: [
      {
        title: "Fire Code",
        content: "Adopts the International Fire Code with local amendments to regulate fire hazards, fire protection systems, and access for emergency responders."
      },
      {
        title: "Emergency Management",
        content: "Establishes the town's emergency management organization and authorizes the declaration of emergencies to coordinate response to disasters."
      }
    ]
  },
  '5': {
    summary: "Chapter 5, Law Enforcement, provides for the establishment and operation of the Marana Police Department.",
    purpose: "To establish a municipal police department to enforce town and state laws and to protect the lives and property of residents.",
    keyProvisions: [
      {
        title: "Police Department Created",
        content: "Formally establishes the Marana Police Department and the position of Chief of Police."
      },
      {
        title: "Powers and Duties",
        content: "Outlines the duties of police officers, including the enforcement of all town ordinances and state laws, crime prevention, traffic control, and investigation of crimes."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Animals and Fowl, establishes the rules for the keeping of animals within the town to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Adopts Pima County's regulations, requiring all dogs to be licensed with the county and vaccinated against rabies."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs and other domestic animals from running 'at large.' Animals must be confined to the owner's property or restrained by a leash."
      }
    ]
  },
  '7': {
    summary: "Chapter 7, Public Nuisances, defines and prohibits conditions that are detrimental to public health, safety, and welfare.",
    purpose: "To protect the health, safety, and quality of life for residents by defining, prohibiting, and providing for the abatement of public nuisances.",
    keyProvisions: [
      {
        title: "Nuisance Defined",
        content: "Declares a wide range of conditions to be public nuisances, including overgrown weeds, accumulation of trash, stagnant water ('green pools'), and excessive noise."
      },
      {
        title: "Abatement Procedure",
        content: "Provides a process for the town to notify property owners of a nuisance and require its correction. If the owner fails to comply, the town may abate the nuisance and assess the costs against the property."
      }
    ]
  },
  '8': {
    summary: "Chapter 8, Business Licenses and Regulations, governs the licensing and operation of various businesses within the town.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "Requires most businesses operating in Marana to obtain a Town Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades."
      }
    ]
  },
  '9': {
    summary: "Chapter 9, Finance and Taxation, establishes the fiscal procedures for the town, including the collection of the local Transaction Privilege (Sales) Tax.",
    purpose: "To provide a legal framework for the town to raise revenue to fund municipal services and to ensure sound financial management.",
    keyProvisions: [
      {
        title: "Transaction Privilege Tax",
        content: "Adopts the Model City Tax Code and levies a transaction privilege tax on the gross income of businesses from certain activities, such as retail sales and construction."
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
    summary: "Chapter 11 contains the town's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on town streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference, making it enforceable by Marana Police."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including prohibiting parking in fire lanes, and rules for parking in residential areas."
      }
    ]
  },
  '12': {
    summary: "Chapter 12 outlines the rules and regulations for the use of town parks and recreational facilities.",
    purpose: "To ensure that public parks are safe, clean, and available for the enjoyment of all residents.",
    keyProvisions: [
      {
        title: "Park Hours and Rules",
        content: "Establishes operating hours for town parks and prohibits certain activities, such as the consumption of alcohol without a special permit."
      }
    ]
  },
  '13': {
    summary: "Chapter 13, Utilities, governs the town's water and wastewater utility systems, including rates and service rules.",
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
  },
  '14': {
    summary: "Chapter 14 governs the use and maintenance of public streets, sidewalks, and other rights-of-way.",
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
  '15': {
    summary: "Chapter 15 provides for the establishment and operation of the Marana Public Library.",
    purpose: "To establish and maintain a public library to serve the educational and recreational needs of the community.",
    keyProvisions: [
      {
        title: "Library Board",
        content: "Establishes an advisory board to make recommendations to the Town Council regarding library policies and services."
      }
    ]
  },
  '16': {
    summary: "Chapter 16, Building and Construction, adopts the set of codes that govern all building and construction within the town.",
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
  '17': {
    summary: "Chapter 17, Land Development, is the town's comprehensive code for zoning and subdivision regulations.",
    purpose: "To guide the physical development of the town in a manner that promotes public health, safety, and welfare by ensuring compatible land uses and orderly growth, while protecting the area's natural Sonoran Desert environment.",
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
