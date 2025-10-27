
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ARIZONA_MUNICIPALITIES } from '@/lib/arizona-municipalities';
import { Input } from '@/components/ui/input';

export default function ArizonaMunicipalityLawsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMunicipalities = useMemo(() => {
    if (!searchQuery) {
      return ARIZONA_MUNICIPALITIES;
    }
    return ARIZONA_MUNICIPALITIES.filter((municipality) =>
      municipality.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance/arizona">Arizona Municipalities</Link>
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
                    placeholder="Search municipalities..."
                    className="h-14 w-full rounded-lg border-destructive bg-transparent pl-10 text-lg border-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <main>
              <div className="grid grid-cols-2 gap-4">
                {filteredMunicipalities.map((municipality) => (
                  <Button
                    key={municipality}
                    size="lg"
                    className="h-14 w-full justify-center whitespace-normal px-2 text-center text-xs font-bold btn-destructive"
                    asChild
                  >
                    <Link href={`/guidance/arizona/municipality-laws/${municipality.toLowerCase().replace(/ /g, '-')}`}>
                      <span>{municipality}</span>
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
