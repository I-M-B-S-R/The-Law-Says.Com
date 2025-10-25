
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const EL_MIRAGE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title 1 of the El Mirage City Code establishes the foundational legal framework for all other titles. It provides rules for interpreting the code, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the City Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty, typically a civil violation or misdemeanor, for any violation of the City Code where a more specific penalty is not stated. This ensures all parts of the code are enforceable."
      }
    ]
  },
  '2': {
    summary: "Title 2, Administration and Government, details the structure and organization of the city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments.",
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
  '4': {
    summary: "Title 4, Health and Sanitation, provides regulations to protect public health, focusing on issues like solid waste disposal and nuisance abatement.",
    purpose: "To prevent and control conditions that could be detrimental to public health and to maintain a clean and sanitary community.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions such as overgrown weeds, accumulation of trash, stagnant water, and other unsanitary conditions to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Solid Waste",
        content: "Regulates the storage and disposal of garbage and refuse, requiring proper containers and mandating collection to prevent health hazards."
      }
    ]
  },
  '5': {
    summary: "Title 5, Business Licenses and Regulations, governs the licensing and operation of various businesses within the city to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License Requirement",
        content: "Requires most businesses operating within the city to obtain a City Business License."
      },
      {
        title: "Peddlers and Solicitors",
        content: "Sets rules for door-to-door sales and solicitation, including registration requirements and limitations on hours of operation."
      }
    ]
  },
  '6': {
    summary: "Title 6, Animals, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs over three months of age to be licensed and vaccinated against rabies."
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
    summary: "Title 8, Alcoholic Beverages, governs the sale and consumption of liquor within the City of El Mirage. It primarily adopts state law but also includes local regulations.",
    purpose: "To regulate the sale and consumption of alcoholic beverages in a manner that protects public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive alcoholic beverage laws of the State of Arizona found in A.R.S. Title 4, making them fully enforceable within city limits."
      },
      {
        title: "Local Licensing Review",
        content: "Applications for a state liquor license for a location within El Mirage are forwarded to the City Council for a recommendation to the State Liquor Board."
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
    summary: "Title 10 contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive traffic laws of the State of Arizona by reference."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, such as prohibiting parking in fire lanes or in front of driveways, and rules for parking commercial vehicles in residential areas."
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
        content: "Sets rules for the use of city parks, including park hours and prohibited activities."
      }
    ]
  },
  '13': {
    summary: "Title 13, Public Services, governs the city's utility systems, including water and wastewater (sewer) services.",
    purpose: "To provide for the safe and efficient operation of the city's public utilities and to establish fair rates for service.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to the city water and sewer systems and the conditions for service."
      }
    ]
  },
  '14': {
    summary: "Title 14, the Development Code, is the city's comprehensive ordinance for land use, combining zoning and subdivision regulations into a single document.",
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
        title: "Sign Regulations",
        content: "Regulates the size, location, and type of signs allowed in different zoning districts."
      }
    ]
  }
};
