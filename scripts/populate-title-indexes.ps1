# scripts\populate-title-indexes.ps1
# Populates title7Index.ts through title54Index.ts with detailed content.
# Usage: powershell -ExecutionPolicy Bypass -File scripts\populate-title-indexes.ps1
# Add -Force to overwrite existing files.

param(
  [switch]$Force
)

$root = (Get-Location).Path
$lib = Join-Path $root "src\app\lib"

if (-not (Test-Path $lib)) {
  Write-Host "Error: src/app/lib not found. Run from project root." -ForegroundColor Red
  exit 1
}

function Write-TitleFile([int]$n, [string]$name, [string]$content) {
  $file = Join-Path $lib ("title{0}Index.ts" -f $n)
  if ((Test-Path $file) -and -not $Force) {
    Write-Host "SKIP (exists): title${n}Index.ts (use -Force to overwrite)" -ForegroundColor Yellow
    return
  }
  $content | Out-File -FilePath $file -Encoding utf8 -Force
  Write-Host "Written: title${n}Index.ts" -ForegroundColor Green
}

# Title 7: Agriculture
Write-TitleFile 7 "Agriculture" @'
import { TitleIndex } from "./titleTypes";

export const title7Index: TitleIndex = {
  titleNumber: 7,
  titleName: "Agriculture",
  chapters: [
    {
      number: "6",
      name: "Insecticides and Environmental Pesticide Control",
      status: "active",
      sections: [
        { id: "7 U.S.C. § 136", label: "FIFRA definitions", href: "https://www.law.cornell.edu/uscode/text/7/136" },
        { id: "7 U.S.C. § 136a", label: "Registration of pesticides", href: "https://www.law.cornell.edu/uscode/text/7/136a" },
      ],
    },
    {
      number: "64",
      name: "Agricultural Research, Extension, and Teaching",
      status: "active",
      sections: [
        { id: "7 U.S.C. § 3101", label: "Purpose of research, extension, and education", href: "https://www.law.cornell.edu/uscode/text/7/3101" },
      ],
    },
  ],
};
'@

# Title 8: Aliens and Nationality
Write-TitleFile 8 "Aliens and Nationality" @'
import { TitleIndex } from "./titleTypes";

