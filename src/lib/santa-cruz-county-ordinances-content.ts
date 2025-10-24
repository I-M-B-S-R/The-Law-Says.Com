
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const SANTA_CRUZ_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Santa Cruz County Zoning Regulations manage land use to ensure organized development and protect the county's unique character. The full regulations are available on the <a href='https://www.santacruzcountyaz.gov/435/Planning-Zoning' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Santa Cruz County website</a>.",
    purpose: "To promote public health, safety, and general welfare by regulating land use, preventing overcrowding, and ensuring that development is compatible with the surrounding area and the county's general plan.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various zoning districts such as residential, commercial, and industrial. Each district specifies permitted uses, lot sizes, setbacks, and other dimensional standards for development."
      },
      {
        title: "Conditional Use Permits",
        content: "Requires a special permit for certain land uses that could have a significant impact. This involves a public hearing process to review the proposed use and mitigate potential negative effects."
      },
      {
        title: "Home Occupations",
        content: "Provides standards for conducting small-scale business activities within a residence, ensuring they do not negatively impact the surrounding neighborhood."
      },
      {
        title: "Enforcement",
        content: "Details the procedures for handling zoning violations, including issuing notices, imposing fines, and pursuing legal action to achieve compliance."
      }
    ]
  },
  'subdivision': {
    summary: "The Santa Cruz County Subdivision Regulations govern how land is divided into smaller parcels. This ordinance ensures new subdivisions are designed safely and are equipped with necessary infrastructure. The regulations are available on the <a href='https://www.santacruzcountyaz.gov/435/Planning-Zoning' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Santa Cruz County website</a>.",
    purpose: "To provide for the orderly growth of the county by ensuring that new land divisions are well-planned, have adequate access, drainage, and utility services, and conform to the county's master plan.",
    keyProvisions: [
      {
        title: "Plat Approval Process",
        content: "Defines the detailed process for submitting preliminary and final subdivision plats for review by county staff, the Planning & Zoning Commission, and the Board of Supervisors."
      },
      {
        title: "Infrastructure Standards",
        content: "Sets minimum design and construction standards for streets, drainage systems, and utility easements that must be built by the developer."
      },
      {
        title: "Water Supply Requirements",
        content: "Requires subdividers to demonstrate that an adequate and potable water supply is available for the lots being created, in compliance with state and county requirements."
      },
      {
        title: "Lot and Street Layout",
        content: "Provides design standards for lots, blocks, and streets to create functional, safe, and efficient neighborhoods."
      }
    ]
  },
  'floodplain': {
    summary: "The Santa Cruz County Floodplain and Erosion Hazard Management Ordinance is in place to minimize flood and erosion risks. The ordinance restricts development in flood-prone and erosion-prone areas. The regulations can be viewed on the <a href='https://www.santacruzcountyaz.gov/DocumentCenter/View/95/Floodplain-and-Erosion-Hazard-Management-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Santa Cruz County website</a>.",
    purpose: "To protect human life, health, and property by regulating development within designated flood and erosion hazard areas, thereby minimizing public and private losses.",
    keyProvisions: [
      {
        title: "Hazard Area Mapping",
        content: "Adopts official Flood Insurance Rate Maps (FIRMs) from FEMA and local erosion hazard maps to identify areas requiring special regulation."
      },
      {
        title: "Development Permit",
        content: "Requires a floodplain use permit for any development—including construction, filling, and grading—within a designated hazard area."
      },
      {
        title: "Construction Requirements",
        content: "Specifies construction standards, including the requirement to elevate or floodproof structures to protect them from flood damage."
      },
      {
        title: "Floodway Protection",
        content: "Strictly prohibits development within the regulatory floodway that would obstruct flood flows and cause an increase in flood heights."
      }
    ]
  },
  'animal-control': {
    summary: "Santa Cruz County Ordinance No. 2005-02 provides for the care and control of animals to protect public health and safety. The ordinance covers licensing, rabies control, and stray animals. The rules are enforced by the <a href='https://www.santacruzcountyaz.gov/432/Animal-Control' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Animal Control Department</a>.",
    purpose: "To regulate the keeping of animals in order to prevent public nuisances, protect residents from harm, and ensure the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Dog Licensing and Vaccination",
        content: "All dogs over four months of age must be vaccinated against rabies and licensed with the county. The license tag must be affixed to the dog at all times."
      },
      {
        title: "Running at Large",
        content: "Prohibits owners from allowing their dogs or other domestic animals to run at large. Animals must be confined or on a leash."
      },
      {
        title: "Public Nuisance",
        content: "It is unlawful for an owner to permit an animal to become a public nuisance by excessive barking, damaging property, or menacing pedestrians."
      },
      {
        title: "Cruelty and Neglect",
        content: "The ordinance prohibits animal cruelty and neglect, mandating that owners provide sufficient food, water, shelter, and veterinary care."
      }
    ]
  }
};
