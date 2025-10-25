
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const AVONDALE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Avondale City Code establishes the foundational legal framework for the entire code. It defines how the code should be interpreted, outlines the city's general powers, and sets the general penalty for violations where a specific penalty is not provided.",
    purpose: "To provide a consistent legal basis for the interpretation, application, and enforcement of the City Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the City Code where a more specific penalty is not stated. This ensures all parts of the code are enforceable."
      },
      {
        title: "Severability Clause",
        content: "States that if any part of the City Code is declared invalid by a court, the remaining portions of the code will remain in effect."
      }
    ]
  },
  '2': {
    summary: "Chapter 2, Administration, details the structure and organization of Avondale's city government. It defines the roles and responsibilities of the City Council, the City Manager, and various city departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form of Government",
        content: "The City operates under a Council-Manager form of government. The City Council is the legislative body, setting policy and approving the budget, while the City Manager, appointed by the Council, serves as the chief executive officer responsible for daily operations."
      },
      {
        title: "City Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Administrative Departments",
        content: "Establishes the various departments of the city government (e.g., Police, Public Works, Development Services) and outlines their primary functions under the direction of the City Manager."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory bodies to provide recommendations and public input to the City Council on specific issues."
      }
    ]
  },
  '3': {
    summary: "Chapter 3, Advertising, regulates signs and other forms of outdoor advertising to ensure they do not create safety hazards or visual blight. The full text can be viewed on the <a href='https://www.avondaleaz.gov/government/departments/city-clerk/city-code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official city website</a>.",
    purpose: "To balance the need for business identification with the desire to maintain a safe and aesthetically pleasing community by regulating the size, location, and type of signs.",
    keyProvisions: [
      {
        title: "Permit Requirement",
        content: "A sign permit is required for the installation or alteration of most signs to ensure compliance with the code."
      },
      {
        title: "Prohibited Signs",
        content: "Prohibits certain types of signs, such as animated signs, roof signs, and signs that obstruct traffic views."
      },
      {
        title: "Temporary Signs",
        content: "Provides specific rules for temporary signs like banners and real estate signs, limiting their size and duration."
      }
    ]
  },
  '5': {
    summary: "Chapter 5, Animals, sets the rules for keeping animals within the city to protect public health and safety and ensure animal welfare. It is enforced by the city's animal control services. The full text can be viewed on the <a href='https://www.avondaleaz.gov/government/departments/city-clerk/city-code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official city website</a>.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and ensure the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "All dogs over four months old must be vaccinated against rabies and licensed with the county."
      },
      {
        title: "Leash Law",
        content: "Prohibits dogs from running 'at large.' Dogs must be confined to the owner's property or restrained by a leash."
      },
      {
        title: "Nuisance Animals",
        content: "It is unlawful for an owner to permit an animal to become a nuisance by making excessive noise or damaging property."
      }
    ]
  },
  '6': {
    summary: "Chapter 6, Buildings and Building Regulations, adopts the set of international and national codes that govern all construction within Avondale. The full text can be viewed on the <a href='https://www.avondaleaz.gov/government/departments/city-clerk/city-code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official city website</a>.",
    purpose: "To safeguard public health, safety, and general welfare by establishing minimum standards for the design, construction, and maintenance of all buildings.",
    keyProvisions: [
      {
        title: "Adopted Codes",
        content: "The city adopts specific editions of the International Building Code (IBC), International Residential Code (IRC), and National Electrical Code (NEC)."
      },
      {
        title: "Permit Requirement",
        content: "A building permit is required for most new construction, additions, and alterations to ensure compliance with safety codes."
      },
      {
        title: "Inspections",
        content: "Mandatory inspections are required at various stages of construction to verify that work is being done correctly and safely."
      }
    ]
  }
};
