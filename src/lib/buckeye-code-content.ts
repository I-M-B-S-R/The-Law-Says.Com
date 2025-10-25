
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const BUCKEYE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Buckeye City Code establishes the foundational legal principles for the entire code. It includes rules for interpretation, definitions of common terms, and the general penalties for violations.",
    purpose: "To provide a consistent and stable legal foundation for the city's ordinances, ensuring that all parts of the code are applied uniformly and fairly.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides rules for interpreting the code, such as 'shall' is mandatory while 'may' is permissive."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty, typically a civil infraction or a Class 1 misdemeanor, for any violation of the City Code where a specific penalty is not otherwise provided."
      },
      {
        title: "Severability",
        content: "Includes a clause stating that if any part of the City Code is found to be invalid by a court, the remaining parts will still remain in full force and effect."
      }
    ]
  },
  '3': {
    summary: "Title III outlines the structure and administrative procedures of the city government, establishing the roles of the City Council, City Manager, and various departments.",
    purpose: "To establish a clear and efficient framework for the governance of the City of Buckeye, ensuring accountability and the orderly conduct of public business.",
    keyProvisions: [
      {
        title: "Council-Manager Government",
        content: "The code establishes a council-manager form of government. The City Manager is appointed by the Council and serves as the chief administrative officer, responsible for day-to-day operations."
      },
      {
        title: "City Council",
        content: "The City Council is the legislative body, consisting of a directly elected Mayor and six Council members elected by district."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory boards, such as the Planning and Zoning Commission, to provide recommendations to the City Council."
      }
    ]
  },
  '5': {
    summary: "Title V, Public Works, governs the essential infrastructure and services managed by the city, including regulations for water, wastewater systems, and public rights-of-way.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the city's public infrastructure.",
    keyProvisions: [
      {
        title: "Water Conservation",
        content: "Establishes water conservation stages and regulations to manage water resources effectively, particularly during periods of drought."
      },
      {
        title: "Wastewater Regulations",
        content: "Prohibits the discharge of certain substances into the public sewer system that could cause damage or interfere with the treatment process."
      },
      {
        title: "Work in Public Rights-of-Way",
        content: "Requires a permit for any private construction or excavation work within public streets, alleys, or easements to ensure safety and proper restoration."
      }
    ]
  },
  '7': {
    summary: "Title VII is the Buckeye Traffic Code, which adopts the Arizona State Traffic Code and includes additional local regulations for vehicle operation and parking.",
    purpose: "To provide for the safe and orderly movement of vehicular and pedestrian traffic within the City of Buckeye.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The City adopts by reference the comprehensive traffic laws found in Title 28 of the Arizona Revised Statutes, making state traffic laws fully enforceable within the city."
      },
      {
        title: "Parking Regulations",
        content: "Prohibits parking a vehicle on any street for a continuous period of more than 72 hours and establishes rules against parking in fire lanes or blocking driveways."
      },
      {
        title: "Neighborhood Electric Vehicles",
        content: "Provides regulations for the operation of golf carts and other neighborhood electric vehicles on certain city streets with a posted speed limit of 35 miles per hour or less."
      }
    ]
  },
  '9': {
    summary: "Title IX, General Regulations, covers a wide range of rules related to public health, safety, and welfare, including animal control and nuisance abatement.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Animal Control",
        content: "Requires dogs to be licensed and vaccinated. It prohibits dogs from running 'at large' and establishes rules against nuisance barking."
      },
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and stagnant water to be public nuisances and provides a process for their abatement by the city if the property owner fails to act."
      },
      {
        title: "Noise",
        content: "Prohibits loud and unreasonable noise that disturbs the peace of a neighborhood, with specific restrictions during nighttime hours."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various businesses within the city to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "All businesses operating in Buckeye must obtain a City Business License and a Transaction Privilege Tax (TPT) license from the Arizona Department of Revenue."
      },
      {
        title: "Mobile Food Vendors",
        content: "Requires food trucks to obtain a specific license and comply with health department regulations and operational rules, such as location restrictions."
      },
      {
        title: "Special Events",
        content: "A Special Event Permit is required for temporary events on public or private property that affect ordinary public access or services, such as festivals and parades."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses, addressing issues of specific local concern to maintain public order.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the City of Buckeye.",
    keyProvisions: [
      {
        title: "Juvenile Curfew",
        content: "It is unlawful for minors to be in a public place during specified late-night hours unless accompanied by a parent or guardian or engaged in an exempt activity."
      },
      {
        title: "Consumption of Alcohol in Public",
        content: "Prohibits consuming spirituous liquor in public places, such as parks and streets, except in areas specifically licensed or permitted for a special event."
      },
      {
        title: "Discharge of Firearms",
        content: "Prohibits the discharge of firearms within city limits, except in self-defense or at a licensed firing range, consistent with state law."
      }
    ]
  },
  '15': {
    summary: "Title XV, Land Development, contains the comprehensive zoning and subdivision regulations that guide how land is developed within the city.",
    purpose: "To guide the physical development of the city in a manner that promotes public health, safety, and welfare by ensuring compatible land uses and orderly growth.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential, commercial, and industrial zoning districts and specifies the permitted uses, density, and development standards for each."
      },
      {
        title: "Subdivision Regulations",
        content: "Contains the rules and procedures for dividing land into smaller parcels, ensuring new developments are properly designed and served by public infrastructure."
      },
      {
        title: "Sign Code",
        content: "Regulates the size, location, and type of signs allowed in different zoning districts to ensure safety and maintain aesthetics."
      }
    ]
  },
  '17': {
    summary: "Title XVII, Fire Prevention, adopts the International Fire Code to establish minimum safety standards to protect life and property from fire and explosion hazards.",
    purpose: "To prevent fires and protect public safety through the enforcement of modern fire prevention codes and standards.",
    keyProvisions: [
      {
        title: "Adoption of Fire Code",
        content: "The city adopts a specific edition of the International Fire Code (IFC) with local amendments."
      },
      {
        title: "Fire Inspections",
        content: "Authorizes the Fire Marshal to conduct inspections of commercial and public buildings to ensure compliance with the fire code, including access, fire extinguishers, and alarm systems."
      },
      {
        title: "Fire Lanes",
        content: "Prohibits parking or otherwise obstructing designated fire lanes to ensure emergency vehicles have unimpeded access to buildings."
      }
    ]
  }
};