export const title8Index: TitleIndex = {
  titleNumber: 8,
  titleName: "Aliens and Nationality",
  chapters: [
    {
      number: "12",
      name: "Immigration and Nationality",
      status: "active",
      sections: [
        { id: "8 U.S.C. § 1101", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/8/1101" },
        { id: "8 U.S.C. § 1182", label: "Inadmissible aliens", href: "https://www.law.cornell.edu/uscode/text/8/1182" },
        { id: "8 U.S.C. § 1227", label: "Deportable aliens", href: "https://www.law.cornell.edu/uscode/text/8/1227" },
      ],
    },
  ],
};
'@

# Title 9: Arbitration
Write-TitleFile 9 "Arbitration" @'
import { TitleIndex } from "./titleTypes";

export const title9Index: TitleIndex = {
  titleNumber: 9,
  titleName: "Arbitration",
  chapters: [
    {
      number: "1",
      name: "General Provisions",
      status: "active",
      sections: [
        { id: "9 U.S.C. § 2", label: "Validity/enforcement of arbitration agreements", href: "https://www.law.cornell.edu/uscode/text/9/2" },
        { id: "9 U.S.C. § 9", label: "Award of arbitrators; confirmation", href: "https://www.law.cornell.edu/uscode/text/9/9" },
        { id: "9 U.S.C. § 10", label: "Vacating awards", href: "https://www.law.cornell.edu/uscode/text/9/10" },
      ],
    },
    {
      number: "2",
      name: "Convention on the Recognition and Enforcement of Foreign Arbitral Awards",
      status: "active",
      sections: [
        { id: "9 U.S.C. § 201", label: "Enforcement of Convention", href: "https://www.law.cornell.edu/uscode/text/9/201" },
      ],
    },
  ],
};
'@

# Title 10: Armed Forces
Write-TitleFile 10 "Armed Forces" @'
import { TitleIndex } from "./titleTypes";

export const title10Index: TitleIndex = {
  titleNumber: 10,
  titleName: "Armed Forces",
  chapters: [
    {
      number: "2",
      name: "Department of the Army",
      status: "active",
      sections: [
        { id: "10 U.S.C. § 7013", label: "Secretary of the Army", href: "https://www.law.cornell.edu/uscode/text/10/7013" },
      ],
    },
    {
      number: "47",
      name: "Uniform Code of Military Justice",
      status: "active",
      sections: [
        { id: "10 U.S.C. § 801", label: "Art. 1. Definitions", href: "https://www.law.cornell.edu/uscode/text/10/801" },
        { id: "10 U.S.C. § 802", label: "Art. 2. Persons subject to this chapter", href: "https://www.law.cornell.edu/uscode/text/10/802" },
        { id: "10 U.S.C. § 815", label: "Art. 15. Non-judicial punishment", href: "https://www.law.cornell.edu/uscode/text/10/815" },
        { id: "10 U.S.C. § 920", label: "Art. 120. Rape and sexual assault", href: "https://www.law.cornell.edu/uscode/text/10/920" },
      ],
    },
  ],
};
'@

# Title 11: Bankruptcy
Write-TitleFile 11 "Bankruptcy" @'
import { TitleIndex } from "./titleTypes";

export const title11Index: TitleIndex = {
  titleNumber: 11,
  titleName: "Bankruptcy",
  chapters: [
    {
      number: "1",
      name: "General Provisions",
      status: "active",
      sections: [
        { id: "11 U.S.C. § 101", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/11/101" },
        { id: "11 U.S.C. § 109", label: "Who may be a debtor", href: "https://www.law.cornell.edu/uscode/text/11/109" },
      ],
    },
    {
      number: "3",
      name: "Case Administration",
      status: "active",
      sections: [
        { id: "11 U.S.C. § 301", label: "Voluntary cases", href: "https://www.law.cornell.edu/uscode/text/11/301" },
        { id: "11 U.S.C. § 303", label: "Involuntary cases", href: "https://www.law.cornell.edu/uscode/text/11/303" },
      ],
    },
    {
      number: "5",
      name: "Creditors, the Debtor, and the Estate",
      status: "active",
      sections: [
        { id: "11 U.S.C. § 522", label: "Exemptions", href: "https://www.law.cornell.edu/uscode/text/11/522" },
        { id: "11 U.S.C. § 523", label: "Exceptions to discharge", href: "https://www.law.cornell.edu/uscode/text/11/523" },
      ],
    },
    {
      number: "7",
      name: "Liquidation",
      status: "active",
      sections: [
        { id: "11 U.S.C. § 701", label: "Interim trustee", href: "https://www.law.cornell.edu/uscode/text/11/701" },
        { id: "11 U.S.C. § 727", label: "Discharge", href: "https://www.law.cornell.edu/uscode/text/11/727" },
      ],
    },
    {
      number: "13",
      name: "Adjustment of Debts of an Individual with Regular Income",
      status: "active",
      sections: [
        { id: "11 U.S.C. § 1301", label: "Stay of action against codebtor", href: "https://www.law.cornell.edu/uscode/text/11/1301" },
        { id: "11 U.S.C. § 1325", label: "Confirmation of plan", href: "https://www.law.cornell.edu/uscode/text/11/1325" },
      ],
    },
  ],
};
'@

# Title 12: Banks and Banking
Write-TitleFile 12 "Banks and Banking" @'
import { TitleIndex } from "./titleTypes";

export const title12Index: TitleIndex = {
  titleNumber: 12,
  titleName: "Banks and Banking",
  chapters: [
    {
      number: "2",
      name: "National Banks",
      status: "active",
      sections: [
        { id: "12 U.S.C. § 24", label: "Corporate powers of associations", href: "https://www.law.cornell.edu/uscode/text/12/24" },
      ],
    },
    {
      number: "3",
      name: "Federal Reserve System",
      status: "active",
      sections: [
        { id: "12 U.S.C. § 221", label: "Federal Reserve districts", href: "https://www.law.cornell.edu/uscode/text/12/221" },
        { id: "12 U.S.C. § 248", label: "Powers of Board of Governors", href: "https://www.law.cornell.edu/uscode/text/12/248" },
      ],
    },
    {
      number: "53",
      name: "Consumer Financial Protection Bureau",
      status: "active",
      sections: [
        { id: "12 U.S.C. § 5481", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/12/5481" },
        { id: "12 U.S.C. § 5511", label: "Purpose, objectives, and functions", href: "https://www.law.cornell.edu/uscode/text/12/5511" },
      ],
    },
  ],
};
'@

# Title 13: Census
Write-TitleFile 13 "Census" @'
import { TitleIndex } from "./titleTypes";

export const title13Index: TitleIndex = {
  titleNumber: 13,
  titleName: "Census",
  chapters: [
    {
      number: "1",
      name: "Administration",
      status: "active",
      sections: [
        { id: "13 U.S.C. § 1", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/13/1" },
        { id: "13 U.S.C. § 4", label: "Functions of Secretary", href: "https://www.law.cornell.edu/uscode/text/13/4" },
      ],
    },
    {
      number: "5",
      name: "Censuses",
      status: "active",
      sections: [
        { id: "13 U.S.C. § 141", label: "Population and other census information", href: "https://www.law.cornell.edu/uscode/text/13/141" },
      ],
    },
    {
      number: "9",
      name: "Collection and Publication of Foreign Commerce and Trade Statistics",
      status: "active",
      sections: [
        { id: "13 U.S.C. § 301", label: "Collection and publication", href: "https://www.law.cornell.edu/uscode/text/13/301" },
      ],
    },
  ],
};
'@

# Title 14: Coast Guard
Write-TitleFile 14 "Coast Guard" @'
import { TitleIndex } from "./titleTypes";

export const title14Index: TitleIndex = {
  titleNumber: 14,
  titleName: "Coast Guard",
  chapters: [
    {
      number: "1",
      name: "Establishment and Duties",
      status: "active",
      sections: [
        { id: "14 U.S.C. § 101", label: "Establishment of Coast Guard", href: "https://www.law.cornell.edu/uscode/text/14/101" },
        { id: "14 U.S.C. § 102", label: "Primary duties", href: "https://www.law.cornell.edu/uscode/text/14/102" },
      ],
    },
  ],
};
'@

# Title 15: Commerce and Trade
Write-TitleFile 15 "Commerce and Trade" @'
import { TitleIndex } from "./titleTypes";

export const title15Index: TitleIndex = {
  titleNumber: 15,
  titleName: "Commerce and Trade",
  chapters: [
    {
      number: "1",
      name: "Monopolies and Combinations in Restraint of Trade",
      status: "active",
      sections: [
        { id: "15 U.S.C. § 1", label: "Sherman Act—Trusts in restraint of trade illegal", href: "https://www.law.cornell.edu/uscode/text/15/1" },
        { id: "15 U.S.C. § 2", label: "Monopolizing trade a felony", href: "https://www.law.cornell.edu/uscode/text/15/2" },
      ],
    },
    {
      number: "2",
      name: "Federal Trade Commission; Promotion of Export Trade and Prevention of Unfair Methods of Competition",
      status: "active",
      sections: [
        { id: "15 U.S.C. § 41", label: "Federal Trade Commission established", href: "https://www.law.cornell.edu/uscode/text/15/41" },
        { id: "15 U.S.C. § 45", label: "Unfair methods of competition unlawful", href: "https://www.law.cornell.edu/uscode/text/15/45" },
      ],
    },
    {
      number: "47",
      name: "Consumer Product Safety",
      status: "active",
      sections: [
        { id: "15 U.S.C. § 2051", label: "Congressional findings and declaration of purpose", href: "https://www.law.cornell.edu/uscode/text/15/2051" },
      ],
    },
  ],
};
'@

# Title 16: Conservation
Write-TitleFile 16 "Conservation" @'
import { TitleIndex } from "./titleTypes";

export const title16Index: TitleIndex = {
  titleNumber: 16,
  titleName: "Conservation",
  chapters: [
    {
      number: "1",
      name: "National Parks, Military Parks, Monuments, and Seashores",
      status: "active",
      sections: [
        { id: "16 U.S.C. § 1", label: "National Park Service; establishment", href: "https://www.law.cornell.edu/uscode/text/16/1" },
      ],
    },
    {
      number: "35",
      name: "Endangered Species",
      status: "active",
      sections: [
        { id: "16 U.S.C. § 1531", label: "Congressional findings and declaration of purposes", href: "https://www.law.cornell.edu/uscode/text/16/1531" },
        { id: "16 U.S.C. § 1538", label: "Prohibited acts", href: "https://www.law.cornell.edu/uscode/text/16/1538" },
      ],
    },
  ],
};
'@

# Title 17: Copyrights
Write-TitleFile 17 "Copyrights" @'
import { TitleIndex } from "./titleTypes";

export const title17Index: TitleIndex = {
  titleNumber: 17,
  titleName: "Copyrights",
  chapters: [
    {
      number: "1",
      name: "Subject Matter and Scope of Copyright",
      status: "active",
      sections: [
        { id: "17 U.S.C. § 102", label: "Subject matter of copyright", href: "https://www.law.cornell.edu/uscode/text/17/102" },
        { id: "17 U.S.C. § 106", label: "Exclusive rights in copyrighted works", href: "https://www.law.cornell.edu/uscode/text/17/106" },
        { id: "17 U.S.C. § 107", label: "Fair use", href: "https://www.law.cornell.edu/uscode/text/17/107" },
      ],
    },
    {
      number: "5",
      name: "Copyright Infringement and Remedies",
      status: "active",
      sections: [
        { id: "17 U.S.C. § 501", label: "Infringement of copyright", href: "https://www.law.cornell.edu/uscode/text/17/501" },
        { id: "17 U.S.C. § 504", label: "Remedies for infringement: Damages and profits", href: "https://www.law.cornell.edu/uscode/text/17/504" },
      ],
    },
  ],
};
'@

# Title 18: Crimes and Criminal Procedure
Write-TitleFile 18 "Crimes and Criminal Procedure" @'
import { TitleIndex } from "./titleTypes";

export const title18Index: TitleIndex = {
  titleNumber: 18,
  titleName: "Crimes and Criminal Procedure",
  chapters: [
    {
      number: "1",
      name: "General Provisions",
      status: "active",
      sections: [
        { id: "18 U.S.C. § 1", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/18/1" },
      ],
    },
    {
      number: "47",
      name: "Fraud and False Statements",
      status: "active",
      sections: [
        { id: "18 U.S.C. § 1001", label: "Statements or entries generally", href: "https://www.law.cornell.edu/uscode/text/18/1001" },
      ],
    },
    {
      number: "95",
      name: "Racketeering",
      status: "active",
      sections: [
        { id: "18 U.S.C. § 1961", label: "RICO definitions", href: "https://www.law.cornell.edu/uscode/text/18/1961" },
        { id: "18 U.S.C. § 1962", label: "Prohibited activities", href: "https://www.law.cornell.edu/uscode/text/18/1962" },
      ],
    },
  ],
};
'@

# Title 19: Customs Duties
Write-TitleFile 19 "Customs Duties" @'
import { TitleIndex } from "./titleTypes";

export const title19Index: TitleIndex = {
  titleNumber: 19,
  titleName: "Customs Duties",
  chapters: [
    {
      number: "4",
      name: "Tariff Act of 1930",
      status: "active",
      sections: [
        { id: "19 U.S.C. § 1202", label: "Harmonized Tariff Schedule", href: "https://www.law.cornell.edu/uscode/text/19/1202" },
        { id: "19 U.S.C. § 1337", label: "Unfair practices in import trade", href: "https://www.law.cornell.edu/uscode/text/19/1337" },
      ],
    },
  ],
};
'@

# Title 20: Education
Write-TitleFile 20 "Education" @'
import { TitleIndex } from "./titleTypes";

export const title20Index: TitleIndex = {
  titleNumber: 20,
  titleName: "Education",
  chapters: [
    {
      number: "28",
      name: "Higher Education Resources and Student Assistance",
      status: "active",
      sections: [
        { id: "20 U.S.C. § 1001", label: "General definition of institution of higher education", href: "https://www.law.cornell.edu/uscode/text/20/1001" },
      ],
    },
    {
      number: "70",
      name: "Strengthening and Improvement of Elementary and Secondary Schools",
      status: "active",
      sections: [
        { id: "20 U.S.C. § 6301", label: "Statement of purpose", href: "https://www.law.cornell.edu/uscode/text/20/6301" },
      ],
    },
  ],
};
'@

# Title 21: Food and Drugs
Write-TitleFile 21 "Food and Drugs" @'
import { TitleIndex } from "./titleTypes";

export const title21Index: TitleIndex = {
  titleNumber: 21,
  titleName: "Food and Drugs",
  chapters: [
    {
      number: "9",
      name: "Federal Food, Drug, and Cosmetic Act",
      status: "active",
      sections: [
        { id: "21 U.S.C. § 301", label: "Short title", href: "https://www.law.cornell.edu/uscode/text/21/301" },
        { id: "21 U.S.C. § 321", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/21/321" },
        { id: "21 U.S.C. § 331", label: "Prohibited acts", href: "https://www.law.cornell.edu/uscode/text/21/331" },
      ],
    },
    {
      number: "13",
      name: "Drug Abuse Prevention and Control",
      status: "active",
      sections: [
        { id: "21 U.S.C. § 801", label: "Congressional findings and declarations: controlled substances", href: "https://www.law.cornell.edu/uscode/text/21/801" },
        { id: "21 U.S.C. § 812", label: "Schedules of controlled substances", href: "https://www.law.cornell.edu/uscode/text/21/812" },
      ],
    },
  ],
};
'@

# Title 22: Foreign Relations and Intercourse
Write-TitleFile 22 "Foreign Relations and Intercourse" @'
import { TitleIndex } from "./titleTypes";

export const title22Index: TitleIndex = {
  titleNumber: 22,
  titleName: "Foreign Relations and Intercourse",
  chapters: [
    {
      number: "7",
      name: "International Bureaus, Congresses, etc.",
      status: "active",
      sections: [
        { id: "22 U.S.C. § 262", label: "United States participation in international financial institutions", href: "https://www.law.cornell.edu/uscode/text/22/262" },
      ],
    },
    {
      number: "32",
      name: "Foreign Assistance",
      status: "active",
      sections: [
        { id: "22 U.S.C. § 2151", label: "Congressional findings and declaration of policy", href: "https://www.law.cornell.edu/uscode/text/22/2151" },
      ],
    },
  ],
};
'@

# Title 23: Highways
Write-TitleFile 23 "Highways" @'
import { TitleIndex } from "./titleTypes";

export const title23Index: TitleIndex = {
  titleNumber: 23,
  titleName: "Highways",
  chapters: [
    {
      number: "1",
      name: "Federal-Aid Highways",
      status: "active",
      sections: [
        { id: "23 U.S.C. § 101", label: "Definitions and declaration of policy", href: "https://www.law.cornell.edu/uscode/text/23/101" },
        { id: "23 U.S.C. § 103", label: "National Highway System", href: "https://www.law.cornell.edu/uscode/text/23/103" },
      ],
    },
  ],
};
'@

# Title 24: Hospitals and Asylums
Write-TitleFile 24 "Hospitals and Asylums" @'
import { TitleIndex } from "./titleTypes";

export const title24Index: TitleIndex = {
  titleNumber: 24,
  titleName: "Hospitals and Asylums",
  chapters: [
    {
      number: "1",
      name: "Navy Hospitals, Army and Navy Hospital, and Hospital Relief for Seamen and Others",
      status: "active",
      sections: [
        { id: "24 U.S.C. § 1", label: "Regulations for Army and Navy Hospital", href: "https://www.law.cornell.edu/uscode/text/24/1" },
      ],
    },
  ],
};
'@

# Title 25: Indians
Write-TitleFile 25 "Indians" @'
import { TitleIndex } from "./titleTypes";

export const title25Index: TitleIndex = {
  titleNumber: 25,
  titleName: "Indians",
  chapters: [
    {
      number: "18",
      name: "Indian Health Care",
      status: "active",
      sections: [
        { id: "25 U.S.C. § 1601", label: "Congressional findings", href: "https://www.law.cornell.edu/uscode/text/25/1601" },
      ],
    },
  ],
};
'@

# Title 26: Internal Revenue Code
Write-TitleFile 26 "Internal Revenue Code" @'
import { TitleIndex } from "./titleTypes";

export const title26Index: TitleIndex = {
  titleNumber: 26,
  titleName: "Internal Revenue Code",
  chapters: [
    {
      number: "1",
      name: "Normal Taxes and Surtaxes",
      status: "active",
      sections: [
        { id: "26 U.S.C. § 1", label: "Tax imposed", href: "https://www.law.cornell.edu/uscode/text/26/1" },
        { id: "26 U.S.C. § 61", label: "Gross income defined", href: "https://www.law.cornell.edu/uscode/text/26/61" },
      ],
    },
    {
      number: "11",
      name: "Estate Tax",
      status: "active",
      sections: [
        { id: "26 U.S.C. § 2001", label: "Imposition and rate of tax", href: "https://www.law.cornell.edu/uscode/text/26/2001" },
      ],
    },
  ],
};
'@

# Title 27: Intoxicating Liquors
Write-TitleFile 27 "Intoxicating Liquors" @'
import { TitleIndex } from "./titleTypes";

export const title27Index: TitleIndex = {
  titleNumber: 27,
  titleName: "Intoxicating Liquors",
  chapters: [
    {
      number: "8",
      name: "Federal Alcohol Administration Act",
      status: "active",
      sections: [
        { id: "27 U.S.C. § 201", label: "Short title", href: "https://www.law.cornell.edu/uscode/text/27/201" },
        { id: "27 U.S.C. § 203", label: "Unlawful businesses without permit", href: "https://www.law.cornell.edu/uscode/text/27/203" },
      ],
    },
  ],
};
'@

# Title 28: Judiciary and Judicial Procedure
Write-TitleFile 28 "Judiciary and Judicial Procedure" @'
import { TitleIndex } from "./titleTypes";

export const title28Index: TitleIndex = {
  titleNumber: 28,
  titleName: "Judiciary and Judicial Procedure",
  chapters: [
    {
      number: "1",
      name: "Supreme Court",
      status: "active",
      sections: [
        { id: "28 U.S.C. § 1", label: "Number of justices; quorum", href: "https://www.law.cornell.edu/uscode/text/28/1" },
      ],
    },
    {
      number: "85",
      name: "District Courts; Jurisdiction",
      status: "active",
      sections: [
        { id: "28 U.S.C. § 1331", label: "Federal question", href: "https://www.law.cornell.edu/uscode/text/28/1331" },
        { id: "28 U.S.C. § 1332", label: "Diversity of citizenship", href: "https://www.law.cornell.edu/uscode/text/28/1332" },
      ],
    },
  ],
};
'@

# Title 29: Labor
Write-TitleFile 29 "Labor" @'
import { TitleIndex } from "./titleTypes";

export const title29Index: TitleIndex = {
  titleNumber: 29,
  titleName: "Labor",
  chapters: [
    {
      number: "7",
      name: "Labor-Management Relations",
      status: "active",
      sections: [
        { id: "29 U.S.C. § 141", label: "Short title; Congressional declaration of purpose", href: "https://www.law.cornell.edu/uscode/text/29/141" },
        { id: "29 U.S.C. § 158", label: "Unfair labor practices", href: "https://www.law.cornell.edu/uscode/text/29/158" },
      ],
    },
    {
      number: "18",
      name: "Employee Retirement Income Security Program",
      status: "active",
      sections: [
        { id: "29 U.S.C. § 1001", label: "Congressional findings and declaration of policy", href: "https://www.law.cornell.edu/uscode/text/29/1001" },
      ],
    },
  ],
};
'@

# Title 30: Mineral Lands and Mining
Write-TitleFile 30 "Mineral Lands and Mining" @'
import { TitleIndex } from "./titleTypes";

export const title30Index: TitleIndex = {
  titleNumber: 30,
  titleName: "Mineral Lands and Mining",
  chapters: [
    {
      number: "25",
      name: "Surface Mining Control and Reclamation",
      status: "active",
      sections: [
        { id: "30 U.S.C. § 1201", label: "Congressional findings", href: "https://www.law.cornell.edu/uscode/text/30/1201" },
      ],
    },
  ],
};
'@

# Title 31: Money and Finance
Write-TitleFile 31 "Money and Finance" @'
import { TitleIndex } from "./titleTypes";

export const title31Index: TitleIndex = {
  titleNumber: 31,
  titleName: "Money and Finance",
  chapters: [
    {
      number: "53",
      name: "Monetary Transactions",
      status: "active",
      sections: [
        { id: "31 U.S.C. § 5311", label: "Declaration of purpose", href: "https://www.law.cornell.edu/uscode/text/31/5311" },
        { id: "31 U.S.C. § 5318", label: "Compliance, exemptions, and summons authority", href: "https://www.law.cornell.edu/uscode/text/31/5318" },
      ],
    },
  ],
};
'@

# Title 32: National Guard
Write-TitleFile 32 "National Guard" @'
import { TitleIndex } from "./titleTypes";

export const title32Index: TitleIndex = {
  titleNumber: 32,
  titleName: "National Guard",
  chapters: [
    {
      number: "1",
      name: "Organization",
      status: "active",
      sections: [
        { id: "32 U.S.C. § 101", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/32/101" },
      ],
    },
  ],
};
'@

# Title 33: Navigation and Navigable Waters
Write-TitleFile 33 "Navigation and Navigable Waters" @'
import { TitleIndex } from "./titleTypes";

export const title33Index: TitleIndex = {
  titleNumber: 33,
  titleName: "Navigation and Navigable Waters",
  chapters: [
    {
      number: "26",
      name: "Water Pollution Prevention and Control",
      status: "active",
      sections: [
        { id: "33 U.S.C. § 1251", label: "Congressional declaration of goals and policy", href: "https://www.law.cornell.edu/uscode/text/33/1251" },
        { id: "33 U.S.C. § 1311", label: "Effluent limitations", href: "https://www.law.cornell.edu/uscode/text/33/1311" },
      ],
    },
  ],
};
'@

# Title 34: Crime Control and Law Enforcement
Write-TitleFile 34 "Crime Control and Law Enforcement" @'
import { TitleIndex } from "./titleTypes";

export const title34Index: TitleIndex = {
  titleNumber: 34,
  titleName: "Crime Control and Law Enforcement",
  chapters: [
    {
      number: "101",
      name: "Justice System Improvement",
      status: "active",
      sections: [
        { id: "34 U.S.C. § 10101", label: "Description", href: "https://www.law.cornell.edu/uscode/text/34/10101" },
      ],
    },
  ],
};
'@

# Title 35: Patents
Write-TitleFile 35 "Patents" @'
import { TitleIndex } from "./titleTypes";

export const title35Index: TitleIndex = {
  titleNumber: 35,
  titleName: "Patents",
  chapters: [
    {
      number: "10",
      name: "Patentability of Inventions",
      status: "active",
      sections: [
        { id: "35 U.S.C. § 101", label: "Inventions patentable", href: "https://www.law.cornell.edu/uscode/text/35/101" },
        { id: "35 U.S.C. § 102", label: "Conditions for patentability; novelty", href: "https://www.law.cornell.edu/uscode/text/35/102" },
        { id: "35 U.S.C. § 103", label: "Conditions for patentability; non-obvious subject matter", href: "https://www.law.cornell.edu/uscode/text/35/103" },
      ],
    },
  ],
};
'@

# Title 36: Patriotic and National Observances, Ceremonies, and Organizations
Write-TitleFile 36 "Patriotic and National Observances, Ceremonies, and Organizations" @'
import { TitleIndex } from "./titleTypes";

export const title36Index: TitleIndex = {
  titleNumber: 36,
  titleName: "Patriotic and National Observances, Ceremonies, and Organizations",
  chapters: [
    {
      number: "1",
      name: "Patriotic and National Observances and Ceremonies",
      status: "active",
      sections: [
        { id: "36 U.S.C. § 101", label: "American Heart Month", href: "https://www.law.cornell.edu/uscode/text/36/101" },
      ],
    },
  ],
};
'@

# Title 37: Pay and Allowances of the Uniformed Services
Write-TitleFile 37 "Pay and Allowances of the Uniformed Services" @'
import { TitleIndex } from "./titleTypes";

export const title37Index: TitleIndex = {
  titleNumber: 37,
  titleName: "Pay and Allowances of the Uniformed Services",
  chapters: [
    {
      number: "3",
      name: "Basic Pay and Special Pay",
      status: "active",
      sections: [
        { id: "37 U.S.C. § 201", label: "Pay grades: assignment to; general rules", href: "https://www.law.cornell.edu/uscode/text/37/201" },
      ],
    },
  ],
};
'@

# Title 38: Veterans' Benefits
Write-TitleFile 38 "Veterans' Benefits" @'
import { TitleIndex } from "./titleTypes";

export const title38Index: TitleIndex = {
  titleNumber: 38,
  titleName: "Veterans' Benefits",
  chapters: [
    {
      number: "11",
      name: "Compensation for Service-Connected Disability or Death",
      status: "active",
      sections: [
        { id: "38 U.S.C. § 1110", label: "Basic entitlement", href: "https://www.law.cornell.edu/uscode/text/38/1110" },
      ],
    },
    {
      number: "17",
      name: "Hospital, Nursing Home, Domiciliary, and Medical Care",
      status: "active",
      sections: [
        { id: "38 U.S.C. § 1710", label: "Eligibility for hospital, nursing home, and domiciliary care", href: "https://www.law.cornell.edu/uscode/text/38/1710" },
      ],
    },
  ],
};
'@

# Title 39: Postal Service
Write-TitleFile 39 "Postal Service" @'
import { TitleIndex } from "./titleTypes";

export const title39Index: TitleIndex = {
  titleNumber: 39,
  titleName: "Postal Service",
  chapters: [
    {
      number: "1",
      name: "General",
      status: "active",
      sections: [
        { id: "39 U.S.C. § 101", label: "Postal policy", href: "https://www.law.cornell.edu/uscode/text/39/101" },
      ],
    },
  ],
};
'@

# Title 40: Public Buildings, Property, and Works
Write-TitleFile 40 "Public Buildings, Property, and Works" @'
import { TitleIndex } from "./titleTypes";

export const title40Index: TitleIndex = {
  titleNumber: 40,
  titleName: "Public Buildings, Property, and Works",
  chapters: [
    {
      number: "1",
      name: "General",
      status: "active",
      sections: [
        { id: "40 U.S.C. § 101", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/40/101" },
      ],
    },
  ],
};
'@

# Title 41: Public Contracts
Write-TitleFile 41 "Public Contracts" @'
import { TitleIndex } from "./titleTypes";

export const title41Index: TitleIndex = {
  titleNumber: 41,
  titleName: "Public Contracts",
  chapters: [
    {
      number: "1",
      name: "Definitions",
      status: "active",
      sections: [
        { id: "41 U.S.C. § 101", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/41/101" },
      ],
    },
  ],
};
'@

# Title 42: The Public Health and Welfare
Write-TitleFile 42 "The Public Health and Welfare" @'
import { TitleIndex } from "./titleTypes";

export const title42Index: TitleIndex = {
  titleNumber: 42,
  titleName: "The Public Health and Welfare",
  chapters: [
    {
      number: "6A",
      name: "Public Health Service",
      status: "active",
      sections: [
        { id: "42 U.S.C. § 201", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/42/201" },
      ],
    },
    {
      number: "7",
      name: "Social Security",
      status: "active",
      sections: [
        { id: "42 U.S.C. § 301", label: "Authorization of appropriations", href: "https://www.law.cornell.edu/uscode/text/42/301" },
        { id: "42 U.S.C. § 401", label: "Trust Funds", href: "https://www.law.cornell.edu/uscode/text/42/401" },
      ],
    },
    {
      number: "21",
      name: "Civil Rights",
      status: "active",
      sections: [
        { id: "42 U.S.C. § 1983", label: "Civil action for deprivation of rights", href: "https://www.law.cornell.edu/uscode/text/42/1983" },
        { id: "42 U.S.C. § 2000e", label: "Definitions (Title VII)", href: "https://www.law.cornell.edu/uscode/text/42/2000e" },
      ],
    },
  ],
};
'@

# Title 43: Public Lands
Write-TitleFile 43 "Public Lands" @'
import { TitleIndex } from "./titleTypes";

export const title43Index: TitleIndex = {
  titleNumber: 43,
  titleName: "Public Lands",
  chapters: [
    {
      number: "2",
      name: "United States Geological Survey",
      status: "active",
      sections: [
        { id: "43 U.S.C. § 31", label: "Director; appointment", href: "https://www.law.cornell.edu/uscode/text/43/31" },
      ],
    },
  ],
};
'@

# Title 44: Public Printing and Documents
Write-TitleFile 44 "Public Printing and Documents" @'
import { TitleIndex } from "./titleTypes";

export const title44Index: TitleIndex = {
  titleNumber: 44,
  titleName: "Public Printing and Documents",
  chapters: [
    {
      number: "1",
      name: "Congressional Printing",
      status: "active",
      sections: [
        { id: "44 U.S.C. § 101", label: "Government Publishing Office: director", href: "https://www.law.cornell.edu/uscode/text/44/101" },
      ],
    },
    {
      number: "35",
      name: "Coordination of Federal Information Policy",
      status: "active",
      sections: [
        { id: "44 U.S.C. § 3501", label: "Purposes", href: "https://www.law.cornell.edu/uscode/text/44/3501" },
      ],
    },
  ],
};
'@

# Title 45: Railroads
Write-TitleFile 45 "Railroads" @'
import { TitleIndex } from "./titleTypes";

export const title45Index: TitleIndex = {
  titleNumber: 45,
  titleName: "Railroads",
  chapters: [
    {
      number: "2",
      name: "Liability for Injuries to Employees",
      status: "active",
      sections: [
        { id: "45 U.S.C. § 51", label: "Liability of common carriers by railroad", href: "https://www.law.cornell.edu/uscode/text/45/51" },
      ],
    },
  ],
};
'@

# Title 46: Shipping
Write-TitleFile 46 "Shipping" @'
import { TitleIndex } from "./titleTypes";

export const title46Index: TitleIndex = {
  titleNumber: 46,
  titleName: "Shipping",
  chapters: [
    {
      number: "1",
      name: "Definitions",
      status: "active",
      sections: [
        { id: "46 U.S.C. § 101", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/46/101" },
      ],
    },
  ],
};
'@

# Title 47: Telecommunications
Write-TitleFile 47 "Telecommunications" @'
import { TitleIndex } from "./titleTypes";

export const title47Index: TitleIndex = {
  titleNumber: 47,
  titleName: "Telecommunications",
  chapters: [
    {
      number: "5",
      name: "Wire or Radio Communication",
      status: "active",
      sections: [
        { id: "47 U.S.C. § 151", label: "Purposes of chapter; Federal Communications Commission created", href: "https://www.law.cornell.edu/uscode/text/47/151" },
        { id: "47 U.S.C. § 230", label: "Protection for private blocking and screening of offensive material", href: "https://www.law.cornell.edu/uscode/text/47/230" },
      ],
    },
  ],
};
'@

# Title 48: Territories and Insular Possessions
Write-TitleFile 48 "Territories and Insular Possessions" @'
import { TitleIndex } from "./titleTypes";

export const title48Index: TitleIndex = {
  titleNumber: 48,
  titleName: "Territories and Insular Possessions",
  chapters: [
    {
      number: "2",
      name: "Alaska",
      status: "active",
      sections: [
        { id: "48 U.S.C. § 21", label: "Jurisdiction of district court", href: "https://www.law.cornell.edu/uscode/text/48/21" },
      ],
    },
  ],
};
'@

# Title 49: Transportation
Write-TitleFile 49 "Transportation" @'
import { TitleIndex } from "./titleTypes";

export const title49Index: TitleIndex = {
  titleNumber: 49,
  titleName: "Transportation",
  chapters: [
    {
      number: "1",
      name: "Department of Transportation",
      status: "active",
      sections: [
        { id: "49 U.S.C. § 101", label: "Purpose", href: "https://www.law.cornell.edu/uscode/text/49/101" },
        { id: "49 U.S.C. § 102", label: "Department of Transportation", href: "https://www.law.cornell.edu/uscode/text/49/102" },
      ],
    },
    {
      number: "449",
      name: "Transportation Security Administration",
      status: "active",
      sections: [
        { id: "49 U.S.C. § 114", label: "Transportation Security Administration", href: "https://www.law.cornell.edu/uscode/text/49/114" },
      ],
    },
  ],
};
'@

# Title 50: War and National Defense
Write-TitleFile 50 "War and National Defense" @'
import { TitleIndex } from "./titleTypes";

export const title50Index: TitleIndex = {
  titleNumber: 50,
  titleName: "War and National Defense",
  chapters: [
    {
      number: "15",
      name: "National Security",
      status: "active",
      sections: [
        { id: "50 U.S.C. § 3001", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/50/3001" },
        { id: "50 U.S.C. § 3024", label: "Director of National Intelligence", href: "https://www.law.cornell.edu/uscode/text/50/3024" },
      ],
    },
    {
      number: "35",
      name: "International Emergency Economic Powers",
      status: "active",
      sections: [
        { id: "50 U.S.C. § 1701", label: "Unusual and extraordinary threat; declaration of national emergency", href: "https://www.law.cornell.edu/uscode/text/50/1701" },
      ],
    },
  ],
};
'@

# Title 51: National and Commercial Space Programs
Write-TitleFile 51 "National and Commercial Space Programs" @'
import { TitleIndex } from "./titleTypes";

export const title51Index: TitleIndex = {
  titleNumber: 51,
  titleName: "National and Commercial Space Programs",
  chapters: [
    {
      number: "201",
      name: "National Aeronautics and Space Administration",
      status: "active",
      sections: [
        { id: "51 U.S.C. § 20111", label: "National Aeronautics and Space Administration", href: "https://www.law.cornell.edu/uscode/text/51/20111" },
      ],
    },
  ],
};
'@

# Title 52: Voting and Elections
Write-TitleFile 52 "Voting and Elections" @'
import { TitleIndex } from "./titleTypes";

export const title52Index: TitleIndex = {
  titleNumber: 52,
  titleName: "Voting and Elections",
  chapters: [
    {
      number: "20",
      name: "Election Administration Improvement",
      status: "active",
      sections: [
        { id: "52 U.S.C. § 20901", label: "Purposes", href: "https://www.law.cornell.edu/uscode/text/52/20901" },
      ],
    },
    {
      number: "29",
      name: "National Voter Registration",
      status: "active",
      sections: [
        { id: "52 U.S.C. § 20501", label: "Findings and purposes", href: "https://www.law.cornell.edu/uscode/text/52/20501" },
      ],
    },
  ],
};
'@

# Title 53: Small Business
Write-TitleFile 53 "Small Business" @'
import { TitleIndex } from "./titleTypes";

export const title53Index: TitleIndex = {
  titleNumber: 53,
  titleName: "Small Business",
  chapters: [
    {
      number: "1",
      name: "Small Business Administration",
      status: "active",
      sections: [
        { id: "15 U.S.C. § 631", label: "Declaration of policy", href: "https://www.law.cornell.edu/uscode/text/15/631" },
      ],
    },
  ],
};
'@

# Title 54: National Park Service and Related Programs
Write-TitleFile 54 "National Park Service and Related Programs" @'
import { TitleIndex } from "./titleTypes";

export const title54Index: TitleIndex = {
  titleNumber: 54,
  titleName: "National Park Service and Related Programs",
  chapters: [
    {
      number: "1",
      name: "General Provisions",
      status: "active",
      sections: [
        { id: "54 U.S.C. § 100101", label: "Promotion and regulation", href: "https://www.law.cornell.edu/uscode/text/54/100101" },
      ],
    },
  ],
};
'@

Write-Host "`nAll title indexes (7–54) have been populated." -ForegroundColor Cyan
Write-Host "Review the files in src/app/lib and commit when ready." -ForegroundColor Cyan