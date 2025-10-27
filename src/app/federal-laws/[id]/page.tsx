
import React from 'react';
import { FEDERAL_LAWS } from '@/lib/federal-laws';
import { FEDERAL_LAW_CONTENT } from '@/lib/federal-laws-content';
import FederalLawDetailClientPage from './client-page';

export function generateStaticParams() {
  return FEDERAL_LAWS.map((law) => ({
    id: law.id,
  }));
}

export default function FederalLawDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const law = FEDERAL_LAWS.find((l) => l.id === id);
  const lawContent = FEDERAL_LAW_CONTENT[id as string];

  return (
    <FederalLawDetailClientPage
      law={law}
      lawContent={lawContent}
    />
  );
}
