
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const CAMP_VERDE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title 1 of the Camp Verde Town Code establishes the foundational legal framework for the entire code. It sets forth rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not provided.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the Town Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the Town Code where a more specific penalty is not stated, making all parts of the code enforceable."
      },
      {
        title: "Severability Clause",
        content: "A standard clause stating that if any part of the Town Code is declared invalid by a court, the remaining portions will remain in effect."
      }
    ]
  },
  '3': {
    summary: "Title 3, Administration, details the structure and organization of Camp Verde's town government. It defines the roles and responsibilities of the Town Council, Town Manager, and various departments.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The Town operates under a Council-Manager form of government. The Town Council is the legislative body, setting policy and approving the budget, while the Town Manager, appointed by the Council, serves as the chief executive officer responsible for daily operations."
      },
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Administrative Departments",
        content: "Establishes the various departments of the town government and outlines their primary functions under the direction of the Town Manager."
      }
    ]
  },
  '5': {
    summary: "Title 5, Public Works, governs the essential infrastructure and services managed by the town, including regulations for water and wastewater systems, and public rights-of-way.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the town's public infrastructure.",
    keyProvisions: [
      {
        title: "Water System",
        content: "Establishes regulations for the town's water utility, including rules for service connections, water use, and backflow prevention to protect the public water supply."
      },
      {
        title: "Wastewater System",
        content: "Regulates the discharge of waste into the town's sanitary sewer system. It prohibits the disposal of harmful substances that can damage the system or treatment process."
      },
      {
        title: "Work in Public Rights-of-Way",
        content: "Requires a permit for any private construction or excavation work within public streets, alleys, or easements to ensure safety and proper restoration of public property."
      }
    ]
  },
  '9': {
    summary: "Title 9, General Regulations, covers a wide range of rules related to public health, safety, and welfare, including animal control and nuisance abatement.",
    purpose: "To protect the health, safety, and quality of life for residents by regulating activities that could become public nuisances.",
    keyProvisions: [
      {
        title: "Animal Control",
        content: "Adopts the Yavapai County Dog Control Ordinance by reference, making county rules regarding licensing, leash laws, and nuisance animals enforceable within the town."
      },
      {
        title: "Nuisance Abatement",
        content: "Declares conditions like overgrown weeds, accumulation of trash, and hazardous buildings to be public nuisances and provides a process for their abatement by the town if the property owner fails to act."
      },
      {
        title: "Noise",
        content: "Prohibits loud and unreasonable noise that disturbs the peace of a neighborhood, with specific restrictions during nighttime hours."
      }
    ]
  },
  '11': {
    summary: "Title 11, Business Regulations, governs the licensing and operation of various businesses within the town to ensure they operate in a fair and safe manner.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License",
        content: "All businesses operating in Camp Verde must obtain a Town Business License."
      },
      {
        title: "Special Events",
        content: "A Special Event Permit is required for temporary events on public or private property that affect ordinary public access or services, such as festivals and parades."
      },
      {
        title: "Liquor Licenses",
        content: "Establishes procedures for the local review of state liquor license applications, allowing the Town Council to provide a recommendation to the state liquor board."
      }
    ]
  },
  '13': {
    summary: "Title 13, General Offenses, defines various local-level public order offenses to maintain a peaceful and safe community.",
    purpose: "To prohibit conduct that is disruptive to public peace, safety, and order and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Disorderly Conduct",
        content: "Prohibits fighting, making unreasonable noise, or using abusive language in a manner likely to disturb the peace."
      },
      {
        title: "Curfew for Minors",
        content: "Establishes a curfew, making it unlawful for minors to be in public places during specified late-night hours without a valid reason."
      },
      {
        title: "Public Consumption of Alcohol",
        content: "Makes it unlawful to consume alcoholic beverages in public places, such as parks and streets, unless specifically permitted for a special event."
      }
    ]
  }
};
