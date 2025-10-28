import React from 'react';
import Link from 'next/link';

// This is the Back Button component
// It takes an 'href' prop to know where to link back to
export default function BackButton({ href }) {
  return (
    <Link href={href} passHref>
      {/* We use the same 'nav-button' style as your other buttons */}
      <span className="nav-button w-full flex justify-center items-center mb-4">
        &larr; Back
      </span>
    </Link>
  );
}