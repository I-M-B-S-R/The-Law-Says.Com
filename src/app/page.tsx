// Add this directive at the top for client-side interactivity (hooks, event handlers)
"use client"; 

import React from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
import { Languages, AudioLines, BookOpen, Map } from 'lucide-react';
import { useTextToSpeech } from '../hooks/useTextToSpeech'; 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Define the HomePage component
const HomePage = () => {
  const { isSpeaking, speak, stop } = useTextToSpeech();

  const contentToRead = `
    Translate. Listen. Federal Laws. States. Our Mission: Our Mission Is To Provide Every Adult Living In Or Passing Through The United States Of America Or One Of The States Contained Therein...
  `; // Simplified text for speech for now

  const handleListenClick = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(contentToRead);
    }
  };

  // Return JSX, no <Layout> wrapper needed
  return (
    <main className="flex min-h-screen flex-col items-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        {/* QR Code */}
        <div className="flex justify-center mb-6"> 
          <Card className="w-full max-w-xs overflow-hidden rounded-2xl border-2 border-primary/50 bg-card shadow-[0_0_20px_theme(colors.primary/0.5)]">
            <CardHeader className="bg-primary p-4">
                <h1 className="text-center font-headline text-2xl font-bold text-primary-foreground">
                    The-Law-Says.Com
                </h1>
            </CardHeader>
            <CardContent className="p-4 bg-white">
                <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=http://the-law-says.com"
                    alt="QR Code for The-Law-Says.Com"
                    width={250} 
                    height={250}
                    className="h-full w-full rounded-lg" 
                />
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Button asChild size="lg" variant="default" className="h-16 text-lg">
                <Link href="/translate">
                    <Languages className="mr-2" />
                    Translate
                </Link>
            </Button>
            <Button size="lg" variant="default" className="h-16 text-lg" onClick={handleListenClick}>
                <AudioLines className="mr-2" />
                {isSpeaking ? 'Stop' : 'Listen'}
            </Button>
            <Button asChild size="lg" variant="default" className="h-16 text-lg">
                <Link href="/federal">
                    <BookOpen className="mr-2" />
                    Federal Laws
                </Link>
            </Button>
            <Button asChild size="lg" variant="default" className="h-16 text-lg">
                <Link href="/states">
                    <Map className="mr-2" />
                    States
                </Link>
            </Button>
        </div>


        {/* Mission Statement */}
        <Card className="border-border shadow-lg">
            <CardHeader>
                <h2 className="text-3xl font-headline font-bold text-center text-foreground">Our Mission</h2> 
            </CardHeader>
            <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4 text-justify"> 
                <p>
                    Our Mission Is To Provide Every Adult Living In Or Passing Through The United States Of America Or One Of The States Contained Therein, Including There Countys, Municipalities, Or Tribes, With The Most Comprehensive, Quick Reference Mobile App And Legal Research Platform Ever Built! It Has <strong>&quot;AUTHENTIC, VERIFIED, AND REGULARLY UPDATED CONTENT FROM OFFICIAL GOVERNMENT SOURCES&quot;!</strong> It Will Allow All Persons Using This APP To Understand Their <strong>RIGHTS, AND THEIR OBLIGATIONS, AS PRESCRIBED BY LAW.</strong> The Laws That Govern All Of Us Who Reside In, Or Who Are Passing Through, &quot;The United States Of America&quot;.
                </p>
                <p>
                    It Is Our Belief That Most Disagreements Can Be Settled Simply By People &quot;Knowing What The Laws Say, How Judges Have Interpreted Those Laws In The Past, And Are Likely To Interpret Them In Their Particular Case, And How Their Decisions Have Been Documented In (Case Law), And Again, What Their Rights and Obligations Are Under Law, That We All Have To Each Other, And To Those Authorities That Have Been Placed Above Us When We Are In, Or Passing Through Their Districts, As Prescribed By Law&quot;!
                </p>
                <p>
                    In The Past People Had To Rely On Legal Advice Provided By Lawyers In Making Their Decisions, But The Simple Fact Of The Matter Is Most People Cannot Afford A Lawyer&apos;s Advice! So, They Called The Police To Settle These Disagreements, The Problem With That Is The Police May Not Know What The Laws Are Themselves, That Deal With The Disagreement That The People Are Having!
                </p>
                <p>
                    And Unfortunately, When The Police Don&apos;t Know The Laws Themselves They Can Be Influenced Not By The Laws Themselves, But By The Perceived Finances Or Political Standing That 1 Party May Have Over The Other In Their Decision Making! <strong>&quot;THATS NOT JUSTICE!&quot;</strong>
                </p>
                <p>
                    The Other Thing The Police Do Is To Tell People To Go To Court To Settle The Matter, And <strong className="text-primary">&quot;IF YOU NEED TO GO TO COURT, YOU WILL NEED A LAWYER!&quot;</strong> A Lawyer That Most People Cannot Afford! So, They End Up Forfeiting Their Rights Are Not Proving True To Their Obligations As Prescribed By Law! <strong>&quot;THATS NOT JUSTICE EATHER!&quot;</strong>
                </p>
                <p>
                    It Is Our Hope That By People Using &quot;The Arizona Law Quick Reference Mobile App&quot;, people will understand their &quot;Rights and their Obligations&quot; As Prescribed By Law. The Laws That Govern All Of Us Who Reside In Or Who Are Passing Through The 131 Districts That Are In &quot;The Great State Of Arizona&quot; Educating Them To Be Better Law Abiding Citizens Who Can Settle Disagreements Peacefully, And Legally, Even If They&apos;re Reading Ability Is Very Limited, They Can Listen To The Information, Without The Need Of The Police, Paralegals, Lawyers, Or Our Court System, Or Even Our Lawmakers!
                </p>
                </div>
            </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default HomePage;
