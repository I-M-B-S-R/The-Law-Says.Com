
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter, notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PRESCOTT_VALLEY_TITLE_9_CHAPTERS } from '@/lib/prescott-valley-title-9-chapters';
import { PRESCOTT_VALLEY_TITLE_15_CHAPTERS } from '@/lib/prescott-valley-title-15-chapters';
import { PRESCOTT_VALLEY_TOWN_CODE } from '@/lib/prescott-valley-code';


export default function MunicipalityChapterPage() {
  const router = useRouter();
  const params = useParams();
  const { chapter } = params;

  const parentTitle = PRESCOTT_VALLEY_TOWN_CODE.find(t => t.id === chapter);

  if (!parentTitle) {
    notFound();
  }

  let chapters: { id: string; name: string, reserved: boolean }[] = [];
  
  if (chapter === '9') {
    chapters = PRESCOTT_VALLEY_TITLE_9_CHAPTERS;
  } else if (chapter === '15') {
    chapters = PRESCOTT_VALLEY_TITLE_15_CHAPTERS;
  }

  const title = parentTitle ? parentTitle.name : 'Prescott Valley Town Code';

  if (parentTitle.reserved) {
     return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
            <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
                <header className="flex-shrink-0 rounded-t-lg border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
                    <Link href="/guidance/arizona/municipality-laws/prescott-valley">{title}</Link>
                </header>
                <main className="flex flex-grow flex-col items-center justify-center p-4 border-x-2 border-destructive">
                    <p className="text-center text-lg">This title is reserved and currently has no content.</p>
                    <Button asChild className="mt-4">
                        <Link href="/guidance/arizona/municipality-laws/prescott-valley">Back to Town Code</Link>
                    </Button>
                </main>
                <footer className="flex-shrink-0 rounded-b-lg border-x-2 border-b-2 border-t-2 border-destructive bg-muted p-2 text-destructive-foreground">
                    <div className="flex items-center justify-between">
                        <button onClick={() => router.back()} className="rounded-md p-2 hover:bg-destructive-foreground/10" aria-label="Go back">
                            <ArrowLeft strokeWidth={3} className="h-8 w-8" />
                        </button>
                        <p className="text-center text-xs">&copy; 2025 The-Law-Says.Com</p>
                        <button onClick={() => router.forward()} className="rounded-md p-2 hover:bg-destructive-foreground/10" aria-label="Go forward">
                            <ArrowRight strokeWidth={3} className="h-8 w-8" />
                        </button>
                    </div>
                </footer>
            </div>
        </div>
     );
  }

  if (chapters.length === 0 && !parentTitle.reserved) {
     router.replace(`/guidance/arizona/municipality-laws/prescott-valley/${chapter}/details`);
     return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-lg border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance/arizona/municipality-laws/prescott-valley">{title}</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <div className="flex flex-col gap-4">
              {chapters.map((chap) => (
                <Button
                  key={chap.id}
                  size="lg"
                  className="h-20 w-full justify-start whitespace-normal px-4 text-left font-bold btn-destructive"
                  asChild
                  disabled={chap.reserved}
                >
                  <Link href={`/guidance/arizona/municipality-laws/prescott-valley/${chapter}/${chap.id}`}>
                    <span>{chap.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 rounded-b-lg border-x-2 border-b-2 border-t-2 border-destructive bg-muted p-2 text-destructive-foreground">
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
}
