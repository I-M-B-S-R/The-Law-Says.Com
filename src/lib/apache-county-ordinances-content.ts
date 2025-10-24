
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const APACHE_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Apache County Zoning Ordinance governs land use within the unincorporated areas of the county. It sets regulations for different types of land use to ensure organized development. The full text can be found at the <a href='https://www.apachecountyaz.gov/Zoning-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Apache County website</a>.",
    purpose: "To protect and promote the public health, safety, and general welfare of Apache County residents by guiding development, preventing overcrowding, and protecting property values.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes residential, agricultural, commercial, and industrial zoning districts, each with specific rules for permitted uses, lot sizes, and building setbacks."
      },
      {
        title: "Conditional Use Permits",
        content: "Requires a special permit for certain land uses that may impact the surrounding area, involving a public hearing and review process to ensure compatibility."
      },
      {
        title: "Sign Regulations",
        content: "Sets standards for the size, location, and type of signs allowed in different zoning districts."
      },
      {
        title: "Enforcement",
        content: "Details the procedures for addressing zoning violations, including notices, fines, and potential legal action."
      }
    ]
  },
  'subdivision': {
    summary: "The Apache County Subdivision Regulations control the division of land into smaller lots. This ordinance ensures that new subdivisions are designed safely and have necessary infrastructure. The full regulations are available at the <a href='https://www.apachecountyaz.gov/Subdivision-Regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Apache County website</a>.",
    purpose: "To ensure that land division is done in an orderly manner, providing for adequate roads, drainage, and utility access for new lots, thereby protecting public health and safety.",
    keyProvisions: [
      {
        title: "Plat Approval Process",
        content: "Defines the requirements for submitting preliminary and final plats for any land division, ensuring a thorough review by county staff and the Planning & Zoning Commission."
      },
      {
        title: "Infrastructure Standards",
        content: "Sets minimum design and construction standards for streets, drainage systems, and utility easements within new subdivisions."
      },
      {
        title: "Water Supply",
        content: "Requires developers to provide evidence of an adequate and potable water supply for the lots being created."
      },
      {
        title: "Lot and Block Design",
        content: "Provides guidelines for the logical design of lots and blocks to create functional and accessible neighborhoods."
      }
    ]
  },
  'floodplain': {
    summary: "The Apache County Floodplain Regulations are designed to minimize flood risk to life and property. The ordinance restricts development in areas identified as flood hazards and sets construction standards for any structures built in those areas. The regulations can be found on the <a href='https://www.apachecountyaz.gov/Floodplain-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Apache County website</a>.",
    purpose: "To protect human life and health, minimize property damage, and encourage the wise use of floodplains by regulating development in flood-prone areas.",
    keyProvisions: [
      {
        title: "Flood Hazard Areas",
        content: "Adopts official Flood Insurance Rate Maps (FIRMs) from FEMA to identify areas of special flood hazard."
      },
      {
        title: "Development Permit",
        content: "Requires a floodplain use permit before any construction or development, including filling or grading, can begin within a designated flood hazard area."
      },
      {
        title: "Construction Standards",
        content: "Sets specific standards for structures in floodplains, such as requiring the lowest floor to be elevated above the base flood elevation and requiring flood-resistant materials."
      },
      {
        title: "Prohibited Encroachments",
        content: "Prohibits development in certain areas, such as designated floodways, that would obstruct floodwaters and increase flood heights."
      }
    ]
  }
};
