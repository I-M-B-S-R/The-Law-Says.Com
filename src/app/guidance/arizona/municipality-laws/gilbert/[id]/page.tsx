
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GILBERT_CODE_CONTENT } from '@/lib/gilbert-code-content';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const GilbertCodeDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const [id, setId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [law, setLaw] = useState<{ title: string; summary: string; keyProvisions: string[]; source: string } | null>(null);

  useEffect(() => {
    if (params && typeof params.id === 'string') {
      setId(params.id);
    }
  }, [params]);

  useEffect(() => {
    if (id) {
      const foundLaw = GILBERT_CODE_CONTENT[id as keyof typeof GILBERT_CODE_CONTENT];
      if (foundLaw) {
        setLaw(foundLaw);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
            <div className="flex h-[90svh] w-full max-w-sm flex-col items-center justify-center bg-background shadow-2xl">
                <p>Loading...</p>
            </div>
        </div>
    );
  }

  if (!law) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
             <div className="flex h-[90svh] w-full max-w-sm flex-col items-center justify-center bg-background shadow-2xl text-center">
                <p className="text-2xl font-bold text-destructive-foreground">Law not found for ID: {id}</p>
                <Link href="/guidance/arizona/municipality-laws/gilbert" className="mt-4 inline-block rounded-md bg-destructive px-4 py-2 text-destructive-foreground">
                    Back to Gilbert Town Code
                </Link>
            </div>
        </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
            <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-xl font-bold text-destructive-foreground shadow-md">
                <Link href="/guidance/arizona/municipality-laws/gilbert">Gilbert Town Code</Link>
            </header>
            <main className="flex-grow overflow-y-auto p-4 border-x-2 border-destructive">
                <h1 className="text-2xl font-bold mb-4">{law.title}</h1>
                <p className="mb-4 text-justify">{law.summary}</p>
                <h2 className="text-xl font-semibold mb-2">Key Provisions</h2>
                <ul className="list-disc space-y-2 pl-6 mb-4">
                    {law.keyProvisions.map((provision, index) => (
                    <li key={index}>{provision}</li>
                    ))}
                </ul>
                <p className="text-xs text-muted-foreground break-words">Source: {law.source}</p>
            </main>
            <footer className="flex-shrink-0 rounded-b-2xl border-x-2 border-b-2 border-t-2 border-destructive bg-muted p-2 text-destructive-foreground">
                <div className="flex items-center justify-between">
                    <button
                    onClick={() => router.back()}
                    className="rounded-md p-2 hover:bg-destructive-foreground/10"
                    aria-label="Go back"
                    >
                    <ArrowLeft strokeWidth={3} className="h-8 w-8" />
                    </button>
                    <p className="text-center text-xs">
                    &copy; 2025 The-Law-Says.Com
                    </p>
                    <button
                    onClick={() => router.forward()}
                    className="rounded-md p-2 hover:bg-destructive-foreground/10"
                    aria-label="Go forward"
                    >
                    <ArrowRight strokeWidth={3} className="h-8 w-8" />
                    </button>
                </div>
            </footer>
        </div>
    </div>
  );
};

export default GilbertCodeDetailPage;
