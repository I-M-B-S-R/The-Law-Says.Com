
interface LawContent {
  summary: string;
  keyProvisions: { title: string; content: string }[];
  purpose: string;
}

export const ARIZONA_REVISED_STATUTES_CONTENT: Record<string, LawContent> = {
  '1': {
    summary: "Title 1 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/1/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 1</a>, establishes the foundational legal framework for the state. It covers general provisions concerning the interpretation and effect of all statutes, defines common legal terms, and outlines the principles of statutory construction. This title ensures consistency and clarity in the application of Arizona law.",
    keyProvisions: [
      {
        title: "Statutory Construction",
        content: "Provides rules for interpreting laws, such as the meaning of 'shall' vs. 'may', how to handle conflicting statutes, and the principle that laws should be interpreted to achieve their legislative intent. It ensures that all state laws are read and applied in a uniform manner."
      },
      {
        title: "Definitions",
        content: "Defines common terms used throughout the Arizona Revised Statutes, such as 'person,' 'state,' 'property,' and 'oath.' This prevents ambiguity and ensures that legal terms have a consistent meaning across all titles."
      },
      {
        title: "Effect of Statutes",
        content: "Outlines when laws become effective, the effect of repealing a statute, and how laws apply retroactively. This section provides the procedural backbone for how legislation operates once it is passed."
      },
    ],
    purpose: "The purpose of Title 1 is to provide a stable and consistent foundation for the entire body of Arizona law. It acts as a universal guide for legislators, judges, lawyers, and the public on how to read, understand, and apply state statutes, ensuring the legal system operates predictably and fairly."
  },
  '2': {
    summary: "Title 2, found at <a href='https://www.azleg.gov/ars/2/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 2</a>, was repealed. The content was moved to Title 28, Transportation, to consolidate all transportation-related laws. This change was made to streamline the state's legal code and make it easier to find all relevant transportation regulations in one place.",
    keyProvisions: [],
    purpose: "The purpose of repealing Title 2 was to improve the organization and accessibility of the Arizona Revised Statutes by consolidating aeronautics law with other transportation laws under Title 28."
  },
  '3': {
    summary: "Title 3 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/3/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 3</a>, governs all aspects of agriculture in the state. It establishes the Arizona Department of Agriculture and covers regulations for crops, livestock, pests, pesticides, and the marketing of agricultural products. This title is crucial for supporting one of Arizona's key industries.",
    keyProvisions: [
      {
        title: "Arizona Department of Agriculture",
        content: "Establishes the Department and outlines its powers and duties, which include regulating and supporting the state's agricultural industry."
      },
      {
        title: "Pest Control",
        content: "Provides regulations for the control and eradication of dangerous plant pests and diseases to protect Arizona's crops and native plants."
      },
      {
        title: "Livestock and Apiaries",
        content: "Sets standards for the health, branding, and transportation of livestock, as well as regulations for beekeeping (apiaries) to protect the vital role of pollinators."
      },
      {
        title: "Marketing of Agricultural Products",
        content: "Includes laws on grading, labeling, and marketing of agricultural products like citrus, dates, and pecans to ensure quality and fair trade."
      }
    ],
    purpose: "The purpose of Title 3 is to promote and protect the agricultural interests of Arizona. It aims to ensure food safety, protect against pests and diseases, conserve agricultural resources, and provide for the orderly marketing of farm and ranch products."
  },
  '4': {
    summary: "Title 4, the law governing alcoholic beverages in Arizona, is found at <a href='https://www.azleg.gov/ars/4/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 4</a>. This title establishes the Department of Liquor Licenses and Control and provides a comprehensive framework for the manufacture, distribution, and sale of alcoholic beverages. It includes licensing requirements, hours of sale, and penalties for violations.",
    keyProvisions: [
      {
        title: "Department of Liquor Licenses and Control",
        content: "Establishes the state agency responsible for issuing liquor licenses and enforcing alcohol laws."
      },
      {
        title: "Licensing",
        content: "Details the various types of liquor licenses available for different businesses (e.g., bars, restaurants, retail stores) and the requirements to obtain and maintain them."
      },
      {
        title: "Regulation of Sale and Consumption",
        content: "Sets legal hours for the sale of alcohol, prohibits sales to intoxicated persons, and establishes the legal drinking age of 21. It also includes penalties for providing alcohol to minors."
      },
      {
        title: "Dram Shop Liability",
        content: "Contains Arizona's 'dram shop' laws, which can hold a licensee liable for damages caused by an intoxicated person if the licensee sold alcohol to that person while they were obviously intoxicated."
      }
    ],
    purpose: "The purpose of Title 4 is to regulate the sale and consumption of alcoholic beverages to protect public health, safety, and welfare. It balances the interests of businesses in the liquor industry with the need to prevent underage drinking and other alcohol-related harm."
  },
  '5': {
    summary: "Title 5 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/5/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 5</a>, covers amusements and sports. This diverse title regulates horse and dog racing, boxing and mixed martial arts, and the state lottery. It establishes the commissions and departments that oversee these activities to ensure they are conducted fairly and safely.",
    keyProvisions: [
      {
        title: "Horse and Dog Racing",
        content: "Establishes the Arizona Racing Commission and sets rules for pari-mutuel wagering on horse and dog races, including licensing for tracks and participants."
      },
      {
        title: "Boxing and Mixed Martial Arts",
        content: "Creates the Arizona State Boxing and Mixed Martial Arts Commission to regulate professional and amateur combat sports, setting safety standards and licensing requirements."
      },
      {
        title: "State Lottery",
        content: "Establishes the Arizona State Lottery Commission and governs the operation of the state lottery, including the distribution of lottery revenues, which primarily fund public programs."
      },
      {
        title: "Event Wagering and Fantasy Sports",
        content: "This newer chapter legalizes and regulates online and retail sports betting and paid fantasy sports contests within the state, under the oversight of the Arizona Department of Gaming."
      }
    ],
    purpose: "The purpose of Title 5 is to provide state oversight for various forms of gaming and entertainment to ensure integrity, public safety, and the proper collection of state revenues. It aims to prevent fraud and corruption in these industries while allowing for regulated public amusement."
  },
  '6': {
    summary: "Title 6, which covers banks and financial institutions, is located at <a href='https://www.azleg.gov/ars/6/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 6</a>. This title provides the legal framework for the regulation of Arizona's financial sector, including state-chartered banks, credit unions, and various types of lenders and financial service providers. It establishes the Department of Insurance and Financial Institutions (DIFI) to oversee these entities.",
    keyProvisions: [
      {
        title: "Banking Regulations",
        content: "Governs the organization, operation, and supervision of state-chartered banks. It sets requirements for capital, lending limits, and examinations to ensure the safety and soundness of the banking system."
      },
      {
        title: "Credit Unions",
        content: "Provides for the chartering and regulation of credit unions in Arizona, outlining rules for membership, lending, and investments to protect members' deposits."
      },
      {
        title: "Consumer and Mortgage Lending",
        content: "Regulates various non-bank lenders, including consumer lenders, mortgage brokers and bankers, and payday loan companies. It requires licensing and sets rules to protect consumers from predatory practices."
      },
      {
        title: "Money Transmission",
        content: "This chapter governs businesses that transmit money, including traditional money orders and modern digital currency platforms, to protect consumer funds and prevent illicit financial activity."
      }
    ],
    purpose: "The purpose of Title 6 is to ensure the safety, stability, and integrity of Arizona's financial system. It aims to protect consumers' deposits and investments, provide for fair and transparent financial services, and prevent financial crimes by regulating the institutions that handle public money."
  },
  '7': {
    summary: "Title 7 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/7/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 7</a>, is currently blank. There are no statutes contained within this title. Titles are sometimes reserved for future legislative use or remain vacant after a block of laws has been repealed or moved to another title.",
    keyProvisions: [],
    purpose: "Not applicable as the title is blank."
  },
  '8': {
    summary: "Title 8 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/8/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 8</a>, is dedicated to children. This critical title covers a wide range of legal issues involving minors, including the juvenile justice system, child protective services (dependency), adoption, and termination of parental rights. It establishes the legal framework for protecting the welfare and safety of children in Arizona.",
    keyProvisions: [
      {
        title: "Juvenile Court",
        content: "Outlines the jurisdiction and procedures of the juvenile court, which handles cases involving juvenile delinquency (crimes committed by minors) and dependency (abuse and neglect)."
      },
      {
        title: "Child Protective Services (DCS)",
        content: "Governs the actions of the Department of Child Safety (DCS), including the investigation of child abuse and neglect reports, removal of children from unsafe homes, and the provision of services to families."
      },
      {
        title: "Adoption",
        content: "Sets forth the legal process for adoption, including who may adopt, the requirements for parental consent, and the process for finalizing an adoption to create a legal parent-child relationship."
      },
      {
        title: "Termination of Parental Rights",
        content: "Specifies the grounds and procedures for permanently severing the legal rights between a parent and child, a necessary step before a child can be adopted without parental consent. This action is taken only when a parent is deemed unfit."
      }
    ],
    purpose: "The overarching purpose of Title 8 is to protect the well-being, safety, and best interests of children. It aims to provide for the care of children who are abused or neglected, rehabilitate juvenile offenders, and facilitate the creation of permanent, stable homes for children through adoption."
  },
  '9': {
    summary: "Title 9 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/9/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 9</a>, governs cities and towns. This title provides the legal authority for the formation, operation, and powers of incorporated municipalities in Arizona. It covers essential local government functions like zoning, taxation, public services, and elections.",
    keyProvisions: [
      {
        title: "Incorporation and Government",
        content: "Outlines the process for a community to incorporate as a city or town and establishes the framework for municipal government, including the powers of mayors and councils."
      },
      {
        title: "Zoning and Planning",
        content: "Grants municipalities the authority to enact zoning ordinances to regulate land use. This is a key power that allows cities to shape their physical development, separating residential, commercial, and industrial areas."
      },
      {
        title: "Public Utilities and Services",
        content: "Authorizes cities and towns to own and operate public utilities, such as water, sewer, and sanitation services, and to provide other essential public services like police and fire protection."
      },
      {
        title: "Municipal Taxation and Finance",
        content: "Provides the authority for municipalities to levy taxes, such as property taxes and transaction privilege (sales) taxes, and to issue bonds to finance public projects."
      }
    ],
    purpose: "The purpose of Title 9 is to empower local communities to govern themselves. It provides the legal tools for cities and towns to provide essential services, manage growth, and respond to the needs of their residents, forming the basis of local home rule in Arizona."
  },
  '10': {
    summary: "Title 10 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/10/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 10</a>, governs corporations and associations. This title is the primary source of corporate law in Arizona, detailing the rules for the formation, operation, and dissolution of various business entities, including for-profit corporations, nonprofit corporations, and professional corporations.",
    keyProvisions: [
      {
        title: "Business Corporations",
        content: "This chapter, based on the Model Business Corporation Act, provides a comprehensive framework for for-profit corporations. It covers incorporation, issuance of stock, the duties and responsibilities of directors and officers, shareholder rights, and procedures for mergers and acquisitions."
      },
      {
        title: "Nonprofit Corporations",
        content: "Sets forth the rules for forming and operating nonprofit corporations, which are organized for charitable, religious, educational, or scientific purposes. It includes provisions on governance by a board of directors and rules against personal financial gain for those in control."
      },
      {
        title: "Professional Corporations",
        content: "Allows licensed professionals, such as doctors, lawyers, and accountants, to form corporations to conduct their practice. This structure can provide certain liability protections and tax benefits."
      },
      {
        title: "Corporate Takeovers",
        content: "Includes provisions designed to regulate hostile takeovers of corporations, providing boards of directors with tools to respond to unsolicited acquisition offers."
      }
    ],
    purpose: "The purpose of Title 10 is to provide a clear and modern legal framework for the creation and governance of corporate entities in Arizona. It seeks to facilitate commerce, protect shareholders and members, and define the roles and responsibilities of corporate leadership, thereby encouraging business investment and activity in the state."
  },
  '11': {
    summary: "Title 11 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/11/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 11</a>, is dedicated to counties. This title outlines the formation, powers, and duties of Arizona's 15 counties. As political subdivisions of the state, counties are responsible for administering state law and providing a wide range of essential local services, particularly in unincorporated areas.",
    keyProvisions: [
      {
        title: "County Officers",
        content: "Establishes the primary elected county offices, including the Board of Supervisors, Sheriff, County Attorney, Treasurer, Assessor, Recorder, and Superintendent of Schools, and defines their respective powers and duties."
      },
      {
        title: "Board of Supervisors",
        content: "Defines the role of the Board of Supervisors as the governing body of the county, with legislative and executive authority over county operations, budget, taxes, and public property."
      },
      {
        title: "Planning and Zoning",
        content: "Grants counties the authority to create and enforce planning and zoning regulations for unincorporated areas (land outside of city or town limits) to manage development and land use."
      },
      {
        title: "County Services",
        content: "Authorizes counties to provide essential services to residents, including law enforcement (Sheriff's Office), public health services, road maintenance, and the administration of elections and property tax collection."
      }
    ],
    purpose: "The purpose of Title 11 is to establish the legal framework for county government in Arizona. It empowers counties to act as administrative arms of the state government and to provide essential local services to their residents, ensuring a baseline of governance and public safety throughout all areas of the state."
  },
  '12': {
    summary: "Title 12 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/12/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 12</a>, covers courts and civil proceedings. This extensive title establishes the structure of Arizona's court system and provides the procedural rules for all civil (non-criminal) lawsuits. It governs everything from how a lawsuit is filed to how judgments are enforced.",
    keyProvisions: [
      {
        title: "Courts of Record",
        content: "Establishes the structure of Arizona's judiciary, including the Supreme Court, the Court of Appeals, and the Superior Court, and defines their respective jurisdictions."
      },
      {
        title: "Statutes of Limitation",
        content: "Prescribes the time limits within which a civil lawsuit must be filed. For example, a lawsuit for personal injury must generally be filed within two years of the injury. Failure to file within the specified time bars the claim."
      },
      {
        title: "Evidence and Witnesses",
        content: "Provides rules on what evidence is admissible in court, witness competency, and privileges (such as attorney-client privilege) that protect certain communications from disclosure."
      },
      {
        title: "Judgments and Enforcement",
        content: "Outlines the procedures for obtaining and enforcing court judgments, including methods like wage garnishment and property liens to collect money owed under a judgment."
      }
    ],
    purpose: "The purpose of Title 12 is to provide a comprehensive and orderly framework for the resolution of civil disputes. It ensures that all parties have a fair opportunity to present their case, that legal proceedings are conducted according to established rules, and that the final decisions of the courts are enforceable, thereby upholding the rule of law."
  },
  '13': {
    summary: "Title 13 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/13/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 13</a>, is the Arizona Criminal Code. This is one of the most significant titles in the entire code, as it defines what constitutes criminal behavior in Arizona and sets the corresponding punishments. It covers everything from minor misdemeanors to serious felonies.",
    keyProvisions: [
      {
        title: "General Principles of Criminal Liability",
        content: "This initial chapter establishes foundational concepts, such as the required mental states for crimes (e.g., intentionally, knowingly, recklessly), principles of culpability, and general defenses like justification (self-defense) and insanity."
      },
      {
        title: "Classification of Offenses",
        content: "Classifies crimes into six classes of felonies and three classes of misdemeanors, which determines the potential range of sentences. It also defines petty offenses."
      },
      {
        title: "Specific Offenses",
        content: "The bulk of the title is dedicated to defining specific crimes, organized by category, such as Homicide (murder, manslaughter), Assault, Theft, Burglary, Drug Offenses, and many others."
      },
      {
        title: "Sentencing",
        content: "Provides the detailed framework for sentencing convicted offenders. This includes presumptive, minimum, and maximum sentences for each class of felony, the conditions for probation, and the criteria for aggravating and mitigating circumstances that can affect the sentence."
      }
    ],
    purpose: "The purpose of the Arizona Criminal Code is to prohibit and prevent conduct that is unjustifiably and inexcusably harmful to individual and public interests. It aims to define the scope of criminal liability, differentiate between serious and minor offenses, and prescribe proportionate punishments, thereby protecting public safety and maintaining social order."
  },
  '14': {
    summary: "Title 14 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/14/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 14</a>, governs trusts, estates, and protective proceedings. This title, largely based on the Uniform Probate Code, outlines the laws for managing and transferring a person's property after death (probate) and for protecting the assets of minors and incapacitated adults.",
    keyProvisions: [
      {
        title: "Intestate Succession",
        content: "Specifies how a person's property is distributed if they die without a valid will (intestate). The law provides a hierarchy of relatives (spouse, children, parents, etc.) who will inherit the property."
      },
      {
        title: "Wills and Probate",
        content: "Sets forth the requirements for a valid will (e.g., in writing, signed, and witnessed). It also details the court-supervised process of probate, through which a will is validated, debts are paid, and the remaining assets are distributed to the beneficiaries."
      },
      {
        title: "Trusts",
        content: "Contains the Arizona Trust Code, which governs the creation, administration, and termination of trusts. A trust is a legal arrangement where a trustee holds and manages assets for the benefit of beneficiaries."
      },
      {
        title: "Guardianship and Conservatorship",
        content: "Provides for protective proceedings for minors and incapacitated adults. The court can appoint a 'guardian' to make personal and healthcare decisions and a 'conservator' to manage the financial affairs of someone who cannot manage their own affairs."
      }
    ],
    purpose: "The purpose of Title 14 is to provide an orderly and efficient system for managing and transferring property. It aims to ensure that a deceased person's wishes are carried out, that their creditors are paid, and that their assets are distributed correctly. It also serves to protect the most vulnerable members of society by providing a legal framework for managing their personal and financial affairs."
  },
  '15': {
    summary: "Title 15 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/15/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 15</a>, is dedicated to education. This comprehensive title governs Arizona's public education system from kindergarten through university. It establishes the State Board of Education and the Department of Education, sets standards for school curricula, and details the funding and operation of school districts and charter schools.",
    keyProvisions: [
      {
        title: "State and Local Governance",
        content: "Establishes the State Board of Education, the Superintendent of Public Instruction, and local school district governing boards, and defines their respective roles in overseeing public education."
      },
      {
        title: "School Finance",
        content: "Provides the complex formula for funding public schools, based on factors like student attendance, teacher experience, and special student populations. It also governs school district budgets and bonds."
      },
      {
        title: "Curriculum and Instruction",
        content: "Sets statewide academic standards and graduation requirements. It also includes provisions for special education, English language learners, and gifted programs."
      },
      {
        title: "Teachers and Certification",
        content: "Outlines the requirements for teacher certification in Arizona, as well as laws regarding teacher contracts, evaluation, and dismissal."
      }
    ],
    purpose: "The purpose of Title 15 is to establish and maintain a general and uniform public school system in Arizona, as mandated by the state constitution. It aims to provide all children with a quality education, ensure accountability in the use of public funds, and set standards for academic achievement and teacher quality."
  },
  '16': {
    summary: "Title 16 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/16/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 16</a>, governs elections and electors. This title provides the complete legal framework for conducting all public elections in Arizona, from voter registration to casting and counting ballots. It is the cornerstone of Arizona's democratic process.",
    keyProvisions: [
      {
        title: "Voter Registration",
        content: "Sets the qualifications for voting in Arizona and establishes the procedures for voter registration, including requirements for proving citizenship. It also details how county recorders maintain the statewide voter registration database."
      },
      {
        title: "Election Officers and Conduct",
        content: "Outlines the administration of elections by county recorders and other election officials. It specifies the procedures for setting up polling places, the duties of poll workers, and the rules for conducting early voting and election day voting."
      },
      {
        title: "Ballots and Voting Systems",
        content: "Details the requirements for ballot design and the use of electronic voting equipment. It also contains the extensive rules governing early voting by mail, which is used by a large majority of Arizona voters."
      },
      {
        title: "Canvass and Post-Election Procedures",
        content: "Specifies the process for tabulating votes, conducting post-election audits (including hand counts), and certifying the official election results (the canvass). It also outlines the procedures for recounts and election challenges."
      }
    ],
    purpose: "The purpose of Title 16 is to ensure the fair, impartial, and secure administration of elections in Arizona. It aims to protect the integrity of the voting process and the right of every qualified citizen to vote, thereby guaranteeing the legitimacy of election outcomes."
  },
  '17': {
    summary: "Title 17 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/17/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 17</a>, pertains to game and fish. This title establishes the Arizona Game and Fish Commission and the Arizona Game and Fish Department, which are responsible for managing the state's wildlife resources. It covers hunting and fishing licenses, seasons, bag limits, and conservation efforts.",
    keyProvisions: [
      {
        title: "Game and Fish Commission and Department",
        content: "Establishes the five-member Game and Fish Commission, which sets policy, and the Department, which implements that policy and manages the state's wildlife and fisheries."
      },
      {
        title: "Licenses and Permits",
        content: "Details the requirements for obtaining hunting, fishing, and combination licenses for both residents and non-residents. It also covers special permits and tags for big game species like elk, deer, and bighorn sheep, which are allocated through a draw system."
      },
      {
        title: "Taking and Handling of Wildlife",
        content: "Sets the specific rules for how, when, and where wildlife can be legally taken. This includes defining legal weapons, hunting seasons, bag limits, and prohibiting practices like poaching and waste of game meat."
      },
      {
        title: "Conservation and Habitat",
        content: "Authorizes the Game and Fish Department to acquire and manage land for wildlife conservation, to enter into agreements for habitat improvement, and to manage funds generated from license sales (which are dedicated to wildlife conservation)."
      }
    ],
    purpose: "The purpose of Title 17 is to conserve, enhance, and restore Arizona's diverse wildlife resources and habitats for the enjoyment, benefit, and use by present and future generations. It uses hunting and fishing as a primary tool for wildlife management and conservation funding."
  },
  '18': {
    summary: "Title 18 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/18/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 18</a>, governs highways and bridges. This title establishes the framework for the state's transportation infrastructure, including the planning, construction, and maintenance of state highways. Note that the majority of transportation-related law is found in Title 28.",
    keyProvisions: [
      {
        title: "State Highway Fund",
        content: "Establishes the state highway fund as the primary repository for revenues used to construct and maintain the state highway system, including gas taxes and vehicle license taxes."
      },
      {
        title: "Beautification of Highways",
        content: "Includes provisions for controlling outdoor advertising (billboards) and junkyards along state highways, consistent with federal law, to preserve the natural beauty of the landscape."
      },
      {
        title: "Toll Roads and Bridges",
        content: "Provides the authority for the state or private entities to construct and operate toll roads, bridges, and ferries, although this authority is rarely used in Arizona."
      },
      {
        title: "Cooperative National Highway Aid Agreements",
        content: "Authorizes the Arizona Department of Transportation (ADOT) to enter into agreements with the federal government to secure federal funding for highway projects."
      }
    ],
    purpose: "The purpose of Title 18 is to provide the legal and financial foundation for the development and maintenance of Arizona's state highway system. It ensures that there is a dedicated funding source and a legal framework for building the roads that are essential to the state's economy and mobility."
  },
  '19': {
    summary: "Title 19 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/19/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 19</a>, is dedicated to initiative, referendum, and recall. Arizona's constitution grants citizens significant powers of direct democracy, and this title provides the detailed procedural rules for exercising those rights. It governs how citizens can propose their own laws, reject laws passed by the legislature, and remove elected officials from office.",
    keyProvisions: [
      {
        title: "Initiative",
        content: "Outlines the process for citizens to propose new state statutes or constitutional amendments. This includes drafting the measure, getting an official serial number, collecting a required number of signatures from qualified voters, and submitting them for verification. If enough valid signatures are gathered, the measure is placed on the ballot for a public vote."
      },
      {
        title: "Referendum",
        content: "Details the process for citizens to challenge a law passed by the legislature. By collecting a smaller number of signatures within 90 days of the legislative session's end, citizens can force the law to be placed on the ballot. The law does not go into effect unless it is approved by the voters."
      },
      {
        title: "Recall",
        content: "Specifies the procedure for removing a public officer from office before their term expires. It requires collecting a significant number of signatures (25% of the votes cast in the official's last election) to trigger a special recall election. In the recall election, voters decide whether to retain the official or replace them with another candidate."
      },
      {
        title: "Circulation and Signature Requirements",
        content: "Provides strict rules for circulating petitions, the format of signature sheets, and the process by which election officials verify the signatures. These procedural details are often the subject of legal challenges."
      }
    ],
    purpose: "The purpose of Title 19 is to implement the constitutional rights of Arizona citizens to participate directly in the democratic process. It provides a 'people's check' on the legislative branch (through initiative and referendum) and holds elected officials directly accountable to the voters (through recall)."
  },
  '20': {
    summary: "Title 20 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/20/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 20</a>, regulates the business of insurance in Arizona. This comprehensive title establishes the Department of Insurance and Financial Institutions (DIFI) and gives it broad authority to oversee all aspects of the insurance industry, from the financial solvency of insurance companies to the conduct of agents and the content of policies.",
    keyProvisions: [
      {
        title: "The Insurance Code",
        content: "The bulk of the title consists of the Insurance Code, which sets the rules for all lines of insurance, including life, health, property, and casualty. It requires insurers to be licensed and to maintain adequate financial reserves to pay claims."
      },
      {
        title: "Unfair Trade Practices",
        content: "Prohibits unfair and deceptive acts in the business of insurance, such as misrepresenting policy benefits, false advertising, and unfair claims settlement practices. This section provides key consumer protections."
      },
      {
        title: "Regulation of Agents and Brokers",
        content: "Requires insurance producers (agents and brokers) to be licensed, educated, and to adhere to ethical standards when selling insurance products."
      },
      {
        title: "Rate Regulation",
        content: "Governs how insurance companies can set their rates, particularly for property and casualty insurance. Insurers must file their rates with the Department, and the rates cannot be excessive, inadequate, or unfairly discriminatory."
      }
    ],
    purpose: "The purpose of Title 20 is to protect the public and policyholders by ensuring the solvency of insurance companies and promoting fair and equitable practices in the insurance market. It aims to make sure that when consumers buy an insurance policy, the company will be there to pay the claim and will treat the policyholder fairly."
  },
  '21': {
    summary: "Title 21 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/21/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 21</a>, governs juries. This title outlines the qualifications for jury service, the process for selecting jurors, and the administration of the jury system in Arizona's state courts. It is fundamental to the constitutional right to a trial by an impartial jury.",
    keyProvisions: [
      {
        title: "Juror Qualifications",
        content: "Specifies the eligibility requirements for serving on a jury. A juror must be a U.S. citizen, a resident of the jurisdiction, at least 18 years old, and able to understand English. Individuals with felony convictions who have not had their civil rights restored are disqualified."
      },
      {
        title: "Jury Selection Process",
        content: "Details how potential jurors are randomly selected from source lists, which are a combination of county voter registration and driver's license records. It also outlines the process for summoning jurors and the voir dire process, where judges and attorneys question potential jurors to select an impartial panel."
      },
      {
        title: "Grand Juries",
        content: "Provides for the formation and operation of grand juries. A grand jury is a group of citizens that investigates potential criminal conduct and determines whether there is probable cause to issue an indictment and formally charge someone with a felony."
      },
      {
        title: "Juror Compensation and Rights",
        content: "Sets the nominal fee that jurors are paid for their service. It also makes it illegal for an employer to fire an employee for serving on a jury."
      }
    ],
    purpose: "The purpose of Title 21 is to implement the constitutional right to a trial by jury. It aims to ensure that juries are selected from a fair cross-section of the community and that the jury system operates fairly and efficiently, forming the bedrock of the state's justice system."
  },
  '22': {
    summary: "Title 22 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/22/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 22</a>, concerns justice of the peace and other courts not of record. This title establishes Arizona's justice courts and municipal (or city) courts, which are limited jurisdiction courts that handle a high volume of cases, including traffic violations, minor criminal offenses (misdemeanors), and small civil disputes.",
    keyProvisions: [
      {
        title: "Justice Courts",
        content: "Establishes justice court precincts in each county and provides for the election of Justices of the Peace (JPs). It sets the civil jurisdiction of justice courts, which is generally limited to cases where the amount in dispute is $10,000 or less."
      },
      {
        title: "Municipal Courts",
        content: "Authorizes incorporated cities and towns to establish their own municipal courts to adjudicate violations of city ordinances, such as traffic and zoning violations."
      },
      {
        title: "Small Claims Division",
        content: "Creates a small claims division within the justice courts. This division is designed to resolve minor civil disputes (currently up to $3,500) quickly and inexpensively, with relaxed rules of procedure and without attorneys."
      },
      {
        title: "Criminal Jurisdiction",
        content: "Grants justice and municipal courts jurisdiction over criminal misdemeanors and petty offenses committed within their geographic boundaries. They can issue search warrants, set bail, and conduct misdemeanor trials."
      }
    ],
    purpose: "The purpose of Title 22 is to create an accessible, efficient court system for resolving minor legal matters. These 'people's courts' handle the vast majority of cases that citizens encounter, providing a local forum for everything from traffic tickets to small business disputes."
  },
  '23': {
    summary: "Title 23 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/23/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 23</a>, is dedicated to labor. This title covers a broad range of laws governing the relationship between employers and employees in Arizona. It includes provisions on workers' compensation, occupational safety, minimum wage, and employment discrimination.",
    keyProvisions: [
      {
        title: "Workers' Compensation",
        content: "Establishes Arizona's no-fault workers' compensation system, which requires employers to carry insurance to provide medical and wage replacement benefits to employees injured on the job. In return for these guaranteed benefits, employees generally cannot sue their employer for the injury."
      },
      {
        title: "Occupational Safety and Health (ADOSH)",
        content: "Creates the Arizona Division of Occupational Safety and Health (ADOSH), which is the state equivalent of the federal OSHA. ADOSH sets and enforces workplace safety and health standards."
      },
      {
        title: "Wages and Hours",
        content: "Contains Arizona's minimum wage and paid sick time laws, which were established by a voter-approved initiative. It also includes rules about payment of wages and child labor."
      },
      {
        title: "Employment Protection",
        content: "Includes the Arizona Civil Rights Act, which prohibits employment discrimination on the basis of race, color, religion, sex, age, disability, or national origin. It also contains Arizona's 'right-to-work' laws, which state that no person can be required to join a union as a condition of employment."
      }
    ],
    purpose: "The purpose of Title 23 is to protect the rights, health, and safety of workers in Arizona. It aims to ensure safe working conditions, guarantee fair wages, provide compensation for workplace injuries, and prevent unlawful discrimination, thereby promoting a fair and stable labor market."
  },
  '24': {
    summary: "Title 24 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/24/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 24</a>, regulates livestock and animals. This title is distinct from Title 17 (Game and Fish) as it focuses on domestic animals, particularly livestock, rather than wildlife. It covers issues like animal health, branding, and animal cruelty.",
    keyProvisions: [
      {
        title: "Ownership and Branding",
        content: "Establishes a statewide system for recording livestock brands to prove ownership. It sets rules for the branding and inspection of cattle, horses, and other livestock to prevent theft."
      },
      {
        title: "Animal Diseases",
        content: "Provides the Arizona Department of Agriculture with the authority to control and eradicate contagious and infectious diseases in animals, including quarantine powers to prevent the spread of disease."
      },
      {
        title: "Animal Cruelty",
        content: "Defines and prohibits animal cruelty, neglect, and abandonment. It makes it a crime to intentionally or knowingly subject an animal to cruel mistreatment or to fail to provide necessary medical attention or sustenance."
      },
      {
        title: "Dogs and Cats",
        content: "Includes laws regarding the licensing and control of dogs, including provisions for handling stray and vicious dogs. It establishes a 'leash law' in many contexts."
      }
    ],
    purpose: "The purpose of Title 24 is to protect the health and welfare of domestic animals, support the livestock industry by preventing theft and disease, and protect the public from dangerous or nuisance animals. It reflects both the economic importance of the livestock industry and society's interest in the humane treatment of all animals."
  },
  '25': {
    summary: "Title 25 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/25/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 25</a>, governs marital and domestic relations. This title contains the laws that define family relationships in Arizona, including marriage, divorce (dissolution), child custody, and child support. It is the primary source of family law in the state.",
    keyProvisions: [
      {
        title: "Marriage",
        content: "Defines who is eligible to marry, the requirements for obtaining a marriage license, and who can solemnize a marriage. It also contains the laws for covenant marriage, a more restrictive form of marriage that limits the grounds for divorce."
      },
      {
        title: "Dissolution of Marriage (Divorce)",
        content: "Outlines the procedures for ending a marriage. Arizona is a 'no-fault' divorce state, meaning a person does not have to prove wrongdoing to get a divorce. It also governs the division of community property, under which assets and debts acquired during the marriage are typically divided equally."
      },
      {
        title: "Legal Decision-Making and Parenting Time (Child Custody)",
        content: "Sets the standards and procedures for determining which parent will have the legal authority to make major decisions for a child (legal decision-making) and the schedule of when the child will be with each parent (parenting time). The guiding principle in all decisions is the 'best interests of the child.'"
      },
      {
        title: "Child Support",
        content: "Establishes the Arizona Child Support Guidelines, a formula used to calculate the amount of child support a parent must pay. The calculation is based on the parents' incomes, the amount of parenting time each has, and other costs like health insurance and childcare."
      }
    ],
    purpose: "The purpose of Title 25 is to provide a legal framework for creating, maintaining, and dissolving family relationships. It aims to protect the interests of spouses, parents, and children, and to provide for the orderly resolution of family disputes, with a primary focus on the best interests of any children involved."
  },
  '26': {
    summary: "Title 26 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/26/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 26</a>, covers military affairs and emergency management. This title establishes the state's military forces, such as the National Guard, and creates the framework for how the state prepares for and responds to all types of emergencies and disasters.",
    keyProvisions: [
      {
        title: "The National Guard",
        content: "Provides for the organization, enlistment, and administration of the Arizona National Guard (both Army and Air). The Governor is the commander-in-chief and can call the Guard to state active duty to respond to emergencies or to enforce the law."
      },
      {
        title: "Division of Emergency Management (DEMA)",
        content: "Establishes the Arizona Division of Emergency Management within the Department of Emergency and Military Affairs. DEMA is the lead state agency for coordinating responses to emergencies and disasters, from wildfires to floods to public health crises."
      },
      {
        title: "State of Emergency",
        content: "Authorizes the Governor to declare a state of emergency, which triggers special executive powers to direct resources, suspend regulations, and take other necessary actions to protect public health and safety during a crisis."
      },
      {
        title: "Veterans' Services",
        content: "While many veterans' provisions are in Title 41, this title includes some benefits, such as establishing the Arizona Veterans' Memorial Cemeteries."
      }
    ],
    purpose: "The dual purpose of Title 26 is to provide for the state's military preparedness through the National Guard and to establish a comprehensive system for emergency management. It aims to ensure that Arizona is prepared to respond effectively to any disaster, protect its citizens, and support its military veterans."
  },
  '27': {
    summary: "Title 27 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/27/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 27</a>, governs minerals, oil, and gas. This title is crucial to Arizona's economy, as it provides the legal framework for mining and energy exploration in the state. It covers mining claims, mine safety, and the conservation of oil and gas resources.",
    keyProvisions: [
      {
        title: "Mining Location and Registration",
        content: "Outlines the procedures for locating and maintaining mining claims on federal public lands within Arizona, a right derived from the federal Mining Law of 1872. It includes requirements for monumenting claims and filing annual assessment work."
      },
      {
        title: "Mine Safety",
        content: "Establishes the Office of the State Mine Inspector, an independently elected official responsible for inspecting all mines in Arizona to ensure they are operated in a manner that is safe for workers. The office has the power to shut down unsafe mining operations."
      },
      {
        title: "Oil and Gas Conservation",
        content: "Creates the Oil and Gas Conservation Commission to regulate the drilling and production of oil and gas. Its mission is to prevent the waste of these resources and protect correlative rights (the rights of different landowners to a share of the resources in a common pool)."
      },
      {
        title: "Mined Land Reclamation",
        content: "Requires mine operators to submit a reclamation plan and provide a financial bond before beginning operations. This ensures that land disturbed by mining will be reclaimed and restored to a useful condition after mining is complete."
      }
    ],
    purpose: "The purpose of Title 27 is to promote the responsible development of Arizona's mineral and energy resources. It seeks to balance the economic benefits of mining and drilling with the need to protect worker safety, prevent waste of resources, and ensure the reclamation of mined lands."
  },
  '28': {
    summary: "Title 28 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/28/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 28</a>, is the comprehensive Transportation code. This massive title governs almost every aspect of transportation in Arizona, including vehicle registration, driver's licenses, traffic laws, and the administration of the Arizona Department of Transportation (ADOT). It is one of the titles most frequently encountered by the public.",
    keyProvisions: [
      {
        title: "Driver Licenses",
        content: "Establishes the requirements and procedures for obtaining and renewing a driver's license, including testing, age restrictions, and the issuance of commercial driver's licenses (CDLs). It also includes the 'Travel ID' provisions for federally compliant identification."
      },
      {
        title: "Vehicle Registration and Titling",
        content: "Details the process for registering vehicles in Arizona and obtaining a certificate of title, which serves as proof of ownership. It also specifies the various fees and taxes, like the Vehicle License Tax (VLT), that fund transportation and other state programs."
      },
      {
        title: "Traffic and Vehicle Regulation (Rules of the Road)",
        content: "This is the 'rules of the road' section, defining everything from speed limits and traffic control signals to parking rules and required vehicle equipment. This chapter contains the specific traffic offenses for which a person can be ticketed."
      },
      {
        title: "Driving Under the Influence (DUI)",
        content: "Contains Arizona's strict DUI laws, defining the illegal blood alcohol concentration (BAC) levels and the severe penalties for violations, which include mandatory jail time, fines, and license suspension, even for a first offense."
      }
    ],
    purpose: "The purpose of Title 28 is to ensure the safe and efficient movement of people and goods throughout Arizona. It provides a comprehensive legal framework for licensing drivers, registering vehicles, and enforcing traffic laws to protect public safety on the state's roadways."
  },
  '29': {
    summary: "Title 29 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/29/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 29</a>, governs partnerships. This title provides the legal framework for several types of business partnerships, including general partnerships, limited partnerships (LPs), and limited liability partnerships (LLPs). It is separate from the law governing corporations (Title 10) and limited liability companies (also in Title 29).",
    keyProvisions: [
      {
        title: "General Partnerships",
        content: "A general partnership is an association of two or more persons to carry on a business for profit. A key feature is that it can be formed without any formal filing, and all partners are generally personally liable for the debts of the business."
      },
      {
        title: "Limited Partnerships (LP)",
        content: "An LP is a formal partnership that must be registered with the state. It has at least one 'general partner' who manages the business and has unlimited personal liability, and one or more 'limited partners' who contribute capital and have liability limited to their investment."
      },
      {
        title: "Limited Liability Partnerships (LLP)",
        content: "An LLP is often used by professionals like lawyers and accountants. In an LLP, partners are generally not personally liable for the debts of the business or the negligence of their other partners, though they remain liable for their own professional malpractice."
      },
      {
        title: "Limited Liability Companies (LLC)",
        content: "This widely used chapter governs LLCs, which are a hybrid business structure that combines the liability protection of a corporation with the tax efficiencies and operational flexibility of a partnership. Owners are called 'members,' and the LLC protects their personal assets from business debts."
      }
    ],
    purpose: "The purpose of Title 29 is to provide a variety of legal structures for businesses that are owned and operated by more than one person. It allows business owners to choose a structure that best suits their needs regarding liability, management, and taxation, thereby facilitating commerce and business formation in Arizona."
  },
  '30': {
    summary: "Title 30 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/30/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 30</a>, deals with power. This title governs the regulation of electrical power in the state. It includes provisions for power districts, the Arizona Power Authority, and the regulation of nuclear energy.",
    keyProvisions: [
      {
        title: "Arizona Power Authority",
        content: "Establishes the Arizona Power Authority, a state agency tasked with obtaining and marketing low-cost hydroelectric power, primarily from the Hoover Dam, for the benefit of the state and its citizens."
      },
      {
        title: "Power Districts",
        content: "Authorizes the formation of special districts for the purpose of providing electric power, particularly in rural areas not served by other utilities. The Salt River Project (SRP) is a prominent example of an entity that operates with powers derived from these and related laws."
      },
      {
        title: "Energy and Nuclear Regulatory Commission",
        content: "Includes statutes related to the siting of power plants and transmission lines, requiring a Certificate of Environmental Compatibility. It also contains provisions for the state to enter into agreements with the federal Nuclear Regulatory Commission (NRC) to regulate certain radioactive materials."
      },
      {
        title: "Solar Energy",
        content: "Contains provisions to encourage the use of solar energy, including rules that prevent homeowners associations from completely prohibiting the installation of solar energy devices."
      }
    ],
    purpose: "The purpose of Title 30 is to provide a legal framework for the generation, distribution, and regulation of electrical power in Arizona. It aims to ensure a reliable and affordable supply of energy for the state's residents and businesses, while also addressing environmental and safety concerns related to power generation."
  },
  '31': {
    summary: "Title 31 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/31/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 31</a>, covers prisons and prisoners. This title governs the operation of Arizona's state prison system and the treatment of incarcerated individuals. It establishes the Arizona Department of Corrections, Rehabilitation and Reentry (ADCRR) and sets the rules for custody, discipline, and release of prisoners.",
    keyProvisions: [
      {
        title: "Department of Corrections, Rehabilitation and Reentry",
        content: "Establishes the ADCRR as the state agency responsible for the custody, control, and treatment of all persons committed to the state prison system."
      },
      {
        title: "Treatment of Prisoners",
        content: "Outlines the rules for the classification, labor, and discipline of prisoners. It includes provisions for inmate health care, mail, and visitation rights."
      },
      {
        title: "Release and Community Supervision",
        content: "Governs the process for releasing inmates from prison. This includes earned release credits, which can shorten a sentence, and the terms of community supervision (parole) that often follow release. It also establishes the Board of Executive Clemency."
      },
      {
        title: "Correctional Facilities",
        content: "Provides for the management of state prisons, including the authority to use private contractors to operate certain prison facilities."
      }
    ],
    purpose: "The purpose of Title 31 is to provide for the secure and humane confinement of individuals sentenced to prison, to protect the public, and to offer programs aimed at rehabilitation and successful reentry into the community. It creates the legal structure for the state's entire adult correctional system."
  },
  '32': {
    summary: "Title 32 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/32/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 32</a>, regulates a wide array of professions and occupations. This extensive title establishes the licensing boards and regulatory requirements for dozens of different professions, from doctors and dentists to contractors and cosmetologists. Its goal is to protect the public from unqualified or unethical practitioners.",
    keyProvisions: [
      {
        title: "Professional Licensing Boards",
        content: "The title creates numerous independent boards, such as the Arizona Medical Board, the State Board of Dental Examiners, the Board of Technical Registration (for engineers and architects), and the Registrar of Contractors. Each board is responsible for setting qualifications, administering exams, issuing licenses, and disciplining its licensees."
      },
      {
        title: "Scope of Practice",
        content: "For each profession, the law defines the 'scope of practice,' which is the set of services that a licensed professional is legally authorized to perform. Practicing a profession without a required license is generally a crime."
      },
      {
        title: "Unprofessional Conduct and Discipline",
        content: "Each chapter defines 'unprofessional conduct' for that specific profession. Boards are empowered to investigate complaints and can impose disciplinary action, ranging from a letter of reprimand to license suspension or revocation, for violations."
      },
      {
        title: "Consumer Protection",
        content: "Many chapters include specific consumer protection provisions. For example, the chapter on contractors establishes the Residential Contractors' Recovery Fund, which can be used to compensate homeowners who are financially damaged by a licensed contractor's poor work or abandonment of a job."
      }
    ],
    purpose: "The primary purpose of Title 32 is to protect the public's health, safety, and welfare by ensuring that individuals who practice certain professions meet minimum standards of competence and ethics. It provides a mechanism for consumers to file complaints and for regulatory boards to remove unqualified or dishonest practitioners from the field."
  },
  '33': {
    summary: "Title 33 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/33/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 33</a>, is dedicated to property. This title governs the law of real property (land and buildings) in Arizona. It covers how property is owned, transferred, and financed, and it includes key laws like the Residential Landlord and Tenant Act.",
    keyProvisions: [
      {
        title: "Estates and Property Interests",
        content: "Defines the different ways property can be owned, such as fee simple, life estates, and various forms of co-ownership like joint tenancy with right of survivorship and community property."
      },
      {
        title: "Deeds and Conveyances",
        content: "Sets the legal requirements for transferring ownership of real property. It specifies the necessary components of a valid deed and the requirements for recording the deed with the county recorder to provide public notice of ownership."
      },
      {
        title: "Mortgages and Deeds of Trust",
        content: "Governs real estate financing. While it includes mortgage law, most Arizona property loans are secured by a Deed of Trust. This chapter details the non-judicial foreclosure process (trustee's sale) that allows a lender to sell a property after a borrower defaults, without going to court."
      },
      {
        title: "Landlord and Tenant",
        content: "Contains the Arizona Residential Landlord and Tenant Act, which governs the rights and obligations of both landlords and renters of residential properties. It covers lease agreements, security deposits, the landlord's duty to maintain the property, and the eviction process (known as a 'special detainer' action)."
      }
    ],
    purpose: "The purpose of Title 33 is to provide a clear and stable legal framework for all transactions involving real property. It aims to protect property rights, facilitate commerce in real estate, and provide for the fair and orderly resolution of disputes between property owners, lenders, landlords, and tenants."
  },
  '34': {
    summary: "Title 34 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/34/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 34</a>, governs public buildings and improvements. This title sets the rules for how the state and its political subdivisions (like counties and school districts) procure construction services and manage public works projects.",
    keyProvisions: [
      {
        title: "Procurement of Construction Services",
        content: "Establishes the methods by which public entities must award contracts for public works. This includes requirements for competitive bidding to ensure that public funds are spent responsibly and that projects are awarded to the lowest responsible bidder."
      },
      {
        title: "Contractor's Payment Bond",
        content: "Requires the prime contractor on most public works projects to furnish a payment bond. This bond guarantees that all subcontractors and suppliers who provide labor or materials to the project will be paid, even if the prime contractor defaults."
      },
      {
        title: "Employment of Aliens",
        content: "Prohibits the employment of unauthorized aliens on public works projects and requires contractors to use the E-Verify system to check the employment eligibility of all new hires."
      },
      {
        title: "Energy Conservation Standards",
        content: "Requires that new and renovated public buildings be designed and constructed to meet certain energy conservation standards to reduce long-term operating costs."
      }
    ],
    purpose: "The purpose of Title 34 is to ensure fairness, transparency, and fiscal responsibility in public construction. It aims to protect public funds by requiring competitive bidding, to protect workers and suppliers by requiring payment bonds, and to ensure that public buildings are constructed to be safe and efficient."
  },
  '35': {
    summary: "Title 35 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/35/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 35</a>, deals with public finances. This title provides the legal framework for the financial administration of the state government. It governs the state budget process, the handling of public money, and the issuance of state debt.",
    keyProvisions: [
      {
        title: "The Budget Process",
        content: "Outlines the process for the creation and enactment of the state budget. This includes the Governor's submission of a proposed budget, review and modification by the Legislature, and the requirement that the budget be balanced. It establishes the fiscal year, which runs from July 1 to June 30."
      },
      {
        title: "Custody of Public Money",
        content: "Sets the rules for how public funds are collected, deposited, and invested. It establishes the State Treasurer as the chief financial officer of the state, responsible for the safekeeping and investment of state funds."
      },
      {
        title: "State Indebtedness",
        content: "Governs the state's ability to borrow money by issuing bonds. It places constitutional and statutory limits on the amount of debt the state can incur and specifies the purposes for which debt can be used, such as for constructing university buildings or transportation projects."
      },
      {
        title: "State Procurement Code",
        content: "While many procurement rules are in Title 41, this title contains foundational financial controls, ensuring that state agencies do not spend money that has not been appropriated by the Legislature and that all expenditures are properly accounted for and audited."
      }
    ],
    purpose: "The purpose of Title 35 is to ensure the sound and responsible financial management of state government. It promotes fiscal discipline, transparency, and accountability in the use of taxpayer money, and it provides the procedural backbone for all state spending and investment."
  },
  '36': {
    summary: "Title 36 of the Arizona Revised Statutes, found at <a href='https://wwws.azleg.gov/ars/36/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 36</a>, is the comprehensive Public Health and Safety code. This extensive title establishes the Arizona Department of Health Services (ADHS) and covers a vast range of topics, from disease control and food safety to mental health services and the regulation of healthcare facilities.",
    keyProvisions: [
      {
        title: "Department of Health Services (ADHS)",
        content: "Establishes ADHS and gives it broad authority to protect and promote public health. This includes investigating disease outbreaks, maintaining vital records (birth and death certificates), and regulating various facilities and professions."
      },
      {
        title: "Regulation of Health Care Institutions",
        content: "ADHS is responsible for licensing and regulating hospitals, nursing homes, assisted living facilities, and other healthcare institutions to ensure they meet minimum standards for patient care and safety."
      },
      {
        title: "Controlled Substances",
        content: "While criminal penalties are in Title 13, this title contains the regulatory scheme for controlled substances, including the state's Prescription Drug Monitoring Program, which tracks the dispensing of opioids and other powerful drugs to prevent abuse."
      },
      {
        title: "Medical Marijuana and Adult Use Marijuana",
        content: "Contains the voter-approved laws that legalized marijuana for medical and, later, recreational adult use. It sets up the regulatory framework for dispensaries, testing facilities, and consumer use."
      }
    ],
    purpose: "The purpose of Title 36 is to protect and improve the health and safety of the people of Arizona. It provides the legal authority for the state to prevent and control disease, ensure the quality of healthcare and food, and address a wide variety of public health threats."
  },
  '37': {
    summary: "Title 37 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/37/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 37</a>, governs public lands. This title establishes the Arizona State Land Department and the Board of Appeals, which are responsible for managing the vast portfolio of State Trust Land. This land was granted to Arizona by the federal government at statehood to be held in trust to generate revenue for public institutions, primarily K-12 education.",
    keyProvisions: [
      {
        title: "State Land Department",
        content: "Establishes the Department and the State Land Commissioner, who acts as the trustee for the State Trust lands. The Department is responsible for leasing and selling trust land to generate revenue."
      },
      {
        title: "Trust Beneficiaries",
        content: "The Arizona Constitution specifies the 13 beneficiaries of the State Trust. Public schools (K-12) are the largest beneficiary, entitled to over 80% of the revenue. Other beneficiaries include state universities and the state prison system."
      },
      {
        title: "Leasing and Sale of State Land",
        content: "Outlines the procedures for managing trust land. This includes issuing grazing leases for ranchers, commercial leases for businesses, and agricultural leases for farmers. Any sale of State Trust Land must be done at a public auction for a price no less than the appraised fair market value."
      },
      {
        title: "Fiduciary Duty",
        content: "A core principle of the title is that the State Land Department has a strict fiduciary duty to manage the trust land for the sole purpose of generating the greatest possible revenue for the beneficiaries. This often creates tension with other public goals, such as conservation."
      }
    ],
    purpose: "The purpose of Title 37 is to fulfill the mandate of the Arizona Constitution and the state's Enabling Act: to manage the State Trust lands in a way that maximizes revenue for its public beneficiaries, most importantly, our public schools. It provides the legal framework for one of the most important funding sources for education in Arizona."
  },
  '38': {
    summary: "Title 38 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/38/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 38</a>, governs public officers and employees. This title sets forth the general rules and standards of conduct for state and local government employees and elected officials. It covers conflicts of interest, open meetings, and public retirement systems.",
    keyProvisions: [
      {
        title: "Conflict of Interest",
        content: "Prohibits public officers and employees from participating in decisions in which they have a substantial personal financial interest. It is designed to prevent self-dealing and ensure that public officials act in the public's interest, not their own."
      },
      {
        title: "Open Meeting Law",
        content: "Requires that all meetings of public bodies (like city councils, school boards, and state commissions) be open to the public. It mandates that a public body give advance notice of its meetings and provide a detailed agenda. The law allows for closed 'executive sessions' for limited purposes, such as receiving legal advice."
      },
      {
        title: "Public Service Retirement",
        content: "Establishes the major public retirement systems in Arizona, including the Arizona State Retirement System (ASRS) for state, county, and school employees, and the Public Safety Personnel Retirement System (PSPRS) for police officers and firefighters."
      },
      {
        title: "Oaths and Bonds",
        content: "Requires public officers to take an oath of office, pledging to support the U.S. and Arizona Constitutions. It also specifies which officials must be covered by a fidelity bond to protect public funds."
      }
    ],
    purpose: "The purpose of Title 38 is to ensure the integrity, honesty, and accountability of government in Arizona. It aims to prevent corruption, promote transparency in government decision-making, and provide for the fair and orderly administration of the public workforce."
  },
  '39': {
    summary: "Title 39 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/39/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 39</a>, covers public records, printing, and notices. This title is a cornerstone of government transparency in Arizona, as it contains the state's Public Records Law.",
    keyProvisions: [
      {
        title: "Public Records Law",
        content: "Establishes that 'public records and other matters in the custody of any officer shall be open to inspection by any person at all times during office hours.' Arizona courts have interpreted this law to create a strong presumption in favor of public access to government documents. A public body must promptly provide records upon request unless a specific law or privacy interest clearly outweighs the public's right to know."
      },
      {
        title: "Definition of Public Records",
        content: "The law broadly defines public records to include books, papers, maps, photographs, or other documentary materials, regardless of physical form or characteristics, that are made or received by a public body in connection with the transaction of public business."
      },
      {
        title: "Preservation of Records",
        content: "Requires public officers to properly preserve and care for public records and makes it a crime to destroy, conceal, or falsify them."
      },
      {
        title: "Public Notices",
        content: "Specifies the requirements for publishing legal notices, such as notices of public hearings or property sales, in newspapers of general circulation to ensure the public is informed of government actions."
      }
    ],
    purpose: "The primary purpose of Title 39 is to promote government transparency and accountability. By guaranteeing the public's right to inspect government records, it allows citizens to oversee the actions of their government, which is essential for a functioning democracy."
  },
  '40': {
    summary: "Title 40 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/40/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 40</a>, governs public utilities and carriers. This title establishes the Arizona Corporation Commission (ACC) as the constitutional body responsible for regulating most public utilities in the state. It covers services like electricity, natural gas, water, and traditional telephone service.",
    keyProvisions: [
      {
        title: "Arizona Corporation Commission (ACC)",
        content: "The Arizona Constitution creates the ACC and this title details its powers. The ACC is a unique, elected body that acts as a fourth branch of government. It has the authority to set the rates and service quality standards for the public service corporations it regulates."
      },
      {
        title: "Rate Setting",
        content: "The ACC's primary function is setting the rates that monopoly utilities (like electric and gas companies) can charge customers. The process involves a formal rate case where the utility must justify its requested rates, and the ACC's decision is meant to balance the utility's right to a fair return on its investment with the consumer's right to just and reasonable rates."
      },
      {
        title: "Certificate of Convenience and Necessity (CC&N)",
        content: "A utility must obtain a CC&N from the ACC before it can begin construction or operation. The CC&N grants the utility an exclusive service territory, protecting it from competition but also obligating it to serve all customers within that territory."
      },
      {
        title: "Railroad Safety",
        content: "The title also gives the ACC jurisdiction over railroad safety within Arizona, including the safety of railroad crossings."
      }
    ],
    purpose: "The purpose of Title 40 is to provide for the regulation of natural monopoly utilities in the public interest. Since it is not efficient to have multiple sets of electric lines or gas pipes, the state grants a single company an exclusive service territory and, in return, regulates its prices and services to simulate competition and protect consumers."
  },
  '41': {
    summary: "Title 41 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/41/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 41</a>, is a large and diverse title dedicated to state government. It establishes the major departments of the executive branch and contains a wide variety of laws governing the administrative operations of the state. It includes everything from the state's procurement code to the creation of state parks.",
    keyProvisions: [
      {
        title: "Executive Branch Departments",
        content: "Establishes many of the primary agencies of state government, including the Department of Administration (ADOA), the Department of Revenue (DOR), the Department of Economic Security (DES), and the Department of Public Safety (DPS)."
      },
      {
        title: "Administrative Procedure Act (APA)",
        content: "Outlines the procedures that state agencies must follow when they engage in rulemaking (creating administrative regulations) and adjudication (holding administrative hearings). It ensures public notice and an opportunity to comment on proposed rules."
      },
      {
        title: "Arizona Procurement Code",
        content: "Sets forth the rules and procedures that state agencies must follow when purchasing goods and services. It is designed to ensure fair and open competition and the responsible use of public money."
      },
      {
        title: "Arizona Civil Rights Act",
        content: "This portion of the title prohibits discrimination in places of public accommodation, housing, and employment. It establishes the Civil Rights Division within the Attorney General's Office to investigate complaints of discrimination."
      }
    ],
    purpose: "The purpose of Title 41 is to provide the statutory framework for the organization and operation of Arizona's state government. It creates the agencies that deliver essential government services and establishes the administrative rules that govern their conduct, aiming to ensure efficiency, fairness, and accountability."
  },
  '42': {
    summary: "Title 42 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/42/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 42</a>, covers taxation. This title provides the legal framework for the assessment, levy, and collection of most state and local taxes in Arizona, with the major exception of income tax (which is in Title 43). It is primarily administered by the Arizona Department of Revenue and county assessors.",
    keyProvisions: [
      {
        title: "Property Tax",
        content: "This is the largest and most complex part of the title. It establishes the system for valuing (assessing) real and personal property for tax purposes. It classifies property into different legal classes with different assessment ratios and sets the procedures for levying, collecting, and appealing property taxes. This is a primary funding source for local governments and schools."
      },
      {
        title: "Transaction Privilege Tax (TPT)",
        content: "This section governs Arizona's transaction privilege tax, which is commonly referred to as a sales tax. It is a tax on the privilege of doing business in Arizona, and it is levied on the gross receipts of businesses from certain activities, such as retail sales, construction, and restaurants. The state and many cities and towns levy a TPT."
      },
      {
        title: "Luxury Tax",
        content: "Imposes an excise tax on specific products, namely tobacco and alcoholic beverages."
      },
      {
        title: "Taxpayer Bill of Rights",
        content: "Establishes certain rights for taxpayers in their dealings with the Department of Revenue, including the right to receive clear information, the right to representation, and the right to appeal tax assessments."
      }
    ],
    purpose: "The purpose of Title 42 is to provide for the orderly and equitable raising of revenue to fund state and local government. It establishes the legal authority and the administrative procedures for levying and collecting taxes, which are the lifeblood of all government services."
  },
  '43': {
    summary: "Title 43 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/43/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 43</a>, is dedicated to the taxation of income. This title establishes the legal framework for Arizona's individual and corporate income taxes. It is administered by the Arizona Department of Revenue.",
    keyProvisions: [
      {
        title: "Conformity to Federal Code",
        content: "Arizona's income tax law is largely based on the federal Internal Revenue Code (IRC). This title establishes 'Arizona gross income' by starting with federal adjusted gross income and then making specific additions and subtractions required by state law. This conformity simplifies tax preparation for many taxpayers."
      },
      {
        title: "Individual Income Tax",
        content: "Sets the tax rates, deductions, and credits for individual taxpayers. This includes the standard deduction, itemized deductions (which largely follow federal rules), and various tax credits designed to benefit families, students, and charities."
      },
      {
        title: "Corporate Income Tax",
        content: "Establishes the tax rate and rules for corporations doing business in Arizona. It includes provisions for apportioning the income of multi-state corporations to determine how much of their profit is taxable by Arizona."
      },
      {
        title: "Withholding",
        content: "Requires employers to withhold state income tax from employee paychecks and remit it to the Department of Revenue. This is the primary method of collecting income tax throughout the year."
      }
    ],
    purpose: "The purpose of Title 43 is to provide a legal framework for raising revenue through a tax on individual and corporate income. This revenue is a major component of the state's general fund, which pays for education, public safety, healthcare, and other essential government services."
  },
  '44': {
    summary: "Title 44 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/44/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 44</a>, governs trade and commerce. This diverse title contains a wide variety of laws designed to ensure fair dealing in the marketplace and to protect consumers and businesses. It covers everything from the Consumer Fraud Act to securities regulation.",
    keyProvisions: [
      {
        title: "Consumer Fraud Act",
        content: "This is a powerful consumer protection law that prohibits deception, fraud, false pretenses, misrepresentation, or the concealment or omission of any material fact in connection with the sale or advertisement of merchandise. It is enforced by the Arizona Attorney General."
      },
      {
        title: "Securities Regulation",
        content: "This section, known as the 'blue sky' laws, regulates the sale of securities (like stocks and bonds) within Arizona. It requires the registration of securities and the licensing of securities salespeople to protect investors from fraud."
      },
      {
        title: "Trademarks and Trade Names",
        content: "Establishes a system for the state-level registration of trademarks and trade names, providing protection for businesses' brand identities within Arizona."
      },
      {
        title: "Data Security and Breach Notification",
        content: "Requires businesses and government entities that maintain computerized data with personal information to implement reasonable security measures. If a security breach occurs, they must notify affected individuals and the Attorney General's office."
      }
    ],
    purpose: "The purpose of Title 44 is to promote a fair, honest, and competitive marketplace. It aims to protect consumers from fraud and deceptive practices, protect investors from securities fraud, and provide clear rules of the road for commercial transactions."
  },
  '45': {
    summary: "Title 45 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/45/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 45</a>, is dedicated to waters. In an arid state like Arizona, this title is one of the most critical, as it governs the rights to use and manage the state's limited water resources. It establishes the Arizona Department of Water Resources (ADWR) and contains the state's complex system of water law.",
    keyProvisions: [
      {
        title: "Surface Water Rights (Prior Appropriation)",
        content: "Arizona's surface water law is based on the doctrine of prior appropriation, or 'first in time, first in right.' This means that the first person to put water to a beneficial use has a senior right to the water over later users. This title governs the appropriation and severance of surface water rights."
      },
      {
        title: "1980 Groundwater Management Act (GMA)",
        content: "This is the centerpiece of Arizona water law. The GMA created Active Management Areas (AMAs) in the most populated parts of the state where groundwater overdraft was most severe. Within AMAs, the GMA prohibits new agricultural irrigation and requires new subdivisions to prove they have a 100-year Assured Water Supply."
      },
      {
        title: "Adjudications",
        content: "The title provides for massive, ongoing court proceedings called 'general stream adjudications' to determine the extent and priority of all surface water rights in the Gila and Little Colorado River systems. These complex cases have been ongoing for decades."
      },
      {
        title: "Dams and Reservoirs",
        content: "Establishes safety standards for the construction and maintenance of dams to protect life and property downstream."
      }
    ],
    purpose: "The purpose of Title 45 is to manage and conserve Arizona's scarce water resources to ensure a secure and sustainable water supply for the state's future. It aims to resolve conflicts over water, prevent the depletion of groundwater, and promote the wise use of water in all sectors."
  },
  '46': {
    summary: "Title 46 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/46/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 46</a>, pertains to welfare. This title establishes the legal framework for Arizona's public assistance and social services programs, which are designed to support low-income individuals and families. The primary agency responsible for administering these programs is the Department of Economic Security (DES).",
    keyProvisions: [
      {
        title: "Medical Assistance (AHCCCS)",
        content: "Authorizes the Arizona Health Care Cost Containment System (AHCCCS), which is Arizona's Medicaid program. AHCCCS provides health insurance coverage to low-income Arizonans, including children, pregnant women, and adults who meet certain income criteria."
      },
      {
        title: "Nutrition Assistance (SNAP)",
        content: "Governs the state's administration of the federal Supplemental Nutrition Assistance Program (SNAP), formerly known as food stamps. This program provides eligible low-income households with benefits to purchase food."
      },
      {
        title: "Cash Assistance (TANF)",
        content: "Outlines the rules for the Temporary Assistance for Needy Families (TANF) program, which provides temporary cash assistance and work-readiness services to low-income families with children. Arizona's TANF program has some of the strictest time limits in the nation."
      },
      {
        title: "Services for the Blind and Visually Impaired",
        content: "Provides for rehabilitation and other support services for individuals who are blind or visually impaired to help them achieve independence and employment."
      }
    ],
    purpose: "The purpose of Title 46 is to provide a safety net for Arizona's most vulnerable residents. It aims to alleviate poverty and provide access to essential needs like healthcare, food, and basic income support, thereby promoting public health and economic stability."
  },
  '47': {
    summary: "Title 47 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/47/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 47</a>, is Arizona's adoption of the Uniform Commercial Code (UCC). The UCC is a comprehensive set of laws governing all commercial transactions in the United States. While it is a state law, it has been adopted (with minor variations) by all 50 states to create consistency in commerce across state lines.",
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
    purpose: "The purpose of Title 47 is to simplify, clarify, and modernize the law governing commercial transactions in Arizona and to make that law uniform with other states. This uniformity provides consistency and predictability, which are crucial for a robust national economy."
  },
  '48': {
    summary: "Title 48 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/48/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 48</a>, covers special taxing districts. This title authorizes the creation of various types of limited-purpose local governments that are formed to provide specific services to a defined geographic area. These districts have the power to levy property taxes or assessments on the properties within their boundaries to fund those services.",
    keyProvisions: [
      {
        title: "Types of Districts",
        content: "The title authorizes dozens of different types of special districts. Common examples include fire districts, irrigation and water conservation districts, sanitary districts (for sewer service), and community facilities districts (often used to finance infrastructure in new developments)."
      },
      {
        title: "Formation and Governance",
        content: "For each type of district, the title specifies the procedure for its formation, which usually involves a petition by landowners and an election or approval by the county board of supervisors. It also outlines how the district will be governed, typically by an elected board of directors."
      },
      {
        title: "Taxing and Bonding Authority",
        content: "The key power of a special district is its authority to raise money. The title grants these districts the power to levy taxes on the property within their boundaries and to issue bonds (borrow money) to finance the construction of infrastructure, such as fire stations or water lines."
      },
      {
        title: "Irrigation Districts",
        content: "A significant portion of the title is dedicated to irrigation districts, like the Salt River Project (SRP) and the Central Arizona Project (CAP), which are quasi-governmental entities responsible for delivering water to large portions of the state."
      }
    ],
    purpose: "The purpose of Title 48 is to provide a flexible mechanism for property owners to create a localized form of government to provide specific services that are not being provided by a city or county. It allows for the financing of essential infrastructure and services tailored to the needs of a particular community."
  },
  '49': {
    summary: "Title 49 of the Arizona Revised Statutes, found at <a href='https://www.azleg.gov/ars/49/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>A.R.S. Title 49</a>, is dedicated to the environment. This title establishes the Arizona Department of Environmental Quality (ADEQ) and contains the state's primary laws for controlling air, water, and soil pollution.",
    keyProvisions: [
      {
        title: "Air Quality",
        content: "Contains Arizona's air quality control laws, which work in conjunction with the federal Clean Air Act. It gives ADEQ the authority to issue permits to industrial sources of air pollution and to monitor air quality to ensure it meets health-based standards."
      },
      {
        title: "Water Quality",
        content: "Implements the federal Clean Water Act and Safe Drinking Water Act at the state level. It establishes the Aquifer Protection Permit (APP) program, which is designed to protect groundwater from pollution, and sets surface water quality standards."
      },
      {
        title: "Solid and Hazardous Waste",
        content: "Governs the management and disposal of solid and hazardous waste, largely implementing the federal Resource Conservation and Recovery Act (RCRA) in Arizona. It includes rules for landfills and waste treatment facilities."
      },
      {
        title: "Water Quality Assurance Revolving Fund (WQARF)",
        content: "This is Arizona's state-level 'Superfund' program. It is designed to identify, assess, and clean up sites with contaminated soil and groundwater. The program is funded by various fees and taxes and seeks to hold polluters responsible for cleanup costs."
      }
    ],
    purpose: "The purpose of Title 49 is to protect, preserve, and enhance Arizona's environment and public health. It provides a comprehensive legal and regulatory framework for controlling pollution and remediating contamination to ensure that the state's air, water, and land are safe for current and future generations."
  }
};
