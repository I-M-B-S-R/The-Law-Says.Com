
"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Languages, AudioLines, ArrowLeft, ArrowRight, Loader2, StopCircle, Accessibility, Home, MessageSquareQuote, FileTree } from 'lucide-react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/context/language-context';

const HomePage = () => {
  const router = useRouter();
  const { language, isTranslating, isLoading, missionStatement, whyLawyerText, uiText } = useLanguage();

  const mainButtonsSpeech = useTextToSpeech();
  const missionSpeech = useTextToSpeech();
  const whyLawyerSpeech = useTextToSpeech();

  const mainButtonsContent = useMemo(() => `
    Please Share,
    ${uiText.translate},
    ${uiText.listen},
    ${uiText.federalLaws},
    ${uiText.stateLaws},
    Ask the AI a question,
    The Code!
  `, [uiText]);

  const missionContent = useMemo(() => `
    ${uiText.ourMission}: ${missionStatement.join(' ')}
  `.replace(/<[^>]*>/g, ''), [uiText.ourMission, missionStatement]);

  const whyLawyerContent = useMemo(() => `
    ${uiText.whyLawyer}: ${whyLawyerText.join(' ')}
  `.replace(/<[^>]*>/g, ''), [uiText.whyLawyer, whyLawyerText]);


  const handleMainListenClick = () => {
    if (mainButtonsSpeech.isSpeaking) {
      mainButtonsSpeech.stop();
    } else {
      mainButtonsSpeech.speak(mainButtonsContent);
    }
  };

  const handleMissionListenClick = () => {
    if (missionSpeech.isSpeaking) {
      missionSpeech.stop();
    } else {
      missionSpeech.speak(missionContent);
    }
  };

  const handleWhyLawyerListenClick = () => {
    if (whyLawyerSpeech.isSpeaking) {
      whyLawyerSpeech.stop();
    } else {
      whyLawyerSpeech.speak(whyLawyerContent);
    }
  };


  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          The-Law-Says.Com
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <div className="p-2 text-center text-sm font-bold text-destructive-foreground">
              <Link href="/" className="flex items-center justify-center gap-2">
                  <Home className="h-4 w-4" />
                  Home
              </Link>
          </div>
          <main className="p-4 pt-0">
            <div className="flex flex-col gap-4">
                <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=http://the-law-says.com"
                    alt="QR Code for The-Law-Says.Com"
                    width={400}
                    height={400}
                    className="h-full w-full rounded-lg border-4 border-white"
                />
                
                <div className="text-center">
                  <p className="text-5xl font-bold text-destructive-foreground">Please Share</p>
                </div>

              <Button asChild size="lg" className="h-14 font-bold btn-destructive">
                <Link href="/translate" className="flex items-center justify-center">
                  <Languages className="mr-2 h-5 w-5" />
                  {isTranslating && language !== 'English' ? <Loader2 className="h-5 w-5 animate-spin" /> : uiText.translate}
                </Link>
              </Button>

              <Button size="lg" onClick={handleMainListenClick} className="h-14 font-bold btn-destructive">
                 {mainButtonsSpeech.isSpeaking ? (
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

              <Button asChild size="lg" className="h-14 font-bold btn-destructive">
                <Link href="/federal-laws" className="flex items-center justify-center">
                   {isTranslating && language !== 'English' ? <Loader2 className="h-5 w-5 animate-spin" /> : uiText.federalLaws}
                </Link>
              </Button>

              <Button asChild size="lg" className="h-14 font-bold btn-destructive">
                <Link href="/guidance" className="flex items-center justify-center">
                  {isTranslating && language !== 'English' ? <Loader2 className="h-5 w-5 animate-spin" /> : uiText.stateLaws}
                </Link>
              </Button>

              <Button asChild size="lg" className="h-14 font-bold btn-destructive">
                <Link href="/guidance/ask" className="flex items-center justify-center">
                   <MessageSquareQuote className="mr-2 h-5 w-5" />
                   Ask The AI A Question
                </Link>
              </Button>

              <Button asChild size="lg" className="h-14 font-bold btn-destructive">
                <Link href="/the-code" className="flex items-center justify-center">
                  <FileTree className="mr-2 h-5 w-5" />
                  The Code
                </Link>
              </Button>
            </div>

            <div className="mt-4 space-y-4 rounded-lg border border-destructive p-4 text-justify text-foreground shadow-md">
                <div className="flex justify-center">
                    <Button size="lg" onClick={handleMissionListenClick} className="h-14 w-full font-bold btn-destructive">
                        {missionSpeech.isSpeaking ? (
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
                </div>
              <div className="flex items-center justify-center gap-2">
                <Accessibility className="h-8 w-8 text-destructive" />
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

            <div className="mt-4 space-y-4 rounded-lg border border-destructive p-4 text-justify text-foreground shadow-md">
                <div className="flex justify-center">
                    <Button size="lg" onClick={handleWhyLawyerListenClick} className="h-14 w-full font-bold btn-destructive">
                        {whyLawyerSpeech.isSpeaking ? (
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
                </div>
              <div className="flex items-center justify-center">
                <h2 className="text-center text-2xl font-semibold text-foreground">
                  <span className="text-destructive mr-2 text-4xl">*</span>
                  {isTranslating && language !== 'English' ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                    <>{uiText.whyLawyer}</>
                  )}
                </h2>
              </div>
              <div className="prose max-w-none prose-p:text-foreground dark:prose-invert space-y-4 text-justify">
                {isLoading && language !== 'English' ? (
                  <div className="flex justify-center items-center h-48">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  </div>
                ) : (
                  whyLawyerText.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))
                )}
              </div>
            </div>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 rounded-b-2xl border-x-2 border-b-2 border-t-2 border-destructive bg-muted p-2 text-destructive-foreground">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex h-12 w-12 items-center justify-center rounded-md p-0 hover:bg-destructive-foreground/10"
              aria-label="Go back"
            >
              <ArrowLeft strokeWidth={3} className="h-8 w-8" />
            </button>
            <div className="flex flex-col items-center">
                <Accessibility className="h-6 w-6" />
                <p className="text-center text-xs">
                    &copy; 2025 The-Law-Says.Com
                </p>
            </div>
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
