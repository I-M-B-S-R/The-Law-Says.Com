
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const APACHE_JUNCTION_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title I of the Apache Junction City Code establishes the foundational legal framework for the entire code. It sets forth the rules of construction, defines common terms, outlines the city's general powers, and specifies the general penalty for violations of any ordinance where a specific penalty is not provided.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the City Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
        {
            title: "Rules of Interpretation",
            content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary), and guidance on resolving conflicts between different sections."
        },
        {
            title: "General Penalty",
            content: "Establishes a default penalty, typically a civil violation or a Class 1 misdemeanor, for any violation of the City Code where a more specific penalty is not stated. This ensures all parts of the code are enforceable."
        },
        {
            title: "Severability Clause",
            content: "This standard clause states that if any part of the City Code is declared invalid by a court, the remaining portions of the code will remain in effect. This preserves the validity of the rest of the laws."
        },
        {
            title: "City Powers",
            content: "Affirms the city's legal authority as a municipal corporation under state law, including its power to enact ordinances for the health, safety, and welfare of its citizens."
        }
    ]
  },
  '3': {
    summary: "Title III of the Apache Junction City Code details the structure and administration of the city government. It defines the roles and responsibilities of the City Council, the City Manager, and various city departments, boards, and commissions. It also contains the rules for city elections and the conduct of public meetings.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form of Government",
        content: "The City operates under a Council-Manager form of government. The City Council is the legislative body, setting policy and approving the budget, while the City Manager, appointed by the Council, serves as the chief executive officer responsible for daily operations and staff management."
      },
      {
        title: "City Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Administrative Departments",
        content: "Establishes the various departments of the city government (e.g., Police, Public Works, Community Development) and outlines their primary functions and responsibilities under the direction of the City Manager."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory bodies, such as the Planning and Zoning Commission and the Parks and Recreation Commission, which provide recommendations and public input to the City Council."
      }
    ]
  },
  '5': {
    summary: "Title V, Public Works, governs the essential infrastructure and services managed by the city. This includes regulations for water and wastewater systems, garbage collection, and the maintenance of public streets and rights-of-way. The full text is on the <a href='https://www.apachejunctionaz.gov/10/City-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official city website</a>.",
    purpose: "To ensure the safe and efficient provision of public works services and to protect public health and the environment through the proper management of water, wastewater, and solid waste.",
    keyProvisions: [
      {
        title: "Water System Regulations",
        content: "Establishes rules for connecting to the public water system and prohibits cross-connections that could contaminate the public water supply. It also includes measures for water conservation."
      },
      {
        title: "Wastewater Regulations",
        content: "Regulates the discharge of waste into the city's sanitary sewer system. It prohibits the disposal of harmful substances like grease, chemicals, and solid objects that can damage the system or treatment process."
      },
      {
        title: "Solid Waste Collection",
        content: "Mandates subscription to garbage collection services for occupied residences and businesses to ensure sanitary conditions. It specifies rules for container placement and collection times."
      },
      {
        title: "Work in Public Rights-of-Way",
        content: "Requires a permit for any private construction or excavation work within public streets, alleys, or easements to ensure that the work is done safely and that the public infrastructure is properly restored."
      }
    ]
  },
   '7': {
    summary: "Title VII is the Apache Junction Traffic Code. It adopts state traffic laws by reference and establishes additional local regulations for vehicle operation, parking, and traffic control to ensure safety on city streets. It can be viewed on the <a href='https://www.apachejunctionaz.gov/10/City-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official city website</a>.",
    purpose: "To provide for the safe, efficient, and orderly movement of vehicular and pedestrian traffic within the City of Apache Junction.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The City adopts the comprehensive traffic laws of the State of Arizona found in A.R.S. Title 28, making them fully enforceable within city limits."
      },
      {
        title: "Speed Limits",
        content: "Unless otherwise posted, the maximum speed limit on any local street within the city is <strong>25 miles per hour</strong>. The City Traffic Engineer has the authority to post different speed limits on specific streets based on traffic studies."
      },
      {
        title: "Parking Regulations",
        content: "Prohibits parking in specified areas, such as in front of fire hydrants, in loading zones, or on sidewalks. It also makes it unlawful to park a vehicle on a public street for a continuous period of more than <strong>72 hours</strong>."
      },
      {
        title: "Off-Road Vehicles",
        content: "Regulates the use of off-road vehicles (OHVs), generally prohibiting their operation on paved public streets unless the street is specifically signed to allow for OHV use to access trails."
      }
    ]
  }
};
