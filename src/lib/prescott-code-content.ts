
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const PRESCOTT_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Prescott City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
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
    summary: "Title II, Administration, details the structure and organization of the city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments.",
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
    summary: "Title III, Revenue and Taxation, governs the city's fiscal procedures. It covers the budget process, purchasing, and the collection of taxes, including the local Transaction Privilege (Sales) Tax.",
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
    summary: "Title IV, Business and License Regulations, governs the licensing and operation of various businesses within the city.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating in Prescott to obtain a City Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events that affect ordinary public access or services, such as festivals and parades on the Courthouse Plaza."
      }
    ]
  },
  '5': {
    summary: "Title V, Health and Sanitation, covers a wide range of rules related to public health and welfare, including nuisance abatement and solid waste disposal.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and hazardous buildings to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Solid Waste",
        content: "Regulates the storage and disposal of garbage and refuse, requiring proper containers and mandating collection to prevent health hazards."
      }
    ]
  },
  '6': {
    summary: "Title VI, Animals, establishes the rules for the keeping of animals within the city to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Adopts Yavapai County regulations requiring all dogs to be licensed and vaccinated against rabies, which is enforceable within city limits."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs and other domestic animals from running 'at large.' Animals must be confined to the owner's property or restrained by a leash."
      }
    ]
  },
  '7': {
    summary: "Title VII, Peace, Morals and Good Order, defines various local-level public order offenses to maintain a peaceful and safe community.",
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
  '8': {
    summary: "Title VIII contains the city's traffic code. It adopts state traffic laws and establishes local regulations for parking and vehicle operation.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic on city streets.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The city adopts the comprehensive traffic laws of the State of Arizona by reference."
      },
      {
        title: "Parking Rules",
        content: "Establishes local parking regulations, including rules for time-limited parking in the downtown area and prohibiting parking in fire lanes."
      }
    ]
  },
  '10': {
    summary: "Title X, the Land Development Code, is the comprehensive ordinance that regulates land use and development throughout the city, with a strong focus on preserving its historic and natural character.",
    purpose: "To guide the physical development of the city in a manner that promotes public health, safety, and welfare, while protecting the city's unique historic resources and natural setting.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential and commercial zoning districts and specifies the permitted uses, density, and development standards for each."
      },
      {
        title: "Historic Preservation",
        content: "Includes robust regulations for the preservation of historic properties and districts, particularly around the downtown Courthouse Plaza area."
      },
      {
        title: "Subdivision Regulations",
        content: "Contains the rules and procedures for dividing land into smaller parcels, ensuring new developments are properly designed and served by public infrastructure."
      }
    ]
  }
};

    