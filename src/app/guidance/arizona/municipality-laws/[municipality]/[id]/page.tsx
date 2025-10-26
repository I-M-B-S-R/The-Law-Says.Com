
import React from 'react';
import { ARIZONA_MUNICIPALITIES } from '@/lib/arizona-municipalities';
import { getMunicipalityLawContent } from '@/lib/municipality-laws';
import { getMunicipalityCodeList } from '@/lib/municipality-code-list';
import MunicipalityCodeDetailClientPage from './client-page';

export function generateStaticParams() {
    const paths = ARIZONA_MUNICIPALITIES.flatMap((municipality) => {
        const municipalitySlug = municipality.toLowerCase().replace(/ /g, '-');
        const laws = getMunicipalityCodeList(municipalitySlug);
        if (!laws) {
            return [];
        }
        return laws.map((law) => ({
            municipality: municipalitySlug,
            id: law.id,
        }));
    });
    return paths;
}

export default function MunicipalityCodeDetailPage({ params }: { params: { id: string, municipality: string } }) {
  const { id, municipality } = params;

  const municipalityName = (municipality as string).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const lawContent = getMunicipalityLawContent(municipality as string);
  const law = lawContent ? lawContent[id as keyof typeof lawContent] : null;

  return (
    <MunicipalityCodeDetailClientPage
      law={law}
      municipality={municipality}
      municipalityName={municipalityName}
      id={id}
    />
  );
}
