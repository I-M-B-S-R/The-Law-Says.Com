
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Search, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';

export default function StateGuidancePage() {
  const router = useRouter();
  const params = useParams();
  const state = params.state ? (params.state as string).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Arizona';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-full w-full max-w-sm flex-col bg-background shadow-2xl">
        <div className="p-2 text-center text-sm font-bold text-destructive-foreground">
            <Link href="/" className="flex items-center justify-center gap-2">
                <Home className="h-4 w-4" />
                Home
            </Link>
        </div>
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance">{state} Law</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <div className="flex flex-col gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="h-14 w-full rounded-lg border-destructive bg-transparent pl-10 text-lg border-2"
                    />
                </div>
                <Button
                  size="lg"
                  className="h-14 w-full font-bold btn-destructive"
                  asChild
                >
                  <Link href={'/guidance/arizona/state-laws'}>
                    State Laws
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="h-14 w-full font-bold btn-destructive"
                  asChild
                >
                  <Link href={'/guidance/arizona/county-laws'}>
                    County Laws
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="h-14 w-full font-bold btn-destructive"
                  asChild
                >
                  <Link href={'/guidance/arizona/municipality-laws'}>
                    Municipality Laws
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="h-14 w-full font-bold btn-destructive"
                  asChild
                >
                  <Link href={'/guidance/arizona/tribal-laws'}>
                    Tribal Laws
                  </Link>
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
