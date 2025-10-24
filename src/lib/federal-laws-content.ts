
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
    summary: "Admiralty law, also known as maritime law, is a distinct body of law that governs nautical issues and private maritime disputes. Admiralty law includes both domestic law on maritime activities, and private international law governing the relationships between private entities that operate vessels on the oceans.",
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
        content: "This involves the sale of a debtor's nonexempt property and the distribution of the proceeds to creditors."
      },
      {
        title: "Chapter 11: Reorganization",
        content: "Allows businesses (and certain individuals) to continue operating while reorganizing their finances."
      },
      {
        title: "Chapter 13: Repayment Plan",
        content: "Enables individuals with regular income to develop a plan to repay all or part of their debts over three to five years."
      }
    ],
    purpose: "To give honest debtors a 'fresh start' from burdensome debts and to provide for the fair and orderly distribution of a debtor's assets among creditors."
  },
  // Placeholder content for other laws
  ...Object.fromEntries(Array.from({ length: 48 }, (_, i) => i + 8).map(id => [
    id.toString(),
    {
      summary: `Placeholder summary for law #${id}. This content should be replaced with actual information about the specific law.`,
      keyProvisions: [
        { title: "Placeholder Provision 1", content: `Details about the first key provision for law #${id}.` },
        { title: "Placeholder Provision 2", content: `Details about the second key provision for law #${id}.` }
      ],
      purpose: `The placeholder purpose for law #${id}. This describes why the law was enacted.`
    }
  ]))
};
