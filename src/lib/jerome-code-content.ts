
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const JEROME_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Jerome Town Code establishes the foundational legal framework for all other titles. It provides rules for interpreting the code, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the Town Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Interpretation",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty, typically a civil violation or misdemeanor, for any violation of the Town Code where a more specific penalty is not stated. This ensures all parts of the code are enforceable."
      }
    ]
  },
  '3': {
    summary: "Title III, Administration, details the structure and organization of the town government. It defines the roles and responsibilities of the Town Council, town manager, and various town departments, reflecting the governance of one of America's most famous historic mining towns.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The Town operates under a Council-Manager form of government. The Town Council is the legislative body, while the Town Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and four Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      }
    ]
  },
  '5': {
    summary: "Title V, Public Works, governs the essential infrastructure and services managed by the town, which are particularly challenging given Jerome's location on a steep hillside.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the town's unique public infrastructure.",
    keyProvisions: [
      {
        title: "Street and Sidewalk Regulations",
        content: "Establishes rules for the use and maintenance of public streets and sidewalks, which are often narrow and winding. Prohibits obstructions that could impede pedestrian or vehicle traffic."
      },
      {
        title: "Water and Wastewater Systems",
        content: "Contains regulations for connecting to and using the town's water and sewer utilities, critical for public health in a dense, historic town."
      }
    ]
  },
  '9': {
    summary: "Title IX, General Regulations, covers a wide range of rules related to public health, safety, and welfare, adapted to Jerome's unique environment.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Animal Control",
        content: "Regulates the keeping of animals, requires licensing and vaccination of dogs, and prohibits animals from running at large."
      },
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and excessive noise to be public nuisances and provides a process for their abatement."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various businesses, a vital component of Jerome's tourism-based economy.",
    purpose: "To provide for the regulation of businesses to protect the public welfare and ensure commercial activities are compatible with the town's historic character.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating in Jerome to obtain a Town Business License."
      },
      {
        title: "Alcoholic Beverages",
        content: "Sets forth local procedures for reviewing applications for state liquor licenses, a key regulation for the town's many restaurants and bars."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses to maintain public order and safety.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the Town of Jerome.",
    keyProvisions: [
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      },
      {
        title: "Public Consumption of Alcohol",
        content: "Regulates the consumption of alcoholic beverages in public places, balancing tourism needs with public order."
      }
    ]
  },
  '15': {
    summary: "Title XV, Land Development Code, contains the comprehensive Zoning and Historic Preservation regulations for the town. This is the most critical code for preserving Jerome's status as a National Historic Landmark.",
    purpose: "To guide the physical development of the town in a manner that preserves its unique and invaluable historic character, protects public safety on steep slopes, and ensures orderly growth.",
    keyProvisions: [
      {
        title: "Historic Overlay District",
        content: "Establishes a historic overlay district covering most of the town. Any exterior alteration, construction, or demolition within this district requires a Certificate of Appropriateness from the Design Review Board."
      },
      {
        title: "Zoning Districts",
        content: "Defines the various residential, commercial, and mixed-use zoning districts, with standards tailored to the town's compact, historic layout."
      },
      {
        title: "Hillside Development",
        content: "Includes strict standards for development on steep slopes to ensure structural stability and minimize visual impact."
      },
      {
        title: "Sign Regulations",
        content: "Contains regulations for signs to ensure they are compatible with the historic character of the town."
      }
    ]
  }
};
