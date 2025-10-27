'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, AudioLines, StopCircle, Loader2, Home, Search, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FEDERAL_LAWS } from '@/lib/federal-laws';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { useLanguage } from '@/context/language-context';
import { Input } from '@/components/ui/input';

export default function FederalLawsPage() {
  const router = useRouter();
  const { language, isTranslating, uiText } = useLanguage();
  const speech = useTextToSpeech();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLaws = useMemo(() => {
    if (!searchQuery) {
      return FEDERAL_LAWS;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return FEDERAL_LAWS.filter((law) =>
      law.name.toLowerCase().includes(lowercasedQuery) ||
      law.id.toLowerCase().includes(lowercasedQuery) ||
      (law.keywords && law.keywords.some(keyword => keyword.toLowerCase().includes(lowercasedQuery)))
    );
  }, [searchQuery]);

  const federalLawsContent = useMemo(() => filteredLaws.map(law => `${law.id}. ${law.name}`).join(', '), [filteredLaws]);

  const handleListenClick = () => {
    if (speech.isSpeaking) {
      speech.stop();
    } else {
      speech.speak(federalLawsContent);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/federal-laws">
            {isTranslating && language !== 'English' ? <Loader2 className="mx-auto h-8 w-8 animate-spin" /> : uiText.federalLaws}
          </Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <div className="p-2 text-center text-sm font-bold text-destructive-foreground">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </div>
          <div className="p-4 pt-0">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search federal laws..."
                className="h-14 w-full rounded-lg border-destructive bg-transparent pl-10 text-lg border-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <main>
              <div className="flex flex-col gap-4">
                <Button onClick={handleListenClick} size="lg" className="h-14 w-full font-bold btn-destructive">
                  {speech.isSpeaking ? (
                    <>
                      <StopCircle className="mr-2 h-5 w-5" />
                      {uiText.stop}
                    </>
                  ) : (
                    <>
                      <AudioLines className="mr-2 h-5 w-5" />
                      {uiText.listen}
                    </>
                  )}
                </Button>
                {filteredLaws.map((law) => (
                  <Button
                    key={law.id}
                    size="lg"
                    className="h-20 w-full justify-start whitespace-normal px-4 text-left font-bold btn-destructive"
                    asChild
                  >
                    <Link href={`/federal-laws/${law.id}`}>
                      <span>{law.id}. {law.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </main>
          </div>
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
            <div className="flex flex-col items-center">
                <Accessibility className="h-6 w-6" />
                <p className="text-center text-xs">
                    &copy; 2025 The-Law-Says.Com
                </p>
            </div>
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
