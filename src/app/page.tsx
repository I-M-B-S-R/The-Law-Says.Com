
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Languages, AudioLines, ArrowLeft, ArrowRight, Loader2, StopCircle } from 'lucide-react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/context/language-context';

const MISSION_STATEMENT_ORIGINAL: string[] = [
  `Our Mission Is To Provide Every Adult Living In Or Passing Through The United States Of America Or One Of The States Contained Therein, Including There Countys, Municipalities, Or Tribes, With The Most Comprehensive, Quick Reference Mobile App And Legal Research Platform Ever Built! It Has <strong>"AUTHENTIC, VERIFIED, AND REGULARLY UPDATED CONTENT FROM OFFICIAL GOVERNMENT SOURCES"!</strong> It Will Allow All Persons Using This APP To Understand Their <strong>RIGHTS, AND THEIR OBLIGATIONS, AS PRESCRIBED BY LAW.</strong> The Laws That Govern All Of Us Who Reside In, Or Who Are Passing Through, "The United States Of America".`,
  `It Is Our Belief That Most Disagreements Can Be Settled Simply By People "Knowing What The Laws Say, How Judges Have Interpreted Those Laws In The Past, And Are Likely To Interpret Them In Their Particular Case, And How Their Decisions Have Been Documented In (Case Law), And Again, What Their Rights and Obligations Are Under Law, That We All Have To Each Other, And To Those Authorities That Have Been Placed Above Us When We Are In, Or Passing Through Their Districts, As Prescribed By Law"!`,
  `In The Past People Had To Rely On Legal Advice Provided By Lawyers In Making Their Decisions, But The SimpleFact Of The Matter Is Most People Cannot Afford A Lawyer's Advice! So, They Called The Police To Settle These Disagreements, The Problem With That Is The Police May Not Know What The Laws Are Themselves, That Deal With The Disagreement That The People Are Having!`,
  `And Unfortunately, When The Police Don't Know The Laws Themselves They Can Be Influenced Not By The Laws Themselves, But By The Perceived Finances Or Political Standing That 1 Party May Have Over The Other In Their Decision Making! <strong>"THATS NOT JUSTICE!"</strong>`,
  `The Other Thing The Police Do Is To Tell People To Go To Court To Settle The Matter, And <strong class="text-destructive font-bold">"IF YOU NEED TO GO TO COURT, YOU WILL NEED A LAWYER!"</strong> A Lawyer That Most People Cannot Afford! So, They End Up Forfeiting Their Rights Are Not Proving True To Their Obligations As Prescribed By Law! <strong>"THATS NOT JUSTICE EATHER!"</strong>`,
  `It Is Our Hope That By People Using "The Arizona Law Quick Reference Mobile App", people will understand their "Rights and their Obligations" As Prescribed By Law. The Laws That Govern All Of Us Who Reside In Or Who Are Passing Through The 131 Districts That Are In "The Great State Of Arizona" Educating Them To Be Better Law Abiding Citizens Who Can Settle Disagreements Peacefully, And Legally, Even If They're Reading Ability Is Very Limited, They Can Listen To The Information, Without The Need Of The Police, Paralegals, Lawyers, Or Our CourtSystem, Or Even Our Lawmakers!`
];

const UI_TEXT_ORIGINAL: Record<string, string> = {
  translate: 'Translate',
  listen: 'Listen',
  stop: 'Stop',
  federalLaws: 'Federal Laws',
  states: 'States',
  ourMission: 'Our Mission'
};

const HomePage = () => {
  const { isSpeaking, isGenerating, speak, stop } = useTextToSpeech();
  const router = useRouter();
  const { language, translate, isTranslating: isLanguageContextTranslating } = useLanguage();

  const [missionStatement, setMissionStatement] = useState(MISSION_STATEMENT_ORIGINAL);
  const [uiText, setUiText] = useState(UI_TEXT_ORIGINAL);

  const isTranslating = isLanguageContextTranslating || isGenerating;

  useEffect(() => {
    const translateContent = async () => {
      if (language === 'English') {
        setMissionStatement(MISSION_STATEMENT_ORIGINAL);
        setUiText(UI_TEXT_ORIGINAL);
        return;
      }

      try {
        const translatedMissionPromise = Promise.all(
          MISSION_STATEMENT_ORIGINAL.map(p => translate(p, language))
        );

        const translatedUiPromise = (async () => {
          const translatedUi: Record<string, string> = {};
          for (const key in UI_TEXT_ORIGINAL) {
            translatedUi[key] = await translate(UI_TEXT_ORIGINAL[key], language);
          }
          return translatedUi;
        })();

        const [translatedMission, translatedUi] = await Promise.all([
          translatedMissionPromise,
          translatedUiPromise
        ]);

        setMissionStatement(translatedMission);
        setUiText(translatedUi);

      } catch (error) {
        console.error("Translation failed", error);
        setMissionStatement(MISSION_STATEMENT_ORIGINAL);
        setUiText(UI_TEXT_ORIGINAL);
      }
    };
    
    translateContent();

  }, [language, translate]);

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
              <div className="flex items-center justify-between">
                <h2 className="text-center text-2xl font-semibold text-foreground">
                  {isTranslating && language !== 'English' ? <Loader2 className="h-5 w-5 animate-spin" /> : uiText.ourMission}
                </h2>
              </div>
              <div className="prose max-w-none prose-p:text-foreground dark:prose-invert space-y-4 text-justify">
                {isTranslating && language !== 'English' ? (
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
