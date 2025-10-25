
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const DEWEY_HUMBOLDT_CODE_CONTENT: Record<string, CodeContent> = {
  '10': {
    summary: "Chapter 10 of the Dewey-Humboldt Town Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the Town Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the Town Code where a more specific penalty is not stated, making all parts of the code enforceable."
      }
    ]
  },
  '30': {
    summary: "Chapter 30, Town Government, details the structure and organization of the town government. It defines the roles and responsibilities of the Town Council, Town Manager, and various departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The Town operates under a Council-Manager form of government. The Town Council is the legislative body, while the Town Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      }
    ]
  },
  '90': {
    summary: "Chapter 90 governs the use and maintenance of public ways and property, including streets, sidewalks, and other public places.",
    purpose: "To ensure that public property and rights-of-way are kept safe, clean, and accessible for public use.",
    keyProvisions: [
      {
        title: "Street and Sidewalk Obstructions",
        content: "Makes it unlawful to place obstructions on any public street or sidewalk without a permit from the town."
      },
      {
        title: "Encroachment Permits",
        content: "Requires a permit for any private construction or activity that encroaches upon the public right-of-way."
      }
    ]
  },
  '110': {
    summary: "Chapter 110, Business Regulations, governs the licensing and operation of various businesses within the town to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License Requirement",
        content: "Requires every person engaging in or conducting business within the town to obtain a Town Business License."
      },
      {
        title: "Special Events",
        content: "A permit is required for temporary events like festivals or parades to ensure public safety and coordination of town services."
      }
    ]
  },
  '130': {
    summary: "Chapter 130, General Offenses, defines various local-level public order offenses to maintain a peaceful and safe community.",
    purpose: "To prohibit conduct that is disruptive to public peace, safety, and order and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Nuisances",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and excessive noise to be public nuisances and provides a process for their abatement."
      },
      {
        title: "Curfew for Minors",
        content: "Establishes a curfew, making it unlawful for minors to be in public places during specified late-night hours without a valid reason."
      },
      {
        title: "Animal Control",
        content: "Adopts the Yavapai County Dog Control Ordinance by reference, making county rules regarding licensing, leash laws, and nuisance animals enforceable within the town."
      }
    ]
  },
  '150': {
    summary: "Chapter 150, Building Regulations, adopts the set of codes that govern all building and construction within the town.",
    purpose: "To safeguard public health and safety by establishing minimum standards for the design, construction, and maintenance of all buildings.",
    keyProvisions: [
      {
        title: "Adoption of Codes",
        content: "The town adopts specific editions of the International Building Code, Residential Code, and other related technical codes."
      },
      {
        title: "Building Permits",
        content: "A building permit is required for most new construction, additions, and significant alterations to ensure compliance with safety codes."
      }
    ]
  },
  '151': {
    summary: "Chapter 151, the Zoning Ordinance, is the primary tool for regulating land use and development within the Town of Dewey-Humboldt.",
    purpose: "To guide the physical development of the town in a manner that promotes its rural character, public health, and safety, while ensuring orderly growth.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential and commercial zoning districts, specifying permitted uses, density, and development standards for each."
      },
      {
        title: "Subdivision Regulations",
        content: "Contains the rules and procedures for dividing land into smaller parcels, ensuring new developments are properly designed and served by public infrastructure."
      },
      {
        title: "Sign Code",
        content: "Regulates the size, location, and type of signs allowed in different zoning districts to ensure safety and maintain aesthetics."
      }
    ]
  }
};
