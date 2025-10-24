
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const PIMA_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "Pima County's Zoning Code is codified in Title 18 of the Pima County Code. It regulates land use, development density, and building placement in the unincorporated areas of the county, balancing growth with the preservation of the Sonoran Desert. The full code is available on the <a href='https://library.municode.com/az/pima_county/codes/code_of_ordinances?nodeId=TIT18ZO' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Pima County Municode website</a>.",
    purpose: "To promote public health, safety, and welfare by guiding the location and use of buildings and land, conserving property values, and protecting the county's unique natural and cultural resources.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes a wide range of zoning districts from rural homesteading (RH) and suburban ranch (SR) to various residential, commercial, and industrial zones. Each district has specific regulations on permitted uses, lot sizes, setbacks, and building height."
      },
      {
        title: "Sonoran Desert Conservation Plan (SDCP)",
        content: "Many zoning regulations are integrated with the SDCP. This includes overlays and specific standards for protecting critical riparian habitats, biological corridors, and steep slopes to minimize the impact of development on the desert ecosystem."
      },
      {
        title: "Conditional Use Procedures",
        content: "Requires a Conditional Use Permit for certain land uses that may have significant impacts. This process involves a public hearing and review to ensure the use is compatible with the surrounding area and to apply mitigating conditions."
      },
      {
        title: "Site Plan Review",
        content: "Mandates a site plan review for most non-residential and multi-family projects to ensure compliance with standards for access, parking, landscaping, drainage, and native plant preservation."
      }
    ]
  },
  'subdivision': {
    summary: "The Pima County Subdivision and Development Standards govern the process of dividing land. These rules ensure that new lots and developments are designed safely and are served by adequate infrastructure. The standards are found within the Zoning Code, primarily in <a href='https://library.municode.com/az/pima_county/codes/code_of_ordinances?nodeId=TIT18ZO_CH18.71SUDE' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Chapter 18.71</a>.",
    purpose: "To ensure that land division occurs in an orderly manner, providing for safe and efficient street systems, adequate drainage, and the necessary public and private utilities, all while respecting the natural environment.",
    keyProvisions: [
      {
        title: "Tentative and Final Plat Process",
        content: "Defines the detailed requirements for submitting and obtaining approval for subdivision plats, ensuring a thorough review of the proposed design by county departments."
      },
      {
        title: "Street and Access Standards",
        content: "Sets minimum design and construction standards for public and private streets, ensuring safe access for residents and emergency services."
      },
      {
        title: "Drainage and Flood Control",
        content: "Requires developers to manage stormwater and ensure that new development does not increase flood risk to adjacent or downstream properties."
      },
      {
        title: "Water and Sewer Service",
        content: "Mandates that subdividers provide proof of an adequate water supply and an approved method for sewage disposal before plat approval."
      }
    ]
  },
  'floodplain': {
    summary: "The Pima County Floodplain Management Ordinance, found in <a href='https://library.municode.com/az/pima_county/codes/code_of_ordinances?nodeId=TIT16FLCO' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 16 of the County Code</a>, is designed to minimize flood risk. It regulates all development within designated floodplains to protect lives and property. It is administered by the Pima County Regional Flood Control District.",
    purpose: "To protect human life and health, minimize property damage, and encourage the wise use of floodplains by regulating development in flood-prone areas.",
    keyProvisions: [
      {
        title: "Floodplain Use Permit",
        content: "A permit is required for any form of development within a regulated floodplain, including construction, grading, filling, and placement of manufactured homes."
      },
      {
        title: "Elevation and Floodproofing",
        content: "Requires the lowest floor of new residential structures to be elevated at least one foot above the Base Flood Elevation (BFE). Non-residential structures can be flood-proofed instead."
      },
      {
        title: "Floodway Restrictions",
        content: "Strictly limits development within the regulatory floodway (the main channel of a stream) to ensure that there is no increase in flood heights."
      },
      {
        title: "Riparian Habitat Protection",
        content: "The ordinance includes specific provisions to protect and mitigate impacts to valuable riparian habitat along watercourses, often requiring preservation of native vegetation."
      }
    ]
  },
  'animal-control': {
    summary: "The Pima County Animal Control Ordinance, codified as <a href='https://library.municode.com/az/pima_county/codes/code_of_ordinances?nodeId=TIT6AN' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 6 of the County Code</a>, sets the rules for the care and control of domestic animals. It is enforced by Pima Animal Care Center (PACC).",
    purpose: "To protect public health and safety from animal-related problems (like bites and diseases) and to ensure the humane treatment of animals within the community.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs over three months old to be licensed with the county and to have a current rabies vaccination. This is a primary tool for rabies control."
      },
      {
        title: "Leash Law",
        content: "Mandates that dogs must be on a leash and under the control of a responsible person when off the owner's property. This helps prevent bites, fights, and traffic incidents."
      },
      {
        title: "Cruelty and Neglect",
        content: "Makes it unlawful to intentionally or negligently subject an animal to cruel mistreatment or to fail to provide necessary food, water, shelter, and medical care."
      },
      {
        title: "Dangerous Animals",
        content: "Establishes a legal process for declaring an animal 'dangerous' or 'vicious' following an unprovoked attack. A dangerous declaration can lead to strict confinement requirements for the animal."
      }
    ]
  }
};
