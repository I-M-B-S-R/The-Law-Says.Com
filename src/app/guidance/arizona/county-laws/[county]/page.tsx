
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home, Search, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { YAVAPAI_COUNTY_ORDINANCES } from '@/lib/yavapai-county-ordinances';
import { Input } from '@/components/ui/input';

export default function CountyLawsPage() {
  const router = useRouter();
  const params = useParams();
  const countySlug = params.county as string;
  const county = countySlug ? countySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';
  const [searchQuery, setSearchQuery] = useState('');

  // This is a placeholder for a dynamic import system
  // For now, we only have data for Yavapai County
  const ordinances = countySlug === 'yavapai' ? YAVAPAI_COUNTY_ORDINANCES : [];
  const ordinancesPath = `/guidance/arizona/county-laws/yavapai`;

  const filteredOrdinances = useMemo(() => {
    if (!searchQuery) {
      return ordinances;
    }
    return ordinances.filter((ord) =>
      ord.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, ordinances]);


  if (ordinances.length === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-black p-4">
        <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
          <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
            <Link href="/guidance/arizona/county-laws">{county} County Laws</Link>
          </header>
          <ScrollArea className="flex-grow border-x-2 border-destructive">
            <div className="p-2 text-center text-sm font-bold text-destructive-foreground">
              <Link href="/" className="flex items-center justify-center gap-2">
                  <Home className="h-4 w-4" />
                  Home
              </Link>
            </div>
            <div className="flex flex-grow items-center justify-center p-4">
              <div className="text-center">
                <p className="text-2xl font-bold">Content for {county} County is coming soon.</p>
                <Button asChild className="mt-4">
                  <Link href="/guidance/arizona/county-laws">Back to Counties</Link>
                </Button>
              </div>
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

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance/arizona/county-laws">{county} County Ordinances</Link>
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
                    placeholder="Search ordinances..."
                    className="h-14 w-full rounded-lg border-destructive bg-transparent pl-10 text-lg border-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <main>
              <div className="flex flex-col gap-4">
                {filteredOrdinances.map((ord) => (
                  <Button
                    key={ord.id}
                    size="lg"
                    className="h-20 w-full justify-center whitespace-normal px-4 text-center font-bold btn-destructive"
                    asChild
                  >
                    <Link href={`${ordinancesPath}/${ord.id}`}>
                      <span>{ord.name}</span>
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
