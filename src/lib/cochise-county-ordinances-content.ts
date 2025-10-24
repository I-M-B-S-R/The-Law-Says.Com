
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const COCHISE_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Cochise County Zoning Regulations guide land use in the unincorporated areas of the county. The regulations are intended to ensure compatible land uses and orderly development. The full text can be found on the <a href='https://www.cochise.az.gov/378/Zoning-Regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Cochise County website</a>.",
    purpose: "To promote the health, safety, and general welfare of the public by regulating the use of land, the density of population, and the size and location of buildings, thereby conserving property values and facilitating the adequate provision of public services.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various zoning districts (e.g., Rural, Residential, Commercial) and specifies the permitted uses, conditional uses, and dimensional standards (like setbacks and lot size) for each."
      },
      {
        title: "Home Occupations",
        content: "Provides standards for conducting small-scale business activities within a residence, ensuring they do not negatively impact the surrounding neighborhood."
      },
      {
        title: "Sign Regulations",
        content: "Regulates the size, location, and type of signs to ensure public safety and maintain the aesthetic character of the county."
      },
      {
        title: "Variances and Conditional Uses",
        content: "Outlines the procedures for requesting a variance from strict zoning requirements and for obtaining a conditional use permit for uses that require special review to ensure compatibility."
      }
    ]
  },
  'subdivision': {
    summary: "The Cochise County Subdivision Regulations govern the process of dividing land into smaller parcels. These rules ensure that new land divisions are well-planned and have necessary access and services. The full text is available at the <a href='https://www.cochise.az.gov/377/Subdivision-Regulations' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Cochise County website</a>.",
    purpose: "To ensure that land is subdivided in a manner that protects public health and safety, provides for orderly community growth, and ensures adequate provision for roads, drainage, and utilities.",
    keyProvisions: [
      {
        title: "Platting Process",
        content: "Defines the requirements for different types of land divisions, including the formal subdivision plat process for creating multiple lots, and simpler processes for minor land divisions."
      },
      {
        title: "Road and Access Standards",
        content: "Sets minimum standards for the design and construction of public and private roads within subdivisions to ensure safe and reliable access for residents and emergency services."
      },
      {
        title: "Water Supply Requirements",
        content: "Requires subdividers to demonstrate that an adequate and potable water supply will be available for the proposed lots, in accordance with state and county regulations."
      },
      {
        title: "Lot Configuration",
        content: "Provides standards for the design of lots to ensure they are suitable for their intended use and have proper access and drainage."
      }
    ]
  },
  'floodplain': {
    summary: "The Cochise County Floodplain Regulations are designed to minimize the risk of flood damage to life and property within designated flood hazard areas. The regulations control development in these areas. The full text can be found on the <a href='https://www.cochise.az.gov/363/Floodplain-Management' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Cochise County website</a>.",
    purpose: "To protect human life and health, minimize property damage, and encourage the wise use of floodplains by regulating development in areas prone to flooding.",
    keyProvisions: [
      {
        title: "Flood Hazard Area Identification",
        content: "The county adopts Flood Insurance Rate Maps (FIRMs) issued by the Federal Emergency Management Agency (FEMA) to identify areas of special flood hazard."
      },
      {
        title: "Permit Requirement",
        content: "A floodplain use permit is required for all development within a designated floodplain, including construction, filling, grading, and storage of materials."
      },
      {
        title: "Construction Standards",
        content: "Sets minimum standards for construction in floodplains, such as elevating the lowest floor of residential structures above the base flood elevation and using flood-resistant materials."
      },
      {
        title: "Floodways",
        content: "Prohibits encroachments, including fill, new construction, and substantial improvements, within the regulatory floodway that would result in any increase in flood levels during the base flood discharge."
      }
    ]
  },
  'animal-control': {
    summary: "Cochise County's animal control regulations are designed to protect public health and safety and ensure animal welfare. These rules cover dog licensing, leash laws, and dealing with dangerous animals. The regulations are enforced by the Sheriff's Office. More information is available on the <a href='https://www.cochise.az.gov/395/Animal-Control' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Cochise County Sheriff's website</a>.",
    purpose: "To protect residents from nuisance, property damage, and physical harm caused by uncontrolled animals, and to provide for the humane treatment of animals in the county.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "All dogs must be licensed annually and vaccinated against rabies. Licenses provide a way to return lost dogs to their owners and ensure public health."
      },
      {
        title: "Dogs at Large Prohibited",
        content: "The ordinance prohibits dogs from running at large. Dogs must be confined to the owner's property or be under the control of a leash when in public."
      },
      {
        title: "Nuisance Animals",
        content: "Defines a 'nuisance' animal, which includes animals that bark excessively, damage property, or chase vehicles. Owners are responsible for preventing their animals from becoming a nuisance."
      },
      {
        title: "Cruelty to Animals",
        content: "It is unlawful to subject an animal to cruel treatment, including failure to provide adequate food, water, shelter, or necessary medical attention."
      }
    ]
  }
};
