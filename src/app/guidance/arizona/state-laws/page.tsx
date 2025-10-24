
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ARIZONA_REVISED_STATUTES } from '@/lib/arizona-revised-statutes';

export default function ArizonaStateLawsPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-background shadow-2xl">
        <header className="flex-shrink-0 bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md rounded-t-2xl border-2 border-b-0 border-destructive">
          <Link href="/guidance/arizona">Arizona State Laws</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <div className="flex flex-col gap-4">
              {ARIZONA_REVISED_STATUTES.map((law) => (
                <Button
                  key={law.id}
                  size="lg"
                  className="h-20 w-full justify-start whitespace-normal px-4 text-left font-bold btn-destructive"
                  asChild
                >
                  <Link href={`/guidance/arizona/state-laws/${law.id}`}>
                    <span>Title {law.id}. {law.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 bg-muted p-2 text-destructive-foreground rounded-b-2xl border-2 border-t-0 border-destructive">
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
