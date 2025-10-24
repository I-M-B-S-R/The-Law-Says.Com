
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const MARICOPA_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Maricopa County Zoning Ordinance is a comprehensive document that regulates land use in the vast unincorporated areas of the nation's fourth-largest county. It governs how land can be used, the density of development, and the size and location of buildings. The full ordinance is available on the <a href='https://www.maricopa.gov/392/Zoning-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Maricopa County website</a>.",
    purpose: "To promote the health, safety, and general welfare of the public by guiding the orderly development of the county, conserving property values, and ensuring compatibility between different land uses.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes a wide array of zoning districts, from rural and residential to commercial, industrial, and special-purpose zones like Airport and Power Plant districts. Each has detailed regulations for permitted uses, setbacks, height limits, and lot coverage."
      },
      {
        title: "Special Use Permits",
        content: "Requires a special permit for uses that may have a unique impact on an area. This process involves public hearings and review by the Planning & Zoning Commission and the Board of Supervisors to impose conditions that mitigate potential negative impacts."
      },
      {
        title: "Plan of Development",
        content: "Requires a detailed Plan of Development for most commercial, industrial, and multi-family residential projects. This review ensures compliance with standards for access, parking, drainage, landscaping, and building design."
      },
      {
        title: "Sign Regulations",
        content: "Provides comprehensive regulations for all types of signs, controlling their size, height, location, and lighting to ensure safety and prevent visual clutter."
      }
    ]
  },
  'subdivision': {
    summary: "The Maricopa County Subdivision Regulations govern the division of land into smaller lots. These rules ensure that new communities are well-planned, safe, and adequately served by public infrastructure. The full regulations are on the <a href='https://www.maricopa.gov/4352/Subdivision-Regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Maricopa County website</a>.",
    purpose: "To provide for the orderly growth of the county, ensuring that new subdivisions have safe access, adequate drainage, and provisions for utilities and public services.",
    keyProvisions: [
      {
        title: "Platting Process",
        content: "Defines the detailed requirements for preliminary and final subdivision plats, ensuring a thorough engineering and planning review of any proposed land division."
      },
      {
        title: "Street and Drainage Standards",
        content: "Sets minimum design and construction standards for all public and private streets, as well as for drainage infrastructure to manage storm water."
      },
      {
        title: "Water and Sewer Requirements",
        content: "Requires developers to provide proof of an adequate water supply and an approved method for sewage disposal before a plat can be approved."
      },
      {
        title: "Lot and Block Design",
        content: "Provides standards for the layout of lots and blocks to ensure functional and accessible neighborhood design."
      }
    ]
  },
  'floodplain': {
    summary: "The Maricopa County Floodplain Regulations are administered by the Flood Control District of Maricopa County. They are designed to minimize the risk of flood damage by regulating development within floodplains. The regulations are available on the <a href='https://www.maricopa.gov/418/Floodplain-Regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Flood Control District's website</a>.",
    purpose: "To protect human life, health, and property from the hazards of flooding by managing development in flood-prone areas.",
    keyProvisions: [
      {
        title: "Permit Requirement",
        content: "A Floodplain Use Permit is required for almost all development activities within a regulated floodplain, including construction, grading, filling, and storage of materials."
      },
      {
        title: "Elevation Requirements",
        content: "Requires the lowest floor of new or substantially improved residential structures to be elevated to or above the Base Flood Elevation (BFE), which is the elevation of the 100-year flood."
      },
      {
        title: "Floodway Restrictions",
        content: "Strictly prohibits encroachments, including fill and new construction, within the regulatory floodway that would result in any increase in flood levels."
      },
      {
        title: "Drainage",
        content: "Establishes standards for the design of drainage facilities to ensure that development does not adversely impact downstream properties by increasing flood flows."
      }
    ]
  },
  'building': {
    summary: "Maricopa County adopts and enforces a suite of building codes to ensure the safety and structural integrity of buildings in the unincorporated areas. These codes are based on the International Code Council's models with local amendments. Information is available on the <a href='https://www.maricopa.gov/367/Codes-Standards' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Maricopa County website</a>.",
    purpose: "To safeguard public health, safety, and general welfare through the regulation of building design, construction, quality of materials, use, and occupancy.",
    keyProvisions: [
      {
        title: "Adopted Codes",
        content: "The county adopts specific editions of the International Building Code (IBC), International Residential Code (IRC), International Plumbing Code (IPC), and International Mechanical Code (IMC), among others."
      },
      {
        title: "Permitting Process",
        content: "Building permits are required for most new construction, additions, and alterations. The process involves submitting plans for review to ensure they comply with all applicable codes."
      },
      {
        title: "Inspections",
        content: "Mandatory inspections are required at various stages of construction (e.g., foundation, framing, plumbing, electrical) to verify that the work is being done according to the approved plans and codes."
      },
      {
        title: "Certificate of Occupancy",
        content: "A Certificate of Occupancy is issued after the building has passed all required inspections, certifying that it is safe to be occupied."
      }
    ]
  },
  'air-quality': {
    summary: "Maricopa County's Air Quality Regulations are some of the most stringent in the country, designed to combat air pollution in a region prone to high levels of ozone and particulate matter. These rules are administered by the Maricopa County Air Quality Department (MCAQD). Regulations can be found on the <a href='https://www.maricopa.gov/1655/Rules-Regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>MCAQD website</a>.",
    purpose: "To control existing and future sources of air pollution to protect public health and the environment, and to achieve and maintain federal health-based air quality standards.",
    keyProvisions: [
      {
        title: "Permitting of Industrial Sources",
        content: "Requires industrial and commercial sources of air pollution (such as power plants, factories, and gas stations) to obtain permits that limit their emissions and require the use of pollution control technologies."
      },
      {
        title: "Dust Control (Rule 310)",
        content: "A key regulation that requires construction sites, unpaved roads, and other sources of fugitive dust to implement dust control measures, such as watering or applying soil stabilizers. This is critical for controlling particulate matter (PM-10) pollution."
      },
      {
        title: "Vehicle Emissions",
        content: "While inspections are run by the state, the county's plans rely on the Vehicle Emissions Inspection Program (VEIP) to reduce pollution from cars and trucks."
      },
      {
        title: "No-Burn Days",
        content: "The department can declare 'No-Burn Days' during periods of high pollution, restricting the use of wood-burning fireplaces and other activities that create smoke."
      }
    ]
  },
  'animal-care': {
    summary: "The Maricopa County Animal Care & Control Ordinance sets the rules for pet ownership and animal welfare in the county. It covers licensing, vaccinations, leash laws, and the handling of stray or dangerous animals. The ordinance is available on the <a href='https://www.maricopa.gov/224/Ordinances' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Animal Care & Control website</a>.",
    purpose: "To protect public health and safety from animal-related problems and to ensure the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Dog Licensing and Vaccination",
        content: "Requires all dogs over three months of age to be licensed with the county and have a current rabies vaccination. This is a key tool for rabies control."
      },
      {
        title: "Leash Law",
        content: "Requires dogs to be on a leash and under the control of their owner when off the owner's property. This prevents bites, fights, and traffic accidents."
      },
      {
        title: "Dangerous and Vicious Animals",
        content: "Establishes a legal process for declaring a dog 'vicious' or 'dangerous' after an attack. This can result in strict confinement requirements or, in severe cases, euthanasia."
      },
      {
        title: "Cruelty and Neglect",
        content: "Prohibits animal cruelty and neglect, making it illegal to fail to provide an animal with necessary food, water, shelter, and medical care."
      }
    ]
  },
  'waste-management': {
    summary: "The Maricopa County Solid Waste Management Ordinance governs the storage, collection, and disposal of trash and recycling in the unincorporated areas. It is designed to ensure that waste is handled in a way that is safe and sanitary. Information can be found on the <a href='https://www.maricopa.gov/4350/Solid-Waste' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Maricopa County website</a>.",
    purpose: "To protect public health and the environment by establishing standards for the safe and sanitary management of solid waste.",
    keyProvisions: [
      {
        title: "Mandatory Service",
        content: "In many designated service areas, residents are required to subscribe to waste collection service from the county's designated hauler. This prevents illegal dumping and unsanitary conditions."
      },
      {
        title: "Storage of Waste",
        content: "Sets standards for how trash and recycling must be stored, requiring containers with tight-fitting lids to control pests and odors."
      },
      {
        title: "Illegal Dumping",
        content: "Strictly prohibits the dumping of any solid waste on public or private property that is not a permitted disposal site. Violators are subject to significant fines."
      },
      {
        title: "Hazardous Waste",
        content: "Prohibits the disposal of household hazardous waste (like paint, pesticides, and batteries) in regular trash and provides information on proper disposal methods through collection events."
      }
    ]
  }
};
