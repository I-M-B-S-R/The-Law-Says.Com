
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const CAVE_CREEK_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Cave Creek Town Code establishes the foundational legal framework for the entire code. It sets forth rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
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
    summary: "Title III, Administration, details the structure and organization of Cave Creek's town government. It defines the roles and responsibilities of the Town Council, Town Manager, and various departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and six Councilmembers elected at large. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Town Manager",
        content: "The Town Council appoints a Town Manager who serves as the chief administrative officer, responsible for the day-to-day operations and management of town staff."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory bodies, such as the Planning and Zoning Commission and Board of Adjustment, to provide recommendations and public input to the Town Council."
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
    summary: "Title VII is the Cave Creek Traffic Code. It adopts state traffic laws and establishes additional local regulations for vehicle operation, parking, and unique local conditions related to equestrian and trail use.",
    purpose: "To provide for the safe and orderly movement of vehicular, pedestrian, and equestrian traffic within the Town of Cave Creek.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The Town adopts by reference the comprehensive traffic laws found in Title 28 of the Arizona Revised Statutes, making state traffic laws fully enforceable within the town."
      },
      {
        title: "Parking Regulations",
        content: "Prohibits parking in certain areas and for extended periods on public streets. It includes specific regulations related to parking in the historic Town Core."
      },
      {
        title: "Equestrian Crossings",
        content: "Establishes designated equestrian crossings and gives right-of-way to horse riders at these specific locations, reflecting the town's equestrian character."
      }
    ]
  },
  '9': {
    summary: "Title IX, General Regulations, covers a wide range of rules related to public health, safety, and welfare, with a strong focus on preserving the town's unique character. It includes animal control, nuisance abatement, and dark sky protection.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances or endanger the community's unique natural and cultural environment.",
    keyProvisions: [
      {
        title: "Animal Control",
        content: "Regulates the keeping of animals, requires licensing and vaccination of dogs, and prohibits animals from running at large. Includes specific provisions related to keeping horses and other large animals."
      },
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown vegetation, accumulation of trash, and excessive noise to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Exterior Lighting (Dark Sky)",
        content: "Establishes strict standards for outdoor lighting to minimize light pollution, reduce glare, and preserve the visibility of the night sky, a key feature of the town's identity."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various businesses within the town, with special attention to activities that affect the town's unique western character and tourism economy.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public welfare and ensure compatibility with the town's character.",
    keyProvisions: [
      {
        title: "Business License",
        content: "Requires most businesses operating in Cave Creek to obtain a Town Business License."
      },
      {
        title: "Home Occupations",
        content: "Allows for certain small-scale businesses to be operated from a residence, provided they meet strict criteria to ensure they do not negatively impact the neighborhood's residential character."
      },
      {
        title: "Special Events",
        content: "A Special Event Permit is required for temporary events, such as festivals, art shows, and concerts, to manage impacts on traffic, parking, and public safety."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses to maintain public order and safety.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the Town of Cave Creek.",
    keyProvisions: [
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      },
      {
        title: "Firearms and Weapons",
        content: "Regulates the discharge of firearms within town limits, consistent with state law, to ensure public safety."
      }
    ]
  },
  '15': {
    summary: "Title XV, Land Usage, contains the comprehensive Zoning Ordinance for the town. It is a critical document that regulates land use and development with a strong emphasis on preserving the town's natural desert landscape, western character, and scenic vistas.",
    purpose: "To guide the physical development of the town in a manner that protects its unique aesthetic, preserves natural open space, and ensures high-quality, environmentally sensitive development.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes large-lot residential zoning districts as the predominant land use, with limited commercial areas. The code is designed to maintain a low-density, rural character."
      },
      {
        title: "Hillside Development",
        content: "Implements very strict regulations for any development on hillsides to minimize grading (scarring), preserve natural topography, and protect scenic views."
      },
      {
        title: "Architectural and Design Guidelines",
        content: "Requires new construction and remodels to adhere to specific architectural and design guidelines that promote a 'western' or 'desert rural' aesthetic, emphasizing natural materials and earth-tone colors."
      },
      {
        title: "Sign Regulations",
        content: "Contains highly restrictive sign regulations to minimize visual clutter and ensure signs are compatible with the town's western character."
      }
    ]
  }
};
