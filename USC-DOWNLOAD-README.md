# USC Data Download and Parser Scripts

This directory contains scripts to download and parse the United States Code (USC) from the official government source.

## Overview

These scripts will:
1. **Download** all 54 titles of the U.S. Code in XML format from uscode.house.gov
2. **Parse** the XML files into clean JSON format
3. **Structure** the data for use in The-Law-Says.Com website

## Prerequisites

Make sure you have the required dependencies installed:
```bash
npm install
```

The scripts use:
- `axios` - for downloading files
- `xml2js` - for parsing XML
- `fs` and `path` - built-in Node.js modules

## Step 1: Download USC XML Files

Run the download script to fetch all USC titles:

```bash
node download-usc.js
```

**What it does:**
- Downloads all 54 USC titles (except Title 53 which is reserved)
- Saves XML files to `usc-xml-data/` directory
- Current through Public Law 119-36 (09/05/2025)
- Includes rate limiting (1 second between downloads)
- Takes approximately 1-2 minutes to complete

**Output:**
- Creates `usc-xml-data/` folder
- Files named: `usc01.xml`, `usc02.xml`, ..., `usc54.xml`
- Error logs saved as `usc##_error.txt` if download fails

## Step 2: Parse XML to JSON

After downloading, run the parser script:

```bash
node parse-usc.js
```

**What it does:**
- Reads all XML files from `usc-xml-data/`
- Parses the USLM (United States Legislative Markup) format
- Extracts: Titles → Chapters → Sections → Subsections
- Converts to clean JSON format
- Takes approximately 2-5 minutes depending on file sizes

**Output:**
- Creates `usc-json-data/` folder
- Files named: `usc-title-1.json`, `usc-title-2.json`, etc.
- Creates `index.json` with list of all titles
- Error logs saved as `usc-title-##-error.txt` if parsing fails

## JSON Data Structure

Each title JSON file has this structure:

```json
{
  "id": 18,
  "name": "Crimes and Criminal Procedure",
  "chapters": [
    {
      "id": "1",
      "number": "1",
      "name": "General Provisions",
      "sections": [
        {
          "id": "1",
          "number": "1",
          "heading": "Offenses classified",
          "text": "Full text of the statute...",
          "subsections": [
            {
              "id": "a",
              "heading": "Subsection heading",
              "text": "Subsection text..."
            }
          ]
        }
      ]
    }
  ],
  "subtitles": []
}
```

## Quick Start (Run Both Scripts)

To download and parse in one go:

```bash
node download-usc.js && node parse-usc.js
```

## Troubleshooting

### Download Issues
- **Timeout errors**: The script has a 60-second timeout per file. Large titles may take longer.
- **Network errors**: Check your internet connection and try again.
- **404 errors**: The URL structure may have changed. Check uscode.house.gov/download/download.shtml

### Parsing Issues
- **XML parsing errors**: Some titles have complex structures. Check error logs in `usc-json-data/`.
- **Missing data**: The parser extracts the main structure. Some metadata may be omitted.
- **Empty sections**: Some sections may not have text content in the XML.

## File Sizes

**XML Files (usc-xml-data/):**
- Small titles: ~100 KB (e.g., Title 3, Title 4)
- Medium titles: 1-5 MB (e.g., Title 18, Title 28)
- Large titles: 10-50 MB (e.g., Title 26, Title 42)
- **Total: ~500 MB - 1 GB**

**JSON Files (usc-json-data/):**
- Similar sizes to XML, sometimes larger due to formatting
- **Total: ~500 MB - 1.5 GB**

## Next Steps

After running these scripts:

1. Review the JSON files in `usc-json-data/`
2. Check the `index.json` file for a list of all titles
3. Use the JSON data to populate your website's federal laws section
4. Consider creating a database or search index for better performance

## Data Currency

The data is current through **Public Law 119-36 (09/05/2025)**.

To update the data in the future:
1. Check uscode.house.gov/download/download.shtml for new release points
2. Update the `BASE_URL` in `download-usc.js` if needed
3. Re-run both scripts

## Official Source

All data comes from the official U.S. Government source:
- **Website**: https://uscode.house.gov
- **Download Page**: https://uscode.house.gov/download/download.shtml
- **Format**: USLM (United States Legislative Markup) XML
- **Maintained by**: Office of the Law Revision Counsel, U.S. House of Representatives

## License

The U.S. Code is in the public domain. This data is official government information and can be freely used.

## Support

For issues with:
- **These scripts**: Check error logs and troubleshooting section above
- **USC data accuracy**: Contact the Office of the Law Revision Counsel
- **Website integration**: Refer to The-Law-Says.Com development documentation
