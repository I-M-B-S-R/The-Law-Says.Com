
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const PINAL_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Pinal County Zoning Ordinance regulates land use in unincorporated areas to ensure orderly development and protect property values. The full ordinance is available on the <a href='https://www.pinal.gov/DocumentCenter/View/2030/Pinal-County-Zoning-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Pinal County website</a>.",
    purpose: "To promote public health, safety, and general welfare by regulating land use, preventing land use conflicts, and ensuring development is consistent with the county's comprehensive plan.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various zoning districts, including rural, residential, commercial, and industrial zones. Each district has specific regulations for permitted uses, building setbacks, lot sizes, and height restrictions."
      },
      {
        title: "Special Use Permits",
        content: "Requires a special permit for certain land uses that may have a greater impact on the community. This process includes a public hearing to review the proposed use for compatibility with the surrounding area."
      },
      {
        title: "Parking and Loading",
        content: "Sets forth minimum requirements for off-street parking and loading spaces for various types of land uses to ensure adequate access and prevent traffic congestion."
      },
      {
        title: "Enforcement",
        content: "Outlines the procedures for addressing violations of the zoning ordinance, including investigation, notice, and potential penalties to ensure compliance."
      }
    ]
  },
  'subdivision': {
    summary: "The Pinal County Subdivision Regulations control the division of land into smaller lots. These rules ensure that new land divisions are well-planned and provide for necessary infrastructure. The full text can be found on the <a href='https://www.pinal.gov/DocumentCenter/View/2029/Pinal-County-Subdivision-Regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Pinal County website</a>.",
    purpose: "To ensure that new subdivisions are created in an orderly manner, providing for safe access, adequate drainage, and utility services, thereby protecting public health and property values.",
    keyProvisions: [
      {
        title: "Plat Approval",
        content: "Defines the process for submitting and approving subdivision plats, including requirements for preliminary and final plats to ensure a thorough review of the proposed land division."
      },
      {
        title: "Infrastructure Standards",
        content: "Sets minimum design and construction standards for streets, drainage facilities, and utility easements that must be installed by the developer."
      },
      {
        title: "Water and Sewer",
        content: "Requires developers to provide proof of an adequate water supply and an approved method of sewage disposal for the new lots, in compliance with state regulations."
      },
      {
        title: "Lot Design",
        content: "Provides guidelines for the design of lots to ensure they are appropriate for their intended use and have proper access and drainage."
      }
    ]
  },
  'floodplain': {
    summary: "The Pinal County Floodplain Management Ordinance is designed to minimize flood risks. The ordinance restricts development in flood-prone areas and sets specific construction standards for any structures built in these zones. Find the regulations on the <a href='https://www.pinal.gov/DocumentCenter/View/2026/Floodplain-Management-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Pinal County website</a>.",
    purpose: "To protect human life and health, minimize property damage, and encourage the wise use of floodplains by managing development in areas identified as having a flood hazard.",
    keyProvisions: [
      {
        title: "Flood Hazard Identification",
        content: "The county adopts official Flood Insurance Rate Maps (FIRMs) from FEMA to identify areas of special flood hazard."
      },
      {
        title: "Permit Requirement",
        content: "A floodplain use permit is required for all development, including construction, filling, and grading, within a designated flood hazard area."
      },
      {
        title: "Construction Standards",
        content: "Sets minimum construction standards for structures in floodplains, such as elevating the lowest floor of residential buildings above the base flood elevation."
      },
      {
        title: "Floodway Protection",
        content: "Prohibits development in the regulatory floodway that would obstruct floodwaters and cause any rise in the base flood elevation."
      }
    ]
  },
  'animal-control': {
    summary: "Pinal County's animal control ordinance (Title 8 of the County Code) establishes the rules for keeping domestic animals. It is designed to protect public health and safety and to ensure animals are treated humanely. The ordinance is enforced by Pinal County Animal Care & Control. The full code is available on the <a href='https://www.pinal.gov/DocumentCenter/View/1000/Title-8---Animal-Control' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Pinal County website</a>.",
    purpose: "To ensure the health, safety, and welfare of the residents of Pinal County by regulating the interactions between humans and animals, preventing nuisances, and providing for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Dog Licensing",
        content: "All dogs three months of age or older must be licensed by the county. A current rabies vaccination is required to obtain or renew a license."
      },
      {
        title: "Leash Law",
        content: "It is unlawful for a dog to be at large. Dogs must be confined to the owner's premises or restrained by a leash when in public areas."
      },
      {
        title: "Animal Cruelty",
        content: "Prohibits various forms of animal cruelty, including intentional abuse, neglect, and abandonment. It mandates that owners provide adequate food, water, shelter, and veterinary care."
      },
      {
        title: "Nuisance and Vicious Animals",
        content: "Defines what constitutes a nuisance animal (e.g., excessive barking) and establishes a legal process for declaring an animal 'vicious' after an attack, which imposes strict confinement requirements."
      }
    ]
  }
};
