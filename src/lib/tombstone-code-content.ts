
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const TOMBSTONE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Tombstone City Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the City Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Interpretation",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the City Code where a more specific penalty is not stated, making all parts of the code enforceable."
      }
    ]
  },
  '3': {
    summary: "Title III, Administration, details the structure and organization of the city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Mayor and Council",
        content: "The City is governed by a Mayor and Council who are responsible for setting policy, approving the budget, and overseeing the administration of the city."
      },
      {
        title: "City Departments",
        content: "Establishes the various departments of the city government and outlines their primary functions under the direction of the Mayor and Council."
      }
    ]
  },
  '5': {
    summary: "Title V, Public Works, governs the essential infrastructure and services managed by the city, including regulations for streets, public property, and utilities.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the city's public infrastructure.",
    keyProvisions: [
      {
        title: "Street and Sidewalk Regulations",
        content: "Establishes rules for the use and maintenance of public streets and sidewalks, including prohibiting obstructions and regulating construction within the public right-of-way."
      },
      {
        title: "Utility Systems",
        content: "Contains regulations for connecting to and using the city's water and sewer utilities to protect public health and ensure system integrity."
      }
    ]
  },
  '7': {
    summary: "Title VII is the Tombstone Traffic Code. It adopts state traffic laws and establishes additional local regulations for vehicle operation and parking, with special consideration for the historic district.",
    purpose: "To provide for the safe and orderly movement of vehicular and pedestrian traffic within the City of Tombstone.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The City adopts by reference the comprehensive traffic laws found in Title 28 of the Arizona Revised Statutes."
      },
      {
        title: "Historic District Traffic",
        content: "Includes specific rules for traffic and parking within the historic district, including regulations for horse-drawn carriages and other period transportation."
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
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various businesses within the city, with a focus on activities related to its status as a major tourist destination.",
    purpose: "To provide for the regulation of businesses to protect the public welfare and ensure commercial activities are compatible with the city's historic character.",
    keyProvisions: [
      {
        title: "Business Licenses",
        content: "Requires most businesses operating in Tombstone to obtain a City Business License."
      },
      {
        title: "Street Performers and Vendors",
        content: "Regulates the activities of street performers and vendors, particularly within the historic district, to ensure public safety and access."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses to maintain public order and safety within the city, with unique provisions related to its historic theme.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the City of Tombstone.",
    keyProvisions: [
      {
        title: "Firearms in the Historic District",
        content: "Regulates the carrying of firearms within the historic district. While modern firearms are subject to state law, the code has specific rules for replica and period-appropriate firearms used in historical reenactments."
      },
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      }
    ]
  },
  '15': {
    summary: "Title XV, Land Usage, contains the comprehensive Zoning and Historic Preservation regulations for the city. It is the most critical code for preserving Tombstone's status as a National Historic Landmark.",
    purpose: "To guide the physical development of the city in a manner that preserves its unique and invaluable historic character, protects public safety, and ensures orderly growth.",
    keyProvisions: [
      {
        title: "Historic District Regulations",
        content: "Establishes a historic district with strict controls on the exterior appearance of all buildings. Any alteration, construction, or demolition requires a Certificate of Appropriateness from the Historic District Commission."
      },
      {
        title: "Zoning Districts",
        content: "Defines the various residential and commercial zoning districts, with standards tailored to maintain the historic layout and character of the city."
      },
      {
        title: "Sign Regulations",
        content: "Contains highly restrictive regulations for signs to ensure they are compatible with the 1880s character of the historic district."
      }
    ]
  }
};
