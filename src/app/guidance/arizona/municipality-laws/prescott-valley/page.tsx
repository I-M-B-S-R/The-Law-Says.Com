
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PRESCOTT_VALLEY_TOWN_CODE } from '@/lib/prescott-valley-code';

export default function PrescottValleyLawsPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[95svh] w-full max-w-sm flex-col overflow-hidden rounded-2xl border-x-4 border-destructive bg-background shadow-2xl">
        <header className="flex-shrink-0 bg-destructive p-4 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance/arizona/municipality-laws">Prescott Valley Town Code</Link>
        </header>

        <ScrollArea className="flex-grow">
          <main className="p-4">
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="h-24 w-full justify-start whitespace-normal px-4 text-left font-bold"
                variant="destructive"
                asChild
              >
                <Link href="https://gis.yavapaiaz.gov/v4/map.aspx" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center">
                    <Map className="mr-4 h-8 w-8" />
                    <span>County Assessor's GIS Map</span>
                  </div>
                </Link>
              </Button>
              {PRESCOTT_VALLEY_TOWN_CODE.map((law) => (
                <Button
                  key={law.id}
                  size="lg"
                  className="h-24 w-full justify-start whitespace-normal px-4 text-left font-bold"
                  variant="destructive"
                  asChild
                >
                  <Link href={`/guidance/arizona/municipality-laws/prescott-valley/${law.id}`}>
                    <span>{law.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 bg-destructive p-2 text-destructive-foreground">
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
