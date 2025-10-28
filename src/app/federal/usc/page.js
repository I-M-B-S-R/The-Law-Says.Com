import React from 'react';
import Link from 'next/link';
import fs from 'fs/promises'; // For reading files on the server
import path from 'path';     // For constructing file paths

// Data fetching function - runs on the server
async function getTitlesData() {
  try {
    const filePath = path.join(
      process.cwd(),       // Gets the root project directory
      'usc-json-data',     // The folder containing your JSON files
      'index.json'         // The specific index file listing titles
    );
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents); // Parse the JSON array
    return data; // Return the array of titles
  } catch (error) {
    console.error('Error reading usc-json-data/index.json:', error);
    return []; // Return an empty array on error
  }
}

// This is the page component (Server Component by default)
export default async function UscTitlesPage() {
  // Fetch the data directly within the component
  const titles = await getTitlesData();

  // This function will eventually be for the "Listen" button
  // Note: To use onClick, this part would need to be a Client Component
  // We'll handle that later if needed. For now, it's just a button.
  const handleListenClick = () => {
    'use client'; // This directive would be needed if the handler was complex
    console.log('Listen button clicked!');
  };

  return (
    // No <Layout> needed here, handled by src/app/layout.js
    <>
      {/* 1. "Federal Laws" as the main page title */}
      <h1 className="text-4xl font-bold mb-4 text-center text-white">
        Federal Laws
      </h1>

      {/* 2. "Listen" button (Needs "use client" if interactivity is complex) */}
      {/* For now, just a styled button */}
      <button 
        // onClick={handleListenClick} // onClick requires a Client Component
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg mb-4 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
      >
        Listen 
      </button>

      {/* 3. "United States Code" subtitle */}
      <h2 className="text-3xl font-semibold mb-4 text-center text-white">
        United States Code
      </h2>

      {/* 4. The list of titles */}
      <div className="space-y-2">
        {titles.map((title) => (
          <Link
            key={title.title}
            href={`/federal/usc/${title.title}`} // Link to the dynamic title page
            // Apply Tailwind classes directly to Link for styling the generated <a>
            className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg flex items-center space-x-4"
          >
            {/* Inner spans for layout */}
            <span className="font-bold w-8 text-right">{title.title}</span>
            <span className="text-left flex-1">{title.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
}