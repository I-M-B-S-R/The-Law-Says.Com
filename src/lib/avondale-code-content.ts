
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const AVONDALE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Avondale City Code establishes the foundational legal framework for the entire code. It defines how the code should be interpreted, outlines the city's general powers, and sets the general penalty for violations where a specific penalty is not provided.",
    purpose: "To provide a consistent legal basis for the interpretation, application, and enforcement of the City Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the City Code where a more specific penalty is not stated. This ensures all parts of the code are enforceable."
      },
      {
        title: "Severability Clause",
        content: "States that if any part of the City Code is declared invalid by a court, the remaining portions of the code will remain in effect."
      }
    ]
  },
  '2': {
    summary: "Chapter 2, Administration, details the structure and organization of Avondale's city government. It defines the roles and responsibilities of the City Council, the City Manager, and various city departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form of Government",
        content: "The City operates under a Council-Manager form of government. The City Council is the legislative body, setting policy and approving the budget, while the City Manager, appointed by the Council, serves as the chief executive officer responsible for daily operations."
      },
      {
        title: "City Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Administrative Departments",
        content: "Establishes the various departments of the city government (e.g., Police, Public Works, Development Services) and outlines their primary functions under the direction of the City Manager."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory bodies to provide recommendations and public input to the City Council on specific issues."
      }
    ]
  },
  '3': {
    summary: "Chapter 3, Advertising, regulates signs and other forms of outdoor advertising to ensure they do not create safety hazards or visual blight. The full text can be viewed on the <a href='https://www.avondaleaz.gov/government/departments/city-clerk/city-code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official city website</a>.",
    purpose: "To balance the need for business identification with the desire to maintain a safe and aesthetically pleasing community by regulating the size, location, and type of signs.",
    keyProvisions: [
      {
        title: "Permit Requirement",
        content: "A sign permit is required for the installation or alteration of most signs to ensure compliance with the code."
      },
      {
        title: "Prohibited Signs",
        content: "Prohibits certain types of signs, such as animated signs, roof signs, and signs that obstruct traffic views."
      },
      {
        title: "Temporary Signs",
        content: "Provides specific rules for temporary signs like banners and real estate signs, limiting their size and duration."
      }
    ]
  },
  '4': {
    summary: "Chapter 4, Alcoholic Beverages, governs the sale and consumption of liquor within the City of Avondale. It primarily adopts state law but also includes local regulations regarding licensing and public consumption.",
    purpose: "To regulate the sale and consumption of alcoholic beverages in a manner that protects public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive alcoholic beverage laws of the State of Arizona found in A.R.S. Title 4, making them fully enforceable within city limits."
      },
      {
        title: "Public Consumption",
        content: "It is unlawful to consume spirituous liquor in any public place, park, or thoroughfare within the city, except in areas specifically licensed for such activity."
      },
      {
        title: "Local Licensing Review",
        content: "Applications for a state liquor license for a location within Avondale are forwarded to the City Council for a recommendation to the State Liquor Board."
      }
    ]
  },
  '5': {
    summary: "Chapter 5, Animals, sets the rules for keeping animals within the city to protect public health and safety and ensure animal welfare. It is enforced by the city's animal control services. The full text can be viewed on the <a href='https://www.avondaleaz.gov/government/departments/city-clerk/city-code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official city website</a>.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and ensure the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "All dogs over four months old must be vaccinated against rabies and licensed with the county."
      },
      {
        title: "Leash Law",
        content: "Prohibits dogs from running 'at large.' Dogs must be confined to the owner's property or restrained by a leash."
      },
      {
        title: "Nuisance Animals",
        content: "It is unlawful for an owner to permit an animal to become a nuisance by making excessive noise or damaging property."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Buildings and Building Regulations, adopts the set of international and national codes that govern all construction within Avondale. The full text can be viewed on the <a href='https://www.avondaleaz.gov/government/departments/city-clerk/city-code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official city website</a>.",
    purpose: "To safeguard public health, safety, and general welfare by establishing minimum standards for the design, construction, and maintenance of all buildings.",
    keyProvisions: [
      {
        title: "Adopted Codes",
        content: "The city adopts specific editions of the International Building Code (IBC), International Residential Code (IRC), and National Electrical Code (NEC)."
      },
      {
        title: "Permit Requirement",
        content: "A building permit is required for most new construction, additions, and alterations to ensure compliance with safety codes."
      },
      {
        title: "Inspections",
        content: "Mandatory inspections are required at various stages of construction to verify that work is being done correctly and safely."
      }
    ]
  },
  '7': {
    summary: "Chapter 7, Cable Communications, establishes the framework for granting and regulating cable television franchises within the city.",
    purpose: "To establish fair procedures for granting cable franchises and ensure that the public interest is served by the provision of high-quality cable services.",
    keyProvisions: [
      {
        title: "Franchise Requirement",
        content: "It is unlawful to operate a cable system within the city without first obtaining a franchise from the City Council."
      },
      {
        title: "Franchise Fees",
        content: "The city charges a franchise fee to cable operators to compensate for the use of public rights-of-way."
      },
      {
        title: "Customer Service Standards",
        content: "Sets minimum customer service standards that franchisees must meet regarding issues like service quality, response times, and billing practices."
      }
    ]
  },
  '8': {
    summary: "Chapter 8, Courts, establishes the Avondale City Court as a limited jurisdiction court and defines its powers and procedures.",
    purpose: "To provide for the administration of justice for violations of city ordinances and state laws that occur within city limits.",
    keyProvisions: [
      {
        title: "Establishment of Court",
        content: "Establishes the Avondale City Court and provides for the appointment of a presiding magistrate and other judges."
      },
      {
        title: "Jurisdiction",
        content: "The court has jurisdiction over all violations of the city code and all misdemeanor offenses committed within the city limits."
      },
      {
        title: "Judicial Powers",
        content: "Grants judges the power to issue warrants, summonses, and subpoenas, and to impose sentences as provided by law."
      }
    ]
  },
  '9': {
    summary: "Chapter 9, Fire Prevention and Protection, adopts the International Fire Code to establish minimum safety standards to protect life and property from the hazards of fire and explosion.",
    purpose: "To prevent fires and protect public safety through the enforcement of modern fire prevention codes.",
    keyProvisions: [
      {
        title: "Adoption of Fire Code",
        content: "The city adopts a specific edition of the International Fire Code (IFC) with local amendments."
      },
      {
        title: "Fire Inspections",
        content: "Authorizes the Fire Marshal to conduct inspections of commercial and public buildings to ensure compliance with the fire code."
      },
      {
        title: "Fire Lanes",
        content: "Prohibits parking or otherwise obstructing designated fire lanes to ensure emergency vehicle access."
      }
    ]
  },
  '10': {
    summary: "Chapter 10, Garbage and Refuse, sets the regulations for the storage, collection, and disposal of solid waste to ensure public health and sanitation.",
    purpose: "To protect public health and the environment by establishing standards for the safe and sanitary management of solid waste.",
    keyProvisions: [
      {
        title: "Mandatory Collection",
        content: "Requires all occupied residences and businesses to subscribe to the city's solid waste collection service."
      },
      {
        title: "Container Requirements",
        content: "Specifies that residents must use city-provided containers and sets rules for their placement on collection days."
      },
      {
        title: "Prohibited Items",
        content: "Prohibits the disposal of hazardous waste, construction debris, and hot ashes in regular trash containers."
      }
    ]
  },
  '11': {
    summary: "Chapter 11, Health and Sanitation, provides general regulations to protect public health beyond those covered in other specific chapters, such as addressing public health nuisances.",
    purpose: "To protect and promote the health, safety, and general welfare of the community by preventing and abating public health nuisances.",
    keyProvisions: [
      {
        title: "Public Nuisances",
        content: "Declares conditions such as stagnant water (which can breed mosquitoes), unsanitary premises, and other conditions detrimental to public health to be unlawful nuisances."
      },
      {
        title: "Abatement",
        content: "Gives the city authority to order the abatement of a public health nuisance. If the property owner fails to comply, the city can perform the cleanup and bill the owner."
      }
    ]
  },
  '12': {
    summary: "Chapter 12, Licenses and Miscellaneous Business Regulations, governs the licensing of various specific businesses and activities not covered elsewhere in the code.",
    purpose: "To provide for the regulation of certain businesses and activities to protect consumer welfare and public safety.",
    keyProvisions: [
      {
        title: "Business License Requirement",
        content: "Requires all persons conducting business within the city to obtain a City Business License."
      },
      {
        title: "Specific Business Regulations",
        content: "Includes specific licensing and operational requirements for businesses such as pawnbrokers, secondhand dealers, and mobile food vendors."
      }
    ]
  },
  '13': {
    summary: "Chapter 13, Minors, establishes regulations designed to protect the welfare of minors, most notably by setting a curfew.",
    purpose: "To protect minors and reduce juvenile crime by setting reasonable curfew hours.",
    keyProvisions: [
      {
        title: "Curfew for Minors",
        content: "Makes it unlawful for a minor under the age of 16 to be in a public place between 10:00 p.m. and 5:00 a.m. For minors aged 16 and 17, the curfew is from 12:00 midnight to 5:00 a.m. The code includes exceptions for work, school events, and emergencies."
      }
    ]
  },
  '14': {
    summary: "Chapter 14 regulates mobile homes and mobile home parks, establishing standards for their design, construction, and operation to ensure safe living conditions.",
    purpose: "To provide minimum standards for the development and operation of mobile home parks to protect the health and safety of residents.",
    keyProvisions: [
      {
        title: "Park Licensing",
        content: "Requires mobile home parks to be licensed and inspected by the city."
      },
      {
        title: "Spacing Requirements",
        content: "Sets minimum distances between mobile homes to provide for fire safety and access."
      },
      {
        title: "Utility Connections",
        content: "Regulates the installation of utility connections (water, sewer, electric) to ensure they are safe and meet code requirements."
      }
    ]
  },
  '15': {
    summary: "Chapter 15, Offenses, defines various local-level public order offenses that are not covered by state criminal law.",
    purpose: "To prohibit conduct that is disruptive to public peace and order and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Public Urination/Defecation",
        content: "Makes it unlawful to urinate or defecate in any public place other than a designated restroom."
      },
      {
        title: "Littering",
        content: "Prohibits the disposal of trash or other refuse on any public or private property not designated for that purpose."
      },
      {
        title: "Disorderly Conduct",
        content: "Prohibits engaging in fighting, making unreasonable noise, or using offensive language in a manner likely to provoke a violent reaction."
      }
    ]
  },
  '16': {
    summary: "Chapter 16 outlines the rules and regulations for the use of city parks and recreational facilities.",
    purpose: "To ensure that public parks are safe, clean, and available for the enjoyment of all residents.",
    keyProvisions: [
      {
        title: "Park Hours",
        content: "Establishes operating hours for city parks, making it unlawful to be in a park after it is closed."
      },
      {
        title: "Prohibited Activities",
        content: "Prohibits certain activities within parks, such as the consumption of alcohol without a special permit, use of glass containers, and operating motor vehicles off designated paths."
      },
      {
        title: "Animal Regulations",
        content: "Requires that all pets within a park be on a leash and that owners clean up their pet's waste."
      }
    ]
  },
  '17': {
    summary: "Chapter 17, Motor Vehicles and Traffic, adopts the state traffic code and contains additional local regulations related to traffic and parking.",
    purpose: "To provide for the safe and efficient movement of traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference, making it enforceable by Avondale Police."
      },
      {
        title: "Parking Regulations",
        content: "Prohibits parking in certain areas, such as in front of fire hydrants, and makes it unlawful to park a vehicle on a public street for more than 48 consecutive hours."
      }
    ]
  },
  '18': {
    summary: "Chapter 18, Personnel, establishes the city's personnel management system, including rules for hiring, classification, compensation, and discipline of city employees.",
    purpose: "To create a fair and efficient system of personnel administration based on merit principles.",
    keyProvisions: [
      {
        title: "Merit System",
        content: "Establishes a merit-based system for the recruitment, selection, and advancement of employees."
      },
      {
        title: "Employee Conduct",
        content: "Sets standards of conduct for city employees and outlines a progressive disciplinary process."
      }
    ]
  },
  '19': {
    summary: "Chapter 19, Planning and Zoning, contains the comprehensive Zoning Ordinance for the city, which regulates land use and development.",
    purpose: "To guide the physical development of the city in a manner that promotes public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential, commercial, and industrial zoning districts and specifies the permitted uses and development standards for each."
      },
      {
        title: "Site Plan Review",
        content: "Requires a detailed site plan review for most new non-residential and multi-family developments to ensure compliance with city standards."
      }
    ]
  },
  '20': {
    summary: "Chapter 20, Police, provides for the establishment and organization of the Avondale Police Department.",
    purpose: "To establish a municipal police department to enforce city and state laws and to protect the lives and property of residents.",
    keyProvisions: [
      {
        title: "Department Created",
        content: "Formally establishes the Avondale Police Department and the position of Chief of Police."
      },
      {
        title: "Powers and Duties",
        content: "Outlines the duties of police officers, including the enforcement of all city ordinances and state laws, crime prevention, and traffic control."
      }
    ]
  },
  '21': {
    summary: "Chapter 21 governs the use and maintenance of streets, sidewalks, and other public places, preventing obstructions and ensuring public safety.",
    purpose: "To regulate the use of public rights-of-way to ensure they remain safe and accessible for public travel.",
    keyProvisions: [
      {
        title: "Obstructions",
        content: "Makes it unlawful to place any obstruction, such as merchandise or signs, on a public sidewalk or street without a permit."
      },
      {
        title: "Encroachment Permits",
        content: "Requires a permit for any private work conducted in the public right-of-way, such as driveway construction or utility repairs."
      }
    ]
  },
  '22': {
    summary: "Chapter 22, Subdivisions, contains the detailed regulations for dividing land into smaller lots for development.",
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
  '23': {
    summary: "Chapter 23, Taxation, establishes the city's authority to levy taxes, including the Transaction Privilege (Sales) Tax.",
    purpose: "To provide a legal framework for the city to raise revenue to fund municipal services.",
    keyProvisions: [
      {
        title: "Transaction Privilege Tax",
        content: "Adopts the Model City Tax Code and levies a transaction privilege tax on the gross income of businesses from certain activities, such as retail sales and construction."
      }
    ]
  },
  '24': {
    summary: "Chapter 24, Telecommunications, regulates telecommunications companies that use public rights-of-way to place their infrastructure.",
    purpose: "To manage the use of public rights-of-way by telecommunications providers and to receive fair compensation for such use.",
    keyProvisions: [
      {
        title: "License Requirement",
        content: "Requires any telecommunications company wishing to place facilities in the public right-of-way to obtain a license from the city."
      }
    ]
  },
  '25': {
    summary: "Chapter 25, Utilities, governs the city's water and sewer utility systems, including rates and service rules.",
    purpose: "To provide for the safe and efficient operation of the city's water and wastewater utilities.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to the city water and sewer systems and the conditions for service."
      },
      {
        title: "Utility Rates",
        content: "Sets forth the rates and charges for water and sewer service as established by the City Council."
      }
    ]
  }
};
