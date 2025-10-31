
import React from 'react';
import { ALABAMA_CODE } from '@/lib/alabama-code';
import { ALABAMA_CODE_CONTENT } from '@/lib/alabama-code-content';
import AlabamaStateLawDetailClientPage from './client-page';

export function generateStaticParams() {
  return ALABAMA_CODE.map((law) => ({
    id: law.id,
  }));
}

export default function AlabamaStateLawDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const law = ALABAMA_CODE.find((l) => l.id === id);
  const lawContent = ALABAMA_CODE_CONTENT[id as keyof typeof ALABAMA_CODE_CONTENT];

  return (
    <AlabamaStateLawDetailClientPage
      law={law}
      lawContent={lawContent}
    />
  );
}
