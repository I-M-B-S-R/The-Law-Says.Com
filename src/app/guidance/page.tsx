
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { JURISDICTIONS } from '@/lib/constants';

const states = JURISDICTIONS.filter(
    j => !["District of Columbia", "Puerto Rico", "Guam", "American Samoa", "U.S. Virgin Islands", "Northern Mariana Islands"].includes(j)
);

export default function StatesPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <div className="p-2 text-center text-sm font-bold text-destructive-foreground">
            <Link href="/" className="flex items-center justify-center gap-2">
                <Home className="h-4 w-4" />
                Home
            </Link>
        </div>
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/">State Laws</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <div className="flex flex-col gap-4">
              {states.map((state) => (
                <Button
                  key={state}
                  size="lg"
                  className="h-14 w-full justify-center whitespace-normal px-4 text-center btn-destructive"
                  asChild
                >
                  <Link href={`/guidance/${state.toLowerCase().replace(/ /g, '-')}`}>
                    <div className="flex flex-col items-center">
                      <span className="font-bold">{state}</span>
                      {state !== 'Arizona' && (
                        <span className="text-sm font-normal opacity-80">Coming Soon</span>
                      )}
                    </div>
                  </Link>
                </Button>
              ))}
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
