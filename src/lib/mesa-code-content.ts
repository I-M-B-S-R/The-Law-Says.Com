
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const MESA_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title 1 of the Mesa City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
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
  '3': {
    summary: "Title 3, Administration, details the structure and organization of the city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments.",
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
    summary: "Title 4, Business Regulations, governs the licensing and operation of various businesses within the city.",
    purpose: "To provide for the regulation of businesses to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating in Mesa to obtain a City Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades."
      },
      {
        title: "Alarm Systems",
        content: "Regulates security and fire alarm systems to reduce false alarms and ensure proper operation."
      }
    ]
  },
  '5': {
    summary: "Title 5, Revenue and Finance, governs the city's fiscal procedures. It covers the budget process, purchasing, and the collection of taxes, including the local Transaction Privilege (Sales) Tax.",
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
  '6': {
    summary: "Title 6, Public Peace, Morals and Welfare, defines a range of public order offenses to maintain a peaceful and safe community.",
    purpose: "To prohibit conduct that is disruptive to public peace, safety, and order and to provide penalties for such conduct.",
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
        title: "Curfew for Minors",
        content: "Establishes a curfew, making it unlawful for minors to be in public places during specified late-night hours without a valid reason."
      }
    ]
  },
  '7': {
    summary: "Title 7, Public Utilities, governs the city's extensive utility systems, including electricity, natural gas, water, and wastewater services.",
    purpose: "To provide for the safe and efficient operation of the city's public utilities and to establish fair rates for service.",
    keyProvisions: [
      {
        title: "Service Regulations",
        content: "Establishes rules for connecting to and using city utility systems, including conditions for service and billing procedures."
      },
      {
        title: "Water Conservation",
        content: "Includes measures and potential restrictions to conserve water, a critical resource in the desert."
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
        content: "Sets rules for the use of city parks, including park hours and prohibited activities like alcohol consumption without a permit."
      }
    ]
  },
  '9': {
    summary: "Title 9, Building Regulations, adopts the set of codes that govern all building and construction within the city.",
    purpose: "To safeguard public health and safety by establishing minimum standards for the design, construction, and maintenance of all buildings.",
    keyProvisions: [
      {
        title: "Adoption of Codes",
        content: "The city adopts specific editions of the International Building Code, Residential Code, Fire Code, and other related technical codes."
      },
      {
        title: "Building Permits",
        content: "A building permit is required for most new construction, additions, and significant alterations to ensure compliance with safety codes."
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
        content: "Establishes local parking regulations, including rules for time-limited parking, prohibiting parking in fire lanes, and regulations for parking in residential areas."
      }
    ]
  },
  '11': {
    summary: "Title 11, the Zoning Ordinance, is the comprehensive ordinance that regulates land use and development throughout the city.",
    purpose: "To guide the physical development of the city in a manner that promotes public health, safety, and welfare by ensuring compatible land uses and orderly growth.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes a wide variety of zoning districts and specifies the permitted uses, density, and development standards for each."
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
