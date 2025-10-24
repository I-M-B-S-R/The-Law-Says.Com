
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const GREENLEE_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Greenlee County Zoning Ordinance manages land use in the county's unincorporated areas to ensure organized development and protect community character. The full ordinance is available on the <a href='https://www.greenlee.az.gov/departments/planning-zoning/ordinances-and-regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Greenlee County website</a>.",
    purpose: "To promote the public health, safety, and general welfare by regulating land use, preventing conflicts between land uses, and ensuring that development is consistent with the county's comprehensive plan.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various zoning districts, including residential, commercial, and industrial zones, each with specific regulations for permitted uses, building setbacks, and lot sizes."
      },
      {
        title: "Conditional Use Permits",
        content: "Requires a special permit for certain land uses that may have a greater impact on the community. This process includes a public hearing to review the proposed use for compatibility with the surrounding area."
      },
      {
        title: "Signage",
        content: "Sets standards for the size, placement, and type of signs allowed in different zones to ensure safety and maintain aesthetic quality."
      },
      {
        title: "Enforcement",
        content: "Outlines the procedures for addressing violations of the zoning ordinance, including investigation, notice, and potential penalties to ensure compliance."
      }
    ]
  },
  'subdivision': {
    summary: "The Greenlee County Subdivision Regulations control the division of land into smaller lots. These rules ensure that new land divisions are well-planned and provide for necessary infrastructure like roads and utilities. The full text can be found on the <a href='https://www.greenlee.az.gov/departments/planning-zoning/ordinances-and-regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Greenlee County website</a>.",
    purpose: "To ensure that new subdivisions are created in an orderly manner, providing for safe access, adequate drainage, and utility services, thereby protecting public health and property values.",
    keyProvisions: [
      {
        title: "Plat Approval",
        content: "Defines the process for submitting and approving subdivision plats. This includes requirements for preliminary and final plats to ensure a thorough review of the proposed land division."
      },
      {
        title: "Infrastructure Standards",
        content: "Sets minimum design and construction standards for streets, drainage facilities, and utility easements that must be installed by the developer."
      },
      {
        title: "Water and Sewer",
        content: "Requires developers to show proof of an adequate water supply and an approved method of sewage disposal for the new lots."
      },
      {
        title: "Lot Design",
        content: "Provides guidelines for the design of lots to ensure they are appropriate for their intended use and have proper access and drainage."
      }
    ]
  },
  'floodplain': {
    summary: "The Greenlee County Floodplain Management Ordinance is designed to minimize flood risks to life and property by regulating development in flood-prone areas. The ordinance restricts construction and sets standards for any structures built in these zones. Find the regulations on the <a href='https://www.greenlee.az.gov/departments/planning-zoning/ordinances-and-regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Greenlee County website</a>.",
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
  }
};
