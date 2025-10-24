
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ARIZONA_MUNICIPALITIES } from '@/lib/arizona-municipalities';

export default function ArizonaMunicipalityLawsPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[95svh] w-full max-w-sm flex-col overflow-hidden rounded-2xl border-x-4 border-destructive bg-background shadow-2xl">
        <header className="flex-shrink-0 bg-muted p-4 text-center text-3xl font-bold text-destructive-foreground shadow-md border-b-2 border-destructive">
          <Link href="/guidance/arizona">Arizona Municipalities</Link>
        </header>

        <ScrollArea className="flex-grow">
          <main className="p-4">
            <div className="grid grid-cols-2 gap-4">
              {ARIZONA_MUNICIPALITIES.map((municipality) => (
                <Button
                  key={municipality}
                  size="lg"
                  className="h-16 w-full justify-center whitespace-normal px-2 text-center text-xs font-bold btn-destructive"
                  asChild
                >
                  <Link href={`/guidance/arizona/municipality-laws/${municipality.toLowerCase().replace(/ /g, '-')}`}>
                    <span>{municipality}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 bg-muted p-2 text-destructive-foreground border-t-2 border-destructive">
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
