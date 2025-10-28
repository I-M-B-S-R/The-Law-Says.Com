import React from 'react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import BackButton from '@/components/BackButton'; // Assuming BackButton is compatible

// Data fetching function remains the same
async function getTitleData(titleId) {
  // Ensure titleId is valid before proceeding
  if (!titleId || typeof titleId !== 'string') {
     console.error("Invalid titleId received in getTitleData:", titleId);
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
    return titleData;
  } catch (error) {
    // Log more specific error if file not found vs. other errors
    if (error.code === 'ENOENT') {
      console.warn(`Data file not found for title ${titleId}: ${jsonFilePath}`);
    } else {
      console.error(`Error reading data for title ${titleId}:`, error);
    }
    return null;
  }
}

// Ensure the Page component is async and properly receives params
export default async function UscTitlePage({ params }) {
  // Safely extract titleId AFTER ensuring params is available
  const titleId = params?.titleId; // Use optional chaining just in case

  // Fetch data only if titleId is valid
  const titleData = titleId ? await getTitleData(titleId) : null;

  if (!titleData) {
    return (
      <>
        <BackButton href="/federal/usc" />
        <h1 className="text-3xl font-semibold mb-4 text-center text-red-500">
          Title Not Found
        </h1>
        <p className="text-center text-gray-400">
          Sorry, we could not load the data for Title {titleId || '[Unknown]'}.
        </p>
      </>
    );
  }

  const titleNum = titleData.id;

  return (
    <>
      <BackButton href="/federal/usc" />

      <h1 className="text-3xl font-semibold mb-4 text-center text-white">
        Title {titleNum} - {titleData.name}
      </h1>

      <div className="space-y-2">
        {titleData.chapters.map((chapter) => {
          const idParts = chapter.id.split('/');
          const chapterIdStr = idParts[idParts.length - 1];
          const chapterId = chapterIdStr.replace('ch', '');

          return (
            <Link
              key={chapter.id}
              href={`/federal/usc/${titleNum}/${chapterId}`}
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg flex items-center space-x-4"
            >
              <span className="font-bold w-16 text-right">
                Chap. {chapterId}
              </span>
              <span className="text-left flex-1">{chapter.name}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

// generateStaticParams remains the same
export async function generateStaticParams() {
   try {
    const filePath = path.join(
      process.cwd(),
      'usc-json-data',
      'index.json'
    );
    const fileContents = await fs.readFile(filePath, 'utf8');
    const titles = JSON.parse(fileContents);

    return titles.map((title) => ({
      titleId: String(title.title),
    }));
  } catch (error) {
    console.error("Error generating static params for USC titles:", error);
    return [];
  }
}