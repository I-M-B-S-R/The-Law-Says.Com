
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MAMMOTH_TOWN_CODE } from '@/lib/mammoth-code';

export default function MammothLawsPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-lg border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance/arizona/municipality-laws">Mammoth Town Code</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <div className="text-center mb-4 p-2 border border-destructive rounded-lg">
              <p className="text-sm font-semibold">The Town of Mammoth's municipal code is not fully digitized online. The content provided here is representative of standard municipal codes for a town of its size and may not reflect the exact current code. For official information, please contact the Mammoth Town Clerk's office.</p>
            </div>
            <div className="flex flex-col gap-4">
              {MAMMOTH_TOWN_CODE.map((law) => (
                <Button
                  key={law.id}
                  size="lg"
                  className="h-20 w-full justify-start whitespace-normal px-4 text-left font-bold btn-destructive"
                  asChild
                  disabled={law.reserved}
                >
                  <Link href={`/guidance/arizona/municipality-laws/mammoth/${law.id}`}>
                    <span>{law.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </main>
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
