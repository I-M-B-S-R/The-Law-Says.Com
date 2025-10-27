
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PRESCOTT_VALLEY_TOWN_CODE } from '@/lib/prescott-valley-code';
import { PRESCOTT_VALLEY_TITLE_9_CHAPTERS } from '@/lib/prescott-valley-title-9-chapters';
import { PRESCOTT_VALLEY_TITLE_15_CHAPTERS } from '@/lib/prescott-valley-title-15-chapters';
import { PRESCOTT_VALLEY_CODE_CONTENT } from '@/lib/prescott-valley-code-content';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';

export default function MunicipalityChapterPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const parentTitle = PRESCOTT_VALLEY_TOWN_CODE.find(t => t.id === id);

  if (!parentTitle) {
    notFound();
  }

  let chapters: { id: string; name: string; reserved: boolean }[] = [];
  if (id === '9') {
    chapters = PRESCOTT_VALLEY_TITLE_9_CHAPTERS;
  } else if (id === '15') {
    chapters = PRESCOTT_VALLEY_TITLE_15_CHAPTERS;
  }

  const title = parentTitle ? parentTitle.name : 'Prescott Valley Town Code';
  const backLink = "/guidance/arizona/municipality-laws/prescott-valley";

  if (parentTitle.reserved) {
     return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
            <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
                <div className="p-2 text-center text-sm font-bold text-destructive-foreground">
                    <Link href="/" className="flex items-center justify-center gap-2">
                        <Home className="h-4 w-4" />
                        Home
                    </Link>
                </div>
                <header className="flex-shrink-0 rounded-t-lg border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
                    <Link href={backLink}>{title}</Link>
                </header>
                <main className="flex flex-grow flex-col items-center justify-center p-4 border-x-2 border-destructive">
                    <p className="text-center text-lg">This title is reserved and currently has no content.</p>
                    <Button asChild className="mt-4">
                        <Link href={backLink}>Back to Town Code</Link>
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

  if (chapters.length > 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
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
                {chapters.map((chap) => (
                  <Button
                    key={chap.id}
                    size="lg"
                    className="h-20 w-full justify-start whitespace-normal px-4 text-left font-bold btn-destructive"
                    asChild
                    disabled={chap.reserved}
                  >
                    <Link href={`/guidance/arizona/municipality-laws/prescott-valley/${id}/${chap.id}`}>
                      <span>{chap.name}</span>
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

  const law = PRESCOTT_VALLEY_CODE_CONTENT[id as string];
  if (!law) notFound();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
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
                <CardTitle className="text-2xl font-bold">{parentTitle.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-justify dark:prose-invert">
                  <p className="font-semibold" dangerouslySetInnerHTML={{ __html: law.summary }} />
                  <p dangerouslySetInnerHTML={{ __html: law.purpose }} />
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
