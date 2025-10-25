
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

import { PRESCOTT_VALLEY_TOWN_CODE } from '@/lib/prescott-valley-code';
import { PRESCOTT_VALLEY_TITLE_9_CHAPTERS } from '@/lib/prescott-valley-title-9-chapters';
import { PRESCOTT_VALLEY_TITLE_15_CHAPTERS } from '@/lib/prescott-valley-title-15-chapters';
import { PRESCOTT_VALLEY_CHAPTER_93_SECTIONS } from '@/lib/prescott-valley-chapter-93-sections';
import { PRESCOTT_VALLEY_CHAPTER_154_SECTIONS } from '@/lib/prescott-valley-chapter-154-sections';
import { PRESCOTT_VALLEY_CODE_CONTENT } from '@/lib/prescott-valley-code-content';

type Chapter = { id: string; name: string; reserved: boolean };
type Section = { id: string; name: string; };

const chapterMap: Record<string, Chapter[]> = {
  '9': PRESCOTT_VALLEY_TITLE_9_CHAPTERS,
  '15': PRESCOTT_VALLEY_TITLE_15_CHAPTERS,
};

const sectionMap: Record<string, Section[]> = {
  '93': PRESCOTT_VALLEY_CHAPTER_93_SECTIONS,
  '154': PRESCOTT_VALLEY_CHAPTER_154_SECTIONS,
};

const ContentDisplay = ({ id }: { id: string }) => {
  const content = PRESCOTT_VALLEY_CODE_CONTENT[id];
  if (!content) return null;

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-justify space-y-2 mt-2">
      <h4 className="font-bold text-destructive">Summary:</h4>
      <p dangerouslySetInnerHTML={{ __html: content.summary }} />
      {content.purpose && (
        <>
          <h4 className="font-bold text-destructive">Purpose:</h4>
          <p>{content.purpose}</p>
        </>
      )}
      {content.keyProvisions && content.keyProvisions.length > 0 && (
        <>
          <h4 className="font-bold text-destructive">Key Provisions:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {content.keyProvisions.map((provision, index) => (
              <li key={index}>
                <strong>{provision.title}:</strong> <span dangerouslySetInnerHTML={{ __html: provision.content }} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default function PrescottValleyFullCodePage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-lg border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance/arizona/municipality-laws/prescott-valley">Full Town Code</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <div className="space-y-6">
              {PRESCOTT_VALLEY_TOWN_CODE.map((title) => (
                <div key={title.id}>
                  <h1 className="text-2xl font-bold">{title.name}</h1>
                  <Separator className="my-2 bg-destructive" />
                  {PRESCOTT_VALLEY_CODE_CONTENT[title.id] && <ContentDisplay id={title.id} />}
                  
                  {chapterMap[title.id] && chapterMap[title.id].map((chapter) => (
                    <div key={chapter.id} className="ml-4 mt-4">
                      <h2 className="text-xl font-semibold">{chapter.name}</h2>
                      {PRESCOTT_VALLEY_CODE_CONTENT[chapter.id] && <ContentDisplay id={chapter.id} />}
                      
                      {sectionMap[chapter.id] && sectionMap[chapter.id].map((section) => (
                        <div key={section.id} className="ml-8 mt-3">
                          <h3 className="text-lg font-semibold">Section: {section.name}</h3>
                          {PRESCOTT_VALLEY_CODE_CONTENT[section.id] && <ContentDisplay id={section.id} />}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
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
