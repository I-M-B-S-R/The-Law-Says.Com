
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FEDERAL_LAWS } from '@/lib/federal-laws';

export default function FederalLawDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const law = FEDERAL_LAWS.find((l) => l.id === id);

  if (!law) {
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

  const apaContent = {
    summary: "The Administrative Procedure Act (APA) is a United States federal statute that governs the way in which administrative agencies of the federal government may propose and establish regulations. It also sets up a process for courts to directly review agency decisions. It is one of the most important pieces of U.S. administrative law.",
    keyProvisions: [
      {
        title: "Rulemaking (Section 553)",
        content: "The APA establishes two primary types of rulemaking: informal (notice-and-comment) and formal. Informal rulemaking is the most common. It requires an agency to: 1) Publish a notice of proposed rulemaking in the Federal Register. 2) Provide a period for the public to comment on the proposed rule. 3) Publish the final rule with a statement of its basis and purpose."
      },
      {
        title: "Adjudication (Sections 554, 556, 557)",
        content: "This part of the APA governs how federal agencies conduct hearings and make decisions in individual cases, similar to a court trial. It ensures due process by requiring notice of the hearing, the right to present evidence, and a decision based on the record."
      },
      {
        title: "Judicial Review (Chapter 7)",
        content: "Perhaps the most critical part of the APA, this allows parties who are 'aggrieved by agency action' to seek review in federal court. Courts can set aside agency actions that are found to be 'arbitrary, capricious, an abuse of discretion, or otherwise not in accordance with law,' among other standards."
      },
      {
        title: "Information Access (Section 552)",
        content: "The APA includes provisions for public access to agency information, which were later expanded upon by the Freedom of Information Act (FOIA). It requires agencies to publish their organization, procedures, and rules."
      }
    ],
    purpose: "The primary purpose of the APA is to ensure that agency actions are fair, transparent, and accountable. It does this by requiring public participation in the rulemaking process (transparency), establishing fair procedures for individual decisions (fairness), and allowing for court oversight (accountability)."
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[95svh] w-full max-w-sm flex-col overflow-hidden rounded-2xl border-x-4 border-destructive bg-background shadow-2xl">
        <header className="flex-shrink-0 bg-destructive p-4 text-center text-xl font-bold text-destructive-foreground shadow-md">
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
                  <p className="font-semibold">{apaContent.summary}</p>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="mt-4 w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="rounded-md bg-destructive px-4 text-lg font-bold text-destructive-foreground">Purpose of the APA</AccordionTrigger>
                <AccordionContent className="p-4 text-justify">
                  {apaContent.purpose}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="mt-4 rounded-md bg-destructive px-4 text-lg font-bold text-destructive-foreground">Key Provisions</AccordionTrigger>
                <AccordionContent>
                  <Accordion type="multiple" className="mt-2">
                    {apaContent.keyProvisions.map((provision, index) => (
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
            </Accordion>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 bg-destructive p-2 text-destructive-foreground">
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

