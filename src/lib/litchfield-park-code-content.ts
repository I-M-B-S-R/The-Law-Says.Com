
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const LITCHFIELD_PARK_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Litchfield Park City Code establishes the foundational legal framework for all other chapters. It provides rules for interpreting the code, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
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
    summary: "Chapter 2, Administration and Government, details the structure and organization of the city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments.",
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
    summary: "Chapter 4, Animals, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with Maricopa County and vaccinated against rabies, which is enforceable within city limits."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs and other domestic animals from running 'at large.' Animals must be confined to the owner's property or restrained by a leash."
      }
    ]
  },
  '6': {
    summary: "Chapter 6 governs the licensing and operation of various businesses within the city to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "Requires most businesses operating in Litchfield Park to obtain a City Business License."
      },
      {
        title: "Home Occupations",
        content: "Allows for certain small-scale businesses to be operated from a residence, provided they meet strict criteria to ensure they do not negatively impact the neighborhood's residential character."
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
  '9': {
    summary: "Chapter 9, Public Peace and Good Order, defines various local-level public order offenses to maintain a peaceful and safe community.",
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
    summary: "Chapter 10 contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "Adopts the Arizona State Traffic Code (A.R.S. Title 28) by reference, making it enforceable by local police."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including prohibiting parking in fire lanes, and rules for parking in residential areas, especially concerning recreational vehicles."
      }
    ]
  },
  '12': {
    summary: "Chapter 12 governs the use and maintenance of public ways and property, including streets, sidewalks, and parks.",
    purpose: "To ensure that public property and rights-of-way are kept safe, clean, and accessible for public use.",
    keyProvisions: [
      {
        title: "Street and Sidewalk Obstructions",
        content: "Makes it unlawful to place obstructions on any public street or sidewalk without a permit."
      },
      {
        title: "Park Regulations",
        content: "Sets rules for the use of city parks, including park hours and prohibited activities like alcohol consumption without a permit."
      }
    ]
  },
  '13': {
    summary: "Chapter 13, Public Services, governs the city's utility systems, including water and wastewater (sewer) services.",
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
  '14': {
    summary: "Chapter 14, the Development Code, is the city's comprehensive ordinance for land use, combining zoning and subdivision regulations into a single document.",
    purpose: "To guide the physical development of the city in a manner that promotes public health, safety, and welfare, and ensures high-quality, orderly growth that is consistent with the city's unique, planned community character.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential and commercial zoning districts and specifies the permitted uses, density, and development standards for each, with a strong emphasis on maintaining the city's aesthetic."
      },
      {
        title: "Design Review",
        content: "Requires a stringent design review process for all new construction and exterior modifications to ensure they are compatible with the architectural character of Litchfield Park."
      },
      {
        title: "Landscaping",
        content: "Includes detailed landscaping requirements to maintain the city's lush, park-like environment."
      }
    ]
  }
};
