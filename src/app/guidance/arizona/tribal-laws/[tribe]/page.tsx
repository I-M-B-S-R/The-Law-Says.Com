
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ARIZONA_TRIBES } from '@/lib/arizona-tribes';

export default function TribalLawPage() {
  const router = useRouter();
  const params = useParams();
  const tribeSlug = params.tribe as string;

  const tribeName = ARIZONA_TRIBES.find(
    (tribe) => tribe.toLowerCase().replace(/ /g, '-').replace(/'/g, '') === tribeSlug
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance/arizona/tribal-laws">{tribeName || 'Tribal Law'}</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <div className="flex flex-col gap-4">
              <Button size="lg" className="h-14 w-full font-bold btn-destructive" disabled>
                Tribal Constitution
              </Button>
              <Button size="lg" className="h-14 w-full font-bold btn-destructive" disabled>
                Tribal Code/Ordinances
              </Button>
              <Button size="lg" className="h-14 w-full font-bold btn-destructive" disabled>
                Tribal Courts
              </Button>
              <Button size="lg" className="h-14 w-full font-bold btn-destructive" disabled>
                Law Enforcement
              </Button>
              <Button size="lg" className="h-14 w-full font-bold btn-destructive" disabled>
                Historical & Current Information
              </Button>
            </div>
          </main>
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
