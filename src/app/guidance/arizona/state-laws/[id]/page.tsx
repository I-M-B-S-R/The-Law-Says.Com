
import React from 'react';
import { ARIZONA_REVISED_STATUTES } from '@/lib/arizona-revised-statutes';
import { ARIZONA_REVISED_STATUTES_CONTENT } from '@/lib/arizona-revised-statutes-content';
import ArizonaStateLawDetailClientPage from './client-page';

export function generateStaticParams() {
  return ARIZONA_REVISED_STATUTES.map((law) => ({
    id: law.id,
  }));
}

export default function ArizonaStateLawDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const law = ARIZONA_REVISED_STATUTES.find((l) => l.id === id);
  const lawContent = ARIZONA_REVISED_STATUTES_CONTENT[id as string];

  return (
    <ArizonaStateLawDetailClientPage
      law={law}
      lawContent={lawContent}
    />
  );
}
