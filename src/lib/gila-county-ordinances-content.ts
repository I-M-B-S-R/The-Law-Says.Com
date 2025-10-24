
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const GILA_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Gila County Zoning Ordinance regulates land use in unincorporated areas to ensure orderly growth and protect property values. It dictates what can be built and where. The full text is available on the <a href='https://www.gilacountyaz.gov/government/community_development/planning_and_zoning/zoning_ordinance.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Gila County website</a>.",
    purpose: "To promote public health, safety, and general welfare by regulating land use, preventing overcrowding, and ensuring compatible development throughout the county.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential, commercial, and industrial districts, each with specific rules for setbacks, lot sizes, and permitted uses."
      },
      {
        title: "Conditional Use Permits",
        content: "Requires a special permit for certain land uses that might impact the surrounding area, involving a public hearing to ensure the use is appropriate for the location."
      },
      {
        title: "Site Plan Review",
        content: "Mandates a review of development plans for most commercial and multi-family projects to ensure they meet standards for parking, landscaping, and access."
      },
      {
        title: "Enforcement",
        content: "Details the procedures for addressing zoning violations, including notices, fines, and potential legal action to ensure compliance."
      }
    ]
  },
  'subdivision': {
    summary: "The Gila County Subdivision Ordinance governs the division of land into smaller parcels. This ensures that new lots are created in a way that provides for safe access, utilities, and drainage. The regulations can be found on the <a href='https://www.gilacountyaz.gov/government/community_development/docs/SUBDIVISION_REGS_2004.pdf' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Gila County website</a>.",
    purpose: "To ensure that land division is done in an orderly and safe manner, providing for adequate public facilities and services for new lots and protecting the county's character.",
    keyProvisions: [
      {
        title: "Plat Approval Process",
        content: "Defines the requirements for submitting preliminary and final subdivision plats for review and approval by the county, ensuring a thorough planning process."
      },
      {
        title: "Infrastructure Standards",
        content: "Sets minimum design and construction standards for roads, drainage systems, and utility easements within new subdivisions to ensure they are safe and durable."
      },
      {
        title: "Water Supply",
        content: "Requires developers to provide proof of an adequate and potable water supply for the lots being created, a critical step in an arid region."
      },
      {
        title: "Lot and Street Design",
        content: "Provides guidelines for the logical and functional design of lots, blocks, and streets to create accessible and well-organized neighborhoods."
      }
    ]
  },
  'floodplain': {
    summary: "The Gila County Floodplain Regulations are designed to minimize flood risk to life and property by managing development in flood-prone areas. The ordinance restricts construction in floodplains and sets standards for any structures built there. The rules are available on the <a href='https://www.gilacountyaz.gov/government/public_works/flood_plain/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Gila County website</a>.",
    purpose: "To protect human life and health, minimize property damage, and encourage the wise use of floodplains by regulating development in areas identified as having a flood hazard.",
    keyProvisions: [
      {
        title: "Flood Hazard Areas",
        content: "Adopts official Flood Insurance Rate Maps (FIRMs) from FEMA to identify areas of special flood hazard and delineate floodways."
      },
      {
        title: "Development Permit",
        content: "Requires a floodplain use permit before any construction, filling, or grading can occur within a designated flood hazard area."
      },
      {
        title: "Construction Standards",
        content: "Sets specific building standards for structures in floodplains, such as requiring the lowest floor to be elevated above the base flood elevation and using flood-resistant materials."
      },
      {
        title: "Encroachment Prohibition",
        content: "Prohibits development within the designated floodway that would obstruct floodwaters and cause an increase in flood heights upstream."
      }
    ]
  },
  'animal-control': {
    summary: "Gila County's Animal Care and Control ordinance (Chapter 10) sets the rules for pet ownership to protect public health and ensure animal welfare. The ordinance covers licensing, leash laws, and the handling of stray animals. The full code is available on the <a href='https://www.gilacountyaz.gov/government/animal_care_and_control/ordinance.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Gila County website</a>.",
    purpose: "To establish regulations that protect the public from animal-related health risks and nuisances, and to provide for the humane care and control of animals in the county.",
    keyProvisions: [
      {
        title: "Dog Licensing",
        content: "Requires all dogs over three months of age to be licensed with the county and wear the license tag. A current rabies vaccination is required to obtain a license."
      },
      {
        title: "Animals at Large",
        content: "It is unlawful for any animal to be 'at large.' Animals must be confined to the owner's property or under direct control, such as on a leash, when in public."
      },
      {
        title: "Animal Nuisance",
        content: "Prohibits owners from allowing their animals to become a nuisance, which includes excessive noise, property damage, or posing a threat to public safety."
      },
      {
        title: "Animal Cruelty",
        content: "Prohibits the cruel treatment of animals, which includes intentional abuse as well as the failure to provide necessary food, water, shelter, and veterinary care."
      }
    ]
  }
};
