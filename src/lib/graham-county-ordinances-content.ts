
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const GRAHAM_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Graham County Zoning Ordinance regulates land use within the unincorporated areas to ensure planned and orderly development. The full text can be found on the <a href='https://www.graham.az.gov/DocumentCenter/View/115/Zoning-Ordinance-PDF' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Graham County website</a>.",
    purpose: "To promote public health, safety, and general welfare by regulating land use, preventing overcrowding, and ensuring that development is compatible with the surrounding area and the county's general plan.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various zoning districts such as residential, agricultural, commercial, and industrial. Each district specifies permitted uses, lot sizes, setbacks, and other dimensional standards."
      },
      {
        title: "Conditional Use Permits",
        content: "Requires a special permit for certain land uses that could have a significant impact. This involves a public hearing process to review the proposed use and mitigate potential negative effects."
      },
      {
        title: "Sign Regulations",
        content: "Sets standards for the size, location, and type of signs to maintain public safety and the aesthetic character of the county."
      },
      {
        title: "Enforcement",
        content: "Details the procedures for handling zoning violations, including issuing notices, imposing fines, and pursuing legal action to achieve compliance."
      }
    ]
  },
  'subdivision': {
    summary: "The Graham County Subdivision Regulations govern how land is divided into smaller parcels. This ordinance ensures new subdivisions are designed safely and are equipped with necessary infrastructure. The regulations are available on the <a href='https://www.graham.az.gov/DocumentCenter/View/1198/Subdivision-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Graham County website</a>.",
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
    summary: "The Graham County Floodplain Regulations are in place to minimize flood risk and damage. The ordinance restricts development in flood-prone areas and sets specific construction standards for any structures built in those zones. The regulations can be viewed on the <a href='https://www.graham.az.gov/295/Floodplain-Management' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Graham County website</a>.",
    purpose: "To protect human life, health, and property by regulating development within designated flood hazard areas, thereby minimizing public and private losses due to flood conditions.",
    keyProvisions: [
      {
        title: "Flood Hazard Mapping",
        content: "Adopts official Flood Insurance Rate Maps (FIRMs) from the Federal Emergency Management Agency (FEMA) to identify areas of special flood hazard."
      },
      {
        title: "Development Permit",
        content: "Requires a floodplain use permit for any development—including construction, filling, and grading—within a designated flood hazard area."
      },
      {
        title: "Construction Requirements",
        content: "Specifies construction standards for structures in floodplains, including the requirement to elevate the lowest floor of new residential buildings above the base flood elevation."
      },
      {
        title: "Floodway Protection",
        content: "Strictly prohibits development within the regulatory floodway that would obstruct flood flows and cause an increase in flood heights."
      }
    ]
  },
  'animal-control': {
    summary: "Graham County Ordinance No. 01-16 provides for the control and licensing of dogs. It establishes rules to protect public safety and animal welfare, enforced by the Graham County Animal Control. More information is on the <a href='https://www.graham.az.gov/278/Animal-Control' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Graham County website</a>.",
    purpose: "To provide for the humane and responsible control of dogs to protect the health, safety, and welfare of the residents of Graham County.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "All dogs over four months of age must be vaccinated against rabies and licensed with the county. The license tag must be worn by the dog at all times."
      },
      {
        title: "Dogs at Large",
        content: "It is unlawful for a dog to be at large. Owners must keep their dogs confined to their property or on a leash when in public."
      },
      {
        title: "Impoundment",
        content: "Authorizes animal control officers to impound any dog found at large, any dog that has bitten a person, or any sick or injured animal."
      },
      {
        title: "Public Nuisance",
        content: "Defines a public nuisance dog as one that damages property, barks excessively, or threatens the safety of people or other domestic animals. Owners are required to abate such nuisances."
      }
    ]
  }
};
