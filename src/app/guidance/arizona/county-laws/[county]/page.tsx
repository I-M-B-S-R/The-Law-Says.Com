
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { YAVAPAI_COUNTY_ORDINANCES } from '@/lib/yavapai-county-ordinances';
import { APACHE_COUNTY_ORDINANCES } from '@/lib/apache-county-ordinances';
import { COCHISE_COUNTY_ORDINANCES } from '@/lib/cochise-county-ordinances';
import { COCONINO_COUNTY_ORDINANCES } from '@/lib/coconino-county-ordinances';
import { GILA_COUNTY_ORDINANCES } from '@/lib/gila-county-ordinances';
import { GRAHAM_COUNTY_ORDINANCES } from '@/lib/graham-county-ordinances';
import { GREENLEE_COUNTY_ORDINANCES } from '@/lib/greenlee-county-ordinances';
import { LA_PAZ_COUNTY_ORDINANCES } from '@/lib/la-paz-county-ordinances';
import { MARICOPA_COUNTY_ORDINANCES } from '@/lib/maricopa-county-ordinances';
import { MOHAVE_COUNTY_ORDINANCES } from '@/lib/mohave-county-ordinances';
import { NAVAJO_COUNTY_ORDINANCES } from '@/lib/navajo-county-ordinances';
import { PIMA_COUNTY_ORDINANCES } from '@/lib/pima-county-ordinances';
import { PINAL_COUNTY_ORDINANCES } from '@/lib/pinal-county-ordinances';
import { SANTA_CRUZ_COUNTY_ORDINANCES } from '@/lib/santa-cruz-county-ordinances';
import { YUMA_COUNTY_ORDINANCES } from '@/lib/yuma-county-ordinances';

export default function CountyLawsPage() {
  const router = useRouter();
  const params = useParams();
  const countySlug = params.county as string;
  const county = countySlug ? countySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';

  let ordinances: { id: string; name: string }[] = [];
  let ordinancesPath = '';

  if (countySlug === 'yavapai') {
    ordinances = YAVAPAI_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/yavapai';
  } else if (countySlug === 'apache') {
    ordinances = APACHE_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/apache';
  } else if (countySlug === 'cochise') {
    ordinances = COCHISE_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/cochise';
  } else if (countySlug === 'coconino') {
    ordinances = COCONINO_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/coconino';
  } else if (countySlug === 'gila') {
    ordinances = GILA_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/gila';
  } else if (countySlug === 'graham') {
    ordinances = GRAHAM_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/graham';
  } else if (countySlug === 'greenlee') {
    ordinances = GREENLEE_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/greenlee';
  } else if (countySlug === 'la-paz') {
    ordinances = LA_PAZ_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/la-paz';
  } else if (countySlug === 'maricopa') {
    ordinances = MARICOPA_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/maricopa';
  } else if (countySlug === 'mohave') {
    ordinances = MOHAVE_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/mohave';
  } else if (countySlug === 'navajo') {
    ordinances = NAVAJO_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/navajo';
  } else if (countySlug === 'pima') {
    ordinances = PIMA_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/pima';
  } else if (countySlug === 'pinal') {
    ordinances = PINAL_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/pinal';
  } else if (countySlug === 'santa-cruz') {
    ordinances = SANTA_CRUZ_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/santa-cruz';
  } else if (countySlug === 'yuma') {
    ordinances = YUMA_COUNTY_ORDINANCES;
    ordinancesPath = '/guidance/arizona/county-laws/yuma';
  }

  if (ordinances.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
          <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
            <Link href="/guidance/arizona/county-laws">{county} County Laws</Link>
          </header>
          <div className="flex flex-grow items-center justify-center border-x-2 border-destructive p-4">
            <div className="text-center">
              <p className="text-2xl font-bold">Content for {county} County is coming soon.</p>
              <Button asChild className="mt-4">
                <Link href="/guidance/arizona/county-laws">Back to Counties</Link>
              </Button>
            </div>
          </div>
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
          <Link href="/guidance/arizona/county-laws">{county} County Ordinances</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <div className="flex flex-col gap-4">
              {ordinances.map((ord) => (
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
