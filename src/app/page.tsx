
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Languages, AudioLines, ArrowLeft, ArrowRight, Loader2, StopCircle } from 'lucide-react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/context/language-context';

const HomePage = () => {
  const { isSpeaking, isGenerating, speak, stop } = useTextToSpeech();
  const router = useRouter();
  const { language, isTranslating, isLoading, missionStatement, uiText } = useLanguage();


  const contentToRead = `
    ${uiText.ourMission}: ${missionStatement.join(' ')}
  `.replace(/<[^>]*>/g, '');

  const handleListenClick = () => {
    if (isSpeaking || isGenerating) {
      stop();
    } else {
      speak(contentToRead);
    }
  };


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[95svh] w-full max-w-sm flex-col overflow-hidden rounded-2xl border-x-4 border-destructive bg-background shadow-2xl">
        <header className="flex-shrink-0 bg-destructive p-4 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          The-Law-Says.Com
        </header>

        <ScrollArea className="flex-grow">
          <main className="space-y-6 p-4">
            <div className="rounded-lg border border-destructive p-4">
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=http://the-law-says.com"
                alt="QR Code for The-Law-Says.Com"
                width={400}
                height={400}
                className="h-full w-full rounded-lg border-4 border-white"
              />
            </div>

            <div className="flex flex-col gap-4">
              <Button asChild size="lg" className="h-16 font-bold" variant="destructive">
                <Link href="/translate" className="flex items-center justify-center">
                  <Languages className="mr-2 h-5 w-5" />
                  {isTranslating && language !== 'English' ? <Loader2 className="h-5 w-5 animate-spin" /> : uiText.translate}
                </Link>
              </Button>

              <Button size="lg" onClick={handleListenClick} className="h-16 font-bold" variant="destructive" disabled={isGenerating}>
                 {isGenerating ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Loading Audio...
                    </>
                 ) : isSpeaking ? (
                    <>
                        <StopCircle className="mr-2 h-5 w-5" />
                        {uiText.stop}
                    </>
                 ): (
                    <>
                        <AudioLines className="mr-2 h-5 w-5" />
                        {uiText.listen}
                    </>
                 )}
              </Button>

              <Button asChild size="lg" className="h-16 font-bold" variant="destructive">
                <Link href="/guidance" className="flex items-center justify-center">
                   {isTranslating && language !== 'English' ? <Loader2 className="h-5 w-5 animate-spin" /> : uiText.federalLaws}
                </Link>
              </Button>

              <Button asChild size="lg" className="h-16 font-bold" variant="destructive">
                <Link href="/guidance" className="flex items-center justify-center">
                  {isTranslating && language !== 'English' ? <Loader2 className="h-5 w-5 animate-spin" /> : uiText.states}
                </Link>
              </Button>
            </div>

            <div className="space-y-4 rounded-lg border border-destructive p-4 text-justify text-foreground shadow-md">
              <div className="flex items-center justify-center">
                <h2 className="text-center text-2xl font-semibold text-foreground">
                  {isTranslating && language !== 'English' ? <Loader2 className="h-5 w-5 animate-spin" /> : uiText.ourMission}
                </h2>
              </div>
              <div className="prose max-w-none prose-p:text-foreground dark:prose-invert space-y-4 text-justify">
                {isLoading && language !== 'English' ? (
                  <div className="flex justify-center items-center h-48">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  </div>
                ) : (
                  missionStatement.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))
                )}
              </div>
            </div>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 bg-destructive p-2 text-destructive-foreground">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex h-12 w-12 items-center justify-center rounded-md p-0 hover:bg-destructive-foreground/10"
              aria-label="Go back"
            >
              <ArrowLeft strokeWidth={3} className="h-8 w-8" />
            </button>
            <p className="text-center text-xs">
              &copy; 2025 The-Law-Says.Com
            </p>
            <button
              onClick={() => router.forward()}
              className="flex h-12 w-12 items-center justify-center rounded-md p-0 hover:bg-destructive-foreground/10"
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

export default HomePage;
