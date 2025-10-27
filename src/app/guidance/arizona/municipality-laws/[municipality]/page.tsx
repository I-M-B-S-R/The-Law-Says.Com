
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home, Search, Wheelchair } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getMunicipalityCodeList } from '@/lib/municipality-code-list';
import { Input } from '@/components/ui/input';

export default function MunicipalityLawsPage() {
  const router = useRouter();
  const params = useParams();
  const { municipality } = params;
  const [searchQuery, setSearchQuery] = useState('');

  const municipalityName = (municipality as string).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const laws = getMunicipalityCodeList(municipality as string);

  const filteredLaws = useMemo(() => {
    if (!laws) return [];
    if (!searchQuery) {
      return laws;
    }
    return laws.filter((law) =>
      law.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, laws]);

  if (!laws) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="w-full max-w-sm text-center">
          <p className="text-2xl font-bold text-destructive-foreground">Laws not found for {municipalityName}</p>
          <Button asChild className="mt-4">
            <Link href="/guidance/arizona/municipality-laws">Back to Municipalities</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-lg border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance/arizona/municipality-laws">{municipalityName} Town Code</Link>
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
                    placeholder="Search town code..."
                    className="h-14 w-full rounded-lg border-destructive bg-transparent pl-10 text-lg border-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <main>
              <div className="flex flex-col gap-4">
                {filteredLaws.map((law) => (
                  <Button
                    key={law.id}
                    size="lg"
                    className="h-20 w-full justify-start whitespace-normal px-4 text-left font-bold btn-destructive"
                    asChild
                    disabled={law.reserved}
                  >
                    <Link href={`/guidance/arizona/municipality-laws/${municipality}/${law.id}`}>
                      <span>{law.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </main>
          </div>
        </ScrollArea>

        <footer className="flex-shrink-0 rounded-b-lg border-x-2 border-b-2 border-t-2 border-destructive bg-muted p-2 text-destructive-foreground">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="rounded-md p-2 hover:bg-destructive-foreground/10"
              aria-label="Go back"
            >
              <ArrowLeft strokeWidth={3} className="h-8 w-8" />
            </button>
            <div className="flex flex-col items-center">
                <Wheelchair className="h-6 w-6" />
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
