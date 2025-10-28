# USC Implementation - File Structure

## Directory Tree

```
The-Law-Says.Com/
│
├── src/
│   ├── data/
│   │   └── usc.js                    ← USC data (all 54 titles)
│   │
│   └── pages/
│       └── federal/
│           ├── index.js              ← Updated with USC button
│           │
│           └── usc/
│               ├── index.js          ← USC Index (all titles)
│               ├── [titleId].js      ← Title detail page
│               │
│               └── [titleId]/
│                   ├── [chapterId].js           ← Chapter detail page
│                   │
│                   └── [chapterId]/
│                       └── [sectionId].js       ← Section detail page
│
├── USC-IMPLEMENTATION.md             ← Documentation
└── README.md
```

## URL Routing Structure

```
/federal/usc
    ↓
/federal/usc/[titleId]
    ↓
/federal/usc/[titleId]/[chapterId]
    ↓
/federal/usc/[titleId]/[chapterId]/[sectionId]
```

## Example Navigation Flow

```
Federal Page
    ↓ (Click "United States Code (USC)")
USC Index - All 54 Titles
    ↓ (Click "Title 18: Crimes and Criminal Procedure")
Title 18 Page - Shows all chapters
    ↓ (Click "Chapter 47: Fraud and False Statements")
Chapter 47 Page - Shows all sections
    ↓ (Click "Section 1001")
Section 1001 Page - Shows full text with subsections
    Citation: 18 U.S.C. § 1001
```

## Data Flow

```
XML Files (usc-xml-data/)
    ↓ (parse-usc.js)
JSON Files (usc-json-data/)
    ↓ (import)
src/data/usc.js
    ↓ (import)
USC Pages (render)
```

## Component Hierarchy

```
Layout
  └── USC Index Page
      └── LawItem (x54 titles)
          └── Link to Title Page
              └── Title Page
                  └── Chapter List
                      └── Link to Chapter Page
                          └── Chapter Page
                              └── Section List
                                  └── Link to Section Page
                                      └── Section Page
                                          └── Section Content
                                              ├── Heading
                                              ├── Text
                                              └── Subsections
```

## Styling Classes Used

- `.missionTitle` - Page titles
- `.missionText` - Descriptive text
- `.buttonContainer` - Button grid layout
- `.actionButton` - Navigation buttons
- `.infoBox` - Information boxes (red border)
- `.contentBox` - Content display boxes
- `.subtitle` - Subtitle text
- `.container` - Page container
- `.sectionRow` - Section row layout
- `.sectionNumber` - Section numbers
- `.sectionDescription` - Section descriptions
