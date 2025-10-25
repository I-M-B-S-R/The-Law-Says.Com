
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const FLAGSTAFF_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title 1 of the Flagstaff City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
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
    summary: "Title 2, Administration, details the structure and organization of the city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments, boards, and commissions.",
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
  '3': {
    summary: "Title 3, Revenue and Finance, governs the city's fiscal procedures. It covers the budget process, purchasing, and the collection of taxes, including the local Transaction Privilege (Sales) Tax.",
    purpose: "To ensure sound financial management, accountability, and transparency in the use of public funds.",
    keyProvisions: [
      {
        title: "Budget Process",
        content: "Outlines the annual process for preparing, holding public hearings on, and adopting the city budget."
      },
      {
        title: "Transaction Privilege Tax",
        content: "The city levies a transaction privilege tax on the gross income of businesses from certain activities. This chapter adopts the Model City Tax Code and sets the local tax rates."
      }
    ]
  },
  '4': {
    summary: "Title 4, Business and License Regulations, governs the licensing and operation of various businesses within the city.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating in Flagstaff to obtain a City Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events like festivals or parades to ensure public safety and coordination of city services."
      }
    ]
  },
  '5': {
    summary: "Title 5, Franchises, contains the regulations for granting and managing public utility franchises, such as those for cable television and other utilities using public rights-of-way.",
    purpose: "To establish a fair and orderly process for granting franchises and to ensure that public rights-of-way are used in a manner that serves the public interest.",
    keyProvisions: [
      {
        title: "Franchise Requirement",
        content: "It is unlawful to construct or operate certain public utility systems within the city without first obtaining a franchise from the City Council."
      },
      {
        title: "Franchise Fees",
        content: "The city charges a franchise fee to operators as compensation for the use of public streets and property."
      }
    ]
  },
  '6': {
    summary: "Title 6, Animal and Fowl, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed with the city and vaccinated against rabies."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs and other domestic animals from running 'at large.' Animals must be confined to the owner's property or restrained by a leash."
      }
    ]
  },
  '7': {
    summary: "Title 7, Public Health and Safety, covers a wide range of rules related to public welfare, including nuisance abatement, fire prevention, and solid waste.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances or create hazards.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and hazardous buildings to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Fire Code",
        content: "Adopts the International Fire Code to establish minimum safety standards to protect life and property from fire and explosion hazards."
      }
    ]
  },
  '8': {
    summary: "Title 8, Public Ways and Property, governs the use and maintenance of public streets, sidewalks, parks, and other city-owned property.",
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
  '9': {
    summary: "Title 9 contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive traffic laws of the State of Arizona by reference."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including rules for downtown parking, residential parking permit areas, and prohibiting parking in fire lanes."
      }
    ]
  },
  '10': {
    summary: "Title 10, the Zoning Code, is the comprehensive ordinance that regulates land use and development throughout the city.",
    purpose: "To guide the physical development of the city in a manner that promotes public health, safety, and welfare by ensuring compatible land uses and orderly growth, while protecting the city's unique natural and cultural resources.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes a variety of zoning districts, from residential to commercial and industrial, and includes specific form-based codes for certain areas. Each district has detailed regulations for permitted uses, building form, and site design."
      },
      {
        title: "Subdivision Regulations",
        content: "Contains the rules and procedures for dividing land into smaller parcels, ensuring new developments are properly designed and served by public infrastructure."
      },
      {
        title: "Sign Regulations",
        content: "Regulates the size, location, and type of signs allowed in different zoning districts."
      },
      {
        title: "Dark Sky Protection",
        content: "As the world's first International Dark Sky City, Flagstaff has very strict regulations on outdoor lighting to minimize light pollution and protect the night sky for astronomy and public enjoyment."
      }
    ]
  },
  '11': {
    summary: "Title 11, Utilities, governs the city's water and wastewater utility systems, including rates and service rules.",
    purpose: "To provide for the safe and efficient operation of the city's public utilities and to establish fair rates for service.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to the city water and sewer systems and the conditions for service."
      },
      {
        title: "Water Conservation",
        content: "Includes robust water conservation measures and tiered water rates to encourage efficient water use."
      }
    ]
  }
};
