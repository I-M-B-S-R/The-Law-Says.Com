
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FEDERAL_LAWS } from '@/lib/federal-laws';
import { FEDERAL_LAW_CONTENT } from '@/lib/federal-laws-content';

export default function FederalLawDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const law = FEDERAL_LAWS.find((l) => l.id === id);
  const lawContent = FEDERAL_LAW_CONTENT[id as string];

  if (!law || !lawContent) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="w-full max-w-sm text-center">
          <p className="text-2xl font-bold text-destructive-foreground">Law not found.</p>
          <Button asChild className="mt-4">
            <Link href="/federal-laws">Back to Federal Laws</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col overflow-hidden rounded-2xl border-x-4 border-destructive bg-background shadow-2xl">
        <header className="flex-shrink-0 bg-muted p-2 text-center text-xl font-bold text-destructive-foreground shadow-md border-b-2 border-destructive">
          <Link href="/federal-laws">Federal Law</Link>
        </header>

        <ScrollArea className="flex-grow">
          <main className="p-4">
            <Card className="border-destructive">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{law.id}. {law.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-justify dark:prose-invert">
                  <p className="font-semibold" dangerouslySetInnerHTML={{ __html: lawContent.summary }} />
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="mt-4 w-full">
              {lawContent.purpose && (
                 <AccordionItem value="item-1">
                    <AccordionTrigger className="rounded-md bg-destructive px-4 text-lg font-bold text-destructive-foreground">Purpose</AccordionTrigger>
                    <AccordionContent className="p-4 text-justify">
                    {lawContent.purpose}
                    </AccordionContent>
                </AccordionItem>
              )}
              {lawContent.keyProvisions && lawContent.keyProvisions.length > 0 && (
                <AccordionItem value="item-2">
                    <AccordionTrigger className="mt-4 rounded-md bg-destructive px-4 text-lg font-bold text-destructive-foreground">Key Provisions</AccordionTrigger>
                    <AccordionContent>
                    <Accordion type="multiple" className="mt-2">
                        {lawContent.keyProvisions.map((provision, index) => (
                        <AccordionItem value={`sub-item-${index}`} key={index}>
                            <AccordionTrigger className="mt-2 rounded-md bg-destructive/80 px-4 text-left font-bold text-destructive-foreground">
                            {provision.title}
                            </AccordionTrigger>
                            <AccordionContent className="p-4 text-justify">
                            {provision.content}
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                    </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 bg-muted p-2 text-destructive-foreground border-t-2 border-destructive">
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
