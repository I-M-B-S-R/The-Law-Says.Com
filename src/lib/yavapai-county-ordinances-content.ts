
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const YAVAPAI_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'planning-zoning': {
    summary: "The Yavapai County Planning and Zoning Ordinance governs land use and development within the unincorporated areas of the county. It establishes zoning districts, regulations for land use, and procedures for obtaining development approvals. The full text can be found at the <a href='https://yavapaiaz.gov/dev-serv/Ordinances-and-Regulations/ArtMID/1865/ArticleID/3133/Yavapai-County-Planning-and-Zoning-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yavapai County website</a>.",
    purpose: "To protect and promote the public health, safety, and general welfare of Yavapai County residents. It aims to guide the county's growth and development in an orderly manner, conserve property values, and protect the natural environment.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "The ordinance establishes various residential, commercial, and industrial zoning districts. Each district has specific regulations regarding permitted uses, minimum lot sizes, setbacks (the distance required between a building and property lines), and building heights."
      },
      {
        title: "Use Permits",
        content: "Certain land uses that may have a greater impact on their surroundings require a Conditional Use Permit (CUP). This involves a public hearing process where the Planning and Zoning Commission and the Board of Supervisors review the proposed use to ensure it is compatible with the area."
      },
      {
        title: "Site Plan Review",
        content: "Most commercial and industrial developments require a site plan review to ensure compliance with standards for parking, landscaping, drainage, and building design."
      },
      {
        title: "Enforcement",
        content: "The ordinance outlines the procedures for enforcing zoning regulations, including issuing notices of violation and pursuing legal action against violators."
      }
    ]
  },
  'subdivision': {
    summary: "The Yavapai County Subdivision Ordinance regulates the division of land into smaller parcels for sale or development. It sets the standards and procedures for creating subdivisions to ensure they are properly designed and provided with necessary infrastructure. The full ordinance is available at the <a href='https://yavapaiaz.gov/dev-serv/Ordinances-and-Regulations/ArtMID/1865/ArticleID/3134/Yavapai-County-Subdivision-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yavapai County website</a>.",
    purpose: "To ensure that the subdivision of land and the subsequent development are consistent with the county's General Plan and to provide for the orderly and safe development of the county. It aims to protect public health, safety, and welfare by ensuring adequate roads, water supply, and sewage disposal for new lots.",
    keyProvisions: [
      {
        title: "Platting Requirements",
        content: "Any division of land into four or more parcels requires the preparation and approval of a subdivision plat. The ordinance details the required information for preliminary and final plats."
      },
      {
        title: "Infrastructure Standards",
        content: "The ordinance sets minimum standards for public improvements within a subdivision, including road design and construction, drainage systems, and the provision of utilities."
      },
      {
        title: "Water Adequacy",
        content: "A key provision requires developers to demonstrate that there is an adequate water supply for the proposed subdivision, consistent with Arizona's groundwater management laws."
      },
      {
        title: "Park and Open Space Dedication",
        content: "The ordinance may require developers to dedicate a portion of the land for public parks or open space, or to pay a fee in lieu of dedication."
      }
    ]
  },
  'building-code': {
    summary: "Yavapai County has adopted a modified version of the International Building Code (IBC) to regulate construction within the county. This ordinance sets the minimum standards for building design, materials, and construction to ensure structures are safe and habitable. More details can be found at the <a href='https://yavapaiaz.gov/dev-serv/Ordinances-and-Regulations/ArtMID/1865/ArticleID/3136/Yavapai-County-Building-Code-Ordinance-2019-2' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yavapai County website</a>.",
    purpose: "To protect public health, safety, and general welfare by regulating the design, construction, quality of materials, use, and occupancy of buildings and structures within Yavapai County.",
    keyProvisions: [
      {
        title: "Adoption of Codes",
        content: "The ordinance officially adopts specific versions of the International Building Code, Residential Code, Mechanical Code, and Plumbing Code, with certain local amendments."
      },
      {
        title: "Permit Requirements",
        content: "A building permit is required for most new construction, alterations, additions, or repairs to a building. The ordinance outlines the process for applying for a permit, including the submission of construction plans for review."
      },
      {
        title: "Inspections",
        content: "The county's building inspectors are required to perform inspections at various stages of construction (e.g., foundation, framing, electrical) to ensure the work complies with the approved plans and code requirements."
      },
      {
        title: "Certificate of Occupancy",
        content: "A Certificate of Occupancy is issued after all final inspections have been passed. This certificate is required before a new building can be legally occupied."
      }
    ]
  },
  'fire-code': {
    summary: "The Yavapai County Fire Code Ordinance adopts a modified version of the International Fire Code to reduce the risk of fire and improve life safety. It sets standards for fire prevention, fire protection systems, and access for emergency responders. The full code is available at the <a href='https://yavapaiaz.gov/dev-serv/Ordinances-and-Regulations/ArtMID/1865/ArticleID/3137/Yavapai-County-Fire-Code-Ordinance-2019-3' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yavapai County website</a>.",
    purpose: "To establish the minimum requirements consistent with nationally recognized good practice for providing a reasonable level of life safety and property protection from the hazards of fire, explosion, or dangerous conditions in new and existing buildings, structures, and premises.",
    keyProvisions: [
      {
        title: "Fire Apparatus Access Roads",
        content: "Specifies minimum width, grade, and surface requirements for roads and driveways to ensure that fire trucks and other emergency vehicles can safely access properties."
      },
      {
        title: "Defensible Space",
        content: "Requires property owners in wildland-urban interface areas to create 'defensible space' by clearing flammable vegetation around structures to reduce wildfire risk."
      },
      {
        title: "Fire Protection Systems",
        content: "Sets requirements for the installation and maintenance of fire alarms and automatic fire sprinkler systems in certain types of buildings."
      },
      {
        title: "Fire Permits",
        content: "Requires permits for certain activities that pose a fire risk, such as operating a place of assembly, storing flammable liquids, or conducting blasting operations."
      }
    ]
  },
  'outdoor-lighting': {
    summary: "The Yavapai County Outdoor Lighting Ordinance, also known as the 'Dark Sky' ordinance, is designed to protect the dark night skies that are a valuable natural resource in the region. It regulates outdoor lighting fixtures to minimize light pollution, glare, and light trespass. The ordinance is available on the <a href='https://yavapaiaz.gov/dev-serv/Ordinances-and-Regulations/ArtMID/1865/ArticleID/3138/Yavapai-County-Outdoor-Lighting-Ordinance-2022-3' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yavapai County website</a>.",
    purpose: "To preserve and protect the dark skies of Yavapai County for the benefit of astronomy, tourism, and the natural environment, while still providing for nighttime safety and security.",
    keyProvisions: [
      {
        title: "Fixture Shielding",
        content: "The ordinance requires that all outdoor light fixtures be 'fully shielded,' meaning that the light source is not visible from off the property and all light is directed downward."
      },
      {
        title: "Light Trespass",
        content: "Prohibits light from a property from spilling over onto adjacent properties or public rights-of-way."
      },
      {
        title: "Prohibited Lighting",
        content: "Bans certain types of lighting, such as searchlights and upward-facing architectural lighting."
      },
      {
        title: "Exemptions",
        content: "Provides exemptions for certain uses, such as temporary holiday lighting and emergency lighting."
      }
    ]
  },
  'addressing': {
    summary: "The Yavapai County Addressing Ordinance establishes a uniform system for assigning street addresses to properties in the unincorporated areas of the county. This system is critical for emergency services, mail delivery, and general navigation. The full ordinance can be viewed on the <a href='https://yavapaiaz.gov/dev-serv/Ordinances-and-Regulations/ArtMID/1865/ArticleID/3135/Yavapai-County-Addressing-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yavapai County website</a>.",
    purpose: "To provide for the orderly naming of roads and the assignment of property numbers to assist the general public and emergency service providers in locating properties and buildings.",
    keyProvisions: [
      {
        title: "Address Assignment",
        content: "The ordinance gives the Development Services department the authority to assign and, if necessary, change street names and address numbers to ensure a logical and consistent system."
      },
      {
        title: "Display of Address",
        content: "Requires property owners to display their assigned address numbers in a location that is clearly visible and legible from the street."
      },
      {
        title: "Road Naming",
        content: "Sets standards for naming roads, prohibiting the use of duplicate or confusingly similar names within the county."
      },
      {
        title: "Enforcement",
        content: "Provides a mechanism for enforcing the ordinance, recognizing that properly displayed addresses are essential for rapid emergency response."
      }
    ]
  },
  'grading': {
    summary: "The Yavapai County Grading Ordinance regulates the movement of earth (grading, excavation, and filling) on properties within the unincorporated county. It is designed to control soil erosion, protect drainage channels, and prevent hazards related to unstable slopes. Find the full ordinance on the <a href='https://yavapaiaz.gov/dev-serv/Ordinances-and-Regulations/ArtMID/1865/ArticleID/3140/Yavapai-County-Grading-Ordinance-2022-5' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yavapai County website</a>.",
    purpose: "To safeguard life, limb, property, and the public welfare by regulating grading on private property. It aims to prevent soil erosion, protect natural drainage ways, and ensure the stability of graded slopes.",
    keyProvisions: [
      {
        title: "Permit Requirement",
        content: "A grading permit is required for most earthmoving activities that exceed certain volume or depth thresholds. This ensures that the county can review the plans before the work begins."
      },
      {
        title: "Erosion Control",
        content: "The ordinance requires that grading plans include measures to control erosion and sedimentation during and after construction. This protects water quality in nearby streams and rivers."
      },
      {
        title: "Drainage Protection",
        content: "Grading must not obstruct or divert natural drainage channels in a way that would adversely affect neighboring properties."
      },
      {
        title: "Slope Stability",
        content: "Sets standards for the maximum steepness of cut-and-fill slopes and may require a geotechnical engineering report to ensure the stability of proposed grading on steep terrain."
      }
    ]
  },
  'rv-tiny-home': {
    summary: "This ordinance provides regulations for the use of Recreational Vehicles (RVs) and tiny homes as residences in certain parts of unincorporated Yavapai County. It addresses a growing interest in alternative housing types while balancing neighborhood character and safety. The full ordinance is available at the <a href='https://yavapaiaz.gov/dev-serv/Ordinances-and-Regulations/ArtMID/1865/ArticleID/3139/Yavapai-County-RV-and-Tiny-Home-Ordinance' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Yavapai County website</a>.",
    purpose: "To provide standards for the placement and use of RVs and tiny homes as dwellings, ensuring they meet minimum health and safety standards while providing a more affordable housing option.",
    keyProvisions: [
      {
        title: "Tiny Home Requirements",
        content: "A 'tiny home' is typically defined as a dwelling between 160 and 400 square feet. To be used as a permanent residence, it must be placed on a permanent foundation and be connected to an approved water, septic, and utility systems. It must also meet certain building code standards."
      },
      {
        title: "RV as a Residence",
        content: "The ordinance allows for an RV to be used as a permanent residence in certain rural zoning districts, provided it is connected to an approved septic system and water source. This is distinct from temporary or recreational RV use."
      },
      {
        title: "Permitting",
        content: "A permit is required for the placement of a tiny home or an RV used as a permanent residence. This ensures that the unit and its utility connections are inspected for compliance with health and safety codes."
      },
      {
        title: "Zoning District Limitations",
        content: "The use of RVs and tiny homes as permanent residences is generally limited to more rural and agricultural zoning districts and is not permitted in more densely populated suburban-style subdivisions."
      }
    ]
  }
};
