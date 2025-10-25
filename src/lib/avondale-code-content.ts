
interface CodeContent {
  summary: string;
  purpose: string;
  keyProvisions: { title: string; content: string }[];
}

export const AVONDALE_CODE_CONTENT: Record<string, CodeContent> = {
  '1': {
    summary: "Chapter 1 of the Avondale City Code establishes the foundational legal framework for the entire code. It defines how the code should be interpreted, outlines the city's general powers, and sets the general penalty for violations where a specific penalty is not provided.",
    purpose: "To provide a consistent legal basis for the interpretation, application, and enforcement of the City Code, ensuring uniformity and clarity in governance.",
    keyProvisions: [
      {
        title: "Rules of Construction",
        content: "Provides standard rules for how the code should be read, such as definitions for terms like 'shall' (mandatory) and 'may' (discretionary)."
      },
      {
        title: "General Penalty",
        content: "Establishes a default penalty for any violation of the City Code where a more specific penalty is not stated. This ensures all parts of the code are enforceable."
      },
      {
        title: "Severability Clause",
        content: "States that if any part of the City Code is declared invalid by a court, the remaining portions of the code will remain in effect."
      }
    ]
  },
  '2': {
    summary: "Chapter 2, Administration, details the structure and organization of Avondale's city government. It defines the roles and responsibilities of the City Council, the City Manager, and various city departments, boards, and commissions.",
    purpose: "To establish an organized, efficient, and transparent structure for city governance, outlining the powers and duties of elected officials and administrative staff.",
    keyProvisions: [
      {
        title: "Council-Manager Form of Government",
        content: "The City operates under a Council-Manager form of government. The City Council is the legislative body, setting policy and approving the budget, while the City Manager, appointed by the Council, serves as the chief executive officer responsible for daily operations."
      },
      {
        title: "City Council",
        content: "The Council consists of a Mayor and six Councilmembers. This chapter outlines their terms of office, powers, duties, and rules of procedure for meetings."
      },
      {
        title: "Administrative Departments",
        content: "Establishes the various departments of the city government (e.g., Police, Public Works, Development Services) and outlines their primary functions under the direction of the City Manager."
      },
      {
        title: "Boards and Commissions",
        content: "Provides for the creation of citizen advisory bodies to provide recommendations and public input to the City Council on specific issues."
      }
    ]
  }
};
