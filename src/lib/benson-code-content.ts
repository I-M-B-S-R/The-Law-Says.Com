
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const BENSON_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Title 1 of the Benson City Code establishes the foundational legal framework for the entire code. It sets forth rules for interpretation, defines common terms, and specifies the general penalty for violations of any ordinance where a specific penalty is not provided.",
    purpose: "To provide a consistent legal basis for the interpretation and enforcement of the City Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the City Code where a more specific penalty is not stated, making all parts of the code enforceable."
      },
      {
        title: "Severability Clause",
        content: "A standard clause stating that if any part of the City Code is declared invalid by a court, the remaining portions will remain in effect."
      }
    ]
  },
  '2': {
    summary: "Title 2, Government and Administration, details the structure and organization of Benson's city government. It defines the roles and responsibilities of the City Council, city manager, and various city departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form",
        content: "The City operates under a Council-Manager form of government. The City Council is the legislative body, setting policy and approving the budget, while the City Manager, appointed by the Council, serves as the chief executive officer responsible for daily operations."
      },
      {
        title: "City Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory bodies to provide recommendations and public input to the City Council on specific issues like planning and zoning."
      }
    ]
  },
  '3': {
    summary: "Title 3, Finance and Taxation, establishes the fiscal procedures for the city. It governs budgeting, purchasing, and the collection of taxes, including the local Transaction Privilege (Sales) Tax.",
    purpose: "To ensure sound financial management, accountability, and transparency in the use of public funds.",
    keyProvisions: [
      {
        title: "Budget Process",
        content: "Outlines the annual process for preparing, holding public hearings on, and adopting the city budget."
      },
      {
        title: "Transaction Privilege Tax",
        content: "The city levies a transaction privilege tax on the gross income of businesses from certain activities. This chapter adopts the Model City Tax Code and sets the local tax rates."
      },
      {
        title: "Purchasing",
        content: "Establishes a centralized purchasing system and requires competitive bidding for major purchases to ensure the city gets the best value for public money."
      }
    ]
  }
};
