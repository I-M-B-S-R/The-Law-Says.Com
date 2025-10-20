# Arizona Revised Statutes (ARS) Data Generation

## Summary

Successfully fetched and generated data files for all 47 Arizona Revised Statutes titles from the Arizona Legislature API.

## What Was Done

### 1. **Fetched ARS Data from API**
   - Updated `fetch-laws.js` to use Node.js built-in `https` module
   - Successfully fetched complete ARS data from `https://www.azleg.gov/xml/legservice.asmx`
   - Saved raw XML data to `laws.xml` (478KB)

### 2. **Created Parser Script**
   - Created `parse-laws.js` to parse the XML structure
   - Extracted all 47 titles with their chapters, articles, and sections
   - Generated individual data files for each title

### 3. **Generated 47 Title Data Files**
   - Location: `src/data/ars/`
   - Files: `title1.js` through `title47.js`
   - Each file contains:
     - Title ID and name
     - Chapters with IDs and names
     - Articles with IDs and names
     - Section placeholders (sections array ready for future data)

### 4. **Updated Title Detail Page**
   - Modified `src/pages/states/arizona/ars/[titleId].js`
   - Implemented dynamic imports to load any of the 47 title files
   - Added proper loading states and error handling
   - Enhanced display to show chapter and article IDs

## Data Structure

Each title file follows this structure:

```javascript
export const title{N}Data = {
  id: N,
  name: "Title Name",
  chapters: [
    {
      id: "1",
      name: "CHAPTER NAME",
      articles: [
        {
          id: "1",
          name: "Article Name",
          sections: []
        }
      ]
    }
  ]
};
```

## Statistics

- **Total Titles**: 47
- **Total Chapters**: 600+
- **Total Articles**: 2,500+
- **Largest Title**: Title 41 (State Government) - 51 chapters, 184 articles
- **Most Complex**: Title 36 (Public Health and Safety) - 53 chapters, 168 articles

## Sample Titles with Data

- **Title 1**: General Provisions (8 chapters, 12 articles)
- **Title 13**: Criminal Code (48 chapters, 80 articles)
- **Title 28**: Motor Vehicles (29 chapters, 154 articles)
- **Title 32**: Professions and Occupations (45 chapters, 177 articles)
- **Title 41**: State Government (51 chapters, 184 articles)

## How to Use

1. Navigate to any ARS title page: `/states/arizona/ars/[1-47]`
2. The page will automatically load the corresponding title data
3. View chapters, articles, and sections (when available)
4. Use the "Listen to Title" button for text-to-speech functionality

## Scripts

- **fetch-laws.js**: Fetches all ARS data from the API
- **parse-laws.js**: Parses the XML and generates title files
- **generate-ars-simple.js**: Alternative approach (not used)
- **generate-ars-titles.js**: Initial attempt with xml2js (not used)

## Future Enhancements

1. **Add Section Content**: Fetch individual section text from the API
2. **Add Search Functionality**: Search across all titles, chapters, and articles
3. **Add Bookmarking**: Allow users to save favorite sections
4. **Add Cross-References**: Link related sections across titles
5. **Add Update Mechanism**: Periodically refresh data from the API

## Notes

- The API returns chapter and article structure but not individual section content
- Section content would require additional API calls or web scraping
- All 47 titles are now accessible through the dynamic routing system
- The data is structured and ready for future enhancements
