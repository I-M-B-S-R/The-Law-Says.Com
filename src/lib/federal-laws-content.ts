
interface LawContent {
  summary: string;
  keyProvisions: { title: string; content: string }[];
  purpose: string;
}

export const FEDERAL_LAW_CONTENT: Record<string, LawContent> = {
  '1': {
    summary: "The Administrative Procedure Act (APA), found in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title5/USCODE-2021-title5-partI-chap5' target='_blank' rel='noopener noreferrer' class='text-primary underline'>5 U.S.C. §§ 551-559</a>, is a foundational United States federal statute that governs the internal procedures of administrative agencies. It dictates how federal agencies may propose and establish regulations (rulemaking), and how they make decisions in individual cases (adjudication). It also establishes the framework for judicial review of agency actions, ensuring a check on their power. The APA is crucial for maintaining transparency, fairness, and public participation in the workings of the federal government.",
    keyProvisions: [
      {
        title: "Rulemaking (Section 553)",
        content: "The APA establishes two primary types of rulemaking: informal (notice-and-comment) and formal. Informal rulemaking is the most common. It requires an agency to: 1) Publish a notice of proposed rulemaking in the Federal Register. 2) Provide a period for the public to comment on the proposed rule. 3) Publish the final rule with a statement of its basis and purpose. This process allows for public input and ensures that agencies justify their regulations."
      },
      {
        title: "Adjudication (Sections 554, 556, 557)",
        content: "This part of the APA governs how federal agencies conduct hearings and make decisions in individual cases, similar to a court trial but typically less formal. It ensures due process by requiring notice of the hearing, the right to present evidence and cross-examine witnesses, and a decision based on the official record. These procedures apply to formal adjudications required by statute."
      },
      {
        title: "Judicial Review (Chapter 7)",
        content: "Perhaps the most critical part of the APA, this allows parties who are 'aggrieved by agency action' to seek review in federal court. Courts can set aside agency actions that are found to be 'arbitrary, capricious, an abuse of discretion, or otherwise not in accordance with law,' unconstitutional, in excess of statutory authority, or made without observance of procedure required by law."
      },
      {
        title: "Information Access (Section 552)",
        content: "The APA includes provisions requiring agencies to publish their organization, procedures, and rules. These principles were significantly expanded by the Freedom of Information Act (FOIA), which is codified within this section, promoting transparency by giving the public the right to request access to records from any federal agency."
      }
    ],
    purpose: "The primary purpose of the APA is to ensure that agency actions are fair, transparent, and accountable to the public and the rule of law. It achieves this by standardizing procedural requirements, requiring public participation in the rulemaking process (transparency), establishing fair procedures for individual decisions (fairness), and allowing for court oversight of agency actions (accountability)."
  },
  '2': {
    summary: "Admiralty law, also known as maritime law, is a distinct body of law that governs nautical issues and private maritime disputes. It is codified in various sections of the U.S. Code, primarily <a href='https://www.govinfo.gov/app/details/USCODE-2021-title46' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 46 (Shipping)</a>. It includes both domestic law on maritime activities, and private international law governing the relationships between private entities that operate vessels on the oceans. This body of law is one of the oldest in the world, with roots stretching back to ancient seafaring civilizations.",
    keyProvisions: [
      {
        title: "Maintenance and Cure",
        content: "A seaman's ancient right to receive food, lodging ('maintenance'), and necessary medical care ('cure') if they fall ill or are injured while in the service of a ship. This right is not based on fault and continues until the seaman reaches the point of maximum medical improvement."
      },
      {
        title: "The Jones Act",
        content: "A federal law that allows seamen who have been injured at sea as a result of negligence (by their employer or a fellow crew member) to sue their employers for damages, including pain and suffering, lost wages, and future medical expenses. It provides a level of protection similar to what shoreside workers receive under workers' compensation laws, but through the court system."
      },
      {
        title: "Maritime Liens",
        content: "A lien on a vessel, which gives a creditor a security interest in the ship itself. These liens can arise from various claims, such as for unpaid crew wages, necessary supplies, repairs, or for damages caused by the vessel. A maritime lien gives the creditor the right to have the vessel arrested and sold to satisfy the debt."
      },
       {
        title: "Salvage Law",
        content: "This area of maritime law concerns the reward given to those who voluntarily rescue a ship or its cargo from peril at sea. The reward, or 'salvage award,' is meant to encourage mariners to assist other vessels in distress."
      }
    ],
    purpose: "To provide a consistent and predictable legal framework for maritime activities. It is designed to foster maritime commerce, resolve disputes among parties involved in shipping and navigation, and protect the rights and safety of seamen, passengers, and shipowners in the unique environment of the high seas and navigable waters."
  },
  '3': {
    summary: "The Age Discrimination in Employment Act of 1967 (ADEA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title29/USCODE-2021-title29-chap14' target='_blank' rel='noopener noreferrer' class='text-primary underline'>29 U.S.C. §§ 621-634</a>, is a crucial US labor law that forbids employment discrimination against individuals who are at least 40 years of age. The law protects these older workers from discrimination in all aspects of employment, including hiring, firing, promotions, pay, and benefits.",
    keyProvisions: [
      {
        title: "Prohibited Practices",
        content: "The ADEA makes it unlawful for an employer to fail or refuse to hire, to discharge, or otherwise discriminate against any individual with respect to their compensation, terms, conditions, or privileges of employment, because of such individual's age. It also prohibits age-based harassment and retaliation for filing a charge of discrimination."
      },
      {
        title: "Covered Employers",
        content: "The law applies to private employers with 20 or more employees for each working day in each of 20 or more calendar weeks in the current or preceding calendar year, state and local governments, employment agencies, and labor organizations."
      },
      {
        title: "Exceptions and Defenses",
        content: "Some exceptions exist. An employer can defend an age-related decision if age is a 'bona fide occupational qualification' (BFOQ) reasonably necessary to the normal operation of the business. Decisions can also be based on 'reasonable factors other than age' (RFOA), or as part of a bona fide seniority system or employee benefit plan."
      },
      {
        title: "Waivers of Rights (OWBPA)",
        content: "The Older Workers Benefit Protection Act (OWBPA), an amendment to the ADEA, sets specific requirements for a valid waiver of ADEA rights, often used in severance agreements. For a waiver to be knowing and voluntary, it must meet several criteria, including providing a period of time for the employee to consider the agreement."
      }
    ],
    purpose: "The stated purposes of the ADEA are to promote the employment of older persons based on their ability rather than age; to prohibit arbitrary age discrimination in employment; and to help employers and workers find ways of meeting problems arising from the impact of age on employment."
  },
  '4': {
    summary: "The Americans with Disabilities Act of 1990 (ADA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title42/USCODE-2021-title42-chap126' target='_blank' rel='noopener noreferrer' class='text-primary underline'>42 U.S.C. Chapter 126</a>, is a landmark civil rights law that prohibits discrimination against individuals with disabilities in all areas of public life, including jobs, schools, transportation, and all public and private places that are open to the general public. The goal of the law is to make sure that people with disabilities have the same rights and opportunities as everyone else.",
    keyProvisions: [
        {
            title: "Title I: Employment",
            content: "Prohibits employers with 15 or more employees from discriminating against qualified individuals with disabilities. It requires employers to provide 'reasonable accommodations' for employees with disabilities, unless doing so would cause 'undue hardship' to the employer. Reasonable accommodations are changes to the work environment or the way things are usually done that enable a person with a disability to enjoy equal employment opportunities."
        },
        {
            title: "Title II: Public Services (State and Local Government)",
            content: "Prohibits discrimination against qualified individuals with disabilities in all programs, activities, and services of public entities. It applies to all state and local governments, their departments and agencies. This includes public transportation, education, and recreation."
        },
        {
            title: "Title III: Public Accommodations (Private Businesses)",
            content: "Prohibits discrimination on the basis of disability in the activities of places of public accommodation. These are businesses that are generally open to the public, such as restaurants, hotels, theaters, retail stores, and private schools. Title III requires these businesses to make their facilities and services accessible to people with disabilities."
        },
        {
            title: "Title IV: Telecommunications",
            content: "Requires telephone and Internet companies to provide a nationwide system of interstate and intrastate telecommunications relay services that allows individuals with hearing and speech disabilities to communicate over the telephone."
        }
    ],
    purpose: "To ensure that people with disabilities are protected from discrimination and have the same rights and opportunities as everyone else. The ADA is intended to guarantee that people with disabilities have equal opportunities to participate in the mainstream of American life — to enjoy employment opportunities, to purchase goods and services, and to participate in State and local government programs and services."
  },
  '5': {
    summary: "The Animal Welfare Act of 1966 (AWA), found at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title7/USCODE-2021-title7-chap54' target='_blank' rel='noopener noreferrer' class='text-primary underline'>7 U.S.C. Chapter 54</a>, is the primary federal law in the United States that regulates the treatment of animals in research, exhibition, transport, and by dealers. It is enforced by the United States Department of Agriculture (USDA) and the Animal and Plant Health Inspection Service (APHIS). The AWA aims to ensure that animals used in these capacities are provided humane care and treatment. It sets minimum standards for handling, housing, feeding, sanitation, ventilation, shelter from extremes of weather, and veterinary care for covered animals.",
    keyProvisions: [
      {
        title: "Regulated Activities and Animals",
        content: "The law covers warm-blooded animals when they are used for research, testing, experimentation, or exhibition purposes, or as pets sold by dealers. The law specifically excludes birds, rats of the genus Rattus, and mice of the genus Mus bred for use in research. It also does not cover farm animals used for food or fiber, or cold-blooded animals such as reptiles and amphibians. This means that entities like zoos, research laboratories, commercial dog breeders, and animal transporters must comply with the AWA's standards."
      },
      {
        title: "Standards of Humane Care and Treatment",
        content: "The AWA requires that minimum standards of care and treatment be provided for regulated animals. This includes standards for housing, handling, feeding, watering, sanitation, ventilation, shelter from extremes of weather, and adequate veterinary care. For research facilities, it also requires that pain and distress be minimized and that alternatives to painful procedures be considered."
      },
      {
        title: "Licensing and Registration",
        content: "Individuals or businesses that breed or broker animals for sale as pets, for use in research, or for exhibition must be licensed with the USDA. Research facilities must be registered. These licensees and registrants are subject to unannounced inspections by APHIS to ensure compliance with the AWA. These inspections are a key enforcement mechanism of the Act."
      },
      {
        title: "Institutional Animal Care and Use Committee (IACUC)",
        content: "A significant amendment to the AWA requires that research facilities establish an Institutional Animal Care and Use Committee (IACUC). This committee must include a veterinarian and a member of the public, and it is responsible for overseeing and evaluating all aspects of the institution's animal care and use program. The IACUC must review and approve all proposed activities involving animals to ensure they are justified, humane, and that alternatives are considered."
      }
    ],
    purpose: "The main purpose of the Animal Welfare Act is to ensure that animals intended for use in research facilities, for exhibition purposes, or for use as pets are provided humane care and treatment. It also aims to assure the humane treatment of animals during transportation in commerce and to protect the owners of animals from theft of their animals by preventing the sale or use of animals that have been stolen. It seeks to balance the needs of science and industry with the moral responsibility to treat animals humanely."
  },
  '6': {
    summary: "Antitrust laws are a collection of federal and state government laws that regulate the conduct and organization of business corporations. The main federal statutes are the Sherman Antitrust Act of 1890 and the Clayton Antitrust Act of 1914. These laws are designed to promote fair competition for the benefit of consumers by preventing monopolies and other anti-competitive business practices. Key statutes can be found in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15/USCODE-2021-title15-chap1' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 15 of the U.S. Code</a>.",
    keyProvisions: [
        {
            title: "Sherman Antitrust Act (1890)",
            content: "This is the foundational U.S. antitrust law. Section 1 prohibits contracts, combinations, and conspiracies in restraint of trade (e.g., price-fixing agreements between competitors). Section 2 makes it illegal to monopolize, or attempt to monopolize, any part of trade or commerce. Violations can lead to severe criminal and civil penalties."
        },
        {
            title: "Clayton Antitrust Act (1914)",
            content: "This act was passed to strengthen the Sherman Act. It addresses specific practices that the Sherman Act does not clearly prohibit, such as price discrimination, exclusive dealing contracts, tying arrangements, and mergers and acquisitions that may substantially lessen competition."
        },
        {
          title: "Federal Trade Commission Act (1914)",
          content: "Created the Federal Trade Commission (FTC), which is tasked with enforcing antitrust laws alongside the Department of Justice (DOJ). The act also prohibits 'unfair methods of competition' and 'unfair or deceptive acts or practices,' giving the FTC broad authority to protect consumers."
        },
        {
          title: "Enforcement",
          content: "Antitrust laws are enforced by the FTC and the Antitrust Division of the DOJ. They can bring civil or criminal cases against violators. Additionally, private parties (including businesses and consumers) who are harmed by anti-competitive conduct can sue for treble damages (three times the actual damages suffered)."
        }
    ],
    purpose: "The core purpose of antitrust laws is to protect the process of competition for the benefit of consumers. By preventing monopolies and cartels, these laws ensure there are strong incentives for businesses to operate efficiently, keep prices down, and maintain high quality. They aim to create a level playing field where businesses can compete fairly, leading to innovation and economic growth."
  },
  '7': {
    summary: "<a href='https://www.govinfo.gov/app/details/USCODE-2021-title11' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 11 of the United States Code</a>, known as the Bankruptcy Code, is the federal law that governs how individuals and businesses can seek relief from their debts. It provides a structured process for the orderly distribution of a debtor's assets to creditors and, for honest debtors, offers a 'fresh start' by discharging most of their debts.",
    keyProvisions: [
      {
        title: "Chapter 7: Liquidation",
        content: "Often referred to as 'straight bankruptcy,' this is the most common form for individuals. It involves the appointment of a trustee who collects the debtor's nonexempt assets, sells them, and distributes the proceeds to creditors. In return, the debtor receives a discharge of most of their unsecured debts, such as credit card bills and medical expenses."
      },
      {
        title: "Chapter 11: Reorganization",
        content: "This chapter is used primarily by businesses (corporations and partnerships) to reorganize their finances and continue operating. The debtor proposes a reorganization plan to keep its business alive and pay creditors over time. Chapter 11 is also available to certain high-debt individuals."
      },
      {
        title: "Chapter 13: Repayment Plan",
        content: "This chapter enables individuals with regular income to develop a plan to repay all or part of their debts. Debtors propose a repayment plan to make installments to creditors over three to five years. If the debtor successfully completes the plan, they receive a discharge of their remaining eligible debts."
      },
      {
        title: "Automatic Stay",
        content: "Upon filing any bankruptcy petition, an 'automatic stay' immediately goes into effect. This is an injunction that halts actions by creditors to collect debts from the debtor. It stops foreclosures, repossessions, wage garnishments, and collection lawsuits, providing the debtor with immediate relief."
      }
    ],
    purpose: "The dual purposes of the Bankruptcy Code are to give an honest debtor a 'fresh start' from burdensome debts and to provide for the fair and orderly distribution of a debtor's available assets among creditors. It provides a safety net for individuals and businesses facing financial hardship while ensuring that creditors are treated equitably."
  },
  '8': {
    summary: "Child labor in the United States is regulated by the Fair Labor Standards Act (FLSA), found at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title29/USCODE-2021-title29-chap8' target='_blank' rel='noopener noreferrer' class='text-primary underline'>29 U.S.C. Chapter 8</a>. These federal provisions are designed to protect the educational opportunities of minors and prohibit their employment in jobs and under conditions that are detrimental to their health, safety, and well-being.",
    keyProvisions: [
      {
        title: "Minimum Age for Employment",
        content: "The FLSA sets a minimum age of 14 for most non-agricultural work. For agricultural work, the minimum age is generally lower. There are some exceptions, such as newspaper delivery, acting, and working for a parent's business (in non-hazardous jobs)."
      },
      {
        title: "Hazardous Occupations for Minors",
        content: "The Secretary of Labor has identified 17 hazardous non-agricultural occupations that are declared too dangerous for minors under 18 to perform. These include jobs like mining, logging, roofing, excavation, and operating many types of power-driven machinery. The rules are different for agricultural employment."
      },
      {
        title: "Hours of Work for Minors (14-15 years old)",
        content: "For 14- and 15-year-olds, work is restricted to: non-school hours; no more than 3 hours on a school day and 18 hours in a school week; no more than 8 hours on a non-school day and 40 hours in a non-school week. Work may not begin before 7 a.m. or end after 7 p.m. (except from June 1 through Labor Day, when evening hours are extended to 9 p.m.)."
      },
      {
        title: "State Law Interaction",
        content: "Most states also have their own child labor laws. When federal and state laws conflict, the law that provides the most protection to the minor must be followed."
      }
    ],
    purpose: "The primary purpose of child labor laws is to protect the health, well-being, and educational opportunities of young workers. By restricting the types of jobs they can hold and the hours they can work, the law aims to ensure that work does not interfere with a minor's schooling or expose them to unsafe conditions."
  },
  '9': {
    summary: "The Civil Rights Act of 1964 is a landmark piece of civil rights legislation in the United States that outlawed discrimination based on race, color, religion, sex, or national origin. Its provisions are codified in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title42/USCODE-2021-title42-chap21' target='_blank' rel='noopener noreferrer' class='text-primary underline'>42 U.S.C. Chapter 21</a> and other parts of the U.S. Code. The Act was a monumental step in ending segregation and discrimination in the United States.",
    keyProvisions: [
      {
        title: "Title II: Public Accommodations",
        content: "This title prohibits discrimination in public accommodations, which are private businesses that are open to the public. This includes hotels, motels, restaurants, theaters, and any other place of public gathering. It was instrumental in desegregating public facilities across the country."
      },
      {
        title: "Title VI: Federally Funded Programs",
        content: "Prohibits discrimination on the basis of race, color, or national origin in programs and activities that receive federal financial assistance. This has had a broad impact, affecting schools, universities, hospitals, and other institutions that rely on federal funding."
      },
      {
        title: "Title VII: Employment Discrimination",
        content: "This is one of the most impactful sections of the Act. It prohibits employment discrimination by employers with 15 or more employees on the basis of race, color, religion, sex, or national origin. It also created the Equal Employment Opportunity Commission (EEOC) to enforce these provisions."
      },
      {
        title: "Voting Rights",
        content: "While the Voting Rights Act of 1965 would later provide more robust protections, the Civil Rights Act of 1964 also included provisions to enforce voting rights and eliminate discriminatory practices like literacy tests."
      }
    ],
    purpose: "The overarching purpose of the Civil Rights Act of 1964 was to end segregation in public places and ban employment discrimination. It sought to fulfill the promise of equality that had been made after the Civil War but had been undermined by decades of segregation and discrimination under 'Jim Crow' laws."
  },
  '10': {
    summary: "The Clean Air Act (CAA), found at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title42/USCODE-2021-title42-chap85' target='_blank' rel='noopener noreferrer' class='text-primary underline'>42 U.S.C. Chapter 85</a>, is the comprehensive federal law that regulates air emissions from stationary and mobile sources. This law authorizes the U.S. Environmental Protection Agency (EPA) to establish National Ambient Air Quality Standards (NAAQS) to protect public health and public welfare and to regulate emissions of hazardous air pollutants.",
    keyProvisions: [
      {
        title: "National Ambient Air Quality Standards (NAAQS)",
        content: "The EPA sets NAAQS for six common air pollutants (known as 'criteria' pollutants): particulate matter, ground-level ozone, sulfur dioxide, nitrogen dioxide, carbon monoxide, and lead. Areas that do not meet these standards are designated as 'nonattainment' areas and must take specific steps to improve their air quality."
      },
      {
        title: "State Implementation Plans (SIPs)",
        content: "Each state is required to develop a State Implementation Plan (SIP) that explains how it will attain and maintain the NAAQS. These plans are a collection of regulations and programs that the state will use to clean up polluted areas."
      },
      {
        title: "New Source Performance Standards (NSPS)",
        content: "The EPA establishes technology-based standards for new or significantly modified stationary sources of air pollution, such as factories and power plants. These standards require the use of the best available technology to control emissions."
      },
      {
        title: "Hazardous Air Pollutants (HAPs)",
        content: "The Act requires the EPA to regulate 187 listed hazardous air pollutants (also known as air toxics) from a wide range of industrial sources. These regulations are based on the maximum achievable control technology (MACT) for each source category."
      }
    ],
    purpose: "The core purpose of the Clean Air Act is to protect public health and welfare from the harmful effects of air pollution. It aims to achieve this by reducing emissions from various sources, setting air quality standards, and funding research into pollution control technologies."
  },
  '11': {
    summary: "The Clean Water Act (CWA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title33/USCODE-2021-title33-chap26' target='_blank' rel='noopener noreferrer' class='text-primary underline'>33 U.S.C. Chapter 26</a>, is the cornerstone of surface water quality protection in the United States. The act establishes the basic structure for regulating discharges of pollutants into the 'waters of the United States' and for regulating quality standards for those waters. It was enacted in 1972 as a major overhaul of the Federal Water Pollution Control Act of 1948.",
    keyProvisions: [
      {
        title: "NPDES Permit Program",
        content: "The National Pollutant Discharge Elimination System (NPDES) is a key provision of the CWA. It requires a permit for any 'point source' (a discrete conveyance like a pipe or man-made ditch) to discharge pollutants into navigable waters. These permits limit the amount and type of pollutants that can be discharged."
      },
      {
        title: "Water Quality Standards",
        content: "The CWA requires states to adopt water quality standards for their surface waters. These standards consist of a designated use for the water body (e.g., recreation, drinking water supply) and water quality criteria to protect that use. If a water body does not meet its standards, it is listed as 'impaired' and a cleanup plan must be developed."
      },
      {
        title: "Section 404 Program",
        content: "This program, jointly administered by the EPA and the U.S. Army Corps of Engineers, regulates the discharge of 'dredged or fill material' into waters of the United States, including wetlands. A permit is required for activities that would fill or degrade these important aquatic resources."
      },
      {
        title: "Funding for Wastewater Treatment",
        content: "The CWA provides significant federal funding for the construction of sewage treatment plants, which has dramatically reduced the amount of raw sewage discharged into the nation's rivers and lakes."
      }
    ],
    purpose: "The stated objective of the Clean Water Act is 'to restore and maintain the chemical, physical, and biological integrity of the Nation's waters.' It aims to achieve this by eliminating the discharge of pollutants into navigable waters and achieving water quality levels that are fishable and swimmable."
  },
  '12': {
    summary: "The Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA), commonly known as Superfund, is a federal law codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title42/USCODE-2021-title42-chap103' target='_blank' rel='noopener noreferrer' class='text-primary underline'>42 U.S.C. Chapter 103</a>. Enacted in 1980, it provides a Federal 'Superfund' to clean up uncontrolled or abandoned hazardous-waste sites as well as accidents, spills, and other emergency releases of pollutants and contaminants into the environment. The law gives the EPA the power to seek out those parties responsible for any release and assure their cooperation in the cleanup.",
    keyProvisions: [
      {
        title: "Identification and Listing of Sites",
        content: "CERCLA authorizes the EPA to identify sites where hazardous substances have been or might be released into the environment. These sites are ranked based on their potential risk to human health and the environment, and the most serious sites are placed on the National Priorities List (NPL) for cleanup."
      },
      {
        title: "Liability Scheme",
        content: "CERCLA establishes a broad liability scheme to hold certain parties responsible for cleanup costs. These 'Potentially Responsible Parties' (PRPs) can include current and former owners and operators of a site, as well as those who arranged for the disposal or transport of hazardous substances. Liability is strict, joint and several, meaning a PRP can be held responsible for the entire cost of cleanup, regardless of fault."
      },
      {
        title: "The Superfund Trust Fund",
        content: "The law created a trust fund, financed primarily by a tax on the chemical and petroleum industries, to pay for cleanup activities at sites where a PRP cannot be identified or is unable to pay. While the tax expired in 1995, the fund is now financed by congressional appropriations and cost recoveries from PRPs."
      },
      {
        title: "Cleanup Authority",
        content: "The EPA has the authority to either order PRPs to perform the cleanup themselves or to conduct the cleanup using Superfund money and then sue the PRPs to recover the costs."
      }
    ],
    purpose: "The primary purpose of CERCLA is to provide for the cleanup of the nation's most contaminated hazardous waste sites and to hold the parties responsible for the contamination accountable for the cleanup costs. It aims to protect human health and the environment from the dangers posed by these sites."
  },
  '13': {
    summary: "The Consolidated Omnibus Budget Reconciliation Act (COBRA) is a landmark federal law that gives workers and their families who lose their health benefits the right to choose to continue group health benefits provided by their group health plan for limited periods of time under certain circumstances. These circumstances are known as 'qualifying events.' The provisions are found in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title29/USCODE-2021-title29-chap18-subchapI-part6' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 29 of the U.S. Code</a> and the Internal Revenue Code.",
    keyProvisions: [
      {
        title: "Continuation Coverage",
        content: "COBRA requires group health plans sponsored by employers with 20 or more employees to offer 'continuation coverage' to covered employees, their spouses, former spouses, and dependent children when group health coverage would otherwise be lost due to certain specific events."
      },
      {
        title: "Qualifying Events",
        content: "Events that trigger COBRA eligibility include: voluntary or involuntary termination of employment (for reasons other than 'gross misconduct'), reduction in the number of hours of employment, death of the covered employee, divorce or legal separation from the covered employee, a covered employee becoming entitled to Medicare, and a child's loss of dependent status under the plan."
      },
      {
        title: "Duration and Cost",
        content: "Continuation coverage is temporary. It typically lasts for 18 months, but can be extended to 36 months under certain circumstances (e.g., disability or a second qualifying event). Individuals electing COBRA may be required to pay the full premium for the coverage, plus a 2% administrative charge."
      },
      {
        title: "Notice Requirements",
        content: "Employers and health plans have specific responsibilities to notify eligible individuals of their COBRA rights, both when they first join the health plan and when a qualifying event occurs."
      }
    ],
    purpose: "The purpose of COBRA is to provide a temporary bridge for individuals and their families to maintain health coverage during periods of job loss or other life transitions that would otherwise result in a loss of insurance. It helps prevent gaps in health coverage, ensuring continuous access to healthcare."
  },
  '14': {
    summary: "The Consumer Credit Protection Act (CCPA), enacted in 1968 and codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15/USCODE-2021-title15-chap41' target='_blank' rel='noopener noreferrer' class='text-primary underline'>15 U.S.C. Chapter 41</a>, is a comprehensive federal law designed to protect consumers in their dealings with creditors and to ensure the fair and honest extension of credit. It is an umbrella act that contains several important sub-acts, each addressing a different aspect of consumer credit.",
    keyProvisions: [
      {
        title: "Title I: Truth in Lending Act (TILA)",
        content: "This is one of the most significant parts of the CCPA. TILA requires lenders to provide standardized disclosures about the terms and cost of credit. This includes clearly stating the annual percentage rate (APR) and the finance charge, allowing consumers to compare credit offers from different lenders."
      },
      {
        title: "Title VI: Fair Credit Reporting Act (FCRA)",
        content: "This act regulates the collection, dissemination, and use of consumer credit information. It ensures the accuracy and privacy of the information in credit reports and gives consumers the right to view their credit reports and dispute inaccurate information."
      },
      {
        title: "Title VIII: Fair Debt Collection Practices Act (FDCPA)",
        content: "This act establishes legal protection from abusive debt collection practices. It defines the rights of consumers and places restrictions on when, where, and how third-party debt collectors can contact debtors."
      },
      {
        title: "Title VII: Equal Credit Opportunity Act (ECOA)",
        content: "This act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age, or because the applicant receives public assistance."
      }
    ],
    purpose: "The overall purpose of the CCPA is to protect consumers in the credit marketplace. It aims to create a more transparent and fair system by requiring clear disclosure of credit terms, ensuring the accuracy of credit reports, preventing discrimination, and stopping abusive debt collection tactics."
  },
  '15': {
    summary: "Copyright law in the United States is governed by federal statute, primarily the Copyright Act of 1976, which is codified in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title17' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 17 of the U.S. Code</a>. Copyright is a form of intellectual property law that protects original works of authorship including literary, dramatic, musical, and artistic works, such as poetry, novels, movies, songs, computer software, and architecture. This protection is available for both published and unpublished works.",
    keyProvisions: [
      {
        title: "Exclusive Rights of the Copyright Holder",
        content: "A copyright holder has the exclusive right to do and to authorize others to do the following: reproduce the work, prepare derivative works based upon the work, distribute copies of the work to the public, perform the work publicly, and display the work publicly."
      },
      {
        title: "Duration of Copyright",
        content: "For works created by an individual on or after January 1, 1978, copyright protection lasts for the life of the author plus an additional 70 years. For works made for hire and anonymous or pseudonymous works, the duration is 95 years from publication or 120 years from creation, whichever is shorter."
      },
      {
        title: "Fair Use Doctrine (Section 107)",
        content: "Fair use is a crucial legal doctrine that permits the limited use of copyrighted material without acquiring permission from the rights holders. Courts evaluate fair use claims based on four factors: (1) the purpose and character of the use (e.g., commercial vs. educational), (2) the nature of the copyrighted work, (3) the amount and substantiality of the portion used, and (4) the effect of the use on the potential market for the work."
      },
      {
        title: "Copyright Registration",
        content: "While copyright protection is automatic once a work is 'fixed in a tangible medium of expression,' registration with the U.S. Copyright Office is required to file a lawsuit for copyright infringement in federal court. Registration also provides a public record of the copyright claim."
      }
    ],
    purpose: "As stated in the U.S. Constitution, the purpose of copyright is 'to promote the progress of science and useful arts, by securing for limited times to authors and inventors the exclusive right to their respective writings and discoveries.' It seeks to balance the rights of creators to benefit from their work with the public's interest in accessing and building upon those works."
  },
  '16': {
    summary: "U.S. Customs and Border Protection (CBP) is the federal agency responsible for securing the nation's borders. The regulations it enforces, primarily found in <a href='https://www.govinfo.gov/app/details/CFR-2023-title19-vol1' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 19 of the Code of Federal Regulations (CFR)</a>, govern the flow of goods (trade) and people (travel) into and out of the United States. These rules are critical for national security, economic prosperity, and public safety.",
    keyProvisions: [
      {
        title: "Import/Export Requirements (Customs Law)",
        content: "These regulations specify the complex requirements for importing and exporting goods. This includes proper declaration and classification of merchandise, assessment and collection of duties, taxes, and fees (tariffs), and enforcement of trade agreements and quotas. All goods must be 'cleared' by CBP before entering U.S. commerce."
      },
      {
        title: "Inspections, Searches, and Seizures",
        content: "CBP has broad authority to inspect and search all persons, baggage, and merchandise arriving in or departing from the United States. This is done to prevent the entry of illegal items, contraband (like narcotics), counterfeit goods that violate intellectual property rights, and agricultural pests or diseases. CBP can seize items that violate U.S. laws."
      },
      {
        title: "Immigration and Admissibility",
        content: "CBP officers at ports of entry are responsible for determining the admissibility of travelers into the country. This involves inspecting travel documents like passports and visas, interviewing travelers to determine the purpose of their visit, and checking against various law enforcement and security databases."
      },
      {
        title: "Enforcement of Other Agency Laws",
        content: "CBP enforces hundreds of laws on behalf of more than 40 other federal agencies. For example, it helps enforce the EPA's rules on vehicle emissions, the FDA's rules on food and drug safety, and the CPSC's rules on consumer product safety."
      }
    ],
    purpose: "CBP's mission is to safeguard America's borders, thereby protecting the public from dangerous people and materials while enhancing the nation's global economic competitiveness by enabling legitimate trade and travel. It aims to prevent terrorists and their weapons from entering the U.S. while facilitating the lawful flow of international commerce and tourism."
  },
  '17': {
    summary: "The Dodd-Frank Wall Street Reform and Consumer Protection Act, commonly referred to as Dodd-Frank, was enacted in 2010 in response to the 2008 financial crisis. It is a massive piece of financial reform legislation that represents the most significant changes to financial regulation in the United States since the Great Depression. Key parts are found in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title12/USCODE-2021-title12-chap53' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 12 of the U.S. Code</a>.",
    keyProvisions: [
      {
        title: "Consumer Financial Protection Bureau (CFPB)",
        content: "Dodd-Frank created the CFPB, a powerful independent agency dedicated to protecting consumers in the financial marketplace. The CFPB writes and enforces rules for financial institutions, examines bank records, and works to prevent deceptive practices related to products like mortgages, credit cards, and student loans."
      },
      {
        title: "Volcker Rule",
        content: "Named after former Federal Reserve Chairman Paul Volcker, this rule restricts U.S. banks from making certain kinds of speculative investments (proprietary trading) that do not directly benefit their customers. It aims to prevent banks from taking on excessive risks with their own money, which could jeopardize the institution."
      },
      {
        title: "Systemic Risk Regulation (FSOC)",
        content: "The Act created the Financial Stability Oversight Council (FSOC), which is chaired by the Treasury Secretary. The FSOC's job is to identify and monitor excessive risks to the U.S. financial system that could arise from the distress or failure of large, interconnected financial companies (so-called 'too big to fail' institutions)."
      },
      {
        title: "Derivatives Regulation",
        content: "Dodd-Frank brought significant transparency and regulation to the vast, previously unregulated market for over-the-counter (OTC) derivatives. It requires most swaps to be traded on exchanges and cleared through central clearinghouses to reduce counterparty risk."
      }
    ],
    purpose: "The stated purpose of Dodd-Frank is 'To promote the financial stability of the United States by improving accountability and transparency in the financial system, to end 'too big to fail', to protect the American taxpayer by ending bailouts, [and] to protect consumers from abusive financial services practices.'"
  },
  '18': {
    summary: "The Drug Enforcement Administration (DEA) is the federal agency responsible for enforcing the controlled substances laws and regulations of the United States. The primary law it enforces is the Controlled Substances Act (CSA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title21/USCODE-2021-title21-chap13' target='_blank' rel='noopener noreferrer' class='text-primary underline'>21 U.S.C. Chapter 13</a>. These regulations govern the manufacture, distribution, and dispensing of legally produced controlled substances.",
    keyProvisions: [
      {
        title: "Drug Scheduling",
        content: "The CSA classifies controlled substances into five 'schedules' (Schedules I, II, III, IV, and V) based on their potential for abuse, currently accepted medical use in treatment in the United States, and likelihood of causing dependence when abused. Schedule I drugs (e.g., heroin, LSD) have the highest potential for abuse and no accepted medical use."
      },
      {
        title: "Registration Requirements",
        content: "Any entity that manufactures, distributes, prescribes, dispenses, or otherwise handles controlled substances must register with the DEA. This includes doctors, pharmacies, hospitals, and pharmaceutical manufacturers. This registration creates a 'closed system' designed to track controlled substances from production to patient."
      },
      {
        title: "Recordkeeping and Inventory",
        content: "Registrants are subject to strict recordkeeping and inventory requirements. They must maintain accurate records of all controlled substances they receive, dispense, or dispose of. These records are subject to inspection by the DEA to ensure accountability and prevent diversion."
      },
      {
        title: "Prescription Requirements",
        content: "The CSA and DEA regulations set forth specific requirements for valid prescriptions for controlled substances, especially for Schedule II drugs, which have the tightest controls. These rules dictate who can write prescriptions, what information they must contain, and how they can be dispensed."
      }
    ],
    purpose: "The purpose of DEA regulations and the Controlled Substances Act is to prevent the diversion and abuse of controlled substances while ensuring an adequate and uninterrupted supply for legitimate medical, scientific, and research needs. The DEA enforces these laws to bring to justice those organizations and individuals involved in the illicit trafficking of controlled substances."
  },
  '19': {
    summary: "The Employee Retirement Income Security Act of 1974 (ERISA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title29/USCODE-2021-title29-chap18' target='_blank' rel='noopener noreferrer' class='text-primary underline'>29 U.S.C. Chapter 18</a>, is a comprehensive federal law that sets minimum standards for most voluntarily established retirement and health plans in private industry. ERISA does not require any employer to establish a plan; it only requires that those who do establish plans must meet certain minimum standards.",
    keyProvisions: [
      {
        title: "Fiduciary Duties",
        content: "A central feature of ERISA is the concept of a 'fiduciary.' Those who manage and control plan assets (fiduciaries) must act with a high degree of care and solely in the interest of plan participants and beneficiaries. This includes diversifying plan investments to minimize the risk of large losses."
      },
      {
        title: "Disclosure and Reporting",
        content: "ERISA requires plan administrators to provide participants with important information about their plan, including a Summary Plan Description (SPD), which explains the plan's features and funding. Plans must also file annual reports (Form 5500) with the federal government."
      },
      {
        title: "Vesting Standards",
        content: "Vesting is the process by which an employee gains a non-forfeitable right to their benefits. ERISA sets minimum vesting schedules for retirement plans, ensuring that long-serving employees will receive their promised benefits even if they leave the company before retirement."
      },
      {
        title: "Claims and Appeals Process",
        content: "Every ERISA plan must establish a procedure for participants to file claims for benefits and to appeal a denial of benefits. Participants must typically exhaust this internal appeals process before they can file a lawsuit in federal court."
      }
    ],
    purpose: "The primary purpose of ERISA is to protect the interests of participants and their beneficiaries in employee benefit plans. It ensures that employees receive the pensions and other benefits promised by their employers by setting standards for how these plans are managed and operated."
  },
  '20': {
    summary: "The Endangered Species Act (ESA) of 1973, codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title16/USCODE-2021-title16-chap35' target='_blank' rel='noopener noreferrer' class='text-primary underline'>16 U.S.C. Chapter 35</a>, is one of the world's most powerful environmental laws. It provides a comprehensive program for the conservation of threatened and endangered plants and animals and the habitats in which they are found. The law is administered by the U.S. Fish and Wildlife Service (FWS) and the National Marine Fisheries Service (NMFS).",
    keyProvisions: [
      {
        title: "Listing of Species",
        content: "Species may be listed as either 'endangered' (in danger of extinction throughout all or a significant portion of its range) or 'threatened' (likely to become endangered in the foreseeable future). The listing decision must be based solely on the best available scientific and commercial data."
      },
      {
        title: "Prohibition on 'Take'",
        content: "Section 9 of the ESA makes it unlawful for any person to 'take' a listed animal. The term 'take' is broadly defined to mean 'to harass, harm, pursue, hunt, shoot, wound, kill, trap, capture, or collect, or to attempt to engage in any such conduct.' 'Harm' includes significant habitat modification that injures wildlife."
      },
      {
        title: "Critical Habitat Designation",
        content: "When a species is listed, the FWS or NMFS is required to designate 'critical habitat'—the specific areas essential to the conservation of the species. Federal agencies are then prohibited from taking actions that would destroy or adversely modify this critical habitat."
      },
      {
        title: "Recovery Plans",
        content: "The ESA requires the development and implementation of recovery plans for listed species. These plans are the central organizing tool for guiding the recovery process, with the ultimate goal of delisting the species once it is no longer threatened or endangered."
      }
    ],
    purpose: "The purpose of the ESA is to protect and recover imperiled species and the ecosystems upon which they depend. It is intended to halt and reverse the trend toward species extinction, whatever the cost."
  },
  '21': {
    summary: "The Energy Policy Act of 2005, found in <a href='https://www.govinfo.gov/app/details/PLAW-109publ58' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Public Law 109-58</a>, is a broad bill that addresses many aspects of energy policy in the United States. It attempts to combat growing energy problems by providing tax incentives and loan guarantees for energy production of various types, including fossil fuels, nuclear power, and renewable energy.",
    keyProvisions: [
      {
        title: "Renewable Fuel Standard (RFS)",
        content: "One of the most significant parts of the act, the RFS program requires transportation fuel sold in the U.S. to contain a minimum volume of renewable fuels, such as ethanol and biodiesel. This mandate has been expanded in subsequent legislation and is a major driver of the biofuels industry."
      },
      {
        title: "Loan Guarantees for Innovative Technologies",
        content: "The Act authorized the Department of Energy to issue loan guarantees for large-scale energy projects that use innovative technologies that avoid, reduce, or sequester air pollutants or anthropogenic emissions of greenhouse gases. This program has supported projects in nuclear power, renewable energy, and advanced fossil fuels."
      },
      {
        title: "Energy Efficiency and Conservation",
        content: "The law includes numerous provisions to improve energy efficiency. It updated appliance efficiency standards, promoted energy savings in federal buildings, and authorized funding for weatherization assistance programs for low-income households. It also established the daylight saving time extension that is currently in effect."
      },
      {
        title: "Oil and Gas Production",
        content: "The Act contained several provisions aimed at boosting domestic oil and gas production. Notably, it included the 'Halliburton Loophole,' which exempted fluids used in hydraulic fracturing (fracking) from certain environmental regulations under the Safe Drinking Water Act."
      }
    ],
    purpose: "The overall purpose of the Energy Policy Act of 2005 was to create a comprehensive, long-range energy policy for the United States that would ensure a dependable, affordable, and environmentally responsible supply of energy. It aimed to increase energy independence and security by encouraging domestic production and promoting energy conservation and efficiency."
  },
  '22': {
    summary: "The Equal Credit Opportunity Act (ECOA) is a federal law that makes it illegal for any creditor to discriminate in any aspect of a credit transaction. It is part of the Consumer Credit Protection Act and is codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15/USCODE-2021-title15-chap41-subchapIV' target='_blank' rel='noopener noreferrer' class='text-primary underline'>15 U.S.C. § 1691 et seq.</a> The law is enforced by several agencies, including the Consumer Financial Protection Bureau (CFPB) and the Department of Justice (DOJ).",
    keyProvisions: [
      {
        title: "Prohibited Bases for Discrimination",
        content: "A creditor cannot discriminate against an applicant on the basis of: race, color, religion, national origin, sex, marital status, or age (provided the applicant has the capacity to contract). Furthermore, a creditor cannot discriminate because all or part of the applicant's income derives from any public assistance program, or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act."
      },
      {
        title: "Rules Concerning Applications",
        content: "Creditors are restricted in the types of information they can request. For example, they generally cannot ask about an applicant's marital status or their plans for having or raising children. If a creditor denies credit, they must inform the applicant of the specific reasons for the denial."
      },
      {
        title: "Notice of Adverse Action",
        content: "When a creditor takes an 'adverse action' (such as denying credit, or granting credit on less favorable terms than requested), they must notify the applicant of the action taken within 30 days. The notice must provide the specific reasons for the denial or inform the applicant of their right to request the reasons."
      },
      {
        title: "Appraisal Reports",
        content: "The ECOA gives applicants the right to receive a copy of any appraisal or other written valuation developed in connection with their application for a loan to be secured by a first lien on a dwelling. The lender must provide this copy promptly upon completion of the appraisal, or 3 days before the loan closes, whichever is earlier."
      }
    ],
    purpose: "The primary purpose of the ECOA is to ensure that all consumers are given an equal and fair chance to obtain credit. It promotes the availability of credit to all creditworthy applicants without regard to any prohibited basis, ensuring that the credit marketplace operates on the basis of individual creditworthiness, not personal characteristics."
  },
  '23': {
    summary: "The Equal Pay Act of 1963 (EPA) is a United States labor law that amended the Fair Labor Standards Act. It is aimed at abolishing wage disparity based on sex. The law is codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title29/USCODE-2021-title29-chap8-sec206' target='_blank' rel='noopener noreferrer' class='text-primary underline'>29 U.S.C. § 206(d)</a> and is administered and enforced by the Equal Employment Opportunity Commission (EEOC).",
    keyProvisions: [
      {
        title: "Equal Pay for Equal Work Standard",
        content: "The EPA requires that men and women who work in the same establishment receive equal pay for 'equal work.' The jobs need not be identical, but they must be 'substantially equal.' The determination of whether jobs are substantially equal is based on job content, not job titles."
      },
      {
        title: "Factors of Skill, Effort, Responsibility, and Working Conditions",
        content: "In determining if jobs are equal, the analysis focuses on four factors: Skill (experience, ability, education), Effort (physical or mental exertion), Responsibility (degree of accountability), and Working Conditions (physical surroundings and hazards). If the jobs are substantially equal on these four factors, the pay must be equal."
      },
      {
        title: "Permitted Pay Differentials (Affirmative Defenses)",
        content: "Pay differentials are permitted if they are based on one of four affirmative defenses: (1) a seniority system, (2) a merit system, (3) a system which measures earnings by quantity or quality of production, or (4) a differential based on 'any other factor other than sex.' The employer bears the burden of proof for these defenses."
      },
      {
        title: "Prohibition on Lowering Wages",
        content: "The law explicitly states that an employer who is violating the Act cannot reduce the wage rate of any employee in order to comply with the law. Instead, they must raise the wage rate of the lower-paid sex."
      }
    ],
    purpose: "The core purpose of the Equal Pay Act is to prohibit discrimination on account of sex in the payment of wages by employers. It was designed to correct the long-standing practice of paying women less than men for the same work, and to ensure that individuals are compensated based on their job performance and qualifications, not their gender."
  },
  '24': {
    summary: "The Fair Credit Reporting Act (FCRA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15/USCODE-2021-title15-chap41-subchapIII' target='_blank' rel='noopener noreferrer' class='text-primary underline'>15 U.S.C. § 1681 et seq.</a>, is a U.S. federal law enacted in 1970 that regulates how consumer reporting agencies (CRAs) collect, use, and disseminate consumer credit information. The law is designed to ensure the fairness, accuracy, and privacy of the personal information contained in the files of CRAs.",
    keyProvisions: [
      {
        title: "Right to Access Your Information",
        content: "Consumers have the right to know what is in their file. You have the right to request and receive all the information about you in the files of a CRA. You are entitled to one free credit report every 12 months from each of the three nationwide credit bureaus (Experian, Equifax, and TransUnion)."
      },
      {
        title: "Right to Dispute Inaccurate Information",
        content: "If you identify information in your file that is inaccurate or incomplete, you have the right to dispute it with the CRA. The CRA must investigate your dispute, usually within 30 days, and correct or delete any information that is found to be inaccurate, incomplete, or unverifiable."
      },
      {
        title: "Permissible Purpose for Reports",
        content: "Access to a consumer's credit report is strictly limited to those with a legally recognized 'permissible purpose.' This includes creditors, insurers, employers (with your written consent), landlords, and government agencies. It is illegal for someone to obtain your credit report for an impermissible purpose."
      },
      {
        title: "Limits on Negative Information",
        content: "The FCRA places limits on how long most negative information can remain on your credit report. In general, most negative information, such as late payments or collection accounts, must be removed after seven years. A bankruptcy can remain for up to 10 years."
      }
    ],
    purpose: "The primary purpose of the FCRA is to promote the accuracy, fairness, and privacy of information in the files of consumer reporting agencies. It protects consumers from the willful and/or negligent inclusion of inaccurate information in their credit reports and regulates the use of those reports to ensure privacy."
  },
  '25': {
    summary: "The Fair Debt Collection Practices Act (FDCPA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15/USCODE-2021-title15-chap41-subchapV' target='_blank' rel='noopener noreferrer' class='text-primary underline'>15 U.S.C. § 1692 et seq.</a>, is a federal law that establishes legal protection from abusive debt collection practices. It applies only to third-party debt collectors—companies that collect debts on behalf of another person or entity—and not to original creditors collecting their own debts.",
    keyProvisions: [
      {
        title: "Prohibited Abusive Practices",
        content: "The FDCPA prohibits debt collectors from using any harassing, oppressive, or abusive conduct. This includes threatening violence, using obscene or profane language, or repeatedly calling to annoy or harass. Collectors also cannot make false or misleading representations, such as falsely claiming to be an attorney or a government representative, or misrepresenting the amount of the debt."
      },
      {
        title: "Restrictions on Communication",
        content: "Collectors are subject to strict rules about when and how they can contact you. They cannot call you at any unusual time or place that is known to be inconvenient, generally meaning before 8 a.m. or after 9 p.m. local time. They also cannot contact you at your place of employment if they know your employer prohibits such calls."
      },
      {
        title: "Right to Stop Communication",
        content: "You have the right to stop a debt collector from contacting you. You can do this by sending a letter by mail asking for communication to stop. Once the collector receives your letter, they may not contact you again, except to tell you there will be no further contact or to notify you that they or the creditor intend to take a specific action, like filing a lawsuit."
      },
      {
        title: "Validation of Debts",
        content: "Within five days of their initial communication, a collector must send you a written 'validation notice.' This notice must state the amount of the debt, the name of the creditor to whom the debt is owed, and a statement that you have 30 days to dispute the validity of the debt. If you dispute the debt in writing, the collector must cease collection efforts until they provide you with verification of the debt."
      }
    ],
    purpose: "The purpose of the FDCPA is to eliminate abusive, deceptive, and unfair debt collection practices by debt collectors. It also aims to ensure that those debt collectors who refrain from using such practices are not competitively disadvantaged, and to promote consistent state-level consumer protection."
  },
  '26': {
    summary: "The Fair Housing Act, codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title42/USCODE-2021-title42-chap45' target='_blank' rel='noopener noreferrer' class='text-primary underline'>42 U.S.C. Chapter 45</a>, is a federal law that protects people from discrimination when they are renting or buying a home, getting a mortgage, seeking housing assistance, or engaging in other housing-related activities. It is part of the Civil Rights Act of 1968.",
    keyProvisions: [
      {
        title: "Protected Classes",
        content: "The Fair Housing Act prohibits discrimination based on race, color, national origin, religion, sex (including gender identity and sexual orientation), familial status (having children under 18), and disability."
      },
      {
        title: "Prohibited Actions in Housing",
        content: "It is illegal for anyone to take any of the following actions based on a protected class: refuse to rent or sell housing, refuse to negotiate for housing, set different terms or conditions for housing, provide different housing services or facilities, falsely deny that housing is available for inspection, sale, or rental, or make, print, or publish any notice or advertisement that indicates a preference or limitation based on a protected class."
      },
      {
        title: "Protections for People with Disabilities",
        content: "The Act includes specific protections for people with disabilities. It requires housing providers to make 'reasonable accommodations' (changes in rules, policies, or services) and to allow 'reasonable modifications' (structural changes to the property) when necessary to afford a person with a disability an equal opportunity to use and enjoy a dwelling."
      },
      {
        title: "Enforcement",
        content: "Individuals who believe they have been victims of housing discrimination can file a complaint with the Department of Housing and Urban Development (HUD) or file a private lawsuit in federal court. The Department of Justice can also bring cases on behalf of individuals."
      }
    ],
    purpose: "The central purpose of the Fair Housing Act is to provide for fair housing throughout the United States and to prevent and combat discrimination in all housing-related activities. It aims to create integrated, inclusive communities and ensure everyone has equal access to housing opportunities."
  },
  '27': {
    summary: "The Fair Labor Standards Act (FLSA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title29/USCODE-2021-title29-chap8' target='_blank' rel='noopener noreferrer' class='text-primary underline'>29 U.S.C. Chapter 8</a>, is the primary federal law governing wages and hours in the workplace. Enacted in 1938, it establishes a federal minimum wage, overtime pay eligibility, recordkeeping requirements, and child labor standards that affect most full-time and part-time workers in the private sector and in government.",
    keyProvisions: [
      {
        title: "Federal Minimum Wage",
        content: "The FLSA sets a national minimum wage rate that most covered employers must pay to their employees. Some states and cities have higher minimum wage rates. In cases of conflict, the employer must pay the higher rate."
      },
      {
        title: "Overtime Pay",
        content: "The Act requires employers to pay overtime pay to 'non-exempt' employees at a rate of not less than one and one-half times their regular rate of pay for all hours worked over 40 in a single workweek. The classification of an employee as 'exempt' or 'non-exempt' depends on their salary and job duties."
      },
      {
        title: "Exempt vs. Non-Exempt Employees",
        content: "The FLSA contains several exemptions from the minimum wage and overtime requirements, primarily for executive, administrative, professional, and outside sales employees (the 'white-collar' exemptions). To be exempt, an employee must generally be paid on a salary basis at not less than a certain amount and must perform specific exempt job duties."
      },
      {
        title: "Recordkeeping",
        content: "Employers are required to keep accurate records of employees' wages, hours, and other conditions of employment. This includes the hours worked each day and the total hours worked each week."
      }
    ],
    purpose: "The purpose of the FLSA is to protect workers from unfair labor practices by establishing minimum standards for wages and working conditions. It aims to ensure a 'minimum standard of living necessary for health, efficiency, and general well-being of workers' and to prevent unfair competition among businesses based on substandard labor conditions."
  },
  '28': {
    summary: "The Family and Medical Leave Act of 1993 (FMLA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title29/USCODE-2021-title29-chap28' target='_blank' rel='noopener noreferrer' class='text-primary underline'>29 U.S.C. Chapter 28</a>, is a significant U.S. labor law that requires covered employers to provide eligible employees with job-protected, unpaid leave for qualified medical and family reasons. It helps employees balance their work and family responsibilities without fear of losing their jobs.",
    keyProvisions: [
      {
        title: "Covered Employers and Eligible Employees",
        content: "The FMLA applies to private employers with 50 or more employees, public agencies (like local, state, and federal governments), and public or private elementary or secondary schools, regardless of the number of employees. An employee is eligible if they have worked for their employer for at least 12 months, have worked at least 1,250 hours over the past 12 months, and work at a location where the company employs 50 or more employees within 75 miles."
      },
      {
        title: "Leave Entitlement",
        content: "Eligible employees are entitled to take up to 12 workweeks of unpaid leave in a 12-month period for: the birth and care of a newborn child; the placement of a child for adoption or foster care; to care for an immediate family member (spouse, child, or parent) with a serious health condition; or for the employee's own serious health condition that makes them unable to perform their job."
      },
      {
        title: "Military Family Leave",
        content: "The FMLA also provides for two special types of military family leave: 'Qualifying Exigency Leave' (up to 12 weeks) and 'Military Caregiver Leave' (up to 26 weeks in a single 12-month period) to care for a covered servicemember with a serious injury or illness."
      },
      {
        title: "Job Protection and Health Benefits",
        content: "During FMLA leave, the employer must maintain the employee's health coverage under any 'group health plan' on the same terms as if the employee had continued to work. Upon return from FMLA leave, an employee must be restored to their original job or to an 'equivalent' job with equivalent pay, benefits, and other terms and conditions of employment."
      }
    ],
    purpose: "The purpose of the FMLA is to help employees balance their work and family responsibilities by allowing them to take reasonable unpaid leave for certain family and medical reasons. It seeks to accomplish this in a manner that accommodates the legitimate interests of employers and minimizes the potential for employment discrimination on the basis of sex, while promoting equal employment opportunity for men and women."
  },
  '29': {
    summary: "The Federal Aviation Administration (FAA) is the national aviation authority of the United States, operating under the Department of Transportation. Its regulations, found in <a href='https://www.govinfo.gov/app/details/CFR-2023-title14-vol1' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 14 of the Code of Federal Regulations (CFRs)</a>, are comprehensive and oversee all aspects of American civil aviation. These rules are designed to ensure safety and efficiency in the nation's airspace.",
    keyProvisions: [
      {
        title: "Aircraft Certification (Airworthiness)",
        content: "The FAA sets rigorous standards for the design, manufacturing, and maintenance of all aircraft operating in the U.S. An aircraft must have an 'Airworthiness Certificate' from the FAA, which signifies that it meets the required safety standards and is safe to operate."
      },
      {
        title: "Airman Certification (Pilots, Mechanics, etc.)",
        content: "The FAA is responsible for the licensing and certification of all 'airmen,' which includes pilots, flight instructors, air traffic controllers, and aircraft mechanics. The regulations specify the training, experience, and testing requirements for each type of certificate and rating."
      },
      {
        title: "Airspace and Air Traffic Control (ATC)",
        content: "The FAA manages the National Airspace System (NAS), the busiest and most complex airspace in the world. Its regulations classify airspace, establish 'rules of the road' for flight (like speed limits and altitude requirements), and govern the procedures used by air traffic controllers to safely separate aircraft."
      },
      {
        title: "Airline Operations",
        content: "Commercial airlines (air carriers) are subject to an extensive set of regulations governing their operations. These rules cover everything from pilot training and crew rest requirements to aircraft maintenance schedules and passenger safety procedures."
      }
    ],
    purpose: "The primary mission of the FAA is to provide the safest, most efficient aerospace system in the world. It is charged with regulating civil aviation to promote safety, encouraging and developing civil aeronautics, developing and operating a system of air traffic control, and regulating U.S. commercial space transportation."
  },
  '30': {
    summary: "The Federal Communications Commission (FCC) is an independent agency of the United States government created by the Communications Act of 1934. The Act, codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title47' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 47 of the U.S. Code</a>, gives the FCC the authority to regulate interstate and international communications by radio, television, wire, satellite, and cable. Its regulations impact what you see, hear, and say over the airwaves and online.",
    keyProvisions: [
      {
        title: "Spectrum Management",
        content: "The FCC is responsible for allocating and licensing the electromagnetic spectrum for all non-federal use. This includes radio and television broadcasting, mobile phones (cellular networks), Wi-Fi, satellite communications, and many other wireless services. This role is crucial for preventing interference and ensuring efficient use of this finite resource."
      },
      {
        title: "Media Regulation",
        content: "The FCC sets rules for broadcast media. This includes limits on media ownership to promote diversity of voices, rules for political advertising to ensure fair access for candidates, and enforcement of content standards regarding obscenity, indecency, and profanity on broadcast radio and television."
      },
      {
        title: "Broadband and Internet Regulation",
        content: "The FCC's role in regulating the internet and broadband services has been a subject of intense debate. This includes policies like 'Net Neutrality,' which are rules designed to ensure that internet service providers (ISPs) treat all data on the internet equally, without discriminating or charging differently based on user, content, website, or platform. The specific rules have changed under different administrations."
      },
      {
        title: "Universal Service",
        content: "The Communications Act mandates that the FCC promote 'universal service,' the principle that all Americans should have access to communications services. The FCC administers programs, funded by contributions from telecom companies, to support affordable service in high-cost rural areas, for low-income consumers (the Lifeline program), and for schools, libraries, and rural health care facilities."
      }
    ],
    purpose: "The FCC's mission is to regulate interstate and international communications in the public interest. It is charged with promoting competition, innovation, and investment in broadband services and facilities; supporting the nation's economy by ensuring an appropriate competitive framework for the unfolding of the information age; encouraging the highest and best use of spectrum; and ensuring that all Americans have access to robust, affordable, and reliable communication services."
  },
  '31': {
    summary: "The Federal Food, Drug, and Cosmetic Act (FD&C Act), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title21' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 21 of the U.S. Code</a>, is the primary law governing the safety and regulation of food, drugs, medical devices, and cosmetics in the United States. First passed in 1938, it grants the U.S. Food and Drug Administration (FDA) the authority to oversee these products to protect public health.",
    keyProvisions: [
      {
        title: "Premarket Approval for Drugs and Medical Devices",
        content: "A core component of the Act is the requirement that new drugs and high-risk medical devices be proven safe and effective for their intended use before they can be marketed to the public. Companies must submit extensive data from clinical trials to the FDA for review and approval."
      },
      {
        title: "Prohibition of Adulteration and Misbranding",
        content: "The Act prohibits the distribution of products that are 'adulterated' or 'misbranded.' Adulteration refers to contamination or the presence of unsafe substances. Misbranding refers to false or misleading labeling. The FDA has the authority to seize such products and pursue criminal or civil penalties against violators."
      },
      {
        title: "Good Manufacturing Practices (GMP)",
        content: "The FDA is authorized to establish and enforce Current Good Manufacturing Practices (cGMP) for drugs and certain foods. These are regulations that dictate the minimum standards for the methods, facilities, and controls used in manufacturing, processing, and packing of a product to ensure its quality, identity, strength, and purity."
      },
      {
        title: "Food Safety and Labeling",
        content: "The Act sets standards for food safety, prohibiting the sale of contaminated food. It also mandates that food labels be truthful and not misleading. Subsequent amendments, like the Nutrition Labeling and Education Act of 1990, require the standardized 'Nutrition Facts' panel on most packaged foods."
      }
    ],
    purpose: "The fundamental purpose of the FD&C Act is to protect the public health. It does this by assuring the safety, efficacy, and security of human and veterinary drugs, biological products, and medical devices; by ensuring the safety of our nation's food supply, cosmetics, and products that emit radiation; and by regulating the manufacturing, marketing, and distribution of tobacco products."
  },
  '32': {
    summary: "The Federal Information Security Management Act (FISMA) of 2002, which was reformed and updated by the Federal Information Security Modernization Act of 2014, is a U.S. federal law that makes it a requirement for federal agencies to develop, document, and implement an agency-wide program to provide information security. The law's provisions can be found in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title44/USCODE-2021-title44-chap35-subchapIII' target='_blank' rel='noopener noreferrer' class='text-primary underline'>44 U.S.C. §§ 3551-3558</a>. It recognizes the importance of information security to the economic and national security interests of the United States.",
    keyProvisions: [
      {
        title: "Risk Management Framework",
        content: "FISMA requires federal agencies to implement a risk-based approach to information security. This involves categorizing information and systems based on risk, selecting and implementing appropriate security controls (often based on standards from the National Institute of Standards and Technology - NIST), and continuously monitoring the effectiveness of those controls."
      },
      {
        title: "Agency-Wide Security Program",
        content: "Each agency must develop, document, and implement a comprehensive, agency-wide information security program. This program is intended to provide security for the information and information systems that support the operations and assets of the agency, including those provided or managed by another agency, contractor, or other source."
      },
      {
        title: "Annual Reviews and Reporting",
        content: "Agencies are required to conduct annual assessments of their information security programs. The results of these assessments, along with other information, must be reported to the Office of Management and Budget (OMB) and Congress. This reporting structure is designed to ensure accountability and drive improvements in federal cybersecurity."
      },
      {
        title: "Incident Response",
        content: "FISMA mandates that agencies have procedures for detecting, reporting, and responding to security incidents. The 2014 update gave the Department of Homeland Security (DHS) a central role in coordinating incident response across the federal government."
      }
    ],
    purpose: "The purpose of FISMA is to bolster computer and network security within the federal government and its contractors. It aims to reduce the security risk to federal information and systems by providing a comprehensive framework for ensuring the effectiveness of security controls and managing risk."
  },
  '33': {
    summary: "The Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title7/USCODE-2021-title7-chap6' target='_blank' rel='noopener noreferrer' class='text-primary underline'>7 U.S.C. Chapter 6</a>, is the primary U.S. federal law that establishes the system for pesticide regulation. It is administered by the Environmental Protection Agency (EPA) and aims to protect applicators, consumers, and the environment from the potential adverse effects of pesticides.",
    keyProvisions: [
      {
        title: "Pesticide Registration",
        content: "A core requirement of FIFRA is that all pesticides sold or distributed in the United States must be registered (licensed) by the EPA. To obtain a registration, a manufacturer must show that the pesticide, when used according to its label directions, 'will not generally cause unreasonable adverse effects on the environment.' This involves submitting extensive health and environmental effects data to the EPA for review."
      },
      {
        title: "Labeling Requirements",
        content: "FIFRA makes it illegal to use a pesticide in a manner inconsistent with its labeling. The pesticide label is a legal document that contains instructions for use, including application rates, required personal protective equipment, and precautions to prevent harm to human health or the environment. It must be approved by the EPA as part of the registration process."
      },
      {
        title: "Classification of Pesticides",
        content: "The EPA classifies pesticides as either 'general use' or 'restricted use.' Restricted use pesticides have a higher potential to cause harm and may only be applied by or under the direct supervision of a certified applicator. States are responsible for managing applicator certification programs."
      },
      {
        title: "Enforcement and Re-evaluation",
        content: "The EPA has the authority to suspend or cancel a pesticide's registration if it determines that the product poses an unreasonable risk. The Act also requires the EPA to periodically re-evaluate older pesticides to ensure they meet current scientific and regulatory standards. The EPA can take enforcement actions, including fines and penalties, against those who violate FIFRA."
      }
    ],
    purpose: "The main purpose of FIFRA is to provide for federal regulation of pesticide distribution, sale, and use. It aims to ensure that, when used according to the label, pesticides will not cause unreasonable harm to human health or the environment. It balances the societal benefits of using pesticides with the potential risks they pose."
  },
  '34': {
    summary: "The Federal Trade Commission Act, codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15/USCODE-2021-title15-chap2-subchapI' target='_blank' rel='noopener noreferrer' class='text-primary underline'>15 U.S.C. §§ 41-58</a>, is the foundational statute of the Federal Trade Commission (FTC). Passed in 1914, the Act has two primary missions: to protect consumers from unfair and deceptive practices and to promote competition in the marketplace.",
    keyProvisions: [
      {
        title: "Section 5: Prohibition of Unfair or Deceptive Acts or Practices",
        content: "This is the core of the FTC's consumer protection authority. It grants the FTC broad power to investigate and prevent business practices that are unfair or deceptive to consumers. This includes things like false advertising, fraudulent billing, and data security failures that harm consumers. A practice is deceptive if it is likely to mislead a reasonable consumer. A practice is unfair if it causes or is likely to cause substantial injury to consumers that is not reasonably avoidable and not outweighed by countervailing benefits."
      },
      {
        title: "Antitrust Enforcement",
        content: "The Act also prohibits 'unfair methods of competition.' This gives the FTC shared jurisdiction with the Department of Justice to enforce federal antitrust laws, such as the Sherman and Clayton Acts. The FTC can challenge anti-competitive mergers, price-fixing cartels, and other business practices that harm competition and lead to higher prices or lower quality for consumers."
      },
      {
        title: "Rulemaking Authority",
        content: "The FTC has the authority to issue industry-wide rules that define specific unfair or deceptive practices. For example, the FTC has issued rules governing telemarketing (the Telemarketing Sales Rule), funeral homes (the Funeral Rule), and children's online privacy (the COPPA Rule)."
      },
      {
        title: "Investigative and Enforcement Powers",
        content: "The FTC can conduct investigations, issue subpoenas, hold hearings, and file lawsuits in federal court to stop illegal business practices. It can seek remedies such as injunctions to halt the practice and monetary redress to compensate injured consumers."
      }
    ],
    purpose: "The dual purpose of the Federal Trade Commission Act is to protect consumers and promote competition. By preventing anticompetitive, deceptive, and unfair business practices, the FTC works to ensure that the marketplace is fair and that consumers can make informed choices."
  },
  '35': {
    summary: "The Freedom of Information Act (FOIA), codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title5/USCODE-2021-title5-partI-chap5-subchapII-sec552' target='_blank' rel='noopener noreferrer' class='text-primary underline'>5 U.S.C. § 552</a>, is a landmark federal law that gives the public the right to request access to records from any federal agency. It is a cornerstone of open government, promoting transparency and holding the government accountable by allowing citizens to see what their government is doing.",
    keyProvisions: [
      {
        title: "Right to Request and Receive Records",
        content: "FOIA establishes a presumption that records in the possession of federal agencies are accessible to the people. Any person, including U.S. citizens, foreign nationals, organizations, and businesses, can file a FOIA request. The request must reasonably describe the records sought."
      },
      {
        title: "Agency Obligations and Response Times",
        content: "Federal agencies are required to respond to FOIA requests within 20 business days (though extensions are possible in unusual circumstances). The agency must conduct a reasonable search for the requested records and release them unless they are covered by one of the nine exemptions."
      },
      {
        title: "The Nine Exemptions",
        content: "While FOIA promotes disclosure, it also recognizes the need to protect certain government information. The Act provides nine specific exemptions to disclosure. These exemptions protect information such as that which is properly classified for national security (Exemption 1), information related to internal agency rules (Exemption 2), information that could compromise personal privacy (Exemption 6), and information related to law enforcement investigations (Exemption 7)."
      },
      {
        title: "Administrative and Judicial Appeals",
        content: "If an agency withholds records, it must specify which exemption it is claiming. The requester has the right to file an administrative appeal with the agency. If the appeal is denied, the requester can then file a lawsuit in federal court to challenge the agency's decision. The court can order the agency to release improperly withheld records."
      }
    ],
    purpose: "The fundamental purpose of FOIA is to ensure an informed citizenry, which is vital to the functioning of a democratic society. It aims to keep citizens in the know about their government, promoting transparency, accountability, and public oversight of government activities."
  },
  '36': {
    summary: "The Gramm-Leach-Bliley Act (GLBA), also known as the Financial Services Modernization Act of 1999, is codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15/USCODE-2021-title15-chap94' target='_blank' rel='noopener noreferrer' class='text-primary underline'>15 U.S.C. Chapter 94</a>. While the Act is well-known for breaking down barriers between commercial banking, investment banking, and insurance companies, it also includes crucial provisions to protect the privacy and security of consumers' personal financial information held by financial institutions.",
    keyProvisions: [
      {
        title: "The Financial Privacy Rule",
        content: "This rule requires financial institutions (including banks, securities firms, and insurance companies) to provide their customers with a clear and conspicuous privacy notice. This notice must explain what personal information the institution collects, with whom it shares the information, and how it protects that information. It must also give consumers the right to 'opt out' of having their information shared with certain nonaffiliated third parties."
      },
      {
        title: "The Safeguards Rule",
        content: "This rule requires all financial institutions to design, implement, and maintain a comprehensive written information security plan. This plan must contain administrative, technical, and physical safeguards to protect the confidentiality, integrity, and security of customer information. Institutions must assess risks, implement controls, and regularly test their security systems."
      },
      {
        title: "Pretexting Provisions",
        content: "GLBA makes it illegal to use false pretenses to obtain someone's personal financial information. This practice, known as 'pretexting' or social engineering, includes pretending to be the customer or someone else with authority to access an account. The law imposes criminal penalties for this type of fraudulent access to information."
      },
      {
        title: "Enforcement",
        content: "Various federal agencies, including the Consumer Financial Protection Bureau (CFPB), the Office of the Comptroller of the Currency (OCC), and the Securities and Exchange Commission (SEC), have enforcement authority under GLBA. The Federal Trade Commission (FTC) also has authority over non-bank financial institutions."
      }
    ],
    purpose: "The privacy-related purpose of the Gramm-Leach-Bliley Act is to ensure that financial institutions protect the security and confidentiality of their customers' personal financial information. It aims to give consumers more control over how their private financial information is shared and to require institutions to take concrete steps to secure that data against unauthorized access."
  },
  '37': {
    summary: "The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a multifaceted federal law that established national standards for the privacy and security of health information. Its regulations, primarily found in <a href='https://www.govinfo.gov/app/details/CFR-2023-title45-vol1/CFR-2023-title45-vol1-part160' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 45 of the CFR, Parts 160, 162, and 164</a>, were created to protect sensitive patient health information from being disclosed without the patient's consent or knowledge.",
    keyProvisions: [
      {
        title: "The Privacy Rule",
        content: "This rule establishes national standards to protect individuals' medical records and other individually identifiable health information (known as Protected Health Information, or PHI). It sets limits and conditions on the uses and disclosures of PHI that may be made without patient authorization. The Privacy Rule also gives patients rights over their health information, including the right to examine and obtain a copy of their health records and to request corrections."
      },
      {
        title: "The Security Rule",
        content: "The Security Rule sets national standards for protecting the confidentiality, integrity, and availability of electronic protected health information (ePHI). It requires 'covered entities' (health plans, healthcare clearinghouses, and healthcare providers) to implement administrative, physical, and technical safeguards to ensure the security of ePHI."
      },
      {
        title: "The Breach Notification Rule",
        content: "This rule requires covered entities and their business associates to provide notification following a breach of unsecured PHI. Covered entities must notify affected individuals, the Secretary of Health and Human Services, and, in some cases, the media. A breach is defined as an impermissible use or disclosure that compromises the security or privacy of the PHI."
      },
      {
        title: "Portability",
        content: "Though less discussed now, a key original component of HIPAA was to improve the 'portability' of health insurance. It includes provisions that limit the ability of a new employer's health plan to deny coverage for a pre-existing condition."
      }
    ],
    purpose: "A primary purpose of HIPAA was to improve the efficiency and effectiveness of the health care system. To achieve this, HIPAA includes administrative simplification provisions that require the establishment of national standards for electronic health care transactions and national identifiers for providers, health insurance plans, and employers. The need to protect the privacy and security of health information was a direct consequence of this move toward electronic data."
  },
  '38': {
    summary: "The Immigration and Nationality Act (INA), originally passed in 1952 and found in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title8' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 8 of the U.S. Code</a>, is the fundamental body of U.S. immigration law. It has been amended many times, but it remains the primary statute governing who may enter the United States, how long they may stay, and what status they may hold. It also sets forth the process for becoming a U.S. citizen.",
    keyProvisions: [
      {
        title: "Immigrant and Nonimmigrant Visas",
        content: "The INA establishes the worldwide numerical limits and preference categories for admitting immigrants to the U.S. This includes family-sponsored immigrants, employment-based immigrants, and diversity immigrants. It also defines the various categories of nonimmigrant visas for individuals seeking to come to the U.S. temporarily for reasons such as tourism (B-2), business (B-1), work (H-1B), or study (F-1)."
      },
      {
        title: "Grounds for Inadmissibility and Deportability",
        content: "The Act contains a detailed list of reasons why a foreign national may be denied entry into the U.S. (inadmissibility) or removed from the country after having been admitted (deportability). These grounds include health-related issues, criminal convictions, security risks, and immigration violations."
      },
      {
        title: "Asylum and Refugee Protection",
        content: "The INA provides for the protection of individuals who are unable or unwilling to return to their home country because of persecution or a well-founded fear of persecution on account of race, religion, nationality, membership in a particular social group, or political opinion. This section aligns U.S. law with international refugee conventions."
      },
      {
        title: "Naturalization (Citizenship)",
        content: "The INA sets forth the legal requirements for a foreign national to become a U.S. citizen. To be eligible for naturalization, an applicant must typically be a lawful permanent resident for a certain number of years, demonstrate good moral character, show an attachment to the principles of the U.S. Constitution, and pass an English language and civics test."
      }
    ],
    purpose: "The purpose of the INA is to provide a comprehensive, unified framework for all aspects of U.S. immigration and citizenship. It outlines the rights, duties, and obligations of both foreign nationals and the U.S. government, and it is the statutory basis for the work of agencies like U.S. Citizenship and Immigration Services (USCIS), Customs and Border Protection (CBP), and Immigration and Customs Enforcement (ICE)."
  },
  '39': {
    summary: "The Internal Revenue Code (IRC), formally the Internal Revenue Code of 1986, as amended, is the main body of domestic statutory tax law of the United States. It is organized under <a href='https://www.govinfo.gov/app/details/USCODE-2021-title26' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 26 of the United States Code</a> and is implemented by the Internal Revenue Service (IRS). The IRC is a vast and complex statute that dictates how federal taxes are assessed, collected, and enforced.",
    keyProvisions: [
      {
        title: "Subtitle A: Income Taxes",
        content: "This is the largest and most well-known part of the IRC. It imposes a tax on the taxable income of individuals, corporations, estates, and trusts. It defines key concepts like gross income, adjusted gross income, deductions (both above-the-line and itemized), and tax credits."
      },
      {
        title: "Subtitle B: Estate and Gift Taxes",
        content: "This section imposes taxes on the transfer of wealth from one person to another. The estate tax is levied on the assets of a deceased person before they are passed to heirs, while the gift tax applies to transfers of property made during a person's lifetime. There are significant exemptions for both."
      },
      {
        title: "Subtitle C: Employment Taxes",
        content: "This subtitle covers the taxes that employers and employees must pay, primarily for Social Security and Medicare. These are collected under the Federal Insurance Contributions Act (FICA). It also includes rules for federal unemployment taxes (FUTA) and income tax withholding."
      },
      {
        title: "Subtitle F: Procedure and Administration",
        content: "This section is critically important as it governs the procedures for how taxes are handled. It specifies the rules for filing tax returns, the deadlines for filing and payment, the process for audits and appeals, statutes of limitations, and the penalties for failure to comply with the tax laws."
      }
    ],
    purpose: "The primary purpose of the Internal Revenue Code is to provide the statutory basis for raising revenue to fund the operations of the U.S. federal government. It also serves other purposes, such as implementing economic policy (by encouraging certain behaviors through tax deductions and credits) and redistributing wealth."
  },
  '40': {
    summary: "The International Traffic in Arms Regulations (ITAR) is a United States regulatory regime that restricts and controls the export of defense-related and military-related technologies to safeguard U.S. national security and further U.S. foreign policy objectives. The regulations, found in <a href='https://www.govinfo.gov/app/details/CFR-2023-title22-vol1/CFR-2023-title22-vol1-chapI-subchapM' target='_blank' rel='noopener noreferrer' class='text-primary underline'>22 CFR Parts 120-130</a>, are administered by the Directorate of Defense Trade Controls (DDTC) within the U.S. Department of State.",
    keyProvisions: [
      {
        title: "U.S. Munitions List (USML)",
        content: "ITAR controls the export of items and services that are specifically designed, developed, configured, adapted, or modified for a military application. These items are enumerated on the U.S. Munitions List (USML). The USML includes not just obvious weapons, but also technical data, software, and services related to defense articles."
      },
      {
        title: "Registration Requirement",
        content: "Any U.S. person or company that engages in the business of manufacturing, exporting, or brokering defense articles or furnishing defense services is required to register with the DDTC. This registration is a prerequisite for applying for any export license or other approval under ITAR."
      },
      {
        title: "Export Licensing",
        content: "A license or other approval must be obtained from the DDTC before exporting any item, technical data, or defense service on the USML to a foreign country or a foreign person (even if that person is in the United States). The licensing process involves a thorough review of the transaction, including the end-user and end-use of the item."
      },
      {
        title: "Strict Compliance and Penalties",
        content: "ITAR is a strict liability regime, meaning that a violation can occur even if it was unintentional. The penalties for violating ITAR are severe and can include substantial civil and criminal fines (up to $1 million per violation) and imprisonment (up to 20 years). A company can also be barred from exporting defense articles in the future."
      }
    ],
    purpose: "The purpose of ITAR is to control the export and import of defense-related articles and services to protect U.S. national security and advance U.S. foreign policy objectives. It ensures that sensitive U.S. military technology does not fall into the wrong hands."
  },
  '41': {
    summary: "The Lanham Act, also known as the Trademark Act of 1946, is the primary federal statute that governs trademarks, service marks, and unfair competition in the United States. It is found in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15/USCODE-2021-title15-chap22' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 15 of the U.S. Code, Chapter 22</a>. The Act provides a national system for trademark protection, helping businesses protect their brand identity and preventing consumer confusion.",
    keyProvisions: [
      {
        title: "Trademark Registration",
        content: "The Lanham Act establishes a system for the federal registration of trademarks and service marks with the U.S. Patent and Trademark Office (USPTO). While trademark rights in the U.S. can be acquired through use in commerce (common law rights), federal registration provides significant advantages, including a legal presumption of ownership nationwide and the exclusive right to use the mark on or in connection with the goods or services set forth in the registration."
      },
      {
        title: "Trademark Infringement (Section 32 & 43(a))",
        content: "The Act prohibits trademark infringement, which occurs when someone's use of a mark is likely to cause confusion among consumers about the source or origin of goods or services. Courts look at a number of factors to determine the 'likelihood of confusion,' such as the similarity of the marks, the similarity of the goods/services, and evidence of actual confusion."
      },
      {
        title: "Unfair Competition and False Advertising (Section 43(a))",
        content: "This is a broad provision that creates a federal cause of action for 'unfair competition.' It prohibits the use of any 'false or misleading representation of fact' in commerce, which covers not only trademark infringement of unregistered marks but also false advertising, trade dress infringement, and other deceptive business practices."
      },
      {
        title: "Trademark Dilution",
        content: "The Act also protects 'famous' trademarks from dilution. Dilution is the lessening of the capacity of a famous mark to identify and distinguish goods or services, regardless of the presence or absence of competition or a likelihood of confusion. This can occur through 'blurring' (weakening the mark's distinctiveness) or 'tarnishment' (harming the mark's reputation)."
      }
    ],
    purpose: "The Lanham Act has a dual purpose: (1) to protect the owner of a trademark by preventing others from using the same or a confusingly similar mark, thereby protecting the owner's goodwill and investment in their brand; and (2) to protect consumers from confusion, deception, and mistake in the marketplace."
  },
  '42': {
    summary: "The National Environmental Policy Act (NEPA), signed into law in 1970 and codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title42/USCODE-2021-title42-chap55' target='_blank' rel='noopener noreferrer' class='text-primary underline'>42 U.S.C. Chapter 55</a>, is a foundational U.S. environmental law. NEPA establishes a national policy for protecting the environment and created the President's Council on Environmental Quality (CEQ) to oversee its implementation. Unlike laws like the Clean Air Act or Clean Water Act, NEPA does not set pollution standards but is instead a procedural law.",
    keyProvisions: [
      {
        title: "Declaration of National Environmental Policy",
        content: "NEPA declares that it is the policy of the federal government to use all practicable means to create and maintain conditions under which man and nature can exist in productive harmony. It requires federal agencies to consider the environmental impacts of their actions in their decision-making."
      },
      {
        title: "Environmental Impact Statements (EIS)",
        content: "This is the heart of NEPA's action-forcing mechanism. Federal agencies are required to prepare a detailed statement, known as an Environmental Impact Statement (EIS), for all 'major Federal actions significantly affecting the quality of the human environment.' This includes projects they fund, assist, conduct, or approve."
      },
      {
        title: "Content of an EIS",
        content: "An EIS must provide a full and fair discussion of significant environmental impacts and must inform decision-makers and the public of the reasonable alternatives which would avoid or minimize adverse impacts or enhance the quality of the human environment. This includes a 'no action' alternative. The process requires public participation, including public comment periods."
      },
      {
        title: "Environmental Assessment (EA)",
        content: "For actions where the environmental impact is uncertain, an agency will prepare a shorter document called an Environmental Assessment (EA). The EA determines whether the action has the potential to cause significant environmental effects. If it does, an EIS is required. If not, the agency issues a 'Finding of No Significant Impact' (FONSI)."
      }
    ],
    purpose: "The purpose of NEPA is to ensure that federal agencies give proper consideration to environmental effects before undertaking any major federal action. It is often referred to as the 'look before you leap' statute. It forces agencies to stop and think about the potential environmental consequences of their decisions and to disclose those consequences to the public, but it does not mandate a particular outcome."
  },
  '43': {
    summary: "The National Labor Relations Act (NLRA) of 1935, also known as the Wagner Act, is a foundational statute of U.S. labor law. Codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title29/USCODE-2021-title29-chap7' target='_blank' rel='noopener noreferrer' class='text-primary underline'>29 U.S.C. Chapter 7</a>, the Act guarantees the right of most private sector employees to organize into trade unions, engage in collective bargaining for better terms and conditions at work, and take collective action (including strikes) if necessary. The Act is administered by the National Labor Relations Board (NLRB).",
    keyProvisions: [
      {
        title: "Employee Rights (Section 7)",
        content: "Section 7 is the core of the NLRA. It grants employees the right to self-organization; to form, join, or assist labor organizations; to bargain collectively through representatives of their own choosing; and to engage in other 'concerted activities' for the purpose of collective bargaining or other mutual aid or protection. It also protects the right of employees to refrain from any of these activities."
      },
      {
        title: "Unfair Labor Practices (ULPs)",
        content: "The NLRA defines and prohibits certain 'unfair labor practices' by both employers and unions. For employers, this includes interfering with employees' Section 7 rights, dominating or illegally assisting a union, discriminating against employees for their union activity, and refusing to bargain in good faith with the employees' representative."
      },
      {
        title: "Collective Bargaining",
        content: "The Act requires employers to bargain in good faith with the union that has been chosen by a majority of their employees. This bargaining covers 'wages, hours, and other terms and conditions of employment.' The goal is to reach a collective bargaining agreement (a labor contract)."
      },
      {
        title: "Representation Elections",
        content: "The National Labor Relations Board (NLRB) is responsible for conducting secret-ballot elections to determine whether employees wish to be represented by a union. If a union wins the election, it becomes the exclusive bargaining representative for all employees in the bargaining unit."
      }
    ],
    purpose: "The stated purpose of the NLRA is to protect the rights of employees and employers, to encourage collective bargaining, and to curtail certain private sector labor and management practices, which can harm the general welfare of workers, businesses, and the U.S. economy. It seeks to correct the 'inequality of bargaining power' between employees and employers."
  },
  '44': {
    summary: "The Occupational Safety and Health Act of 1970 (OSH Act) is the primary federal law which governs occupational health and safety in the private sector and federal government in the United States. It is codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title29/USCODE-2021-title29-chap15' target='_blank' rel='noopener noreferrer' class='text-primary underline'>29 U.S.C. Chapter 15</a>. The Act created the Occupational Safety and Health Administration (OSHA), which sets and enforces protective workplace safety and health standards.",
    keyProvisions: [
      {
        title: "The General Duty Clause",
        content: "This is a cornerstone of the OSH Act. It requires that each employer 'shall furnish to each of his employees employment and a place of employment which are free from recognized hazards that are causing or are likely to cause death or serious physical harm.' This clause is used for enforcement when there is no specific OSHA standard that applies to a particular hazard."
      },
      {
        title: "OSHA Safety and Health Standards",
        content: "OSHA is authorized to develop and enforce specific, legally-binding safety and health standards. These standards cover a wide range of workplace hazards, from chemical exposure and machine guarding to fall protection and electrical safety. Examples include standards for personal protective equipment (PPE), hazard communication, and confined spaces."
      },
      {
        title: "Inspections, Investigations, and Recordkeeping",
        content: "OSHA is authorized to conduct workplace inspections and investigations to ensure compliance with the Act and its standards. Employers are also required to keep records of workplace injuries and illnesses and to report serious incidents (such as fatalities or hospitalizations) to OSHA promptly."
      },
      {
        title: "Whistleblower Protection",
        content: "The Act provides strong protections for employees who raise safety and health concerns or report injuries without fear of retaliation. It is illegal for an employer to fire, demote, transfer, or otherwise discriminate against a worker for complaining to OSHA and for using their legal rights."
      }
    ],
    purpose: "The mission of the OSH Act is 'to assure so far as possible every working man and woman in the Nation safe and healthful working conditions and to preserve our human resources.' It does this by authorizing the enforcement of safety standards, assisting and encouraging states in their efforts to assure safe working conditions, and providing for research, information, education, and training in the field of occupational safety and health."
  },
  '45': {
    summary: "Patent law in the United States is governed by federal statute, primarily the Patent Act, which is found in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title35' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 35 of the U.S. Code</a>. A patent for an invention is the grant of a property right to the inventor, issued by the U.S. Patent and Trademark Office (USPTO). A patent gives its owner the exclusive right to prevent others from making, using, selling, or importing the patented invention for a limited period.",
    keyProvisions: [
      {
        title: "Types of Patents",
        content: "There are three types of patents: 1) Utility patents, which are the most common and may be granted to anyone who invents or discovers any new and useful process, machine, article of manufacture, or composition of matter, or any new and useful improvement thereof; 2) Design patents, for a new, original, and ornamental design for an article of manufacture; and 3) Plant patents, for inventing or discovering and asexually reproducing any distinct and new variety of plant."
      },
      {
        title: "Patentability Requirements",
        content: "To be patentable, an invention must be: 1) Patentable subject matter (process, machine, manufacture, or composition of matter); 2) Novel (new); 3) Useful (have a utility); and 4) Non-obvious to a person of ordinary skill in the art at the time the invention was made."
      },
      {
        title: "Exclusive Rights and Term",
        content: "A patent gives the owner the right to exclude others from making, using, offering for sale, selling the invention in the U.S. or importing the invention into the U.S. It does not grant the owner the right to make or use the invention, as that could still be subject to other laws or patents. The term of a new utility patent is 20 years from the date on which the application for the patent was filed."
      },
      {
        title: "Patent Infringement",
        content: "Patent infringement occurs when a third party, without authorization from the patent holder, makes, uses, sells, or imports the patented invention. The patent holder can sue the infringer in federal court to stop the infringement (obtain an injunction) and to recover monetary damages."
      }
    ],
    purpose: "As stated in the U.S. Constitution, the purpose of patent law is 'To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective Writings and Discoveries.' It encourages invention and public disclosure of new technologies by granting inventors a temporary monopoly on their inventions in exchange for sharing the details of their invention with the public."
  },
  '46': {
    summary: "The Patient Protection and Affordable Care Act (ACA), often referred to as Obamacare, is a comprehensive healthcare reform law enacted in 2010. Its provisions are spread across the U.S. Code, with key parts in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title42/USCODE-2021-title42-chap157' target='_blank' rel='noopener noreferrer' class='text-primary underline'>42 U.S.C. Chapter 157</a>. The law was designed to address the rising costs of healthcare and the large number of uninsured Americans by reforming the health insurance market and expanding access to coverage.",
    keyProvisions: [
      {
        title: "Protections for Consumers with Pre-Existing Conditions",
        content: "A cornerstone of the ACA is the prohibition on insurance companies denying coverage or charging higher premiums to individuals based on their health status or pre-existing conditions. This ensures that people who are sick or have been sick in the past can still get health insurance."
      },
      {
        title: "Health Insurance Marketplace and Subsidies",
        content: "The ACA created the Health Insurance Marketplace (also known as the exchange), where individuals and small businesses can shop for, compare, and purchase health insurance plans. It also provides for premium tax credits (subsidies) to lower the monthly premium costs for low- and moderate-income individuals and families."
      },
      {
        title: "Essential Health Benefits",
        content: "The law requires that most individual and small group health insurance plans cover a list of 'essential health benefits.' These include services like emergency services, hospitalization, prescription drugs, maternity and newborn care, and mental health services. The law also eliminated annual and lifetime dollar limits on these benefits."
      },
      {
        title: "Expansion of Medicaid",
        content: "The ACA provided for the expansion of the Medicaid program to cover nearly all low-income adults with incomes up to 138% of the federal poverty level. The Supreme Court later made this expansion optional for states, but a majority of states have adopted it."
      }
    ],
    purpose: "The main goals of the ACA are to make affordable health insurance available to more people, expand the Medicaid program to cover more low-income adults, and support innovative medical care delivery methods designed to lower the costs of health care generally. It represents the most significant overhaul of the U.S. healthcare system since the passage of Medicare and Medicaid in 1965."
  },
  '47': {
    summary: "The Racketeer Influenced and Corrupt Organizations (RICO) Act is a U.S. federal law enacted in 1970 that provides for extended criminal penalties and a civil cause of action for acts performed as part of an ongoing criminal enterprise. The law is codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title18/USCODE-2021-title18-partI-chap96' target='_blank' rel='noopener noreferrer' class='text-primary underline'>18 U.S.C. Chapter 96</a>. RICO was originally intended to combat organized crime (like the Mafia) but has since been applied more broadly.",
    keyProvisions: [
      {
        title: "Racketeering Activity",
        content: "To violate RICO, a person must commit at least two acts of 'racketeering activity' from a list of 35 state and federal crimes within a 10-year period. These 'predicate acts' include serious crimes like bribery, extortion, fraud (mail fraud, wire fraud, securities fraud), money laundering, and murder."
      },
      {
        title: "Conducting an Enterprise",
        content: "The law makes it unlawful to acquire or maintain an interest in, or to conduct or participate in the affairs of, an 'enterprise' through a pattern of racketeering activity. An 'enterprise' is broadly defined and can be any individual, partnership, corporation, or other legal entity, and any union or group of individuals associated in fact although not a legal entity."
      },
      {
        title: "Severe Criminal and Civil Penalties",
        content: "RICO is known for its harsh penalties. Criminal convictions can result in long prison sentences (up to 20 years or life if a predicate act allows for it) and forfeiture of all assets acquired through the racketeering activity. The law also includes a powerful civil provision that allows private citizens who have been harmed by a RICO violation to sue for treble damages (three times the amount of actual damages) and attorneys' fees."
      },
      {
        title: "Conspiracy",
        content: "It is also a crime under RICO to conspire to violate any of its main provisions. This allows prosecutors to charge individuals who may not have personally committed the predicate acts but were part of the overall criminal scheme."
      }
    ],
    purpose: "The stated purpose of the RICO Act was 'to seek the eradication of organized crime in the United States.' It was designed as a powerful tool for law enforcement to dismantle criminal organizations by attacking their underlying economic structure and prosecuting their leaders, who might otherwise be insulated from direct involvement in criminal acts."
  },
  '48': {
    summary: "The Resource Conservation and Recovery Act (RCRA), enacted in 1976 and codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title42/USCODE-2021-title42-chap82' target='_blank' rel='noopener noreferrer' class='text-primary underline'>42 U.S.C. Chapter 82</a>, is the principal federal law in the United States governing the disposal of solid waste and hazardous waste. It is administered by the U.S. Environmental Protection Agency (EPA).",
    keyProvisions: [
      {
        title: "Subtitle C: 'Cradle-to-Grave' Hazardous Waste Management",
        content: "This is the most well-known part of RCRA. It establishes a comprehensive 'cradle-to-grave' management system for hazardous waste, tracking it from the point of generation to its final disposal. Key elements include: identification and listing of hazardous wastes; standards for generators and transporters of hazardous waste; and design and operating requirements for treatment, storage, and disposal facilities (TSDFs)."
      },
      {
        title: "Subtitle D: Solid Waste Management",
        content: "This subtitle encourages states to develop comprehensive plans to manage nonhazardous industrial solid waste and municipal solid waste. It sets minimum federal criteria for the design and operation of municipal solid waste landfills and prohibits the open dumping of solid waste."
      },
      {
        title: "Subtitle I: Underground Storage Tanks (USTs)",
        content: "This section regulates underground storage tanks containing petroleum or hazardous substances. The program establishes standards for tank design, installation, operation, and closure to prevent leaks, which can contaminate groundwater. It also requires tank owners and operators to have financial responsibility mecanismos to cover the costs of potential cleanups."
      },
      {
        title: "Corrective Action",
        content: "RCRA gives the EPA the authority to require facilities that treat, store, or dispose of hazardous waste to clean up any releases of hazardous waste or constituents into the environment. This 'corrective action' program is a major component of the law's remedial power."
      }
    ],
    purpose: "RCRA's primary goals are: to protect human health and the environment from the potential hazards of waste disposal; to conserve energy and natural resources; to reduce the amount of waste generated; and to ensure that wastes are managed in an environmentally sound manner."
  },
  '49': {
    summary: "The Sarbanes-Oxley Act of 2002 (SOX) is a major U.S. federal law enacted in response to a number of high-profile corporate and accounting scandals in the early 2000s, such as those affecting Enron and WorldCom. The Act's provisions are found in sections of <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 15</a> and <a href='https://www.govinfo.gov/app/details/USCODE-2021-title18' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 18</a> of the U.S. Code. It established sweeping auditing and financial regulations for public companies.",
    keyProvisions: [
      {
        title: "Public Company Accounting Oversight Board (PCAOB)",
        content: "SOX created the PCAOB, a private-sector, nonprofit corporation, to oversee the audits of public companies. The PCAOB registers public accounting firms, sets auditing standards, and inspects and investigates accounting firms to ensure the integrity and independence of audit reports."
      },
      {
        title: "CEO/CFO Certification (Section 302)",
        content: "One of the most significant provisions of SOX, Section 302 requires the principal officers (typically the CEO and CFO) of a public company to personally certify in writing that the company's financial reports are accurate and do not contain any material misrepresentations. This increases personal accountability for financial reporting."
      },
      {
        title: "Internal Control over Financial Reporting (Section 404)",
        content: "Section 404 requires management to establish and maintain an adequate internal control structure and procedures for financial reporting. It also requires an external auditor to attest to the effectiveness of the company's internal controls."
      },
      {
        title: "Enhanced Criminal Penalties and Whistleblower Protection",
        content: "SOX significantly increased the criminal penalties for securities fraud and other white-collar crimes. It also created new protections for employees of public companies who act as 'whistleblowers' by reporting fraudulent activity."
      }
    ],
    purpose: "The overarching purpose of Sarbanes-Oxley is to protect investors by improving the accuracy, reliability, and transparency of corporate disclosures made pursuant to the securities laws. It aims to restore public trust in corporate governance and the financial markets by holding executives and auditors more accountable."
  },
  '50': {
    summary: "The Securities Act of 1933, codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15/USCODE-2021-title15-chap2A' target='_blank' rel='noopener noreferrer' class='text-primary underline'>15 U.S.C. Chapter 2A</a>, is a cornerstone of U.S. federal securities regulation. It is often referred to as the 'truth in securities' law. The '33 Act regulates the initial sale of securities to the public (the primary market).",
    keyProvisions: [
      {
        title: "Registration Requirement",
        content: "The fundamental principle of the '33 Act is that any offer or sale of securities must be registered with the Securities and Exchange Commission (SEC) unless an exemption from registration is available. This ensures that potential investors have access to crucial information before they invest."
      },
      {
        title: "The Registration Statement (Form S-1)",
        content: "To register securities, a company must file a registration statement with the SEC. This is a comprehensive disclosure document that includes detailed information about the company's business, finances, management, and the securities being offered. The registration statement is a public document."
      },
      {
        title: "The Prospectus",
        content: "The registration statement includes a 'prospectus,' which is the primary disclosure document provided to prospective investors. The prospectus must contain the most significant information from the registration statement, allowing investors to make an informed decision. It is illegal to sell securities without providing a final prospectus."
      },
      {
        title: "Anti-Fraud Provisions (Section 11 and 12)",
        content: "The '33 Act contains powerful anti-fraud provisions. It makes it illegal to make any untrue statement of a material fact or to omit a material fact in a registration statement. If a registration statement contains a material misstatement or omission, an investor who lost money can sue various parties, including the issuing company, its directors and officers, and the underwriters, to recover their losses."
      }
    ],
    purpose: "The dual purpose of the Securities Act of 1933 is to: (1) require that investors receive significant and material information concerning securities being offered for public sale; and (2) prohibit deceit, misrepresentations, and other fraud in the sale of securities. The Act is designed to facilitate informed investment decisions, not to guarantee the merit of any particular investment."
  },
  '51': {
    summary: "The Securities Exchange Act of 1934, codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title15/USCODE-2021-title15-chap2B' target='_blank' rel='noopener noreferrer' class='text-primary underline'>15 U.S.C. Chapter 2B</a>, is a landmark piece of federal securities regulation. While the Securities Act of 1933 governs the initial sale of securities, the '34 Act governs securities transactions on the secondary market (i.e., trading between investors). It was designed to ensure greater financial transparency and accuracy and to reduce fraud and manipulation.",
    keyProvisions: [
      {
        title: "Creation of the Securities and Exchange Commission (SEC)",
        content: "The Act created the SEC, the primary federal agency responsible for enforcing securities laws, promoting order in the securities markets, and protecting investors. The SEC was given broad authority over all aspects of the securities industry, including the power to register, regulate, and oversee brokerage firms, transfer agents, and clearing agencies as well as the nation's securities self-regulatory organizations (SROs), such as the New York Stock Exchange and NASDAQ."
      },
      {
        title: "Continuous Reporting Requirements",
        content: "The '34 Act requires public companies (those with securities traded on a national exchange or with a certain number of shareholders and assets) to file regular reports with the SEC. These include annual reports (Form 10-K), quarterly reports (Form 10-Q), and current reports of major events (Form 8-K). These disclosures provide investors with ongoing information about the company's financial condition."
      },
      {
        title: "Anti-Fraud Provisions (Section 10(b) and Rule 10b-5)",
        content: "This is a broad and powerful anti-fraud provision that makes it illegal to use any 'manipulative or deceptive device' in connection with the purchase or sale of any security. It is the primary tool used by the SEC to combat securities fraud, including insider trading—the illegal practice of trading on material, non-public information."
      },
      {
        title: "Regulation of Proxy Solicitations",
        content: "The Act regulates the process of soliciting shareholder votes (proxies) for corporate matters. It requires that companies provide shareholders with a 'proxy statement' containing all material information needed to make an informed vote."
      }
    ],
    purpose: "The purpose of the Securities Exchange Act of 1934 is to ensure fairness, transparency, and integrity in the secondary securities markets. It aims to protect investors from fraud and manipulation and to provide them with the ongoing, accurate information they need to make informed investment decisions."
  },
  '52': {
    summary: "The Social Security Act of 1935, codified at <a href='https://www.govinfo.gov/app/details/USCODE-2021-title42/USCODE-2021-title42-chap7' target='_blank' rel='noopener noreferrer' class='text-primary underline'>42 U.S.C. Chapter 7</a>, is a landmark federal law that created the Social Security program in the United States. Enacted during the Great Depression, the Act established a social insurance program designed to provide a safety net for elderly, unemployed, and disadvantaged Americans. It is administered by the Social Security Administration (SSA).",
    keyProvisions: [
      {
        title: "Old-Age (Retirement) Benefits",
        content: "This is the most well-known part of the program. It provides a monthly income to retired workers who have paid into the system through payroll taxes during their working years. The amount of the benefit is based on the worker's average lifetime earnings. Workers can start receiving benefits as early as age 62, but benefits are reduced if taken before 'full retirement age.'"
      },
      {
        title: "Disability Benefits (SSDI)",
        content: "Social Security Disability Insurance (SSDI) provides income to individuals who cannot work due to a medical condition that is expected to last at least one year or result in death. To be eligible, a worker must have a sufficient work history and have a disability that meets the SSA's strict definition."
      },
      {
        title: "Survivors Benefits",
        content: "This program provides benefits to the families of deceased workers who had paid into Social Security. Eligible survivors can include a surviving spouse, children, and in some cases, dependent parents. These benefits are a crucial source of support for families who have lost a primary breadwinner."
      },
      {
        title: "Funding Mechanism (FICA)",
        content: "The Social Security program is funded primarily through payroll taxes collected under the Federal Insurance Contributions Act (FICA). Employers and employees each pay a percentage of an employee's wages up to an annual limit. This money goes into trust funds from which benefits are paid."
      }
    ],
    purpose: "The original purpose of the Social Security Act was 'to provide for the general welfare by establishing a system of Federal old-age benefits.' It was created to provide a measure of economic security for American workers and their families, protecting them from a loss of income due to retirement, disability, or the death of a wage earner. It has become one of the nation's most successful anti-poverty programs."
  },
  '53': {
    summary: "The Telecommunications Act of 1996 was the first major overhaul of U.S. telecommunications law in over 60 years, amending the Communications Act of 1934. The Act's provisions are found in <a href='https://www.govinfo.gov/app/details/USCODE-2021-title47' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Title 47 of the U.S. Code</a>. The primary goal of the Act was to deregulate the telecommunications industry and foster a new era of competition.",
    keyProvisions: [
      {
        title: "Convergence and Competition",
        content: "The central premise of the Act was to break down the regulatory barriers that separated different segments of the communications industry. It was designed to allow local telephone companies, long-distance carriers, and cable television companies to compete in each other's markets. The hope was that this competition would lead to lower prices, better quality, and more innovation for consumers."
      },
      {
        title: "Deregulation of Media Ownership",
        content: "The Act significantly loosened many of the long-standing restrictions on media ownership. It relaxed the rules limiting the number of radio and television stations a single company could own, both locally and nationally. This led to a massive wave of consolidation in the broadcast industry."
      },
      {
        title: "Internet Provisions (Communications Decency Act)",
        content: "The 1996 Act was the first major federal law to address the internet. It included the Communications Decency Act (CDA), which attempted to regulate indecency and obscenity online. While the anti-indecency provisions were struck down by the Supreme Court in *Reno v. ACLU* (1997) on First Amendment grounds, a key part, Section 230, remains. Section 230 provides online platforms with immunity from liability for content posted by their users."
      },
      {
        title: "Universal Service",
        content: "The Act reaffirmed and updated the long-standing principle of 'universal service'—the idea that all Americans should have access to communications services. It expanded the focus of universal service to include schools, libraries, and rural health care providers, creating the 'E-Rate' program to provide discounted internet access to these institutions."
      }
    ],
    purpose: "The stated purpose of the Telecommunications Act of 1996 was 'to promote competition and reduce regulation in order to secure lower prices and higher quality services for American telecommunications consumers and encourage the rapid deployment of new telecommunications technologies.' While its success in achieving these goals is a matter of debate, it profoundly reshaped the modern communications landscape."
  },
  '54': {
    summary: "The Uniform Commercial Code (UCC) is a comprehensive set of laws governing all commercial transactions in the United States. It is not a federal law, but rather a uniformly adopted state law. Its uniformity is essential for businesses that operate across state lines. All 50 states, the District of Columbia, and the U.S. territories have adopted some version of the UCC. An example can be seen from <a href='https://www.law.cornell.edu/ucc' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Cornell's LII</a>.",
    keyProvisions: [
      {
        title: "Article 2: Sales of Goods",
        content: "This article governs contracts for the sale of 'goods,' which are defined as all things movable at the time of identification to the contract. It covers topics like contract formation, warranties (express and implied), remedies for breach of contract, and the passing of risk from seller to buyer."
      },
      {
        title: "Article 3: Negotiable Instruments",
        content: "Article 3 deals with negotiable instruments, which are signed writings that contain an unconditional promise or order to pay a specific sum of money. This includes promissory notes and drafts (such as checks). It sets out the rights and obligations of the parties to these instruments."
      },
      {
        title: "Article 9: Secured Transactions",
        content: "This is one of the most important articles of the UCC. It governs transactions that combine a debt with a creditor's interest in a debtor's personal property. This 'security interest' ensures that the creditor can take possession of and sell the property (the 'collateral') if the debtor defaults on the loan. Article 9 provides the rules for creating, perfecting, and enforcing these security interests."
      },
      {
        title: "Good Faith",
        content: "A fundamental principle running through the UCC is the obligation of 'good faith' in the performance and enforcement of every contract or duty. Good faith is defined as 'honesty in fact and the observance of reasonable commercial standards of fair dealing.'"
      }
    ],
    purpose: "The main purpose of the UCC is to simplify, clarify, and modernize the law governing commercial transactions. It aims to permit the continued expansion of commercial practices through custom, usage, and agreement of the parties, and to make the law uniform among the various jurisdictions. This uniformity provides consistency and predictability, which are crucial for a robust national economy."
  }
};
