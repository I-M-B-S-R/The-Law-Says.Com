
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const YUMA_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Yuma County Zoning Ordinance regulates land use in unincorporated areas to ensure orderly growth and protect community character, which is vital for an area with significant agricultural and border activity. The full ordinance is available on the <a href='https://www.yumacountyaz.gov/government/development-services/planning-zoning/zoning-ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yuma County website</a>.",
    purpose: "To promote public health, safety, and general welfare by regulating land use, preventing land use conflicts, and ensuring development is consistent with the county's comprehensive plan.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various zoning districts, including agricultural, residential, commercial, and industrial. Each district has specific regulations for permitted uses, setbacks, lot sizes, and building heights."
      },
      {
        title: "Conditional Use Permits",
        content: "Requires a special permit for certain land uses that may have unique impacts. The process includes a public hearing to review the proposed use for compatibility with the surrounding area and to apply mitigating conditions."
      },
      {
        title: "Parking and Loading Standards",
        content: "Sets forth minimum requirements for off-street parking and loading spaces for various types of land uses to ensure adequate access and prevent traffic congestion."
      },
      {
        title: "Enforcement",
        content: "Outlines the procedures for addressing zoning violations, including investigation, notice, and potential penalties to ensure compliance."
      }
    ]
  },
  'subdivision': {
    summary: "The Yuma County Subdivision Regulations control the division of land into smaller lots. These rules ensure that new land divisions are well-planned and provide for necessary infrastructure like roads and utilities. The full text can be found on the <a href='https://www.yumacountyaz.gov/government/development-services/planning-zoning/subdivision-regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yuma County website</a>.",
    purpose: "To ensure that new subdivisions are created in an orderly manner, providing for safe access, adequate drainage, and utility services, thereby protecting public health and property values.",
    keyProvisions: [
      {
        title: "Plat Approval Process",
        content: "Defines the process for submitting and approving subdivision plats, including requirements for preliminary and final plats to ensure a thorough review of the proposed land division."
      },
      {
        title: "Infrastructure Standards",
        content: "Sets minimum design and construction standards for streets, drainage facilities, and utility easements that must be installed by the developer."
      },
      {
        title: "Water and Sewer",
        content: "Requires developers to provide proof of an adequate water supply and an approved method of sewage disposal for the new lots."
      },
      {
        title: "Lot Design",
        content: "Provides guidelines for the design of lots to ensure they are appropriate for their intended use and have proper access and drainage."
      }
    ]
  },
  'floodplain': {
    summary: "The Yuma County Floodplain Regulations are designed to minimize flood risks, particularly important given the county's location along the Colorado River. The ordinance restricts development in flood-prone areas. Find the regulations on the <a href='https://www.yumacountyaz.gov/government/development-services/flood-control' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yuma County website</a>.",
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
        title: "Colorado River Management",
        content: "Includes specific provisions related to development along the Colorado River to ensure safety and preserve the river's functions."
      }
    ]
  },
  'animal-control': {
    summary: "Yuma County's Animal Control Ordinance, Title 6 of the County Code, provides the regulations for the keeping of animals to protect public health and safety. The ordinance is enforced by the Yuma County Animal Control. The full code is available on the <a href='https://www.yumacountyaz.gov/government/animal-control/ordinances-and-fees' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yuma County website</a>.",
    purpose: "To prevent public nuisance, protect residents from animal-inflicted injuries, and provide for the humane treatment of animals within the county.",
    keyProvisions: [
      {
        title: "License and Vaccination",
        content: "Every dog over four months of age must have a current rabies vaccination and be licensed by the county. The license tag must be attached to the dog's collar or harness."
      },
      {
        title: "Stray and At-Large Animals",
        content: "Prohibits dogs from being 'at large'. Dogs must be confined to the owner's property or be under control by means of a leash."
      },
      {
        title: "Public Nuisance",
        content: "It is unlawful for an owner to allow an animal to become a public nuisance. This includes frequent, habitual barking or howling, and unsanitary conditions."
      },
      {
        title: "Vicious Animals",
        content: "Provides a procedure for investigating and declaring an animal as vicious after an unprovoked attack. A vicious animal declaration results in strict confinement requirements and other controls."
      }
    ]
  }
};
