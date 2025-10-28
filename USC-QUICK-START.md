# United States Code (USC) Feature - Quick Start Guide

## What Has Been Implemented

I've created a complete navigation system for the United States Code on your Federal page. Here's what's ready to use:

### ✅ Completed Features

1. **USC Index Page** - Browse all 54 USC titles
2. **Dynamic Title Pages** - View individual titles with chapter listings
3. **Dynamic Chapter Pages** - View chapters with section listings  
4. **Dynamic Section Pages** - View individual sections with full text
5. **Navigation Integration** - USC button added to Federal page
6. **Responsive Styling** - All pages styled to match your site theme

### 📁 Files Created

```
src/data/usc.js                                          ← USC titles data
src/pages/federal/usc/index.js                          ← USC index page
src/pages/federal/usc/[titleId].js                      ← Title page
src/pages/federal/usc/[titleId]/[chapterId].js          ← Chapter page
src/pages/federal/usc/[titleId]/[chapterId]/[sectionId].js  ← Section page
```

### 🔗 URL Structure

- `/federal/usc` - All USC titles
- `/federal/usc/18` - Title 18 (Crimes and Criminal Procedure)
- `/federal/usc/18/47` - Title 18, Chapter 47
- `/federal/usc/18/47/1001` - 18 U.S.C. § 1001

## How to Use Right Now

### Option 1: View the Structure (No Data Required)

The pages are already functional and will display:
- All 54 USC titles on the index page
- Title information pages with placeholders
- Proper navigation and breadcrumbs
- Instructions for loading full data

**To test it:**
1. Start your development server: `npm run dev`
2. Navigate to `/federal`
3. Click "United States Code (USC)"
4. Browse through the titles

### Option 2: Load Full USC Data

To populate the pages with actual USC content:

#### Step 1: Download USC Data
```bash
node download-usc.js
```
This downloads all 54 USC titles as XML files (may take 10-30 minutes).

#### Step 2: Parse the XML Data
```bash
node parse-usc.js
```
This converts XML files to structured JSON data.

#### Step 3: Integrate the Data
```bash
node integrate-usc-data.js
```
This creates `src/data/usc-full.js` with all USC content and helper functions.

#### Step 4: Update the Pages

Replace the imports in your USC pages:

**In `src/pages/federal/usc/[titleId].js`:**
```javascript
import { getUSCTitle } from '../../../data/usc-full';
```

**In `src/pages/federal/usc/[titleId]/[chapterId].js`:**
```javascript
import { getUSCTitle, getUSCChapter } from '../../../../data/usc-full';
```

**In `src/pages/federal/usc/[titleId]/[chapterId]/[sectionId].js`:**
```javascript
import { getUSCTitle, getUSCChapter, getUSCSection } from '../../../../../data/usc-full';
```

## USC Structure Explained

```
Title (1-54)
  └── Chapter (1, 2, 3...)
      └── Section (§)
          └── Subsection (a), (b), (c)...
              └── Paragraph (1), (2), (3)...
```

**Example:**
- **Title 18** - Crimes and Criminal Procedure
  - **Chapter 47** - Fraud and False Statements
    - **Section 1001** - Statements or entries generally
      - **(a)** - Except as otherwise provided...
        - **(1)** - falsifies, conceals, or covers up...

**Citation:** 18 U.S.C. § 1001(a)(1)

## All 54 USC Titles

1. General Provisions
2. The Congress
3. The President
4. Flag and Seal, Seat of Government, and the States
5. Government Organization and Employees
6. Domestic Security
7. Agriculture
8. Aliens and Nationality
9. Arbitration
10. Armed Forces
11. Bankruptcy
12. Banks and Banking
13. Census
14. Coast Guard
15. Commerce and Trade
16. Conservation
17. Copyrights
18. Crimes and Criminal Procedure
19. Customs Duties
20. Education
21. Food and Drugs
22. Foreign Relations and Intercourse
23. Highways
24. Hospitals and Asylums
25. Indians
26. Internal Revenue Code
27. Intoxicating Liquors
28. Judiciary and Judicial Procedure
29. Labor
30. Mineral Lands and Mining
31. Money and Finance
32. National Guard
33. Navigation and Navigable Waters
34. Crime Control and Law Enforcement
35. Patents
36. Patriotic and National Observances, Ceremonies, and Organizations
37. Pay and Allowances of the Uniformed Services
38. Veterans' Benefits
39. Postal Service
40. Public Buildings, Property, and Works
41. Public Contracts
42. The Public Health and Welfare
43. Public Lands
44. Public Printing and Documents
45. Railroads
46. Shipping
47. Telecommunications
48. Territories and Insular Possessions
49. Transportation
50. War and National Defense
51. National and Commercial Space Programs
52. Voting and Elections
54. National Park Service and Related Programs

*(Note: Title 53 is reserved and not used)*

## Features Ready for Enhancement

Once you have the full data loaded, you can add:

1. **Search Functionality** - Search across all USC sections
2. **Cross-References** - Link related sections
3. **Historical Notes** - Show amendments and changes
4. **Bookmarking** - Save favorite sections
5. **Print/Export** - Generate PDFs of sections
6. **Popular Sections** - Highlight commonly referenced laws

## Troubleshooting

### "Title not found" error
- Make sure you're using a valid title number (1-54, excluding 53)
- Check that the URL is formatted correctly

### Pages show placeholder content
- This is normal if you haven't loaded the full USC data yet
- Follow the steps in "Option 2: Load Full USC Data" above

### Download script fails
- Check your internet connection
- The USC website may be temporarily unavailable
- Try downloading individual titles instead of all at once

## Technical Details

- **Framework:** Next.js with dynamic routing
- **Data Source:** United States Code (uscode.house.gov)
- **Data Format:** XML → JSON → JavaScript
- **Styling:** CSS Modules (HomePage.module.css)
- **Navigation:** Next.js Link components

## Support Files

- `USC-IMPLEMENTATION.md` - Detailed technical documentation
- `USC-FILE-STRUCTURE.md` - Visual file structure guide
- `integrate-usc-data.js` - Data integration helper script

## UUID Reference

The UUID `9ffc0688-34b7-458d-ac58-2049465d2a72` can be used as:
- A unique identifier for this USC feature implementation
- A version tag for tracking updates
- A reference ID in your database or analytics

---

**Ready to use!** The USC navigation system is fully functional and ready for your users to explore. Load the full data when you're ready to display actual USC content.
