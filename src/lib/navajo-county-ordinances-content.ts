
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const NAVAJO_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Navajo County Zoning Ordinance regulates land use within the unincorporated areas to ensure orderly growth and protect property values. The full ordinance can be found on the <a href='https://www.navajocountyaz.gov/Departments/Planning-and-Zoning/Ordinances-and-Codes' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Navajo County website</a>.",
    purpose: "To promote public health, safety, and general welfare by regulating land use, preventing land use conflicts, and ensuring that development is consistent with the county's comprehensive plan.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various zoning districts, including Rural, Residential, Commercial, and Industrial. Each district has specific regulations for permitted uses, building setbacks, lot sizes, and other standards."
      },
      {
        title: "Conditional Use Permits",
        content: "Requires a special permit for certain land uses that may have a greater impact on the community. This process includes a public hearing to review the proposed use for compatibility with the surrounding area."
      },
      {
        title: "Home Occupations",
        content: "Provides standards for operating a small business from a residence, ensuring that such activities do not negatively affect the character of the neighborhood."
      },
      {
        title: "Enforcement",
        content: "Outlines the procedures for addressing zoning violations, including issuing notices and potential penalties, to ensure compliance with the ordinance."
      }
    ]
  },
  'subdivision': {
    summary: "The Navajo County Subdivision Regulations govern the division of land into smaller parcels. These rules ensure that new subdivisions are safe, well-planned, and adequately served by public facilities. The regulations can be accessed on the <a href='https://www.navajocountyaz.gov/Departments/Planning-and-Zoning/Ordinances-and-Codes' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Navajo County website</a>.",
    purpose: "To provide for the orderly growth of the county by ensuring that new land divisions have adequate access, drainage, and utility services, and conform to county standards.",
    keyProvisions: [
      {
        title: "Plat Approval Process",
        content: "Defines the detailed process for submitting preliminary and final subdivision plats for review by county staff and approval by the Board of Supervisors."
      },
      {
        title: "Infrastructure Standards",
        content: "Sets minimum design and construction standards for streets, drainage ways, and utility easements that must be constructed by the developer."
      },
      {
        title: "Water Supply",
        content: "Requires subdividers to demonstrate that an adequate and potable water supply is available for the lots being created, in accordance with state and county rules."
      },
      {
        title: "Lot and Street Design",
        content: "Provides design standards for the layout of lots, blocks, and streets to create functional and efficient neighborhoods."
      }
    ]
  },
  'flood-damage': {
    summary: "The Navajo County Flood Damage Prevention Ordinance is designed to minimize flood risk to life and property by regulating development in flood-prone areas. The regulations can be found on the <a href='https://www.navajocountyaz.gov/Departments/Planning-and-Zoning/Ordinances-and-Codes' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Navajo County website</a>.",
    purpose: "To protect human life and health, minimize property damage, and encourage the wise use of floodplains by managing development in areas identified as having a flood hazard.",
    keyProvisions: [
      {
        title: "Flood Hazard Mapping",
        content: "The county adopts official Flood Insurance Rate Maps (FIRMs) from FEMA to identify areas of special flood hazard."
      },
      {
        title: "Permit Requirement",
        content: "A floodplain development permit is required for any development activity within a designated flood hazard area, including construction, grading, and filling."
      },
      {
        title: "Construction Standards",
        content: "Specifies construction standards for structures in floodplains, such as requiring the lowest floor of new residential buildings to be elevated above the Base Flood Elevation (BFE)."
      },
      {
        title: "Floodway Protection",
        content: "Prohibits development within the designated floodway that would obstruct flood flows and cause an increase in flood heights."
      }
    ]
  }
};
