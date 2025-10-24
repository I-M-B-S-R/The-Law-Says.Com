
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const PRESCOTT_VALLEY_CODE_CONTENT: Record<string, CodeContent> = {
  '3': {
    summary: "Title III of the Prescott Valley Town Code, found on the <a href='https://library.municode.com/az/prescott_valley/codes/code_of_ordinances?nodeId=TITIIIAD' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>, outlines the structure and administrative procedures of the town government. It establishes the roles of the Town Council, Town Manager, and various departments, and sets the rules for elections, meetings, and public records.",
    purpose: "To establish a clear and efficient framework for the governance of the Town of Prescott Valley, ensuring accountability, transparency, and the orderly conduct of public business.",
    keyProvisions: [
      {
        title: "Town Council",
        content: "Establishes the Town Council as the legislative body of the town, with powers to enact ordinances, approve budgets, and set policy. It details rules for meetings, agendas, and voting procedures, consistent with the Arizona Open Meeting Law."
      },
      {
        title: "Town Manager",
        content: "Defines the council-manager form of government, where the Town Manager is the chief administrative officer responsible for the day-to-day operations of the town, implementing council policies, and managing town staff."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of various citizen advisory boards and commissions, such as the Planning and Zoning Commission and the Parks and Recreation Commission, to provide input and recommendations to the Town Council."
      },
      {
        title: "Town Elections",
        content: "Sets forth the procedures for conducting town elections for the mayor and council members, including candidate qualifications and campaign finance regulations."
      }
    ]
  },
  '5': {
    summary: "Title V, Public Works, governs the essential infrastructure and services managed by the town. This includes regulations for streets, sidewalks, water, and wastewater systems. The full text is on the <a href='https://library.municode.com/az/prescott_valley/codes/code_of_ordinances?nodeId=TITVPUWO' target='_blank' rel='noopener noreferrer' class='text-primary underline'>town's Municode page</a>.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the town's public infrastructure.",
    keyProvisions: [
      {
        title: "Water and Sewers",
        content: "Establishes comprehensive regulations for the town's water and wastewater (sewer) systems. It includes rules for service connections, water conservation measures, backflow prevention, and rates and fees for service."
      },
      {
        title: "Streets and Sidewalks",
        content: "Sets standards for the construction, maintenance, and use of public streets and sidewalks. It includes regulations for excavations, encroachments, and requirements for developers to construct street improvements."
      },
      {
        title: "Floodplain Management",
        content: "Adopts floodplain maps and regulates development within designated flood hazard areas to minimize flood damage, as required by the National Flood Insurance Program (NFIP)."
      },
      {
        title: "Public Property",
        content: "Contains regulations for the use and protection of public property, including town parks and facilities."
      }
    ]
  },
  '7': {
    summary: "Title VII is the Prescott Valley Traffic Code, which adopts the Arizona State Traffic Code and includes additional local regulations for vehicle operation and parking. This title is essential for public safety on town streets. It can be viewed on the <a href='https://library.municode.com/az/prescott_valley/codes/code_of_ordinances?nodeId=TITVIITRCO' target='_blank' rel='noopener noreferrer' class='text-primary underline'>town's Municode page</a>.",
    purpose: "To provide for the safe and orderly movement of vehicular and pedestrian traffic within the Town of Prescott Valley.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The Town adopts by reference the traffic laws found in Title 28 of the Arizona Revised Statutes. This means state traffic laws are fully enforceable within the town."
      },
      {
        title: "Parking Regulations",
        content: "Establishes specific local parking rules, including time limits in certain areas, prohibitions on parking in fire lanes or near hydrants, and regulations for overnight parking of commercial vehicles in residential areas."
      },
      {
        title: "Speed Limits",
        content: "Sets the prima facie speed limits for various streets within the town, which may differ from general state-mandated limits."
      },
      {
        title: "Enforcement",
        content: "Authorizes the Prescott Valley Police Department to enforce all provisions of the traffic code and issue citations for violations."
      }
    ]
  },
  '9': {
    summary: "Title IX, General Regulations, covers a wide variety of ordinances aimed at protecting the health, safety, and welfare of the community. This includes animal control, nuisance abatement, and alarm systems. The full text is on the <a href='https://library.municode.com/az/prescott_valley/codes/code_of_ordinances?nodeId=TITIXGERE' target='_blank' rel='noopener noreferrer' class='text-primary underline'>town's Municode page</a>.",
    purpose: "To address various issues affecting public health and quality of life that are not covered in other specific titles of the Town Code.",
    keyProvisions: [
      {
        title: "Animal Control (Chapter 92)",
        content: "Sets the rules for animal ownership. This includes dog licensing requirements, leash laws (prohibiting dogs from running 'at large'), and prohibitions on animal cruelty and neglect. It defines what constitutes a public nuisance animal (e.g., excessive barking)."
      },
      {
        title: "Nuisances (Chapter 93)",
        content: "Defines and prohibits various public nuisances that can affect quality of life. This includes things like overgrown weeds, accumulation of trash and debris, and abandoned or inoperable vehicles on private property."
      },
      {
        title: "Noise (Chapter 93)",
        content: "Establishes noise regulations to preserve peace and quiet. It sets limits on noise levels and prohibits loud and unreasonable noise during certain hours."
      },
      {
        title: "Alarm Systems (Chapter 90)",
        content: "Regulates security alarm systems to reduce the number of false alarms that result in unnecessary emergency responses. It requires alarm users to obtain a permit and establishes fines for excessive false alarms."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various types of businesses within the town. It is designed to ensure that businesses operate in a fair and safe manner. This title can be found on the <a href='https://library.municode.com/az/prescott_valley/codes/code_of_ordinances?nodeId=TITXIBURE' target='_blank' rel='noopener noreferrer' class='text-primary underline'>town's Municode page</a>.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business Licenses (Chapter 110)",
        content: "Requires most businesses operating within the town to obtain a business license. The process ensures that the business is operating in the correct zoning district and meets basic safety requirements."
      },
      {
        title: "Alcoholic Beverages (Chapter 111)",
        content: "Sets forth local regulations for establishments that sell alcoholic beverages. While the state issues the liquor license, the town provides recommendations and has its own rules regarding operations."
      },
      {
        title: "Pawnbrokers and Secondhand Dealers (Chapter 114)",
        content: "Provides specific regulations for pawnbrokers and secondhand dealers to help prevent the sale of stolen goods. This includes requirements for record-keeping and reporting transactions to law enforcement."
      },
      {
        title: "Mobile Food Vendors (Chapter 118)",
        content: "Establishes rules for the operation of food trucks and other mobile food vendors, including licensing, location restrictions, and health and safety standards."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses and their penalties. This title works in conjunction with state criminal law (A.R.S. Title 13) but addresses issues of specific local concern. The full text is on the <a href='https://library.municode.com/az/prescott_valley/codes/code_of_ordinances?nodeId=TITXIIIGEOF' target='_blank' rel='noopener noreferrer' class='text-primary underline'>town's Municode page</a>.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the Town of Prescott Valley, and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Offenses Against Public Peace (Chapter 130)",
        content: "Prohibits disorderly conduct, loitering, and other acts that disturb the public peace. This section gives law enforcement a tool to address disruptive behavior."
      },
      {
        title: "Minors (Chapter 131)",
        content: "Establishes a juvenile curfew, making it unlawful for minors to be in public places during specified late-night hours. It also prohibits furnishing tobacco or vapor products to minors."
      },
      {
        title: "Weapons (Chapter 132)",
        content: "Regulates the discharge of firearms and other weapons within the town limits, generally prohibiting it outside of designated ranges or for lawful hunting."
      },
      {
        title: "Property Offenses",
        content: "Includes ordinances against damaging public property, graffiti, and theft of services."
      }
    ]
  },
  '15': {
    summary: "Title XV, Land Usage, is the comprehensive planning and zoning code for the Town of Prescott Valley. It is the primary tool the town uses to regulate growth and development. This extensive title can be found on the <a href='https://library.municode.com/az/prescott_valley/codes/code_of_ordinances?nodeId=TITXVLAUS' target='_blank' rel='noopener noreferrer' class='text-primary underline'>town's Municode page</a>.",
    purpose: "To implement the town's General Plan and to guide the physical development of the town in a manner that protects public health, safety, and welfare, and promotes a high-quality living environment.",
    keyProvisions: [
      {
        title: "Zoning Districts (Chapter 154)",
        content: "Establishes the various residential, commercial, and industrial zoning districts and specifies the permitted uses, densities, setbacks, building heights, and other development standards for each zone."
      },
      {
        title: "Subdivision Regulations (Chapter 153)",
        content: "Governs the process of dividing land into smaller lots. It sets the standards for street design, drainage, utilities, and public amenities required for new developments."
      },
      {
        title: "Sign Code (Chapter 152)",
        content: "Provides detailed regulations for all types of signs, including their size, location, height, and construction, to ensure safety and maintain the town's aesthetic character."
      },
      {
        title: "General Development Standards (Chapter 154)",
        content: "Includes a wide range of general standards that apply to development projects, such as requirements for landscaping, outdoor lighting (to protect dark skies), parking, and access management."
      }
    ]
  },
  '92': {
    summary: "Chapter 92 of the Prescott Valley Town Code contains the regulations for Animal Control. These rules are part of Title IX (General Regulations) and are essential for public health and safety. The full text can be found within the <a href='https://library.municode.com/az/prescott_valley/codes/code_of_ordinances?nodeId=TITIXGERE_CH92ANCO' target='_blank' rel='noopener noreferrer' class='text-primary underline'>General Regulations on the town's Municode page</a>.",
    purpose: "To establish regulations for the keeping of animals to protect public health, prevent public nuisances, and ensure the humane treatment of animals within the town.",
    keyProvisions: [
      {
        title: "Licensing and Vaccinations",
        content: "Requires that all dogs over the age of four months be licensed by the town. A current rabies vaccination is a prerequisite for obtaining a license. License tags must be worn by the dog at all times."
      },
      {
        title: "Animals at Large",
        content: "It is unlawful for any dog to be 'at large.' This means a dog must be confined to its owner's property or be under control by means of a leash when in public."
      },
      {
        title: "Public Nuisance",
        content: "Defines and prohibits animals from becoming a public nuisance. This includes behaviors like excessive barking, damaging property, or menacing pedestrians or vehicles."
      },
      {
        title: "Cruelty to Animals",
        content: "Makes it unlawful to subject any animal to cruelty or neglect, which includes failing to provide adequate food, water, shelter from the elements, and necessary veterinary care."
      }
    ]
  }
};
