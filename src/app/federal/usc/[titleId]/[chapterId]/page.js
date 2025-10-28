import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import BackButton from '@/components/BackButton'; // Assuming BackButton is compatible
import { notFound } from 'next/navigation'; // Import notFound for 404 handling

// Data fetching function - runs on the server for this page
async function getChapterData(titleId, chapterId) {
  // Validate inputs
  if (!titleId || typeof titleId !== 'string' || !chapterId || typeof chapterId !== 'string') {
     console.error("Invalid titleId or chapterId received:", { titleId, chapterId });
     return null;
  }
  try {
    const jsonFilePath = path.join(
      process.cwd(),
      'usc-json-data',
      `usc-title-${titleId}.json`
    );
    const fileContents = await fs.readFile(jsonFilePath, 'utf8');
    const titleData = JSON.parse(fileContents);

    // Find the specific chapter using loose comparison (==) after parsing ID
    const chapter = titleData.chapters.find((c) => {
      if (!c || !c.id) return false; // Safety check
      const idParts = c.id.split('/');
      const chapterIdStr = idParts[idParts.length - 1];
      const id = chapterIdStr.replace('ch', '');
      return id == chapterId; // Loose comparison
    });

    return chapter || null; // Return found chapter or null

  } catch (error) {
    if (error.code !== 'ENOENT') { // Log errors other than file not found
       console.error(`Error reading data for title ${titleId}, chapter ${chapterId}:`, error);
    }
    return null; // Return null on any error (will trigger 404 later)
  }
}

// This is the page component (Server Component)
// It receives 'params' containing titleId and chapterId
export default async function UscChapterPage({ params }) {
  const { titleId, chapterId } = params; // Get params
  const chapter = await getChapterData(titleId, chapterId); // Fetch data

  // If chapter data is not found, render the 404 page
  if (!chapter) {
    notFound(); // Use Next.js's notFound function
  }

  // Need titleNum for the BackButton link, use titleId from params
   const titleNum = titleId; // Title number is directly from the URL param

  return (
    <> {/* No Layout needed, handled by root layout */}
      <BackButton href={`/federal/usc/${titleNum}`} /> {/* Link back to the chapter list */}

      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-2 text-center text-white">
        Title {titleNum}, Chapter {chapterId}
      </h1>
      {/* Chapter Heading */}
      <h2 className="text-xl font-medium mb-6 text-center text-gray-300">
        {chapter.name}
      </h2>

      {/* Sections container */}
      <div className="space-y-8">
        {chapter.sections.map((section) => {
          // Parse section number from section.id
          if (!section || !section.id) return null; // Safety check
          const idParts = section.id.split('/');
          const sectionNumStr = idParts[idParts.length - 1];
          const sectionNum = sectionNumStr.replace('s', '');

          // Ensure section.heading exists, provide fallback
          const heading = section.heading || `Section ${sectionNum}`; 
          // Ensure section.text exists, provide fallback
          const textContent = section.text || '<p>Content not available.</p>'; 

          return (
            <article key={section.id} className="border-b border-gray-700 pb-6">
              <h3 className="text-lg font-bold mb-3 text-red-500">
                § {sectionNum}. {heading}
              </h3>

              {/* Apply Tailwind typography styles */}
              <div
                className="prose prose-invert max-w-none text-gray-200"
                dangerouslySetInnerHTML={{ __html: textContent }}
              />
            </article>
          );
        })}
      </div>
    </>
  );
}

// --- OPTIONAL: Generate Static Params for Chapters ---
export async function generateStaticParams() {
  let paths = [];
  try {
    const jsonDirectory = path.join(process.cwd(), 'usc-json-data');
    const filenames = await fs.readdir(jsonDirectory);
    const titleFileRegex = /^usc-title-\d+\.json$/;

    for (const filename of filenames) {
      if (titleFileRegex.test(filename)) {
        const filePath = path.join(jsonDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        if (data && data.id && data.chapters) {
          const titleId = String(data.id);
          for (const chapter of data.chapters) {
            if (!chapter || !chapter.id) continue; // Skip invalid chapters
            const idParts = chapter.id.split('/');
            const chapterIdStr = idParts[idParts.length - 1];
            const chapterId = chapterIdStr.replace('ch', '');
            
            paths.push({
              titleId: titleId,
              chapterId: chapterId,
            });
          }
        }
      }
    }
  } catch (error) {
     console.error("Error generating static params for USC chapters:", error);
  }
  return paths; 
}