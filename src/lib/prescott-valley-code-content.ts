
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const PRESCOTT_VALLEY_CODE_CONTENT: Record<string, CodeContent> = {
  '3': {
    summary: "Title III of the Prescott Valley Town Code, found on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>, outlines the structure and administrative procedures of the town government. It establishes the roles of the Town Council, Town Manager, and various departments, and sets the rules for elections, meetings, and public records.",
    purpose: "To establish a clear and efficient framework for the governance of the Town of Prescott Valley, ensuring accountability, transparency, and the orderly conduct of public business.",
    keyProvisions: [
      {
        title: "Town Council",
        content: "Establishes the Town Council as the legislative body of the town, with powers to enact ordinances, approve budgets, and set policy. It details rules for meetings, agendas, and voting procedures, consistent with the Arizona Open Meeting Law."
      },
      {
        title: "Town Manager",
        content: "Defines the council-manager form of government, where the Town Manager is the chief administrative officer responsible for the day-to-day operations of the town, implementing council policies, and managing town staff."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of various citizen advisory boards and commissions, such as the Planning and Zoning Commission and the Parks and Recreation Commission, to provide input and recommendations to the Town Council."
      },
      {
        title: "Town Elections",
        content: "Sets forth the procedures for conducting town elections for the mayor and council members, including candidate qualifications and campaign finance regulations."
      }
    ]
  },
  '5': {
    summary: "Title V, Public Works, governs the essential infrastructure and services managed by the town. This includes regulations for streets, sidewalks, water, and wastewater systems. The full text is on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the town's public infrastructure.",
    keyProvisions: [
      {
        title: "Water and Sewers",
        content: "Establishes comprehensive regulations for the town's water and wastewater (sewer) systems. It includes rules for service connections, water conservation measures, backflow prevention, and rates and fees for service."
      },
      {
        title: "Streets and Sidewalks",
        content: "Sets standards for the construction, maintenance, and use of public streets and sidewalks. It includes regulations for excavations, encroachments, and requirements for developers to construct street improvements."
      },
      {
        title: "Floodplain Management",
        content: "Adopts floodplain maps and regulates development within designated flood hazard areas to minimize flood damage, as required by the National Flood Insurance Program (NFIP)."
      },
      {
        title: "Public Property",
        content: "Contains regulations for the use and protection of public property, including town parks and facilities."
      }
    ]
  },
  '7': {
    summary: "Title VII is the Prescott Valley Traffic Code, which adopts the Arizona State Traffic Code and includes additional local regulations for vehicle operation and parking. This title is essential for public safety on town streets. It can be viewed on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To provide for the safe and orderly movement of vehicular and pedestrian traffic within the Town of Prescott Valley.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The Town adopts by reference the traffic laws found in Title 28 of the Arizona Revised Statutes. This means state traffic laws are fully enforceable within the town."
      },
      {
        title: "Parking Regulations",
        content: "Establishes specific local parking rules, including time limits in certain areas, prohibitions on parking in fire lanes or near hydrants, and regulations for overnight parking of commercial vehicles in residential areas."
      },
      {
        title: "Speed Limits",
        content: "Sets the prima facie speed limits for various streets within the town, which may differ from general state-mandated limits."
      },
      {
        title: "Enforcement",
        content: "Authorizes the Prescott Valley Police Department to enforce all provisions of the traffic code and issue citations for violations."
      }
    ]
  },
  '9': {
    summary: "Title IX, General Regulations, covers a wide variety of ordinances aimed at protecting the health, safety, and welfare of the community. This includes animal control, nuisance abatement, and alarm systems. The full text is on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To address various issues affecting public health and quality of life that are not covered in other specific titles of the Town Code.",
    keyProvisions: [
      {
        title: "Animal Control (Chapter 92)",
        content: "Sets the rules for animal ownership. This includes dog licensing requirements, leash laws (prohibiting dogs from running 'at large'), and prohibitions on animal cruelty and neglect. It defines what constitutes a public nuisance animal (e.g., excessive barking)."
      },
      {
        title: "Nuisances (Chapter 93)",
        content: "Defines and prohibits various public nuisances that can affect quality of life. This includes things like overgrown weeds, accumulation of trash and debris, and abandoned or inoperable vehicles on private property."
      },
      {
        title: "Noise (Chapter 93)",
        content: "Establishes noise regulations to preserve peace and quiet. It sets limits on noise levels and prohibits loud and unreasonable noise during certain hours."
      },
      {
        title: "Alarm Systems (Chapter 90)",
        content: "Regulates security alarm systems to reduce the number of false alarms that result in unnecessary emergency responses. It requires alarm users to obtain a permit and establishes fines for excessive false alarms."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various types of businesses within the town. It is designed to ensure that businesses operate in a fair and safe manner. This title can be found on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business Licenses (Chapter 110)",
        content: "Requires most businesses operating within the town to obtain a business license. The process ensures that the business is operating in the correct zoning district and meets basic safety requirements."
      },
      {
        title: "Alcoholic Beverages (Chapter 111)",
        content: "Sets forth local regulations for establishments that sell alcoholic beverages. While the state issues the liquor license, the town provides recommendations and has its own rules regarding operations."
      },
      {
        title: "Pawnbrokers and Secondhand Dealers (Chapter 114)",
        content: "Provides specific regulations for pawnbrokers and secondhand dealers to help prevent the sale of stolen goods. This includes requirements for record-keeping and reporting transactions to law enforcement."
      },
      {
        title: "Mobile Food Vendors (Chapter 118)",
        content: "Establishes rules for the operation of food trucks and other mobile food vendors, including licensing, location restrictions, and health and safety standards."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses and their penalties. This title works in conjunction with state criminal law (A.R.S. Title 13) but addresses issues of specific local concern. The full text is on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the Town of Prescott Valley, and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Offenses Against Public Peace (Chapter 130)",
        content: "Prohibits disorderly conduct, loitering, and other acts that disturb the public peace. This section gives law enforcement a tool to address disruptive behavior."
      },
      {
        title: "Minors (Chapter 131)",
        content: "Establishes a juvenile curfew, making it unlawful for minors to be in public places during specified late-night hours. It also prohibits furnishing tobacco or vapor products to minors."
      },
      {
        title: "Weapons (Chapter 132)",
        content: "Regulates the discharge of firearms and other weapons within the town limits, generally prohibiting it outside of designated ranges or for lawful hunting."
      },
      {
        title: "Property Offenses",
        content: "Includes ordinances against damaging public property, graffiti, and theft of services."
      }
    ]
  },
  '15': {
    summary: "Title XV, Land Usage, is the comprehensive planning and zoning code for the Town of Prescott Valley. It is the primary tool the town uses to regulate growth and development. This extensive title can be found on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To implement the town's General Plan and to guide the physical development of the town in a manner that protects public health, safety, and welfare, and promotes a high-quality living environment.",
    keyProvisions: [
      {
        title: "Zoning Districts (Chapter 154)",
        content: "Establishes the various residential, commercial, and industrial zoning districts and specifies the permitted uses, densities, setbacks, building heights, and other development standards for each zone."
      },
      {
        title: "Subdivision Regulations (Chapter 153)",
        content: "Governs the process of dividing land into smaller lots. It sets the standards for street design, drainage, utilities, and public amenities required for new developments."
      },
      {
        title: "Sign Code (Chapter 152)",
        content: "Provides detailed regulations for all types of signs, including their size, location, height, and construction, to ensure safety and maintain the town's aesthetic character."
      },
      {
        title: "General Development Standards (Chapter 154)",
        content: "Includes a wide range of general standards that apply to development projects, such as requirements for landscaping, outdoor lighting (to protect dark skies), parking, and access management."
      }
    ]
  },
  '92': {
    summary: "Chapter 92 of the Prescott Valley Town Code contains the regulations for Animal Control. These rules are part of Title IX (General Regulations) and are essential for public health and safety. The full text can be found within the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To establish regulations for the keeping of animals to protect public health, prevent public nuisances, and ensure the humane treatment of animals within the town.",
    keyProvisions: [
      {
        title: "Licensing and Vaccinations",
        content: "Requires that all dogs over the age of four months be licensed by the town. A current rabies vaccination is a prerequisite for obtaining a license. License tags must be worn by the dog at all times."
      },
      {
        title: "Animals at Large",
        content: "It is unlawful for any dog to be 'at large.' This means a dog must be confined to its owner's property or be under control by means of a leash when in public."
      },
      {
        title: "Public Nuisance",
        content: "Defines and prohibits animals from becoming a public nuisance. This includes behaviors like excessive barking, damaging property, or menacing pedestrians or vehicles."
      },
      {
        title: "Cruelty to Animals",
        content: "Makes it unlawful to subject any animal to cruelty or neglect, which includes failing to provide adequate food, water, shelter from the elements, and necessary veterinary care."
      }
    ]
  },
  '93-weeds': {
    summary: "Chapter 93 of the Prescott Valley Town Code addresses public nuisances, including the regulation of weeds and unkempt property. These rules are crucial for maintaining neighborhood aesthetics and preventing fire hazards. The full text can be found on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To protect public health, safety, and welfare by preventing and abating nuisances caused by unmaintained property, including fire risks, pest harborage, and visual blight.",
    keyProvisions: [
      {
        title: "Weeds and Grass Height",
        content: "It is declared a public nuisance to permit weeds, grasses, or other non-cultivated vegetation to grow to a height of more than <strong>six inches</strong> on any lot or parcel. The property owner is responsible for maintaining their entire property, including any adjacent public rights-of-way."
      },
      {
        title: "Trash and Debris",
        content: "The accumulation of garbage, refuse, junk, and other debris on private property is prohibited. This includes, but is not limited to, scrap metal, appliances, and discarded furniture."
      },
      {
        title: "Inoperable Vehicles",
        content: "Storing or maintaining any 'inoperable, dismantled, or wrecked' vehicle on any residential property is declared a nuisance, unless it is stored within a completely enclosed building."
      },
      {
        title: "Abatement Procedure",
        content: "If a property owner fails to correct a nuisance after receiving written notice, the town has the legal authority to abate the nuisance itself (e.g., hire a contractor to cut the weeds). The costs of this abatement are then billed to the property owner and can be placed as a lien on the property if unpaid."
      }
    ]
  },
  '154-fences': {
    summary: "Regulations for fences, walls, and hedges are found within the Prescott Valley Zoning Ordinance (Title XV, Chapter 154). These rules govern the height, location, and materials of fences to ensure they do not obstruct views or create safety hazards. The full text is on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To provide standards for the erection and maintenance of fences, walls, and hedges to ensure safety, provide for light and air, and protect the aesthetic character of the community.",
    keyProvisions: [
      {
        title: "Height Measurement",
        content: "Fence or wall height shall be measured from the natural or finished grade of the lot, whichever is lower, at the base of the fence on the <strong>exterior side</strong>. On sloped lots, this prevents a fence from becoming excessively high on the downhill side."
      },
      {
        title: "Residential Zone Height Limits",
        content: "In most residential zoning districts: <ul><li>Fences in the <strong>front yard</strong> (between the front of the house and the street) are limited to a maximum height of <strong>four feet</strong>.</li><li>Fences in the interior <strong>side and rear yards</strong> are limited to a maximum height of <strong>six feet</strong>.</li></ul>"
      },
      {
        title: "Clear View Triangle",
        content: "At any corner where two streets intersect, a 'clear view triangle' is established. This is a triangular area formed by measuring <strong>25 feet</strong> along both street property lines from their point of intersection and connecting the endpoints. Within this triangle, no fence, wall, hedge, sign, or other obstruction may exceed a height of <strong>30 inches</strong>."
      },
      {
        title: "Prohibited Materials and Finish",
        content: "The use of barbed wire, razor wire, and electric fences is prohibited in all residential zones. The finished side of any fence or wall shall face the adjacent property or public right-of-way."
      }
    ]
  },
  '93-noise': {
    summary: "Noise regulations in Prescott Valley are part of the Public Nuisance ordinance (Title IX, Chapter 93). The code is designed to preserve community peace by setting limits on excessive and disturbing noise. The full text can be found on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To protect the peace, health, and welfare of the citizens by controlling and abating unnecessary, excessive, and annoying noise.",
    keyProvisions: [
      {
        title: "General Prohibition",
        content: "It is unlawful for any person to make or continue any <strong>loud, unnecessary, or unusual noise</strong> which either annoys, disturbs, injures, or endangers the comfort, repose, health, peace, or safety of a reasonable person of normal sensitivities."
      },
      {
        title: "Specific Prohibited Noises",
        content: "The ordinance specifically prohibits: <ul><li>Sound from radios, stereos, or musical instruments that is plainly audible within any dwelling unit which is not the source of the sound between the hours of <strong>10:00 p.m. and 7:00 a.m.</strong></li><li>Persistent barking, howling, or other animal noises that are plainly audible across a residential property line.</li><li>Operating construction equipment between <strong>10:00 p.m. and 6:00 a.m.</strong> on weekdays or <strong>10:00 p.m. and 7:00 a.m.</strong> on weekends and holidays.</li></ul>"
      },
      {
        title: "Vehicle Noise",
        content: "Prohibits the operation of any vehicle sound system which is plainly audible at a distance of <strong>50 feet</strong> from the vehicle."
      },
      {
        title: "Exemptions",
        content: "Exempts sounds from authorized emergency vehicles, sanctioned public events like parades or festivals, and normal activities associated with residential or commercial life during daytime hours."
      }
    ]
  },
  '154-lighting': {
    summary: "Outdoor lighting regulations are part of the Zoning Ordinance (Title XV, Chapter 154). Prescott Valley values its dark night skies and has rules to prevent light pollution, glare, and light trespass. The full text is on the <a href='https://www.prescottvalley-az.gov/15/Town-Code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To permit reasonable use of outdoor lighting for safety and security while preventing light pollution, light trespass, and glare, thereby protecting the town's dark sky resource and the general welfare.",
    keyProvisions: [
      {
        title: "Full Cutoff and Shielding",
        content: "All outdoor light fixtures must be <strong>fully shielded</strong>, meaning the light source (the bulb or LED) is not visible from off the property and all light is directed downward, below the horizontal plane of the fixture."
      },
      {
        title: "Light Trespass Standard",
        content: "The amount of light spilling onto an adjacent residential property shall not exceed <strong>0.1 foot-candles</strong> at the property line. For non-residential properties, the limit is 0.5 foot-candles."
      },
      {
        title: "Color Temperature Limit",
        content: "The correlated color temperature (CCT) of all outdoor lighting shall not exceed <strong>3,000 Kelvin (K)</strong>. This requires warmer, less-blue light to minimize sky glow."
      },
      {
        title: "Prohibited Lighting",
        content: "The installation of searchlights, laser source lights, mercury vapor lamps, and any upward-facing architectural or landscape lighting is prohibited."
      }
    ]
  }
};

    