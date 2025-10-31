import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Legal Compass Logo</title>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 9H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 15H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 9V7C8 5.34315 9.34315 4 11 4H13C14.6569 4 16 5.34315 16 7V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
