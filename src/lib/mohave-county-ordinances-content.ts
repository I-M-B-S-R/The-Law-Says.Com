
interface OrdinanceContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const MOHAVE_COUNTY_ORDINANCES_CONTENT: Record<string, OrdinanceContent> = {
  'zoning': {
    summary: "The Mohave County Zoning Ordinance regulates land use within the unincorporated areas to guide development and ensure compatibility between different land uses. The full ordinance can be accessed through the <a href='https://www.mohave.gov/ContentPage.aspx?id=128&cid=1373&subid=158' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Mohave County website</a>.",
    purpose: "To promote the public health, safety, and general welfare by regulating land use, preventing overcrowding, and preserving the character of neighborhoods and rural areas.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes a variety of zoning districts, including Agricultural-Residential (A-R), single-family Residential (R-1), and various Commercial (C) and Manufacturing (M) zones. Each district specifies permitted uses, lot sizes, and building setbacks."
      },
      {
        title: "Special Use Permits",
        content: "Requires a special permit for certain land uses that may have unique impacts, such as airports or resource extraction. The process involves a public hearing to review the proposed use and apply conditions if necessary."
      },
      {
        title: "Off-Street Parking",
        content: "Sets minimum requirements for the number of off-street parking spaces that must be provided for different types of land uses, such as residential, commercial, and industrial."
      },
      {
        title: "Signage",
        content: "Regulates the size, location, and type of signs to ensure they do not create safety hazards or become a visual blight."
      }
    ]
  },
  'subdivision': {
    summary: "The Mohave County Subdivision Regulations govern the division of land into smaller lots. These rules ensure that new land divisions are well-planned and have necessary access and services. The full text is available at the <a href='https://www.mohave.gov/ContentPage.aspx?id=128&cid=1373&subid=158' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Mohave County website</a>.",
    purpose: "To ensure that the subdivision of land is done in an orderly manner, providing for adequate roads, drainage, and utility access for new lots, thereby protecting public health and safety.",
    keyProvisions: [
      {
        title: "Platting Process",
        content: "Defines the requirements for different types of land divisions, from simple land splits to major subdivisions. The process includes preliminary and final plat approval to ensure a thorough review."
      },
      {
        title: "Street Design and Access",
        content: "Sets minimum standards for the design and construction of public and private roads within subdivisions to ensure safe and reliable access for residents and emergency services."
      },
      {
        title: "Water and Sewage",
        content: "Requires subdividers to demonstrate that an adequate water supply and a legal, sanitary method of sewage disposal will be available for all proposed lots."
      },
      {
        title: "Lot Configuration",
        content: "Provides standards for the design of lots to ensure they are suitable for development and have proper access and drainage."
      }
    ]
  },
  'floodplain': {
    summary: "The Mohave County Floodplain Ordinance is designed to minimize the risk of flood damage to life and property by regulating development in designated flood hazard areas. These regulations are critical in a county with numerous washes and the Colorado River. The full text can be found on the <a href='https://www.mohave.gov/ContentPage.aspx?id=128&cid=1373&subid=158' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Mohave County website</a>.",
    purpose: "To protect human life and health, minimize property damage, and encourage the wise use of floodplains by regulating development in areas prone to flooding.",
    keyProvisions: [
      {
        title: "Flood Hazard Area Identification",
        content: "The county adopts Flood Insurance Rate Maps (FIRMs) from FEMA to identify areas of special flood hazard and delineate floodways."
      },
      {
        title: "Permit Requirement",
        content: "A floodplain use permit is required for all development within a designated floodplain, including construction, filling, grading, and storage of materials."
      },
      {
        title: "Construction Standards",
        content: "Sets minimum standards for construction, such as requiring the lowest floor of residential structures to be elevated above the Base Flood Elevation (BFE) and using flood-resistant materials."
      },
      {
        title: "Floodways",
        content: "Strictly prohibits encroachments, including fill, new construction, and substantial improvements, within the regulatory floodway that would result in any increase in flood levels."
      }
    ]
  }
};
