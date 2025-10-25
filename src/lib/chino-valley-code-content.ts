
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const CHINO_VALLEY_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Chino Valley Town Code establishes the foundational legal framework for the entire code. It sets forth rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the Town Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the Town Code where a more specific penalty is not stated, making all parts of the code enforceable."
      },
      {
        title: "Severability Clause",
        content: "A standard clause stating that if any part of the Town Code is declared invalid by a court, the remaining portions will remain in effect."
      }
    ]
  },
  '3': {
    summary: "Title III, Administration, details the structure and organization of Chino Valley's town government. It defines the roles and responsibilities of the Town Council, Town Manager, and various departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The Town operates under a Council-Manager form of government. The Town Council is the legislative body, setting policy and approving the budget, while the Town Manager, appointed by the Council, serves as the chief executive officer responsible for daily operations."
      },
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and six Councilmembers elected at large. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory bodies, such as the Planning and Zoning Commission, to provide recommendations and public input to the Town Council."
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
        title: "Water and Wastewater",
        content: "Contains regulations related to the provision of water and sewer services, including service connections and rules to protect the public utility systems."
      },
      {
        title: "Public Property",
        content: "Sets rules for the use and protection of all town-owned property, including buildings and parks."
      }
    ]
  },
  '7': {
    summary: "Title VII is the Chino Valley Traffic Code. It adopts state traffic laws and establishes additional local regulations for vehicle operation and parking.",
    purpose: "To provide for the safe and orderly movement of vehicular and pedestrian traffic within the Town of Chino Valley.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The Town adopts by reference the comprehensive traffic laws found in Title 28 of the Arizona Revised Statutes, making state traffic laws fully enforceable within the town."
      },
      {
        title: "Parking Regulations",
        content: "Prohibits parking in certain areas, such as in front of fire hydrants, and makes it unlawful to park a vehicle on a public street for extended periods."
      },
      {
        title: "Off-Road Vehicles",
        content: "Regulates the use of off-road vehicles (OHVs), generally prohibiting their operation on paved public streets unless specifically signed to allow access to trails."
      }
    ]
  },
  '9': {
    summary: "Title IX, General Regulations, covers a wide range of rules related to public health, safety, and welfare, including animal control and nuisance abatement.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Animal Control",
        content: "Adopts the Yavapai County Dog Control Ordinance by reference, making county rules regarding licensing, leash laws, and nuisance animals enforceable within the town."
      },
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and hazardous buildings to be public nuisances and provides a process for their abatement by the town if the property owner fails to act."
      },
      {
        title: "Noise",
        content: "Prohibits loud and unreasonable noise that disturbs the peace of a neighborhood, with specific restrictions during nighttime hours."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various businesses within the town to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "All businesses operating in Chino Valley must obtain a Town Business License."
      },
      {
        title: "Special Events",
        content: "A Special Event Permit is required for temporary events on public or private property that affect ordinary public access or services, such as festivals and parades."
      },
      {
        title: "Liquor Licenses",
        content: "Establishes procedures for the local review of state liquor license applications, allowing the Town Council to provide a recommendation to the state liquor board."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level public order offenses to maintain a peaceful and safe community.",
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
  '15': {
    summary: "Title XV, Land Usage, contains the comprehensive Zoning and Subdivision regulations for the town. It is the primary tool for managing growth and ensuring development aligns with the town's character.",
    purpose: "To guide the physical development of the town in a manner that protects its rural character, promotes public health and safety, and ensures orderly growth.",
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
  }
};
