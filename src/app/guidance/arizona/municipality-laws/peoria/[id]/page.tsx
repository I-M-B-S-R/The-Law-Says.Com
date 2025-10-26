
'use client';

import { useParams } from 'next/navigation';
import { PeoriaCodeDetailContent } from './content';

export default function PeoriaCodeDetailPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  return <PeoriaCodeDetailContent id={id} />;
}
