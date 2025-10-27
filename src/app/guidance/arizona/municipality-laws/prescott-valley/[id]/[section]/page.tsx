
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter, notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PRESCOTT_VALLEY_CODE_CONTENT } from '@/lib/prescott-valley-code-content';
import { PRESCOTT_VALLEY_TITLE_9_CHAPTERS } from '@/lib/prescott-valley-title-9-chapters';
import { PRESCOTT_VALLEY_TITLE_15_CHAPTERS } from '@/lib/prescott-valley-title-15-chapters';
import { PRESCOTT_VALLEY_CHAPTER_93_SECTIONS } from '@/lib/prescott-valley-chapter-93-sections';
import { PRESCOTT_VALLEY_CHAPTER_154_SECTIONS } from '@/lib/prescott-valley-chapter-154-sections';

export default function MunicipalityLawDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id: titleId, section: sectionId } = params;

  let sections: { id: string; name: string; }[] = [];
  if (sectionId === '93') {
    sections = PRESCOTT_VALLEY_CHAPTER_93_SECTIONS;
  } else if (sectionId === '154') {
    sections = PRESCOTT_VALLEY_CHAPTER_154_SECTIONS;
  }

  const law = PRESCOTT_VALLEY_CODE_CONTENT[sectionId as string];
  
  const backLink = `/guidance/arizona/municipality-laws/prescott-valley/${titleId}`;

  const parentChapter = [...PRESCOTT_VALLEY_TITLE_9_CHAPTERS, ...PRESCOTT_VALLEY_TITLE_15_CHAPTERS].find(c => c.id === sectionId);
  const title = parentChapter ? parentChapter.name : 'Prescott Valley Town Code';

  // If sections exist, list them
  if (sections.length > 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="flex h-full w-full max-w-sm flex-col bg-background shadow-2xl">
            <div className="p-2 text-center text-sm font-bold text-destructive-foreground">
                <Link href="/" className="flex items-center justify-center gap-2">
                    <Home className="h-4 w-4" />
                    Home
                </Link>
            </div>
          <header className="flex-shrink-0 rounded-t-lg border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
            <Link href={backLink}>{title}</Link>
          </header>
  
          <ScrollArea className="flex-grow border-x-2 border-destructive">
            <main className="p-4">
              <div className="flex flex-col gap-4">
                {sections.map((sec) => (
                  <Button
                    key={sec.id}
                    size="lg"
                    className="h-20 w-full justify-start whitespace-normal px-4 text-left font-bold btn-destructive"
                    asChild
                  >
                    <Link href={`/guidance/arizona/municipality-laws/prescott-valley/${titleId}/${sectionId}/${sec.id}`}>
                      <span>{sec.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </main>
          </ScrollArea>
  
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

  // If no sections, but law content exists, display it
  if (!law) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-full w-full max-w-sm flex-col bg-background shadow-2xl">
        <div className="p-2 text-center text-sm font-bold text-destructive-foreground">
            <Link href="/" className="flex items-center justify-center gap-2">
                <Home className="h-4 w-4" />
                Home
            </Link>
        </div>
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-xl font-bold text-destructive-foreground shadow-md">
          <Link href={backLink}>{title}</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <Card className="border-destructive">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{law.summary}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-justify dark:prose-invert">
                  <p className="font-semibold" dangerouslySetInnerHTML={{ __html: law.purpose }} />
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="mt-4 w-full">
              {law.keyProvisions && law.keyProvisions.length > 0 && (
                <AccordionItem value="item-2">
                    <AccordionTrigger className="mt-4 rounded-md bg-destructive px-4 text-lg font-bold text-destructive-foreground">Key Provisions</AccordionTrigger>
                    <AccordionContent>
                    <ul className="list-disc space-y-2 p-4 text-justify">
                      {law.keyProvisions.map((provision: any, index: number) => (
                        <li key={index}>
                            <strong>{provision.title}:</strong> <span dangerouslySetInnerHTML={{ __html: provision.content }} />
                        </li>
                      ))}
                    </ul>
                    </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 rounded-b-2xl border-x-2 border-b-2 border-t-2 border-destructive bg-muted p-2 text-destructive-foreground">
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
