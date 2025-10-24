
interface LawContent {
  summary: string;
  keyProvisions: { title: string; content: string }[];
  purpose: string;
}

export const FEDERAL_LAW_CONTENT: Record<string, LawContent> = {
  '1': {
    summary: "The Administrative Procedure Act (APA) is a United States federal statute that governs the way in which administrative agencies of the federal government may propose and establish regulations. It also sets up a process for courts to directly review agency decisions. It is one of the most important pieces of U.S. administrative law.",
    keyProvisions: [
      {
        title: "Rulemaking (Section 553)",
        content: "The APA establishes two primary types of rulemaking: informal (notice-and-comment) and formal. Informal rulemaking is the most common. It requires an agency to: 1) Publish a notice of proposed rulemaking in the Federal Register. 2) Provide a period for the public to comment on the proposed rule. 3) Publish the final rule with a statement of its basis and purpose."
      },
      {
        title: "Adjudication (Sections 554, 556, 557)",
        content: "This part of the APA governs how federal agencies conduct hearings and make decisions in individual cases, similar to a court trial. It ensures due process by requiring notice of the hearing, the right to present evidence, and a decision based on the record."
      },
      {
        title: "Judicial Review (Chapter 7)",
        content: "Perhaps the most critical part of the APA, this allows parties who are 'aggrieved by agency action' to seek review in federal court. Courts can set aside agency actions that are found to be 'arbitrary, capricious, an abuse of discretion, or otherwise not in accordance with law,' among other standards."
      },
      {
        title: "Information Access (Section 552)",
        content: "The APA includes provisions for public access to agency information, which were later expanded upon by the Freedom of Information Act (FOIA). It requires agencies to publish their organization, procedures, and rules."
      }
    ],
    purpose: "The primary purpose of the APA is to ensure that agency actions are fair, transparent, and accountable. It does this by requiring public participation in the rulemaking process (transparency), establishing fair procedures for individual decisions (fairness), and allowing for court oversight (accountability)."
  },
  '2': {
    summary: "Admiralty law, also known as maritime law, is a distinct body of law that governs nautical issues and private maritime disputes. It includes both domestic law on maritime activities, and private international law governing the relationships between private entities that operate vessels on the oceans.",
    keyProvisions: [
      {
        title: "Maintenance and Cure",
        content: "A seaman's right to receive food, lodging, and medical care to the point of maximum medical improvement if injured or falls ill while in service of the ship."
      },
      {
        title: "Jones Act",
        content: "Allows seamen who have been injured at sea as a result of negligence to sue their employers for damages."
      },
      {
        title: "Maritime Liens",
        content: "A lien on a vessel, giving the creditor the right to have the vessel sold to satisfy the debt."
      }
    ],
    purpose: "To provide a consistent and predictable legal framework for maritime activities, resolving disputes and protecting the rights of seamen, shipowners, and other parties involved in maritime commerce."
  },
  '3': {
    summary: "The Age Discrimination in Employment Act of 1967 (ADEA) is a US labor law that forbids employment discrimination against anyone at least 40 years of age in the United States.",
    keyProvisions: [
      {
        title: "Prohibited Practices",
        content: "The ADEA prohibits discrimination based on age in any term, condition, or privilege of employment, including hiring, firing, promotion, layoff, compensation, benefits, job assignments, and training."
      },
      {
        title: "Covered Employers",
        content: "The law applies to private employers with 20 or more employees, state and local governments, employment agencies, and labor organizations."
      },
      {
        title: "Exceptions",
        content: "Some exceptions exist, such as when age is a bona fide occupational qualification (BFOQ) reasonably necessary to the normal operation of the particular business."
      }
    ],
    purpose: "To promote the employment of older persons based on their ability rather than age; to prohibit arbitrary age discrimination in employment; and to help employers and workers find ways of meeting problems arising from the impact of age on employment."
  },
  '4': {
    summary: "The Americans with Disabilities Act of 1990 (ADA) is a civil rights law that prohibits discrimination based on disability. It affords similar protections against discrimination to Americans with disabilities as the Civil Rights Act of 1964.",
    keyProvisions: [
        {
            title: "Title I: Employment",
            content: "Prohibits private employers, state and local governments, employment agencies, and labor unions from discriminating against qualified individuals with disabilities in job application procedures, hiring, firing, advancement, compensation, job training, and other terms, conditions, and privileges of employment."
        },
        {
            title: "Title II: Public Services",
            content: "Prohibits discrimination against qualified individuals with disabilities in all programs, activities, and services of public entities. It applies to all state and local governments, their departments and agencies, and any other instrumentalities or special purpose districts of state or local governments."
        },
        {
            title: "Title III: Public Accommodations",
            content: "Prohibits discrimination on the basis of disability in the activities of places of public accommodations (businesses that are generally open to the public and that fall into one of 12 categories listed in the ADA)."
        }
    ],
    purpose: "To ensure that people with disabilities have the same rights and opportunities as everyone else by prohibiting discrimination and guaranteeing that people with disabilities have the same opportunities as everyone else to participate in the mainstream of American life."
  },
  '5': {
    summary: "The Animal Welfare Act of 1966 is the only federal law in the United States that regulates the treatment of animals in research, exhibition, transport, and by dealers.",
    keyProvisions: [
        {
            title: "Regulated Animals",
            content: "The law covers warm-blooded animals, with some exceptions, when they are used for research, testing, exhibition, or as pets. The law does not cover birds, rats of the genus Rattus, and mice of the genus Mus bred for use in research."
        },
        {
            title: "Standards of Care",
            content: "The AWA requires that minimum standards of care and treatment be provided for certain animals bred for commercial sale, used in research, transported commercially, or exhibited to the public."
        }
    ],
    purpose: "To ensure that animals intended for use in research facilities or for exhibition purposes or for use as pets are provided humane care and treatment, and to assure the humane treatment of animals during transportation in commerce."
  },
  '6': {
    summary: "Antitrust laws are a collection of federal and state government laws that regulate the conduct and organization of business corporations, generally to promote fair competition for the benefit of consumers.",
    keyProvisions: [
        {
            title: "Sherman Antitrust Act (1890)",
            content: "The first Federal act that outlawed monopolistic business practices. It prohibits contracts, combinations, and conspiracies in restraint of trade."
        },
        {
            title: "Clayton Antitrust Act (1914)",
            content: "Addresses specific practices that the Sherman Act does not clearly prohibit, such as mergers and interlocking directorates (when the same person makes business decisions for competing companies)."
        }
    ],
    purpose: "To protect the process of competition for the benefit of consumers, making sure there are strong incentives for businesses to operate efficiently, keep prices down, and keep quality up."
  },
  '7': {
    summary: "Title 11 of the United States Code, known as the Bankruptcy Code, governs the process of bankruptcy in the United States.",
    keyProvisions: [
      {
        title: "Chapter 7: Liquidation",
        content: "This involves the sale of a debtor's nonexempt property and the distribution of the proceeds to creditors. It's often referred to as 'straight bankruptcy'."
      },
      {
        title: "Chapter 11: Reorganization",
        content: "Allows businesses (and certain individuals) to continue operating while reorganizing their finances under a court-approved plan."
      },
      {
        title: "Chapter 13: Repayment Plan",
        content: "Enables individuals with regular income to develop a plan to repay all or part of their debts over three to five years."
      }
    ],
    purpose: "To give honest debtors a 'fresh start' from burdensome debts and to provide for the fair and orderly distribution of a debtor's assets among creditors."
  },
  '8': {
    summary: "The Fair Labor Standards Act (FLSA) establishes federal standards for minimum wage, overtime pay, recordkeeping, and youth employment. The child labor provisions are designed to protect the educational opportunities of minors and prohibit their employment in jobs that are detrimental to their health and safety.",
    keyProvisions: [
      {
        title: "Age Restrictions",
        content: "The FLSA sets a minimum age of 14 for most non-agricultural work. It limits the hours that minors under 16 can work and prohibits them from being employed in hazardous occupations."
      },
      {
        title: "Hazardous Occupations",
        content: "The Secretary of Labor has identified 17 hazardous non-agricultural occupations that are too dangerous for minors under 18 to perform, such as mining, logging, and operating many types of power-driven machinery."
      },
      {
        title: "Hours of Work for Minors (14-15 years old)",
        content: "Work is restricted to non-school hours; no more than 3 hours on a school day, 18 hours in a school week; no more than 8 hours on a non-school day, 40 hours in a non-school week. Work may not begin before 7 a.m. or end after 7 p.m. (except from June 1 through Labor Day, when evening hours are extended to 9 p.m.)."
      }
    ],
    purpose: "To protect the health, well-being, and educational opportunities of young workers by restricting the types of jobs and the hours they can work."
  },
  '9': {
    summary: "The Civil Rights Act of 1964 is a landmark civil rights and labor law in the United States that outlaws discrimination based on race, color, religion, sex, or national origin.",
    keyProvisions: [
      {
        title: "Title II",
        content: "Prohibits discrimination in public accommodations (e.g., hotels, restaurants, theaters)."
      },
      {
        title: "Title VI",
        content: "Prohibits discrimination in federally funded programs and activities."
      },
      {
        title: "Title VII",
        content: "Prohibits employment discrimination by employers with 15 or more employees."
      }
    ],
    purpose: "To end segregation in public places and ban employment discrimination on the basis of race, color, religion, sex or national origin."
  },
  '10': {
    summary: "The Clean Air Act is a comprehensive federal law that regulates air emissions from stationary and mobile sources. This law authorizes the EPA to establish National Ambient Air Quality Standards (NAAQS) to protect public health and public welfare and to regulate emissions of hazardous air pollutants.",
    keyProvisions: [
      {
        title: "National Ambient Air Quality Standards (NAAQS)",
        content: "The EPA sets NAAQS for six common air pollutants: particulate matter, ozone, sulfur dioxide, nitrogen dioxide, carbon monoxide, and lead."
      },
      {
        title: "State Implementation Plans (SIPs)",
        content: "Each state is required to develop a plan to attain and maintain NAAQS."
      },
      {
        title: "New Source Performance Standards (NSPS)",
        content: "The EPA establishes technology-based standards for new or modified stationary sources of air pollution."
      }
    ],
    purpose: "To protect public health and welfare from different types of air pollution caused by a diverse array of pollution sources."
  },
  '11': {
    summary: "The Clean Water Act (CWA) establishes the basic structure for regulating discharges of pollutants into the waters of the United States and regulating quality standards for surface waters.",
    keyProvisions: [
      {
        title: "NPDES Permit Program",
        content: "The National Pollutant Discharge Elimination System (NPDES) requires permits for any point source (e.g., a pipe or man-made ditch) discharging pollutants into navigable waters."
      },
      {
        title: "Water Quality Standards",
        content: "States must set water quality standards for all contaminants in surface waters."
      },
      {
        title: "Section 404 Program",
        content: "Regulates the discharge of dredged or fill material into waters of the United States, including wetlands."
      }
    ],
    purpose: "To restore and maintain the chemical, physical, and biological integrity of the nation's waters."
  },
  '12': {
    summary: "The Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA), commonly known as Superfund, provides a Federal 'Superfund' to clean up uncontrolled or abandoned hazardous-waste sites as well as accidents, spills, and other emergency releases of pollutants and contaminants into the environment.",
    keyProvisions: [
      {
        title: "Hazardous Substance Release",
        content: "Establishes prohibitions and requirements concerning closed and abandoned hazardous waste sites."
      },
      {
        title: "Liability",
        content: "Provides for liability of persons responsible for releases of hazardous waste at these sites."
      },
      {
        title: "Trust Fund",
        content: "Establishes a trust fund to provide for cleanup when no responsible party could be identified."
      }
    ],
    purpose: "To provide for the cleanup of hazardous substance releases and to hold responsible parties accountable for the costs of cleanup."
  },
  '13': {
    summary: "The Consolidated Omnibus Budget Reconciliation Act (COBRA) gives workers and their families who lose their health benefits the right to choose to continue group health benefits provided by their group health plan for limited periods of time under certain circumstances such as voluntary or involuntary job loss, reduction in the hours worked, transition between jobs, death, divorce, and other life events.",
    keyProvisions: [
      {
        title: "Continuation Coverage",
        content: "Requires group health plans to offer continuation coverage to covered employees, former employees, spouses, former spouses, and dependent children when group health coverage would otherwise be lost due to certain specific events."
      },
      {
        title: "Qualifying Events",
        content: "Events that trigger COBRA eligibility include termination of employment (for reasons other than gross misconduct), reduction in hours, death of the covered employee, divorce or legal separation, and a child's loss of dependent status."
      },
      {
        title: "Duration",
        content: "Continuation coverage is typically available for 18 or 36 months, depending on the qualifying event."
      }
    ],
    purpose: "To provide a temporary bridge for individuals and their families to maintain health coverage during periods of job or life transition, preventing gaps in health insurance."
  },
  '14': {
    summary: "The Consumer Credit Protection Act (CCPA) is a federal law designed to ensure the fair and honest extension of credit to consumers. It includes several key titles, most notably the Truth in Lending Act (TILA).",
    keyProvisions: [
      {
        title: "Truth in Lending Act (TILA)",
        content: "Requires lenders to disclose credit terms and costs, such as the annual percentage rate (APR) and finance charges, so consumers can compare credit offers."
      },
      {
        title: "Fair Credit Reporting Act (FCRA)",
        content: "Regulates the collection and use of consumer credit information and ensures the accuracy of credit reports."
      },
      {
        title: "Fair Debt Collection Practices Act (FDCPA)",
        content: "Prohibits debt collectors from using abusive, unfair, or deceptive practices to collect from consumers."
      }
    ],
    purpose: "To protect consumers in their dealings with lenders and credit reporting agencies, and to prevent abusive debt collection practices."
  },
  '15': {
    summary: "Copyright law in the United States is governed by Title 17 of the U.S. Code. It grants the creator of an original work exclusive rights for its use and distribution. This protection is available for both published and unpublished works.",
    keyProvisions: [
      {
        title: "Exclusive Rights",
        content: "Copyright holders have the exclusive right to reproduce, distribute, perform, display, and create derivative works from their original work."
      },
      {
        title: "Duration of Copyright",
        content: "For works created after January 1, 1978, copyright protection lasts for the life of the author plus 70 years."
      },
      {
        title: "Fair Use",
        content: "A doctrine that permits limited use of copyrighted material without acquiring permission from the rights holders. Uses include criticism, comment, news reporting, teaching, scholarship, and research."
      }
    ],
    purpose: "To promote the progress of science and useful arts by securing for limited times to authors the exclusive right to their respective writings."
  },
  '16': {
    summary: "Customs and Border Protection (CBP) regulations govern the flow of goods and people into and out of the United States. These regulations are enforced by the CBP, an agency of the Department of Homeland Security.",
    keyProvisions: [
      {
        title: "Import/Export Requirements",
        content: "Specifies the documentation, duties, taxes, and fees required for importing and exporting goods. Includes regulations on tariffs and trade agreements."
      },
      {
        title: "Inspections and Seizures",
        content: "Authorizes CBP officers to inspect cargo and baggage, and to seize illegal items, contraband, or goods that violate U.S. laws (e.g., intellectual property rights)."
      },
      {
        title: "Immigration and Travel",
        content: "Governs the entry of foreign nationals, including visa requirements, and the inspection of all persons entering the U.S. at ports of entry."
      }
    ],
    purpose: "To safeguard America's borders, prevent the entry of terrorists and their weapons, and to facilitate lawful international trade and travel."
  },
  '17': {
    summary: "The Dodd-Frank Act was enacted in response to the 2008 financial crisis. It is a massive piece of financial reform legislation that established a number of new government agencies tasked with overseeing various components of the financial system.",
    keyProvisions: [
      {
        title: "Consumer Financial Protection Bureau (CFPB)",
        content: "Created to protect consumers by regulating financial products and services, such as mortgages, credit cards, and student loans."
      },
      {
        title: "Volcker Rule",
        content: "Restricts U.S. banks from making certain kinds of speculative investments that do not benefit their customers."
      },
      {
        title: "Systemic Risk Regulation",
        content: "The Financial Stability Oversight Council (FSOC) was created to identify and monitor excessive risks to the U.S. financial system."
      }
    ],
    purpose: "To promote the financial stability of the United States by improving accountability and transparency in the financial system, to end 'too big to fail', to protect the American taxpayer by ending bailouts, and to protect consumers from abusive financial services practices."
  },
  '18': {
    summary: "The Drug Enforcement Administration (DEA) enforces the controlled substances laws and regulations of the United States. These regulations are primarily contained within the Controlled Substances Act (CSA).",
    keyProvisions: [
      {
        title: "Drug Scheduling",
        content: "The CSA classifies controlled substances into five schedules (I-V) based on their potential for abuse, accepted medical use, and safety or dependence liability."
      },
      {
        title: "Registration Requirements",
        content: "Manufacturers, distributors, prescribers, and dispensers of controlled substances must register with the DEA."
      },
      {
        title: "Recordkeeping and Prescriptions",
        content: "Strict rules govern the prescribing, dispensing, and recordkeeping for controlled substances to prevent diversion and abuse."
      }
    ],
    purpose: "To enforce the controlled substances laws and regulations of the United States and bring to the criminal and civil justice system those organizations and principal members of organizations, involved in the growing, manufacture, or distribution of controlled substances."
  },
  '19': {
    summary: "The Employee Retirement Income Security Act of 1974 (ERISA) is a federal law that sets minimum standards for most voluntarily established retirement and health plans in private industry to provide protection for individuals in these plans.",
    keyProvisions: [
      {
        title: "Fiduciary Duties",
        content: "Requires those who manage and control plan assets to act solely in the interest of plan participants and beneficiaries."
      },
      {
        title: "Disclosure and Reporting",
        content: "Requires plan administrators to furnish plan information to participants and to file reports with the government."
      },
      {
        title: "Vesting Standards",
        content: "Sets minimum standards for when an employee gains a non-forfeitable right to their benefits."
      }
    ],
    purpose: "To protect the interests of participants and their beneficiaries in employee benefit plans."
  },
  '20': {
    summary: "The Endangered Species Act (ESA) of 1973 provides a program for the conservation of threatened and endangered plants and animals and the habitats in which they are found.",
    keyProvisions: [
      {
        title: "Listing",
        content: "Species may be listed as 'endangered' (in danger of extinction) or 'threatened' (likely to become endangered)."
      },
      {
        title: "Prohibited Acts",
        content: "Prohibits the 'take' of listed animals, which includes harming, harassing, or killing them. It also prohibits trade in listed species."
      },
      {
        title: "Recovery Plans",
        content: "Requires the development of recovery plans for listed species to promote their conservation and survival."
      }
    ],
    purpose: "To protect and recover imperiled species and the ecosystems upon which they depend."
  },
  '21': {
    summary: "The Energy Policy Act addresses energy production in the United States, including energy efficiency, renewable energy, oil and gas, coal, tribal energy, nuclear matters and security, vehicles and motor fuels, hydrogen, electricity, and energy tax incentives.",
    keyProvisions: [
      {
        title: "Renewable Fuel Standard (RFS)",
        content: "Requires transportation fuel sold in the U.S. to contain a minimum volume of renewable fuels."
      },
      {
        title: "Loan Guarantees",
        content: "Authorizes loan guarantees for technologies that avoid, reduce, or sequester air pollutants or anthropogenic emissions of greenhouse gases."
      },
      {
        title: "Energy Efficiency",
        content: "Includes provisions to improve energy efficiency in federal buildings and to promote the use of energy-efficient technologies."
      }
    ],
    purpose: "To combat growing energy problems, this act provides tax incentives and loan guarantees for energy production of various types."
  },
  '22': {
    summary: "The Equal Credit Opportunity Act (ECOA) is a United States federal law that makes it illegal for any creditor to discriminate against any applicant, with respect to any aspect of a credit transaction, on the basis of race, color, religion, national origin, sex, marital status, or age.",
    keyProvisions: [
      {
        title: "Prohibited Basis",
        content: "Creditors cannot use any of the prohibited bases to discriminate when providing credit."
      },
      {
        title: "Notifications",
        content: "Creditors must notify applicants of the action taken on their application within 30 days and provide specific reasons for any adverse action."
      },
      {
        title: "Appraisals",
        content: "Applicants have a right to receive a copy of any appraisal report used in connection with their application for credit."
      }
    ],
    purpose: "To ensure that all consumers are given an equal chance to obtain credit."
  },
  '23': {
    summary: "The Equal Pay Act of 1963 is a United States labor law amending the Fair Labor Standards Act, aimed at abolishing wage disparity based on sex. It was signed into law on June 10, 1963, by John F. Kennedy.",
    keyProvisions: [
      {
        title: "Equal Pay for Equal Work",
        content: "Requires that men and women in the same establishment who perform jobs that require substantially equal skill, effort, and responsibility, and are performed under similar working conditions, receive equal pay."
      },
      {
        title: "Permitted Differentials",
        content: "Pay differentials are permitted when they are based on seniority, merit, quantity or quality of production, or a factor other than sex."
      },
      {
        title: "No Wage Reduction",
        content: "An employer cannot reduce the wages of any employee to comply with the Act."
      }
    ],
    purpose: "To prohibit discrimination on account of sex in the payment of wages by employers."
  },
  '24': {
    summary: "The Fair Credit Reporting Act (FCRA) is a federal law that regulates the collection of consumers' credit information and access to their credit reports. It was passed in 1970 to address the fairness, accuracy, and privacy of the personal information contained in the files of the credit reporting agencies.",
    keyProvisions: [
      {
        title: "Access to Information",
        content: "Consumers have the right to know what is in their file and to receive one free credit report every 12 months from each of the three major credit bureaus."
      },
      {
        title: "Accuracy of Information",
        content: "Credit reporting agencies must correct or delete inaccurate, incomplete, or unverifiable information. Consumers can dispute information with the CRA."
      },
      {
        title: "Permissible Purpose",
        content: "Access to a consumer's credit report is limited to those with a valid need, such as creditors, insurers, employers, and landlords."
      }
    ],
    purpose: "To promote the accuracy, fairness, and privacy of information in the files of consumer reporting agencies."
  },
  '25': {
    summary: "The Fair Debt Collection Practices Act (FDCPA) is a federal law that limits the behavior and actions of third-party debt collectors who are attempting to collect debts on behalf of another person or entity.",
    keyProvisions: [
      {
        title: "Prohibited Practices",
        content: "Prohibits debt collectors from using abusive, unfair, or deceptive practices, such as calling at unreasonable hours, using obscene language, or making false threats."
      },
      {
        title: "Communication Rules",
        content: "Restricts when and how debt collectors can contact consumers. They cannot contact a consumer at their place of employment if they know the employer disapproves."
      },
      {
        title: "Validation of Debts",
        content: "Collectors must provide consumers with a written notice containing the amount of the debt, the name of the creditor, and a statement of their right to dispute the debt."
      }
    ],
    purpose: "To eliminate abusive debt collection practices by debt collectors, to insure that those debt collectors who refrain from using abusive debt collection practices are not competitively disadvantaged, and to promote consistent State action to protect consumers against debt collection abuses."
  },
  '26': {
    summary: "The Fair Housing Act is a federal law that prohibits discrimination in the sale, rental, and financing of dwellings, and in other housing-related transactions, based on race, color, national origin, religion, sex, familial status, and disability.",
    keyProvisions: [
      {
        title: "Prohibited Actions",
        content: "It is illegal to refuse to sell or rent housing, to refuse to negotiate for housing, or to otherwise make housing unavailable because of a person's protected characteristic."
      },
      {
        title: "Reasonable Accommodations",
        content: "Landlords must make reasonable accommodations in rules, policies, practices, or services when such accommodations may be necessary to afford a person with a disability equal opportunity to use and enjoy a dwelling."
      },
      {
        title: "Enforcement",
        content: "Individuals who believe they have been victims of housing discrimination can file a complaint with the Department of Housing and Urban Development (HUD)."
      }
    ],
    purpose: "To provide for fair housing throughout the United States and to prevent discrimination in all housing-related activities."
  },
  '27': {
    summary: "The Fair Labor Standards Act (FLSA) is a federal law which establishes minimum wage, overtime pay eligibility, recordkeeping, and child labor standards affecting full-time and part-time workers in the private sector and in federal, state, and local governments.",
    keyProvisions: [
      {
        title: "Minimum Wage",
        content: "Sets a national minimum wage rate that most employers must pay to employees."
      },
      {
        title: "Overtime Pay",
        content: "Requires overtime pay at a rate of not less than one and one-half times the regular rate of pay for hours worked over 40 in a workweek for non-exempt employees."
      },
      {
        title: "Child Labor",
        content: "Restricts the hours and types of jobs that minors can work."
      }
    ],
    purpose: "To protect workers from unfair labor practices by establishing minimum standards for wages and working conditions."
  },
  '28': {
    summary: "The Family and Medical Leave Act of 1993 (FMLA) is a United States labor law requiring covered employers to provide employees with job-protected, unpaid leave for qualified medical and family reasons.",
    keyProvisions: [
      {
        title: "Eligibility",
        content: "Applies to employers with 50 or more employees. Employees are eligible if they have worked for their employer for at least 12 months, at least 1,250 hours over the past 12 months, and work at a location where the company employs 50 or more employees within 75 miles."
      },
      {
        title: "Leave Entitlement",
        content: "Eligible employees are entitled to 12 workweeks of unpaid leave in a 12-month period for: the birth of a child, placement of a child for adoption or foster care, to care for an immediate family member with a serious health condition, or for the employee's own serious health condition."
      },
      {
        title: "Job Protection",
        content: "Upon return from FMLA leave, an employee must be restored to their original job or to an equivalent job with equivalent pay, benefits, and other terms and conditions of employment."
      }
    ],
    purpose: "To help employees balance their work and family responsibilities by allowing them to take reasonable unpaid leave for certain family and medical reasons."
  },
  '29': {
    summary: "The Federal Aviation Administration (FAA) is the national aviation authority of the United States. It has authority to regulate and oversee all aspects of American civil aviation. FAA regulations are extensive and cover aircraft, airmen, airports, and air traffic control.",
    keyProvisions: [
      {
        title: "Aircraft Certification",
        content: "Regulations for the design, manufacturing, and maintenance of aircraft to ensure they are airworthy."
      },
      {
        title: "Airman Certification",
        content: "Rules for the licensing and certification of pilots, mechanics, and other aviation professionals."
      },
      {
        title: "Airspace and Air Traffic Control",
        content: "Management of the National Airspace System, including rules of flight and procedures for air traffic controllers."
      }
    ],
    purpose: "To provide the safest, most efficient aerospace system in the world."
  },
  '30': {
    summary: "The Federal Communications Commission (FCC) is an independent agency of the United States government created by statute to regulate interstate communications by radio, television, wire, satellite, and cable.",
    keyProvisions: [
      {
        title: "Spectrum Management",
        content: "The FCC allocates licenses for the use of the electromagnetic spectrum for non-federal use (e.g., radio and television broadcasting, mobile phones)."
      },
      {
        title: "Net Neutrality",
        content: "Rules governing internet service providers (ISPs), often related to the principle that ISPs should treat all data on the internet equally, without discriminating or charging differently based on user, content, website, or platform."
      },
      {
        title: "Broadcast Regulation",
        content: "Sets rules for broadcast media, including content regulations (like indecency and obscenity), political advertising, and ownership limits."
      }
    ],
    purpose: "To regulate interstate and international communications by radio, television, wire, satellite, and cable in all 50 states, the District of Columbia, and U.S. territories."
  },
  '31': {
    summary: "The Federal Food, Drug, and Cosmetic Act (FD&C Act) is a set of laws passed by Congress in 1938 giving authority to the U.S. Food and Drug Administration (FDA) to oversee the safety of food, drugs, medical devices, and cosmetics.",
    keyProvisions: [
      {
        title: "Premarket Approval",
        content: "New drugs and certain medical devices must be proven safe and effective before they can be marketed."
      },
      {
        title: "Adulteration and Misbranding",
        content: "The act prohibits the distribution of foods, drugs, and cosmetics that are adulterated (e.g., contaminated) or misbranded (e.g., have false or misleading labeling)."
      },
      {
        title: "Good Manufacturing Practices (GMP)",
        content: "The FDA establishes regulations for the manufacturing, processing, packing, and holding of products to ensure their quality."
      }
    ],
    purpose: "To protect public health by assuring the safety, efficacy, and security of human and veterinary drugs, biological products, medical devices, our nation's food supply, cosmetics, and products that emit radiation."
  },
  '32': {
    summary: "The Federal Information Security Management Act (FISMA) is a United States federal law enacted in 2002 that made it a requirement for federal agencies to develop, document, and implement an agency-wide program to provide information security for the information and information systems that support the operations and assets of the agency.",
    keyProvisions: [
      {
        title: "Risk Management Framework",
        content: "Requires agencies to implement a risk-based approach to information security, including risk assessment, security controls implementation, and continuous monitoring."
      },
      {
        title: "Annual Reviews",
        content: "Agencies must conduct annual security reviews to ensure compliance and effectiveness of their security programs."
      },
      {
        title: "Reporting",
        content: "Agencies are required to report on the status of their information security programs to the Office of Management and Budget (OMB) and Congress."
      }
    ],
    purpose: "To bolster computer and network security within the federal government and affiliated parties by mandating yearly audits."
  },
  '33': {
    summary: "The Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA) is a United States federal law that set up the basic U.S. system of pesticide regulation to protect applicators, consumers, and the environment.",
    keyProvisions: [
      {
        title: "Pesticide Registration",
        content: "All pesticides sold or distributed in the U.S. must be registered by the Environmental Protection Agency (EPA). Registration is only approved if the pesticide will not cause 'unreasonable adverse effects on the environment'."
      },
      {
        title: "Labeling Requirements",
        content: "Pesticide labels must include instructions for use and warnings to prevent harm to human health or the environment. It is a violation of federal law to use a pesticide in a manner inconsistent with its labeling."
      },
      {
        title: "Enforcement",
        content: "The EPA has the authority to suspend or cancel a pesticide's registration and to take action against those who misuse pesticides."
      }
    ],
    purpose: "To provide for federal regulation of pesticide distribution, sale, and use. All pesticides distributed or sold in the United States must be registered (licensed) by EPA."
  },
  '34': {
    summary: "The Federal Trade Commission Act is the primary statute of the Federal Trade Commission (FTC). The Act, passed in 1914, prohibits unfair methods of competition and unfair or deceptive acts or practices in or affecting commerce.",
    keyProvisions: [
      {
        title: "Section 5: Unfair or Deceptive Acts",
        content: "This is the core of the Act, granting the FTC the power to investigate and prevent deceptive practices, such as false advertising and fraudulent marketing."
      },
      {
        title: "Antitrust Enforcement",
        content: "The FTC shares jurisdiction with the Department of Justice to enforce federal antitrust laws, such as the Sherman and Clayton Acts, to prevent anti-competitive mergers and business practices."
      },
      {
        title: "Rulemaking Authority",
        content: "The FTC can issue industry-wide rules that define unfair or deceptive practices, such as the Telemarketing Sales Rule."
      }
    ],
    purpose: "To protect consumers and promote competition by preventing anticompetitive, deceptive, and unfair business practices."
  },
  '35': {
    summary: "The Freedom of Information Act (FOIA) is a federal freedom of information law that requires the full or partial disclosure of previously unreleased information and documents controlled by the U.S. Government upon request.",
    keyProvisions: [
      {
        title: "Right to Request",
        content: "Provides any person the right to request access to federal agency records or information."
      },
      {
        title: "Agency Response Time",
        content: "Federal agencies are required to respond to FOIA requests within 20 business days."
      },
      {
        title: "Exemptions",
        content: "The Act provides nine exemptions to disclosure, protecting information such as personal privacy, national security, and law enforcement investigations."
      }
    ],
    purpose: "To ensure public access to U.S. government records, promoting transparency and accountability in government."
  },
  '36': {
    summary: "The Gramm-Leach-Bliley Act (GLBA), also known as the Financial Services Modernization Act of 1999, requires financial institutions to explain their information-sharing practices to their customers and to safeguard sensitive data.",
    keyProvisions: [
      {
        title: "Financial Privacy Rule",
        content: "Requires financial institutions to provide consumers with a privacy notice explaining how they collect and share personal financial information."
      },
      {
        title: "Safeguards Rule",
        content: "Requires financial institutions to have a security plan to protect the confidentiality and integrity of personal consumer information."
      },
      {
        title: "Pretexting Provisions",
        content: "Prohibits the practice of 'pretexting' (accessing private information using false pretenses)."
      }
    ],
    purpose: "To protect consumers' personal financial information held by financial institutions."
  },
  '37': {
    summary: "The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a federal law that required the creation of national standards to protect sensitive patient health information from being disclosed without the patient's consent or knowledge.",
    keyProvisions: [
      {
        title: "Privacy Rule",
        content: "Establishes national standards to protect individuals' medical records and other personal health information (PHI). It sets limits and conditions on the uses and disclosures that may be made of such information without patient authorization."
      },
      {
        title: "Security Rule",
        content: "Sets national standards for protecting the confidentiality, integrity, and availability of electronic protected health information (ePHI)."
      },
      {
        title: "Breach Notification Rule",
        content: "Requires covered entities to notify affected individuals, the government, and in some cases, the media of a breach of unsecured PHI."
      }
    ],
    purpose: "To improve the efficiency and effectiveness of the health care system, HIPAA includes provisions to protect the privacy and security of patient health information."
  },
  '38': {
    summary: "The Immigration and Nationality Act (INA), or INA, is the body of law that governs current immigration policy in the United States. It addresses issues such as visas, citizenship, and asylum.",
    keyProvisions: [
      {
        title: "Immigrant and Nonimmigrant Visas",
        content: "Establishes different categories of visas for individuals seeking to come to the U.S. permanently (immigrant) or temporarily (nonimmigrant)."
      },
      {
        title: "Grounds for Inadmissibility and Deportability",
        content: "Defines the reasons why a foreign national may be denied entry into the U.S. or removed from the country."
      },
      {
        title: "Naturalization",
        content: "Sets forth the requirements for a foreign national to become a U.S. citizen."
      }
    ],
    purpose: "To provide a comprehensive framework for immigration and citizenship in the United States."
  },
  '39': {
    summary: "The Internal Revenue Code (IRC), formally the Internal Revenue Code of 1986, is the main body of domestic statutory tax law in the United States organized under Title 26 of the United States Code.",
    keyProvisions: [
      {
        title: "Income Taxes",
        content: "Imposes a tax on the income of individuals, corporations, estates, and trusts."
      },
      {
        title: "Deductions and Credits",
        content: "Provides for various deductions and tax credits to reduce tax liability, such as the standard deduction, child tax credit, and deductions for mortgage interest."
      },
      {
        title: "Filing Requirements",
        content: "Specifies who must file a tax return, the deadlines for filing, and the penalties for failure to file or pay."
      }
    ],
    purpose: "To provide the statutory basis for all federal tax law in the United States, raising revenue for government operations."
  },
  '40': {
    summary: "The International Traffic in Arms Regulations (ITAR) is a United States regulatory regime to restrict and control the export of defense and military related technologies to safeguard U.S. national security and further U.S. foreign policy objectives.",
    keyProvisions: [
      {
        title: "U.S. Munitions List (USML)",
        content: "ITAR designates certain defense articles and services on the USML, which require a license from the Department of State for export."
      },
      {
        title: "Registration",
        content: "Any U.S. person who engages in the business of manufacturing or exporting defense articles or furnishing defense services is required to register with the Directorate of Defense Trade Controls (DDTC)."
      },
      {
        title: "Export Licenses",
        content: "A license must be obtained from the DDTC before exporting any item or technical data on the USML."
      }
    ],
    purpose: "To control the export and import of defense-related articles and services on the United States Munitions List (USML)."
  },
  '41': {
    summary: "The Lanham Act (also known as the Trademark Act of 1946) is the federal statute that governs trademarks, service marks, and unfair competition. It is found in Title 15 of the U.S. Code.",
    keyProvisions: [
      {
        title: "Trademark Registration",
        content: "Establishes a system for the federal registration of trademarks with the U.S. Patent and Trademark Office (USPTO), providing nationwide protection."
      },
      {
        title: "Unfair Competition and False Advertising",
        content: "Prohibits trademark infringement, trademark dilution, and false advertising."
      },
      {
        title: "Remedies",
        content: "Provides for remedies in case of infringement, including injunctions to stop the infringing use and recovery of damages."
      }
    ],
    purpose: "To protect the owner of a trademark by preventing others from using the same or a confusingly similar mark, and to protect consumers from confusion and deception."
  },
  '42': {
    summary: "The National Environmental Policy Act (NEPA) is a United States environmental law that promotes the enhancement of the environment and established the President's Council on Environmental Quality (CEQ).",
    keyProvisions: [
      {
        title: "Environmental Impact Statements (EIS)",
        content: "NEPA requires federal agencies to prepare a detailed statement, known as an EIS, for 'major Federal actions significantly affecting the quality of the human environment'."
      },
      {
        title: "Public Participation",
        content: "The EIS process requires agencies to involve the public and to consider public comments before making a final decision."
      },
      {
        title: "Consideration of Alternatives",
        content: "Agencies must consider a reasonable range of alternatives to their proposed action, including a 'no action' alternative."
      }
    ],
    purpose: "To ensure that federal agencies consider the environmental impacts of their actions in the decision-making process."
  },
  '43': {
    summary: "The National Labor Relations Act (NLRA) of 1935 is a foundational statute of US labor law which guarantees the right of private sector employees to organize into trade unions, engage in collective bargaining, and take collective action such as strikes.",
    keyProvisions: [
      {
        title: "Right to Organize",
        content: "Protects employees' right to form, join, or assist labor organizations."
      },
      {
        title: "Collective Bargaining",
        content: "Requires employers to bargain in good faith with unions over wages, hours, and other terms and conditions of employment."
      },
      {
        title: "Unfair Labor Practices",
        content: "Prohibits employers from interfering with, restraining, or coercing employees in the exercise of their rights."
      }
    ],
    purpose: "To protect the rights of employees and employers, to encourage collective bargaining, and to curtail certain private sector labor and management practices, which can harm the general welfare of workers, businesses and the U.S. economy."
  },
  '44': {
    summary: "The Occupational Safety and Health Act of 1970 (OSH Act) is the primary federal law which governs occupational health and safety in the private sector and federal government in the United States. It was enacted by Congress in 1970 and was signed by President Richard Nixon on December 29, 1970.",
    keyProvisions: [
      {
        title: "General Duty Clause",
        content: "Requires employers to provide their employees with a place of employment that is 'free from recognized hazards that are causing or are likely to cause death or serious physical harm'."
      },
      {
        title: "Safety Standards",
        content: "The Occupational Safety and Health Administration (OSHA) is authorized to create and enforce specific safety and health standards."
      },
      {
        title: "Inspections and Citations",
        content: "OSHA is authorized to conduct workplace inspections and to issue citations and penalties for violations."
      }
    ],
    purpose: "To assure safe and healthful working conditions for working men and women by authorizing enforcement of the standards developed under the Act."
  },
  '45': {
    summary: "Patent law in the United States is governed by Title 35 of the U.S. Code. A patent is an exclusive right granted for an invention, which is a product or a process that provides, in general, a new way of doing something, or offers a new technical solution to a problem.",
    keyProvisions: [
      {
        title: "Exclusive Rights",
        content: "A patent gives the owner the exclusive right to prevent others from making, using, selling, or importing the patented invention for a limited period, usually 20 years from the filing date."
      },
      {
        title: "Patentability Requirements",
        content: "To be patentable, an invention must be novel, non-obvious, and useful."
      },
      {
        title: "U.S. Patent and Trademark Office (USPTO)",
        content: "The USPTO is the federal agency responsible for examining patent applications and issuing patents."
      }
    ],
    purpose: "To encourage invention and innovation by granting inventors exclusive rights to their inventions for a limited time."
  },
  '46': {
    summary: "The Patient Protection and Affordable Care Act (ACA), often referred to as Obamacare, is a comprehensive healthcare reform law enacted in March 2010. The law has 3 primary goals: make affordable health insurance available to more people, expand the Medicaid program, and support innovative medical care delivery methods designed to lower the costs of health care generally.",
    keyProvisions: [
      {
        title: "Individual Mandate",
        content: "Required most individuals to have health insurance or pay a penalty (the penalty was reduced to $0 in 2019)."
      },
      {
        title: "Health Insurance Marketplace",
        content: "Created state-based exchanges where individuals and small businesses can compare and purchase health insurance plans."
      },
      {
        title: "Protections for Consumers",
        content: "Prohibits insurance companies from denying coverage due to pre-existing conditions and requires plans to cover a list of essential health benefits."
      }
    ],
    purpose: "To increase the number of Americans with health insurance and to reform the health insurance market to be more affordable and accessible."
  },
  '47': {
    summary: "The Racketeer Influenced and Corrupt Organizations (RICO) Act is a federal law passed in 1970 that provides for extended criminal penalties and a civil cause of action for acts performed as part of an ongoing criminal organization.",
    keyProvisions: [
      {
        title: "Pattern of Racketeering Activity",
        content: "To be a RICO violation, a person must engage in a 'pattern of racketeering activity,' which requires at least two acts of racketeering within 10 years. 'Racketeering' includes a long list of state and federal crimes, such as bribery, extortion, and mail fraud."
      },
      {
        title: "Criminal and Civil Penalties",
        content: "RICO provides for severe criminal penalties, including long prison sentences and forfeiture of assets. It also allows private citizens to sue for treble damages (three times the amount of actual damages)."
      },
      {
        title: "Enterprise",
        content: "The law targets criminal 'enterprises,' which can be any group of individuals associated in fact, including legal entities like corporations or illegal groups like a crime family."
      }
    ],
    purpose: "To seek the eradication of organized crime in the United States by strengthening the legal tools in evidence gathering, and by providing for enhanced sanctions and new remedies to deal with the unlawful activities of those engaged in organized crime."
  },
  '48': {
    summary: "The Resource Conservation and Recovery Act (RCRA) gives the EPA the authority to control hazardous waste from the 'cradle-to-grave.' This includes the generation, transportation, treatment, storage, and disposal of hazardous waste.",
    keyProvisions: [
      {
        title: "Hazardous Waste Management (Subtitle C)",
        content: "Establishes a comprehensive program for managing hazardous waste, including a manifest system to track waste from its point of generation to its final disposal."
      },
      {
        title: "Solid Waste Management (Subtitle D)",
        content: "Encourages states to develop comprehensive plans to manage nonhazardous industrial solid waste and municipal solid waste."
      },
      {
        title: "Underground Storage Tanks (USTs)",
        content: "Regulates underground storage tanks containing hazardous substances and petroleum to prevent releases into the environment."
      }
    ],
    purpose: "To protect human health and the environment from the potential hazards of waste disposal, to conserve energy and natural resources, to reduce the amount of waste generated, and to ensure that wastes are managed in an environmentally sound manner."
  },
  '49': {
    summary: "The Sarbanes-Oxley Act of 2002 (SOX) is a federal law that established sweeping auditing and financial regulations for public companies. Lawmakers created the legislation in response to major corporate and accounting scandals in the early 2000s.",
    keyProvisions: [
      {
        title: "Public Company Accounting Oversight Board (PCAOB)",
        content: "SOX created the PCAOB to oversee the audits of public companies in order to protect the interests of investors."
      },
      {
        title: "Enhanced Financial Disclosures",
        content: "Requires corporate officers (typically the CEO and CFO) to personally certify the accuracy of their company's financial statements."
      },
      {
        title: "Corporate Responsibility",
        content: "Increases the responsibility of corporate boards of directors and establishes stricter rules for auditors."
      }
    ],
    purpose: "To protect investors by improving the accuracy and reliability of corporate disclosures made pursuant to the securities laws, and for other purposes."
  },
  '50': {
    summary: "The Securities Act of 1933, often referred to as the 'truth in securities' law, has two basic objectives: require that investors receive financial and other significant information concerning securities being offered for public sale; and prohibit deceit, misrepresentations, and other fraud in the sale of securities.",
    keyProvisions: [
      {
        title: "Registration Statement",
        content: "Requires companies offering securities for sale to the public to file a registration statement with the Securities and Exchange Commission (SEC)."
      },
      {
        title: "Prospectus",
        content: "The registration statement includes a prospectus, which must be provided to prospective investors. The prospectus contains detailed information about the company's business, finances, and the securities being offered."
      },
      {
        title: "Anti-Fraud Provisions",
        content: "Makes it illegal to make any untrue statement of a material fact or to omit a material fact in connection with the offer or sale of securities."
      }
    ],
    purpose: "To ensure that investors have access to essential information about securities being offered for sale and to prohibit fraud in the sale of securities."
  },
  '51': {
    summary: "The Securities Exchange Act of 1934 was created to govern securities transactions on the secondary market, after issue, ensuring greater financial transparency and accuracy and less fraud or manipulation.",
    keyProvisions: [
      {
        title: "Securities and Exchange Commission (SEC)",
        content: "The Act created the SEC, giving it broad authority over all aspects of the securities industry."
      },
      {
        title: "Continuous Reporting",
        content: "Requires public companies to file regular reports with the SEC, such as annual reports (Form 10-K) and quarterly reports (Form 10-Q)."
      },
      {
        title: "Insider Trading",
        content: "Prohibits fraudulent activities of any kind in connection with the offer, purchase, or sale of securities, including insider trading."
      }
    ],
    purpose: "To regulate the secondary trading of securities, ensuring fairness and transparency for investors."
  },
  '52': {
    summary: "The Social Security Act of 1935 is a federal law that created the Social Security program in the United States. The law was enacted during the Great Depression as a way to provide a safety net for elderly, unemployed, and disadvantaged Americans.",
    keyProvisions: [
      {
        title: "Retirement Benefits",
        content: "Provides a source of income when you retire. The amount of your benefit is based on your lifetime earnings."
      },
      {
        title: "Disability Benefits",
        content: "Provides income to individuals who cannot work due to a medical condition that's expected to last at least one year or result in death."
      },
      {
        title: "Survivors Benefits",
        content: "Provides benefits to the families of deceased workers, including spouses, children, and dependent parents."
      }
    ],
    purpose: "To provide for the general welfare by establishing a system of Federal old-age benefits, and by enabling the several States to make more adequate provision for aged persons, blind persons, dependent and crippled children, maternal and child welfare, public health, and the administration of their unemployment compensation laws."
  },
  '53': {
    summary: "The Telecommunications Act of 1996 was the first major overhaul of telecommunications law in over 60 years. The goal of the law was to let anyone enter any communications business and to let any communications business compete in any market against any other.",
    keyProvisions: [
      {
        title: "Deregulation of Media",
        content: "Loosened many of the restrictions on media ownership, allowing for greater consolidation in the radio and television industries."
      },
      {
        title: "Internet Provisions",
        content: "Included sections aimed at regulating obscenity and indecency on the internet, most of which were later struck down by the Supreme Court on First Amendment grounds (e.g., the Communications Decency Act)."
      },
      {
        title: "Competition",
        content: "Intended to promote competition by allowing local telephone companies, long-distance carriers, and cable companies to compete in each other's markets."
      }
    ],
    purpose: "To promote competition and reduce regulation in order to secure lower prices and higher quality services for American telecommunications consumers and encourage the rapid deployment of new telecommunications technologies."
  },
  '54': {
    summary: "The Uniform Commercial Code (UCC) is a comprehensive set of laws governing commercial transactions in the United States. It is not a federal law, but a uniformly adopted state law. However, because it has been adopted in some form by all 50 states, it provides a consistent legal framework for commerce across the country.",
    keyProvisions: [
      {
        title: "Article 2: Sales",
        content: "Governs contracts for the sale of goods."
      },
      {
        title: "Article 3: Negotiable Instruments",
        content: "Covers checks, promissory notes, and other negotiable instruments."
      },
      {
        title: "Article 9: Secured Transactions",
        content: "Governs transactions that combine a debt with a creditor's interest in a debtor's personal property."
      }
    ],
    purpose: "To harmonize the law of sales and other commercial transactions in all 50 states, making it easier to conduct business across state lines."
  }
};
