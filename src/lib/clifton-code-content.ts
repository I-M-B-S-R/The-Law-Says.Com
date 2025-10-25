
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const CLIFTON_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Clifton Town Code establishes the foundational legal framework for all other titles. It provides rules for interpreting the code, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the Town Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Interpretation",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty, typically a civil violation or misdemeanor, for any violation of the Town Code where a more specific penalty is not stated. This ensures all parts of the code are enforceable."
      },
      {
        title: "Severability",
        content: "A standard clause stating that if any part of the Town Code is declared invalid by a court, the remaining portions will remain in effect, preserving the rest of the law."
      }
    ]
  },
  '3': {
    summary: "Title III, Administration, details the structure and organization of Clifton's town government. It defines the roles and responsibilities of the Town Council, Town Manager, and various departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form of Government",
        content: "The Town operates under a Council-Manager form of government. The Town Council is the legislative body, setting policy and approving the budget, while the Town Manager, appointed by the Council, serves as the chief executive officer responsible for daily operations."
      },
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory bodies to provide recommendations and public input to the Town Council on specific issues like planning and zoning."
      }
    ]
  },
  '5': {
    summary: "Title V, Public Works, governs the essential infrastructure and services managed by the town, including regulations for streets, public property, and construction within public rights-of-way.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the town's public infrastructure.",
    keyProvisions: [
      {
        title: "Street and Sidewalk Regulations",
        content: "Establishes rules for the use and maintenance of public streets and sidewalks, including prohibiting obstructions and requiring permits for any work performed in the public right-of-way."
      },
      {
        title: "Water and Wastewater Systems",
        content: "Contains regulations for connecting to and using the town's water and sewer utilities to protect public health and ensure system integrity."
      },
      {
        title: "Public Property",
        content: "Sets rules for the use and protection of all town-owned property, including buildings, parks, and other facilities."
      }
    ]
  },
  '7': {
    summary: "Title VII is the Clifton Traffic Code. It adopts state traffic laws and establishes additional local regulations for vehicle operation, parking, and traffic control to ensure safety on town streets.",
    purpose: "To provide for the safe and orderly movement of vehicular and pedestrian traffic within the Town of Clifton.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The Town adopts by reference the comprehensive traffic laws found in Title 28 of the Arizona Revised Statutes, making state traffic laws fully enforceable within the town."
      },
      {
        title: "Parking Regulations",
        content: "Prohibits parking in certain areas, such as in front of fire hydrants, in loading zones, or on sidewalks, and may limit the duration of on-street parking."
      },
      {
        title: "Traffic Control",
        content: "Grants the town authority to install and maintain traffic signs, signals, and markings to regulate traffic flow and improve safety."
      }
    ]
  },
  '9': {
    summary: "Title IX, General Regulations, covers a wide range of rules related to public health, safety, and welfare, including animal control and nuisance abatement.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Animal Control",
        content: "Regulates the keeping of animals, requires licensing and vaccination of dogs, and prohibits animals from running at large."
      },
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and excessive noise to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Health and Sanitation",
        content: "Establishes minimum standards for sanitation to prevent the spread of disease and protect public health."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various businesses within the town to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "Requires most businesses operating in Clifton to obtain a Town Business License and keep it in good standing."
      },
      {
        title: "Alcoholic Beverages",
        content: "Sets forth local procedures for reviewing applications for state liquor licenses."
      },
      {
        title: "Special Events",
        content: "A permit may be required for temporary events like festivals or parades to ensure public safety and coordination of town services."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses to maintain public order and safety within the town.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the Town of Clifton.",
    keyProvisions: [
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      },
      {
        title: "Damage to Property",
        content: "Makes it unlawful to willfully damage, deface, or destroy public or private property."
      },
      {
        title: "Curfew for Minors",
        content: "Establishes a curfew, making it unlawful for minors to be in public places during specified late-night hours without a valid reason, such as being with a parent or returning from work."
      }
    ]
  },
  '15': {
    summary: "Title XV, Land Usage, contains the comprehensive Zoning and Subdivision regulations for the town. It is the primary tool for managing growth and ensuring development aligns with the town's historic and physical character.",
    purpose: "To guide the physical development of the town in a manner that protects its historic resources, promotes public health and safety, and ensures orderly growth.",
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
        title: "Historic Preservation",
        content: "Includes regulations aimed at preserving the unique historic character of Clifton, which is one of Arizona's most significant historic mining towns."
      },
      {
        title: "Building Codes",
        content: "Adopts by reference various building and safety codes to ensure all construction is safe and habitable."
      }
    ]
  }
};
