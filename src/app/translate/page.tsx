
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Search, Home, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LANGUAGES } from '@/lib/languages';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/language-context';

export default function LanguageSelectPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  const { setLanguage } = useLanguage();

  const handleLanguageSelect = (language: string) => {
    setLanguage(language);
    toast({
      title: 'Language Selected',
      description: `The site language has been set to ${language}.`,
    });
    router.push('/');
  };

  const filteredLanguages = useMemo(() => {
    if (!searchQuery) {
      return LANGUAGES;
    }
    return LANGUAGES.filter((lang) =>
      lang.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/">The-Law-Says.Com</Link>
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
                placeholder="Search for a language..."
                className="h-14 w-full rounded-lg border-2 border-destructive bg-transparent pl-10 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <main className="space-y-4">
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  className="h-14 w-full border bg-black font-bold text-white border-destructive hover:bg-destructive/10"
                  onClick={() => handleLanguageSelect('English')}
                >
                  English
                </Button>
                {filteredLanguages.map((language) => (
                  <Button
                    key={language}
                    size="lg"
                    className="h-14 w-full font-bold btn-destructive"
                    onClick={() => handleLanguageSelect(language)}
                  >
                    {language}
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
