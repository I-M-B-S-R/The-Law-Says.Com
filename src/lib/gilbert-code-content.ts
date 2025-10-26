
interface CodeContent {
  title: string;
  summary: string;
  keyProvisions: { title: string; content: string }[];
  source: string;
}

export const GILBERT_CODE_CONTENT: Record<string, CodeContent> = {
  '6': {
    title: 'Chapter 6: Animals',
    summary: 'Regulates the keeping, harboring, and control of animals within the town to protect public health and safety, including provisions on noise from animals and prohibitions on certain behaviors.',
    purpose: 'To ensure public safety and welfare by regulating animal behavior and owner responsibilities.',
    keyProvisions: [
      {
        title: 'Noise from Animals',
        content: 'Prohibits keeping or harboring any dog that causes annoyance through frequent barking, yelping, or howling.'
      },
      {
        title: 'Enforcement',
        content: 'Requires complaints for enforcement of animal noise violations.'
      },
      {
        title: 'General Control',
        content: 'Addresses general animal control, including restrictions on poisonous substances for animals.'
      },
    ],
    source: 'Official FAQ on Municipal Code from gilbertaz.gov',
  },
  '10': {
    title: 'Chapter 10: Buildings and Construction Regulations',
    summary: 'Establishes standards for building permits, inspections, and adoption of international codes with amendments for safety and compliance.',
    purpose: 'To ensure all construction within the town meets safety standards and follows a regulated process.',
    keyProvisions: [
      {
        title: 'Code Adoption',
        content: 'Adopts the International Fire Code (2006 Edition) with local amendments for fire hazard mitigation.'
      },
      {
        title: 'Permit Requirements',
        content: 'Requires permits for construction and alterations, with exemptions for minor work.'
      },
      {
        title: 'Fire Safety',
        content: 'Mandates fire apparatus access roads and automatic sprinkler systems in new buildings.'
      },
      {
        title: 'Penalties',
        content: 'Violations may result in fines up to $2,500 and/or imprisonment up to 6 months.'
      },
    ],
    source: 'Official Ordinance No. 2086 & 2788',
  },
  '14': {
    title: 'Chapter 14: Businesses',
    summary: 'Regulates business licensing, operations, and specific industries like massage therapy establishments.',
    purpose: 'To ensure businesses operate legally and safely, protecting both consumers and the public.',
    keyProvisions: [
      {
        title: 'Licensing',
        content: 'Mandates licenses for certain businesses, including background checks and compliance with health standards.'
      },
      {
        title: 'Massage Establishments',
        content: 'Sets forth requirements for massage therapy establishments, including special licenses and operational restrictions.'
      },
      {
        title: 'Revocation',
        content: 'Includes provisions for revocation of licenses for violations.'
      },
    ],
    source: 'Official Ordinance No. 2518',
  },
  '30': {
    title: 'Chapter 30: Environment',
    summary: 'Focuses on air quality control, including restrictions on fireplaces and dust suppression measures.',
    purpose: 'To protect the environment and public health through specific regulations on air quality and pollution.',
    keyProvisions: [
      {
        title: 'Fireplace Restrictions',
        content: 'Bans non-EPA-certified fireplaces in new constructions and alterations.'
      },
      {
        title: 'Dust Control',
        content: 'Mandates dust-proofing of parking areas to meet opacity standards.'
      },
      {
        title: 'Debris Management',
        content: 'Prohibits leaf blowers from directing debris into streets.'
      },
      {
        title: 'Compliance',
        content: 'Aligns with Maricopa County air quality rules for exemptions and penalties.'
      },
    ],
    source: 'Official Ordinance No. 1066 & 2151',
  },
  '42': {
    title: 'Chapter 42: Nuisances (Noise Ordinance)',
    summary: 'Defines and abates public nuisances, including noise control and smoking prohibitions to safeguard public health and welfare.',
    purpose: 'To maintain public peace and quality of life by setting clear standards for noise and public smoking.',
    keyProvisions: [
      {
        title: 'Noise Standards',
        content: 'Establishes decibel limits for residential, commercial, and industrial zones.'
      },
      {
        title: 'Exemptions',
        content: 'Exempts certain activities like emergency work, railroads, and sporting events from noise restrictions.'
      },
      {
        title: 'Smoking Prohibitions',
        content: 'Prohibits smoking in workplaces and enclosed public places, with division-specific rules.'
      },
      {
        title: 'Enforcement',
        content: 'Enforces penalties under state laws for disorderly conduct and nuisances.'
      },
    ],
    source: 'Official Gilbert Noise & Smoking Ordinances',
  },
  '62': {
    title: 'Chapter 62: Traffic and Vehicles',
    summary: 'Covers vehicle operations, including rules for motorized play vehicles and integration with state statutes.',
    purpose: 'To ensure the safe operation of all vehicles, including motorized play vehicles, on public and private property.',
    keyProvisions: [
      {
        title: 'Application of Laws',
        content: 'Applies traffic laws to motorized play vehicles and skateboards, prohibiting use on sidewalks and high-speed roads.'
      },
      {
        title: 'Safety Equipment',
        content: 'Requires safety equipment like helmets and lights, with age and hour restrictions.'
      },
      {
        title: 'State Statute Integration',
        content: 'Integrates Arizona Revised Statutes Title 28 for comprehensive traffic enforcement.'
      },
      {
        title: 'Penalties',
        content: 'Violations are treated as civil traffic offenses with penalties.'
      },
    ],
    source: 'Official Go-Ped Ordinance & Gilbert Town Code',
  },
  '66': {
    title: 'Chapter 66: Utilities Operations',
    summary: 'Manages water utility connections and restricts unauthorized use of fire hydrants.',
    purpose: 'To manage and protect the town\'s water utility systems and ensure public safety.',
    keyProvisions: [
      {
        title: 'Unauthorized Connections',
        content: 'Prohibits unauthorized connections to water systems or fire hydrants without permits.'
      },
      {
        title: 'Construction Water',
        content: 'Requires metering and payments for construction water from hydrants on large parcels.'
      },
      {
        title: 'Water Resale',
        content: 'Bans water resale except in emergencies and enforces plumbing code compliance.'
      },
      {
        title: 'Violations',
        content: 'Violations are misdemeanors with fines up to $2,500 and possible imprisonment.'
      },
    ],
    source: 'Official Ordinance on Fire Hydrants',
  },
};
