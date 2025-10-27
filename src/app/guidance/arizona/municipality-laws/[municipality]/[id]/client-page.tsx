
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, AudioLines, StopCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

export default function MunicipalityCodeDetailClientPage({ law, municipality, municipalityName, id }: { law: any, municipality: string, municipalityName: string, id: string }) {
  const router = useRouter();
  const speech = useTextToSpeech();

  if (!law) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="w-full max-w-sm text-center">
          <p className="text-2xl font-bold text-destructive-foreground">Law not found for ID: {id}</p>
          <Button asChild className="mt-4">
            <Link href={`/guidance/arizona/municipality-laws/${municipality}`}>Back to {municipalityName} Town Code</Link>
          </Button>
        </div>
      </div>
    );
  }

  const contentToRead = `
    ${law.title}.
    Summary: ${law.summary.replace(/<[^>]*>/g, '')}.
    Purpose: ${law.purpose}.
    Key Provisions: ${law.keyProvisions.map((p: any) => `${p.title}. ${p.content.replace(/<[^>]*>/g, '')}`).join(' ')}.
    Source: ${law.source ? law.source.replace(/<[^>]*>/g, '') : ''}
  `;

  const handleListenClick = () => {
    if (speech.isSpeaking) {
      speech.stop();
    } else {
      speech.speak(contentToRead);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-xl font-bold text-destructive-foreground shadow-md">
          <Link href={`/guidance/arizona/municipality-laws/${municipality}`}>{municipalityName} Town Code</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <Card className="border-destructive p-4">
              <div className="mb-4 flex justify-center">
                  <Button size="lg" onClick={handleListenClick} className="h-14 w-full font-bold btn-destructive">
                      {speech.isSpeaking ? (
                          <>
                              <StopCircle className="mr-2 h-5 w-5" />
                              Stop
                          </>
                      ): (
                          <>
                              <AudioLines className="mr-2 h-5 w-5" />
                              Listen
                          </>
                      )}
                  </Button>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{law.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-justify dark:prose-invert">
                  <p className="font-semibold" dangerouslySetInnerHTML={{ __html: law.summary }} />
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="mt-4 w-full">
              {law.purpose && (
                 <AccordionItem value="item-1">
                    <AccordionTrigger className="rounded-md bg-destructive px-4 text-lg font-bold text-destructive-foreground">Purpose</AccordionTrigger>
                    <AccordionContent className="p-4 text-justify">
                    {law.purpose}
                    </AccordionContent>
                </AccordionItem>
              )}
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
              {law.source && (
                 <AccordionItem value="item-3">
                    <AccordionTrigger className="mt-4 rounded-md bg-destructive px-4 text-lg font-bold text-destructive-foreground">Source</AccordionTrigger>
                    <AccordionContent className="p-4 text-justify break-words">
                        <p dangerouslySetInnerHTML={{ __html: law.source }} />
                    </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </main>
        </ScrollArea>

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
}
