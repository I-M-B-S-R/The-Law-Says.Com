"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Languages, AudioLines, ArrowLeft, ArrowRight, BookOpen, Map } from 'lucide-react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const HomePage = () => {
  const { isSpeaking, speak, stop } = useTextToSpeech();
  const router = useRouter();

  const contentToRead = `
    Translate. Listen. Federal Laws. States. Our Mission: Our Mission Is To Provide Every Adult Living In Or Passing Through The United States Of America Or One Of The States Contained Therein...
  `;

  const handleListenClick = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(contentToRead);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[95svh] w-full max-w-lg flex-col rounded-2xl border-4 border-neutral-700 bg-background shadow-2xl">
        <header className="flex-shrink-0 bg-destructive text-destructive-foreground p-4 text-center font-bold text-xl shadow-md">
          The-Law-Says.Com
        </header>

        <ScrollArea className="flex-grow">
          <main className="p-4">
            <div className="flex justify-center mb-6">
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=http://the-law-says.com"
                alt="QR Code for The-Law-Says.Com"
                width={250}
                height={250}
                className="rounded-lg shadow-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button asChild size="lg" className="h-auto" variant="destructive">
                <Link href="/translate" className="flex items-center justify-center">
                  <Languages className="mr-2 h-5 w-5" />
                  Translate
                </Link>
              </Button>

              <Button size="lg" onClick={handleListenClick} className="h-auto" variant="destructive">
                <AudioLines className="mr-2 h-5 w-5" />
                {isSpeaking ? 'Stop' : 'Listen'}
              </Button>

              <Button asChild size="lg" className="h-auto" variant="destructive">
                <Link href="/federal" className="flex items-center justify-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Federal Laws
                </Link>
              </Button>

              <Button asChild size="lg" className="h-auto" variant="destructive">
                <Link href="/states" className="flex items-center justify-center">
                  <Map className="mr-2 h-5 w-5" />
                  States
                </Link>
              </Button>
            </div>

            <div className="border rounded-lg p-4 shadow-md">
              <h2 className="text-2xl font-semibold mb-3 text-center text-foreground">Our Mission</h2>
              <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4 text-justify">
                <p>
                  Our Mission Is To Provide Every Adult Living In Or Passing Through The United States Of America Or One Of The States Contained Therein, Including There Countys, Municipalities, Or Tribes, With The Most Comprehensive, Quick Reference Mobile App And Legal Research Platform Ever Built! It Has <strong>"AUTHENTIC, VERIFIED, AND REGULARLY UPDATED CONTENT FROM OFFICIAL GOVERNMENT SOURCES"!</strong> It Will Allow All Persons Using This APP To Understand Their <strong>RIGHTS, AND THEIR OBLIGATIONS, AS PRESCRIBED BY LAW.</strong> The Laws That Govern All Of Us Who Reside In, Or Who Are Passing Through, "The United States Of America".
                </p>
                <p>
                  It Is Our Belief That Most Disagreements Can Be Settled Simply By People "Knowing What The Laws Say, How Judges Have Interpreted Those Laws In The Past, And Are Likely To Interpret Them In Their Particular Case, And How Their Decisions Have Been Documented In (Case Law), And Again, What Their Rights and Obligations Are Under Law, That We All Have To Each Other, And To Those Authorities That Have Been Placed Above Us When We Are In, Or Passing Through Their Districts, As Prescribed By Law"!
                </p>
                <p>
                  In The Past People Had To Rely On Legal Advice Provided By Lawyers In Making Their Decisions, But The Simple Fact Of The Matter Is Most People Cannot Afford A Lawyer's Advice! So, They Called The Police To Settle These Disagreements, The Problem With That Is The Police May Not Know What The Laws Are Themselves, That Deal With The Disagreement That The People Are Having!
                </p>
                <p>
                  And Unfortunately, When The Police Don't Know The Laws Themselves They Can Be Influenced Not By The Laws Themselves, But By The Perceived Finances Or Political Standing That 1 Party May Have Over The Other In Their Decision Making! <strong>"THATS NOT JUSTICE!"</strong>
                </p>
                <p>
                  The Other Thing The Police Do Is To Tell People To Go To Court To Settle The Matter, And <strong className="text-destructive">"IF YOU NEED TO GO TO COURT, YOU WILL NEED A LAWYER!"</strong> A Lawyer That Most People Cannot Afford! So, They End Up Forfeiting Their Rights Are Not Proving True To Their Obligations As Prescribed By Law! <strong>"THATS NOT JUSTICE EATHER!"</strong>
                </p>
                <p>
                  It Is Our Hope That By People Using "The Arizona Law Quick Reference Mobile App", people will understand their "Rights and their Obligations" As Prescribed By Law. The Laws That Govern All Of Us Who Reside In Or Who Are Passing Through The 131 Districts That Are In "The Great State Of Arizona" Educating Them To Be Better Law Abiding Citizens Who Can Settle Disagreements Peacefully, And Legally, Even If They're Reading Ability Is Very Limited, They Can Listen To The Information, Without The Need Of The Police, Paralegals, Lawyers, Or Our Court System, Or Even Our Lawmakers!
                </p>
              </div>
            </div>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 bg-destructive text-destructive-foreground p-2">
          <div className="flex justify-between items-center">
            <Button variant="ghost" size="icon" onClick={() => router.back()} className="hover:bg-destructive-foreground/10">
              <ArrowLeft />
            </Button>
            <p className="text-center text-xs">
              &copy; 2025 The-Law-Says.Com
            </p>
            <Button variant="ghost" size="icon" onClick={() => router.forward()} className="hover:bg-destructive-foreground/10">
              <ArrowRight />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
