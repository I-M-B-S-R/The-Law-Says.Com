# United States Code (USC) Implementation

## Overview
This document describes the implementation of the United States Code (USC) navigation system for The-Law-Says.Com Federal page.

## What Has Been Implemented

### 1. Data Structure (`src/data/usc.js`)
- Created a comprehensive list of all 54 USC titles with their descriptions
- Helper function `getUSCTitle()` to retrieve title information
- Placeholders for chapter and section data to be populated from XML parsing

### 2. Page Structure

#### USC Index Page (`/federal/usc`)
- Displays all 54 USC titles in a grid layout
- Each title is clickable and links to its detail page
- Uses the existing LawItem component for consistent styling

#### USC Title Page (`/federal/usc/[titleId]`)
- Shows information about a specific USC title
- Displays the title number and description
- Placeholder for chapter listings (to be populated from parsed XML data)
- Back button to return to USC index

#### USC Chapter Page (`/federal/usc/[titleId]/[chapterId]`)
- Shows information about a specific chapter within a title
- Placeholder for section listings (to be populated from parsed XML data)
- Breadcrumb navigation back to the title page

#### USC Section Page (`/federal/usc/[titleId]/[chapterId]/[sectionId]`)
- Displays a specific section of the USC
- Shows proper legal citation format (e.g., "18 U.S.C. § 1001")
- Placeholder for full section text including subsections
- Instructions on how to load actual USC data
- Breadcrumb navigation back to the chapter page

### 3. Navigation Integration
- Added "United States Code (USC)" button to the federal index page
- Button appears alongside Constitution, ADA Law, and Civil Rights buttons

### 4. Styling
- Added CSS styles for:
  - `.infoBox` - Information boxes with red borders
  - `.contentBox` - Content display boxes for section text
  - `.subtitle` - Subtitle styling for hierarchical information
  - `.container` - Container for USC pages

## URL Structure

The USC pages follow this hierarchical URL structure:

```
/federal/usc                                    → All USC Titles
/federal/usc/[titleId]                         → Specific Title
/federal/usc/[titleId]/[chapterId]             → Specific Chapter
/federal/usc/[titleId]/[chapterId]/[sectionId] → Specific Section
```

### Example URLs:
- `/federal/usc` - USC Index (all titles)
- `/federal/usc/18` - Title 18: Crimes and Criminal Procedure
- `/federal/usc/18/1` - Title 18, Chapter 1
- `/federal/usc/18/1/1001` - 18 U.S.C. § 1001

## How to Populate with Real USC Data

The current implementation has placeholder content. To populate it with actual USC data:

### Step 1: Download USC XML Data
```bash
node download-usc.js
```
This will download all USC titles as XML files to the `usc-xml-data` directory.

### Step 2: Parse USC XML Data
```bash
node parse-usc.js
```
This will parse the XML files and create JSON files in the `usc-json-data` directory.

### Step 3: Import Parsed Data
Update `src/data/usc.js` to import and structure the parsed JSON data:
- Add chapter data for each title
- Add section data for each chapter
- Add subsection data for each section

### Step 4: Update Pages
Modify the USC pages to display the actual data:
- Update `[titleId].js` to display chapters from the data
- Update `[chapterId].js` to display sections from the data
- Update `[sectionId].js` to display full section text with subsections

## USC Hierarchy

The United States Code follows this structure:

```
Title (1-54)
  └── Chapter
      └── Section (§)
          └── Subsection (a), (b), (c)...
              └── Paragraph (1), (2), (3)...
                  └── Subparagraph (A), (B), (C)...
                      └── Clause (i), (ii), (iii)...
```

## Legal Citation Format

The standard format for citing USC sections is:
- **Format:** `[Title] U.S.C. § [Section]`
- **Example:** `18 U.S.C. § 1001` (Title 18, Section 1001)

## Files Created/Modified

### New Files:
1. `src/data/usc.js` - USC data structure
2. `src/pages/federal/usc/index.js` - USC index page
3. `src/pages/federal/usc/[titleId].js` - USC title page
4. `src/pages/federal/usc/[titleId]/[chapterId].js` - USC chapter page
5. `src/pages/federal/usc/[titleId]/[chapterId]/[sectionId].js` - USC section page

### Modified Files:
1. `src/pages/federal/index.js` - Added USC button
2. `src/pages/HomePage.module.css` - Added USC-specific styles

## Next Steps

To complete the USC implementation:

1. **Parse and Import Data**: Run the download and parse scripts to get actual USC content
2. **Data Integration**: Update the data structure to include chapters, sections, and subsections
3. **Search Functionality**: Add search capability to find specific USC sections
4. **Cross-References**: Implement links between related sections
5. **Notes and Amendments**: Add historical notes and amendment information
6. **Mobile Optimization**: Ensure all pages work well on mobile devices
7. **Performance**: Implement lazy loading for large titles like Title 26 (Internal Revenue Code)

## UUID Reference

The UUID `9ffc0688-34b7-458d-ac58-2049465d2a72` was mentioned in the initial request. This can be used as:
- A unique identifier for the USC feature
- A version identifier for the USC data
- A tracking ID for analytics or logging

## Notes

- The implementation uses Next.js dynamic routing for flexible URL structures
- All pages use the existing Layout component for consistent styling
- The design follows the existing red/black theme of The-Law-Says.Com
- Placeholder content includes instructions for loading actual data
- The structure is scalable and can handle the full USC dataset
