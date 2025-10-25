
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const PRESCOTT_VALLEY_CODE_CONTENT: Record<string, CodeContent> = {
  '3': {
    summary: "Title III of the Prescott Valley Town Code, found on the <a href='https://www.prescottvalley-az.gov/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>, outlines the structure and administrative procedures of the town government. It establishes the roles of the Town Council, Town Manager, and various departments, and sets the rules for elections, meetings, and public records.",
    purpose: "To establish a clear and efficient framework for the governance of the Town of Prescott Valley, ensuring accountability, transparency, and the orderly conduct of public business.",
    keyProvisions: [
      {
        title: "Town Council Structure",
        content: "The Town Council is the legislative body, consisting of a directly elected Mayor and six Council members elected at large. The Council has the power to enact ordinances, approve the annual budget, and set town policy."
      },
      {
        title: "Council-Manager Government",
        content: "The code establishes a council-manager form of government. The Town Manager is appointed by the Council and serves as the chief administrative officer, responsible for the day-to-day operations, implementing council policies, and managing town staff."
      },
      {
        title: "Open Meetings & Public Records",
        content: "All Council meetings must comply with the Arizona Open Meeting Law, requiring public notice and agendas. All official town records are considered public and are available for inspection, ensuring government transparency."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory boards and commissions, such as the Planning and Zoning Commission and the Arts and Culture Commission, to provide expert recommendations to the Town Council on specific issues."
      }
    ]
  },
  '5': {
    summary: "Title V, Public Works, governs the essential infrastructure and services managed by the town. This includes regulations for streets, sidewalks, water, and wastewater systems. The full text is on the <a href='https://www.prescottvalley-az.gov/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To ensure the safe and efficient provision of public works services and the proper management and maintenance of the town's public infrastructure.",
    keyProvisions: [
      {
        title: "Water Conservation",
        content: "Establishes mandatory water conservation stages (Stage 1 through Stage 4) that can be implemented by the Town Council during water shortages. These stages include restrictions on landscape watering days and times, filling swimming pools, and serving water at restaurants."
      },
      {
        title: "Wastewater (Sewer) Regulations",
        content: "Prohibits the discharge of certain substances into the public sewer system, including flammable liquids, grease, oil, and any material that could obstruct flow or cause damage to the treatment facilities. Industrial users may require a special discharge permit."
      },
      {
        title: "Street and Sidewalk Maintenance",
        content: "It is the responsibility of the adjacent property owner to maintain sidewalks in a safe condition, free from hazards or obstructions. The code also sets standards for any excavation or construction work performed in the public right-of-way, requiring permits and traffic control plans."
      },
      {
        title: "Backflow Prevention",
        content: "Requires the installation and annual testing of backflow prevention assemblies on water service connections for commercial properties and residential properties with irrigation systems or other potential cross-contamination hazards to protect the public water supply."
      }
    ]
  },
  '7': {
    summary: "Title VII is the Prescott Valley Traffic Code, which adopts the Arizona State Traffic Code and includes additional local regulations for vehicle operation and parking. This title is essential for public safety on town streets. It can be viewed on the <a href='https://www.prescottvalley-az.gov/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To provide for the safe and orderly movement of vehicular and pedestrian traffic within the Town of Prescott Valley.",
    keyProvisions: [
      {
        title: "Adoption of State Law",
        content: "The Town adopts by reference the comprehensive traffic laws found in Title 28 of the Arizona Revised Statutes, making state traffic laws fully enforceable within the town."
      },
      {
        title: "Speed Limits in Alleys",
        content: "Specifies that the maximum speed limit in any alley within the town is <strong>15 miles per hour</strong>."
      },
      {
        title: "Engine and Compression Brakes",
        content: "The use of any engine brake, exhaust brake, or other compression brake is prohibited within the town limits, except in cases of emergency to prevent an accident. This is intended to reduce excessive noise."
      },
      {
        title: "Parking Regulations",
        content: "Prohibits parking a vehicle on any street for a continuous period of more than <strong>48 hours</strong>. It also establishes rules against parking in fire lanes, within 15 feet of a fire hydrant, or blocking sidewalks."
      }
    ]
  },
  '92': {
    summary: "Chapter 92 of the Prescott Valley Town Code contains the regulations for Animal Control. These rules are part of Title IX (General Regulations) and are essential for public health and safety. The full text can be found within the <a href='https://www.prescottvalley-az.gov/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
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
        title: "Public Nuisance (Barking)",
        content: "A dog that barks, bays, cries, howls, or makes any noise for a continuous period of <strong>five minutes or more</strong>, or intermittently for 30 minutes or more, which disturbs the peace of any person, is declared a public nuisance."
      },
      {
        title: "Number of Animals",
        content: "In most residential zones, a household is limited to keeping a maximum of <strong>four dogs and four cats</strong> over the age of four months."
      }
    ]
  },
  '11': {
    summary: "Title XI, Business Regulations, governs the licensing and operation of various types of businesses within the town. It is designed to ensure that businesses operate in a fair and safe manner. This title can be found on the <a href='https://www.prescottvalley-az.gov/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To provide for the regulation of businesses, trades, and professions to protect the public health, safety, and welfare.",
    keyProvisions: [
      {
        title: "Business License / TPT License",
        content: "All businesses operating in Prescott Valley must obtain a Town Business License. Furthermore, any business engaged in activities subject to sales tax must also have a valid Transaction Privilege Tax (TPT) license issued by the Arizona Department of Revenue and report town sales tax."
      },
      {
        title: "Mobile Food Vendors",
        content: "Food trucks and other mobile food vendors must obtain a specific Mobile Food Vendor license. They are restricted from operating in residential zones and cannot operate within <strong>300 feet</strong> of a brick-and-mortar restaurant during that restaurant's business hours, unless they have written permission."
      },
      {
        title: "Special Events",
        content: "A Special Event Permit is required for any temporary event on public or private property that affects the ordinary use of public streets or sidewalks. This includes festivals, parades, and block parties. The application requires a site plan and proof of insurance."
      },
      {
        title: "Pawnbrokers and Secondhand Dealers",
        content: "These businesses are required to maintain detailed records of all transactions, including a description of the item, the amount paid, and the identity of the seller. These records must be made available to law enforcement upon request to help track stolen property."
      }
    ]
  },
  '13': {
    summary: "Title XIII, General Offenses, defines various local-level criminal and civil offenses and their penalties. This title works in conjunction with state criminal law (A.R.S. Title 13) but addresses issues of specific local concern. The full text is on the <a href='https://www.prescottvalley-az.gov/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
    purpose: "To define and prohibit conduct that is harmful to public peace, safety, and order within the Town of Prescott Valley, and to provide penalties for such conduct.",
    keyProvisions: [
      {
        title: "Juvenile Curfew",
        content: "It is unlawful for any minor under the age of 18 to be in a public place between the hours of <strong>10:00 p.m. and 5:00 a.m.</strong>, unless accompanied by a parent or guardian, or engaged in other specific exempt activities (like returning from work)."
      },
      {
        title: "Discharge of Firearms",
        content: "Prohibits the discharge of any firearm within the town limits, except in self-defense, at a licensed firing range, or as otherwise permitted by state law. Discharging a firearm into the air is strictly forbidden."
      },
      {
        title: "Consumption of Alcohol in Public",
        content: "It is unlawful for any person to consume spirituous liquor from a broken or unsealed container in any public place, park, street, or sidewalk, except in areas specifically licensed for such consumption (like a beer garden at a special event)."
      },
      {
        title: "Park Regulations",
        content: "Prohibits specific activities within town parks, including: being in a park after closing hours (typically 10:00 p.m.), operating a motor vehicle outside of designated roadways and parking areas, and using glass beverage containers."
      }
    ]
  },
  '93-weeds': {
    summary: "Chapter 93 of the Prescott Valley Town Code addresses public nuisances, including the regulation of weeds and unkempt property. These rules are crucial for maintaining neighborhood aesthetics and preventing fire hazards. The full text can be found on the <a href='https://www.prescottvalley-az.gov/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
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
    summary: "Regulations for fences, walls, and hedges are found within the Prescott Valley Zoning Ordinance (Title XV, Chapter 154). These rules govern the height, location, and materials of fences to ensure they do not obstruct views or create safety hazards. The full text is on the <a href='https://www.prescottvalley-az.gov/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
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
    summary: "Noise regulations in Prescott Valley are part of the Public Nuisance ordinance (Title IX, Chapter 93). The code is designed to preserve community peace by setting limits on excessive and disturbing noise. The full text can be found on the <a href='https://www.prescottvalley-az.gov/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
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
    summary: "Outdoor lighting regulations are part of the Zoning Ordinance (Title XV, Chapter 154). Prescott Valley values its dark night skies and has rules to prevent light pollution, glare, and light trespass. The full text is on the <a href='https://www.prescottvalley-az.gov/index.php' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official town website</a>.",
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
