
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, AudioLines, StopCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ARIZONA_REVISED_STATUTES } from '@/lib/arizona-revised-statutes';
import { ARIZONA_REVISED_STATUTES_CONTENT } from '@/lib/arizona-revised-statutes-content';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

export function generateStaticParams() {
  return ARIZONA_REVISED_STATUTES.map((law) => ({ 
    id: law.id, 
}));
}

export default function ArizonaStateLawDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const mainSpeech = useTextToSpeech();
  const purposeSpeech = useTextToSpeech();
  const keyProvisionsSpeech = useTextToSpeech();
  const keyProvisionsContentSpeeches = useTextToSpeech();

  const law = ARIZONA_REVISED_STATUTES.find((l) => l.id === id);
  const lawContent = ARIZONA_REVISED_STATUTES_CONTENT[id as string];

  if (!law || !lawContent) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="w-full max-w-sm text-center">
          <p className="text-2xl font-bold text-destructive-foreground">Law not found.</p>
          <Button asChild className="mt-4">
            <Link href="/guidance/arizona/state-laws">Back to Arizona State Laws</Link>
          </Button>
        </div>
      </div>
    );
  }

  const mainContentToRead = `
    Title ${law.id}. ${law.name}.
    Summary: ${lawContent.summary.replace(/<[^>]*>/g, '')}.
    ${lawContent.purpose ? 'Purpose.' : ''}
    ${lawContent.keyProvisions && lawContent.keyProvisions.length > 0 ? 'Key Provisions.' : ''}
  `;

  const handleMainListenClick = () => {
    mainSpeech.speak(mainContentToRead);
  };

  const purposeContentToRead = lawContent.purpose;
  const handlePurposeListenClick = () => {
    purposeSpeech.speak(purposeContentToRead);
  };

  const keyProvisionsToRead = lawContent.keyProvisions.map(p => p.title).join(', ');
  const handleKeyProvisionsListenClick = () => {
    keyProvisionsSpeech.speak(keyProvisionsToRead);
  };

  const handleProvisionContentListenClick = (content: string) => {
    keyProvisionsContentSpeeches.speak(content.replace(/<[^>]*>/g, ''));
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
          <Link href="/guidance/arizona/state-laws">Arizona Revised Statutes</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <Card className="border-destructive p-4">
                <div className="mb-4 flex justify-center">
                    <Button size="lg" onClick={handleMainListenClick} className="h-14 w-full font-bold btn-destructive">
                        {mainSpeech.isSpeaking ? (
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
                <CardTitle className="text-2xl font-bold">Title {law.id}. {law.name}</CardTitle>
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
                        <div className="mb-4 flex justify-center">
                            <Button size="lg" onClick={handlePurposeListenClick} className="h-14 w-full font-bold btn-destructive">
                                {purposeSpeech.isSpeaking ? (
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
                        {lawContent.purpose}
                    </AccordionContent>
                </AccordionItem>
              )}
              {lawContent.keyProvisions && lawContent.keyProvisions.length > 0 && (
                <AccordionItem value="item-2">
                    <AccordionTrigger className="mt-4 rounded-md bg-destructive px-4 text-lg font-bold text-destructive-foreground">Key Provisions</AccordionTrigger>
                    <AccordionContent>
                        <div className="mb-4 flex justify-center p-4">
                            <Button size="lg" onClick={handleKeyProvisionsListenClick} className="h-14 w-full font-bold btn-destructive">
                                {keyProvisionsSpeech.isSpeaking ? (
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
                        <Accordion type="multiple" className="mt-2">
                            {lawContent.keyProvisions.map((provision, index) => (
                            <AccordionItem value={`sub-item-${index}`} key={index}>
                                <AccordionTrigger className="mt-2 rounded-md bg-destructive/80 px-4 text-left font-bold text-destructive-foreground">
                                {provision.title}
                                </AccordionTrigger>
                                <AccordionContent className="p-4 text-justify">
                                    <div className="mb-4 flex justify-center">
                                        <Button size="lg" onClick={() => handleProvisionContentListenClick(provision.content)} className="h-14 w-full font-bold btn-destructive">
                                            {keyProvisionsContentSpeeches.isSpeaking ? (
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
