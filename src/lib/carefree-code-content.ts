
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const CAREFREE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Carefree Town Code establishes the foundational legal framework for the entire code. It sets forth rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
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
    summary: "Title III, Administration, details the structure and organization of Carefree's town government. It defines the roles and responsibilities of the Town Council, Town Administrator, and various departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and six Councilmembers elected at large. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Town Administrator",
        content: "The Town Council appoints a Town Administrator who serves as the chief administrative officer, responsible for the day-to-day operations and management of town staff."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory bodies, such as the Planning and Zoning Commission, to provide recommendations and public input to the Town Council on specific issues."
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
        title: "Drainage and Floodplain Management",
        content: "Includes regulations to manage stormwater and control development within designated floodplains to protect property and public safety."
      },
      {
        title: "Public Property",
        content: "Sets rules for the use and protection of all town-owned property, including buildings and parks."
      }
    ]
  },
  '7': {
    summary: "Title VII is the Carefree Traffic Code. It adopts state traffic laws and establishes additional local regulations for vehicle operation, parking, and traffic control to ensure safety on town streets.",
    purpose: "To provide for the safe and orderly movement of vehicular and pedestrian traffic within the Town of Carefree.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The Town adopts by reference the comprehensive traffic laws found in Title 28 of the Arizona Revised Statutes, making state traffic laws fully enforceable within the town."
      },
      {
        title: "Parking Regulations",
        content: "Prohibits parking in certain areas and for extended periods on public streets. It includes specific regulations for residential vehicle parking to maintain neighborhood aesthetics."
      },
      {
        title: "Golf Carts and Off-Road Vehicles",
        content: "Regulates the operation of golf carts and similar vehicles on public streets, typically restricting them to streets with lower speed limits."
      }
    ]
  },
  '9': {
    summary: "Title IX, General Regulations, covers a wide range of rules related to public health, safety, and welfare, including animal control and nuisance abatement.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances or endanger the community.",
    keyProvisions: [
      {
        title: "Animal Control",
        content: "Regulates the keeping of animals, requires licensing and vaccination of dogs, and prohibits animals from running at large."
      },
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown vegetation, accumulation of trash, and excessive noise to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Dark Sky Protection",
        content: "Establishes standards for outdoor lighting to minimize light pollution, reduce glare, and preserve the visibility of the night sky, a key feature of the town's character."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various businesses within the town to ensure they operate in a fair, safe, and orderly manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "Requires most businesses operating in Carefree to obtain a Town Business License."
      },
      {
        title: "Home Occupations",
        content: "Allows for certain small-scale businesses to be operated from a residence, provided they meet strict criteria to ensure they do not negatively impact the neighborhood's residential character."
      },
      {
        title: "Special Events",
        content: "A Special Event Permit is required for temporary events that affect ordinary public access or services, such as festivals and art shows."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses to maintain public order and safety.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the Town of Carefree.",
    keyProvisions: [
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      },
      {
        title: "Property Maintenance",
        content: "Establishes minimum standards for the maintenance of private property to prevent blight and protect property values."
      }
    ]
  },
  '15': {
    summary: "Title XV, Land Usage, contains the comprehensive Zoning Ordinance for the town, which regulates land use and development with a strong emphasis on preserving the town's unique, low-density, desert character.",
    purpose: "To guide the physical development of the town in a manner that protects its unique aesthetic, preserves natural open space, and ensures high-quality, low-impact development.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes large-lot residential zoning districts as the predominant land use. Commercial districts are limited to a defined town center."
      },
      {
        title: "Hillside Development",
        content: "Implements strict regulations for development on hillsides to minimize grading, preserve natural topography, and protect scenic views."
      },
      {
        title: "Design Guidelines",
        content: "Requires new construction and remodels, particularly in the Town Center, to adhere to specific architectural and design guidelines to maintain a cohesive 'Carefree' character."
      },
      {
        title: "Sign Regulations",
        content: "Contains highly restrictive sign regulations to minimize visual clutter and maintain the scenic quality of the town."
      }
    ]
  }
};
