# scripts\populate-titles-1-to-5.ps1
# Writes title1Index.ts through title5Index.ts to src/app/lib
param([switch]$Force)

$root = (Get-Location).Path
$lib = Join-Path $root "src\app\lib"

if (-not (Test-Path $lib)) {
  Write-Host "Error: src/app/lib not found. Run from project root." -ForegroundColor Red
  exit 1
}

function Write-TitleFile([int]$n, [string]$content) {
  $file = Join-Path $lib ("title{0}Index.ts" -f $n)
  if ((Test-Path $file) -and -not $Force) {
    Write-Host ("SKIP (exists): title{0}Index.ts (use -Force to overwrite)" -f $n) -ForegroundColor Yellow
    return
  }
  $content | Out-File -FilePath $file -Encoding utf8 -Force
  Write-Host ("Written: title{0}Index.ts" -f $n) -ForegroundColor Green
}

# Title 1: General Provisions
Write-TitleFile 1 @'
import { TitleIndex } from "./titleTypes";

export const title1Index: TitleIndex = {
  titleNumber: 1,
  titleName: "General Provisions",
  chapters: [
    {
      number: "1",
      name: "Rules of Construction",
      status: "active",
      sections: [
        { id: "1 U.S.C. § 1", label: "Words denoting number, gender, etc.", href: "https://www.law.cornell.edu/uscode/text/1/1" },
        { id: "1 U.S.C. § 7", label: "Definition of 'marriage' and 'spouse' (historical)", href: "https://www.law.cornell.edu/uscode/text/1/7" }
      ]
    },
    {
      number: "2",
      name: "Acts and Resolutions; Formalities of Enactment",
      status: "active",
      sections: [
        { id: "1 U.S.C. § 106", label: "Enactment of statutes", href: "https://www.law.cornell.edu/uscode/text/1/106" }
      ]
    },
    {
      number: "3",
      name: "Code of Laws of United States and Supplements",
      status: "active",
      sections: [
        { id: "1 U.S.C. § 204", label: "Codes and Supplements as prima facie evidence of the laws", href: "https://www.law.cornell.edu/uscode/text/1/204" }
      ]
    }
  ]
};
'@

# Title 2: The Congress
Write-TitleFile 2 @'
import { TitleIndex } from "./titleTypes";

export const title2Index: TitleIndex = {
  titleNumber: 2,
  titleName: "The Congress",
  chapters: [
    {
      number: "1",
      name: "Election of Senators and Representatives",
      status: "active",
      sections: [
        { id: "2 U.S.C. § 1", label: "Time for election of Senators", href: "https://www.law.cornell.edu/uscode/text/2/1" }
      ]
    },
    {
      number: "28",
      name: "Architect of the Capitol",
      status: "active",
      sections: [
        { id: "2 U.S.C. § 1801", label: "Organization of Office of the Architect of the Capitol", href: "https://www.law.cornell.edu/uscode/text/2/1801" }
      ]
    },
    {
      number: "47",
      name: "Congressional Accountability Act of 1995",
      status: "active",
      sections: [
        { id: "2 U.S.C. § 1301", label: "Short title; purposes", href: "https://www.law.cornell.edu/uscode/text/2/1301" }
      ]
    }
  ]
};
'@

# Title 3: The President
Write-TitleFile 3 @'
import { TitleIndex } from "./titleTypes";

export const title3Index: TitleIndex = {
  titleNumber: 3,
  titleName: "The President",
  chapters: [
    {
      number: "1",
      name: "Presidential Elections and Vacancies",
      status: "active",
      sections: [
        { id: "3 U.S.C. § 1", label: "Time of appointing electors", href: "https://www.law.cornell.edu/uscode/text/3/1" },
        { id: "3 U.S.C. § 19", label: "Vacancy in offices of both President and Vice President; officers eligible to act", href: "https://www.law.cornell.edu/uscode/text/3/19" }
      ]
    },
    {
      number: "2",
      name: "Office and Compensation of President",
      status: "active",
      sections: [
        { id: "3 U.S.C. § 102", label: "Compensation of the President", href: "https://www.law.cornell.edu/uscode/text/3/102" }
      ]
    }
  ]
};
'@

# Title 4: Flag and Seal, Seat of Government, and the States
Write-TitleFile 4 @'
import { TitleIndex } from "./titleTypes";

export const title4Index: TitleIndex = {
  titleNumber: 4,
  titleName: "Flag and Seal, Seat of Government, and the States",
  chapters: [
    {
      number: "1",
      name: "The Flag",
      status: "active",
      sections: [
        { id: "4 U.S.C. § 1", label: "Flag; stripes and stars on", href: "https://www.law.cornell.edu/uscode/text/4/1" },
        { id: "4 U.S.C. § 8", label: "Respect for flag", href: "https://www.law.cornell.edu/uscode/text/4/8" }
      ]
    },
    {
      number: "3",
      name: "Use of the Seal of the United States",
      status: "active",
      sections: [
        { id: "4 U.S.C. § 41", label: "Seal; custody and use of", href: "https://www.law.cornell.edu/uscode/text/4/41" }
      ]
    },
    {
      number: "4",
      name: "The States",
      status: "active",
      sections: [
        { id: "4 U.S.C. § 111", label: "Consent of United States to income taxation of Federal employees", href: "https://www.law.cornell.edu/uscode/text/4/111" },
        { id: "4 U.S.C. § 112", label: "Compacts between States", href: "https://www.law.cornell.edu/uscode/text/4/112" }
      ]
    }
  ]
};
'@

# Title 5: Government Organization and Employees
Write-TitleFile 5 @'
import { TitleIndex } from "./titleTypes";

export const title5Index: TitleIndex = {
  titleNumber: 5,
  titleName: "Government Organization and Employees",
  chapters: [
    {
      number: "5",
      name: "Administrative Procedure",
      status: "active",
      sections: [
        { id: "5 U.S.C. § 551", label: "Definitions", href: "https://www.law.cornell.edu/uscode/text/5/551" },
        { id: "5 U.S.C. § 553", label: "Rule making", href: "https://www.law.cornell.edu/uscode/text/5/553" },
        { id: "5 U.S.C. § 706", label: "Scope of review", href: "https://www.law.cornell.edu/uscode/text/5/706" }
      ]
    },
    {
      number: "71",
      name: "Labor-Management Relations",
      status: "active",
      sections: [
        { id: "5 U.S.C. § 7101", label: "Findings and purpose", href: "https://www.law.cornell.edu/uscode/text/5/7101" }
      ]
    },
    {
      number: "72",
      name: "Antidiscrimination, Right to Petition, & Related Procedures",
      status: "active",
      sections: [
        { id: "5 U.S.C. § 7201", label: "Antidiscrimination policy; minority recruitment program", href: "https://www.law.cornell.edu/uscode/text/5/7201" }
      ]
    }
  ]
};
'@

Write-Host "`nTitles 1-5 populated." -ForegroundColor Cyan
Write-Host "Review src/app/lib/title1Index.ts ... title5Index.ts and commit." -ForegroundColor Cyan