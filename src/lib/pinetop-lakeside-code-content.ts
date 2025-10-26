
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const PINETOP_LAKESIDE_CODE_CONTENT: Record<string, CodeContent> = {
  '10': {
    summary: "Chapter 10 of the Pinetop-Lakeside Town Code establishes the foundational legal framework for the entire code. It provides rules for interpretation, defines common terms, and specifies the general penalty for violations where a specific penalty is not otherwise stated.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the Town Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the Town Code where a more specific penalty is not stated, making all parts of the code enforceable."
      }
    ]
  },
  '30': {
    summary: "Chapter 30, Administration, details the structure and organization of the town government. It defines the roles and responsibilities of the Town Council, Town Manager, and various departments.",
    purpose: "To establish an organized, efficient, and transparent structure for town governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The Town operates under a Council-Manager form of government. The Town Council is the legislative body, while the Town Manager, appointed by the Council, serves as the chief administrative officer responsible for daily operations."
      },
      {
        title: "Town Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      }
    ]
  },
  '90': {
    summary: "Chapter 90, Animals, establishes the rules for the keeping of animals within the town to protect public safety and ensure animal welfare.",
    purpose: "To regulate the keeping of animals to prevent public nuisances, protect residents from harm, and provide for the humane treatment of animals.",
    keyProvisions: [
      {
        title: "Licensing and Vaccination",
        content: "Requires all dogs to be licensed and vaccinated against rabies as per Navajo County regulations, which are adopted by reference."
      },
      {
        title: "Animals at Large",
        content: "Prohibits dogs and other domestic animals from running 'at large.' Animals must be confined to the owner's property or restrained by a leash."
      },
      {
        title: "Nuisances",
        content: "Declares it a nuisance for an animal to bark excessively, damage property, or threaten the safety of people or other animals."
      }
    ]
  },
  '92': {
    summary: "Chapter 92, Nuisances, defines and prohibits conditions that are detrimental to public health, safety, and welfare, and which can lead to neighborhood blight.",
    purpose: "To protect the health, safety, and quality of life for residents by defining, prohibiting, and providing for the abatement of public nuisances.",
    keyProvisions: [
      {
        title: "Nuisance Defined",
        content: "Declares a wide range of conditions to be public nuisances, including overgrown weeds, accumulation of trash, and hazardous buildings."
      },
      {
        title: "Abatement Procedure",
        content: "Provides a process for the town to notify property owners of a nuisance and require its correction. If the owner fails to comply, the town may abate the nuisance and assess the costs against the property."
      },
      {
        title: "Fire Hazards",
        content: "Includes specific provisions for abating fire hazards, such as the accumulation of flammable materials, which is critical for a town in a forested area."
      }
    ]
  },
  '154': {
    summary: "Chapter 154, the Zoning Code, is the comprehensive ordinance that regulates land use and development throughout the town, with a focus on preserving its mountain resort character.",
    purpose: "To guide the physical development of the town in a manner that promotes public health, safety, and welfare, while protecting the town's natural environment and community character.",
    keyProvisions: [
      {
        title: "Zoning Districts",
        content: "Establishes various residential and commercial zoning districts and specifies the permitted uses, density, and development standards for each."
      },
      {
        title: "Sign Regulations",
        content: "Regulates the size, location, and type of signs allowed in different zoning districts to be compatible with the town's mountain aesthetic."
      },
      {
        title: "Building Regulations",
        content: "Adopts building codes to ensure all construction is safe and habitable."
      }
    ]
  }
};
