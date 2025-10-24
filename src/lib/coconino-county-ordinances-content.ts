
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const COCONINO_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Coconino County Zoning Ordinance regulates land use within the unincorporated areas of the county to ensure orderly development and protect natural resources. The full text can be found on the <a href='https://coconino.az.gov/DocumentCenter/View/115/Zoning-Ordinance-PDF' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Coconino County website</a>.",
    purpose: "To protect and promote the public health, safety, peace, comfort, and general welfare by guiding the use and development of land and buildings, preventing overcrowding, and conserving the county's scenic and natural resources.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes a range of zoning districts from General (G) to various Residential (R) and Commercial (C) zones. Each district has specific permitted uses, conditional uses, and dimensional standards for setbacks, lot size, and building height."
      },
      {
        title: "Resource Protection",
        content: "Includes standards for protecting sensitive natural resources, such as steep slopes, floodplains, and significant riparian and wildlife habitats. Development in these areas is subject to additional review and standards."
      },
      {
        title: "Conditional Use Permits",
        content: "Requires a special permit for certain land uses that may have a significant impact on the surrounding area. The process involves a public hearing and review by the Planning and Zoning Commission to ensure the use is compatible and appropriate."
      },
      {
        title: "Site Plan Review",
        content: "Mandates site plan review for most non-residential and multi-family residential projects to ensure compliance with standards for access, parking, landscaping, drainage, and building design."
      }
    ]
  },
  'subdivision': {
    summary: "The Coconino County Subdivision Regulations govern the division of land into smaller lots. The rules are designed to ensure that new subdivisions are safe, well-planned, and adequately served by public facilities. The full regulations are available at the <a href='https://coconino.az.gov/1198/Subdivision-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Coconino County website</a>.",
    purpose: "To provide for the orderly growth and development of the county, the coordination of streets within subdivisions with other existing or planned streets, and the provision of adequate open spaces, drainage, water supplies, and sanitary facilities.",
    keyProvisions: [
      {
        title: "Plat Approval Process",
        content: "Defines the detailed process for submitting and gaining approval for preliminary and final subdivision plats, ensuring a thorough review of the proposed design and its impacts."
      },
      {
        title: "Improvements and Infrastructure",
        content: "Sets minimum design and construction standards for streets, drainage infrastructure, and utility easements that must be constructed by the subdivider."
      },
      {
        title: "Water Supply Requirements",
        content: "Requires developers to demonstrate an adequate and reliable water supply for the proposed subdivision, consistent with state law and county policies."
      },
      {
        title: "Lot and Block Design",
        content: "Provides standards for the logical design of lots, blocks, and streets to create functional, safe, and accessible neighborhoods."
      }
    ]
  },
  'outdoor-lighting': {
    summary: "Coconino County is a world-renowned 'Dark Sky' community, and its Outdoor Lighting Ordinance is designed to protect this resource by minimizing light pollution. The ordinance regulates all exterior lighting to preserve dark skies for astronomy, wildlife, and residents. The regulations can be found on the <a href='https://coconino.az.gov/DocumentCenter/View/115/Zoning-Ordinance-PDF' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Coconino County website</a> within the Zoning Ordinance (Chapter 17).",
    purpose: "To preserve and protect the dark skies of Coconino County, which are essential for the local observatories, the tourism economy, and the overall quality of life, while providing for nighttime safety and security.",
    keyProvisions: [
      {
        title: "Full Shielding Requirement",
        content: "All outdoor lighting fixtures must be fully shielded, meaning no light is emitted above the horizontal plane of the fixture. This directs light downward where it is needed and prevents it from escaping into the night sky."
      },
      {
        title: "Restrictions on Light Output (Lumens)",
        content: "The ordinance sets limits on the total amount of light (measured in lumens) that can be used for residential and commercial properties, based on the zoning district."
      },
      {
        title: "Color Temperature",
        content: "Specifies that outdoor lighting should have a warm color temperature (typically 3000 Kelvin or less) to reduce the most harmful blue-light components of light pollution."
      },
      {
        title: "Prohibited Lighting",
        content: "Bans certain types of lighting, such as searchlights, laser lights, and upward-facing architectural lighting, except under special permit conditions."
      }
    ]
  }
};
