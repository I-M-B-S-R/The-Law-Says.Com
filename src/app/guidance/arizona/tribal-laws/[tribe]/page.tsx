
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ARIZONA_TRIBES } from '@/lib/arizona-tribes';
import { AK_CHIN_CONTENT } from '@/lib/ak-chin-content';
import { COCOPAH_CONTENT } from '@/lib/cocopah-content';
import { COLORADO_RIVER_INDIAN_TRIBES_CONTENT } from '@/lib/colorado-river-indian-tribes-content';
import { FORT_MCDOWELL_YAVAPAI_NATION_CONTENT } from '@/lib/fort-mcdowell-yavapai-nation-content';
import { FORT_MOJAVE_INDIAN_TRIBE_CONTENT } from '@/lib/fort-mojave-indian-tribe-content';
import { GILA_RIVER_INDIAN_COMMUNITY_CONTENT } from '@/lib/gila-river-indian-community-content';
import { HAVASUPAI_CONTENT } from '@/lib/havasupai-content';
import { HOPI_CONTENT } from '@/lib/hopi-content';
import { HUALAPAI_CONTENT } from '@/lib/hualapai-content';

export default function TribalLawPage() {
  const router = useRouter();
  const params = useParams();
  const tribeSlug = params.tribe as string;

  const tribeName = ARIZONA_TRIBES.find(
    (tribe) => tribe.toLowerCase().replace(/ /g, '-').replace(/'/g, '') === tribeSlug
  );

  let tribeContent = null;
  if (tribeSlug === 'ak-chin-indian-community') {
    tribeContent = AK_CHIN_CONTENT;
  } else if (tribeSlug === 'cocopah-indian-tribe') {
    tribeContent = COCOPAH_CONTENT;
  } else if (tribeSlug === 'colorado-river-indian-tribes') {
    tribeContent = COLORADO_RIVER_INDIAN_TRIBES_CONTENT;
  } else if (tribeSlug === 'fort-mcdowell-yavapai-nation') {
    tribeContent = FORT_MCDOWELL_YAVAPAI_NATION_CONTENT;
  } else if (tribeSlug === 'fort-mojave-indian-tribe') {
    tribeContent = FORT_MOJAVE_INDIAN_TRIBE_CONTENT;
  } else if (tribeSlug === 'gila-river-indian-community') {
    tribeContent = GILA_RIVER_INDIAN_COMMUNITY_CONTENT;
  } else if (tribeSlug === 'havasupai-tribe') {
    tribeContent = HAVASUPAI_CONTENT;
  } else if (tribeSlug === 'hopi-tribe') {
    tribeContent = HOPI_CONTENT;
  } else if (tribeSlug === 'hualapai-tribe') {
    tribeContent = HUALAPAI_CONTENT;
  }


  if (!tribeName) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="w-full max-w-sm text-center">
          <p className="text-2xl font-bold text-destructive-foreground">Tribe not found.</p>
          <Button asChild className="mt-4">
            <Link href="/guidance/arizona/tribal-laws">Back to Tribal Laws</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!tribeContent) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
          <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
            <Link href="/guidance/arizona/tribal-laws">{tribeName}</Link>
          </header>
          <div className="flex flex-grow items-center justify-center border-x-2 border-destructive p-4">
            <div className="text-center">
              <p className="text-2xl font-bold">Content for the {tribeName} is coming soon.</p>
              <Button asChild className="mt-4">
                <Link href="/guidance/arizona/tribal-laws">Back to Tribes</Link>
              </Button>
            </div>
          </div>
          <footer className="flex-shrink-0 rounded-b-2xl border-x-2 border-b-2 border-t-2 border-destructive bg-muted p-2 text-destructive-foreground">
            <div className="flex items-center justify-between">
                <button onClick={() => router.back()} className="rounded-md p-2 hover:bg-destructive-foreground/10" aria-label="Go back">
                    <ArrowLeft strokeWidth={3} className="h-8 w-8" />
                </button>
                <p className="text-center text-xs">&copy; 2025 The-Law-Says.Com</p>
                <button onClick={() => router.forward()} className="rounded-md p-2 hover:bg-destructive-foreground/10" aria-label="Go forward">
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
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance/arizona/tribal-laws">{tribeName}</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
          <main className="p-4">
            <Card className="border-destructive">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{tribeContent.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-justify dark:prose-invert">
                  <p className="font-semibold" dangerouslySetInnerHTML={{ __html: tribeContent.summary }} />
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="mt-4 w-full">
              {Object.entries(tribeContent.sections).map(([key, section]) => (
                <AccordionItem value={key} key={key}>
                  <AccordionTrigger className="mt-4 rounded-md bg-destructive px-4 text-lg font-bold text-destructive-foreground">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 text-justify">
                    <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: section.content }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </main>
        </ScrollArea>

        <footer className="flex-shrink-0 rounded-b-2xl border-x-2 border-b-2 border-t-2 border-destructive bg-muted p-2 text-destructive-foreground">
          <div className="flex items-center justify-between">
            <button onClick={() => router.back()} className="rounded-md p-2 hover:bg-destructive-foreground/10" aria-label="Go back">
              <ArrowLeft strokeWidth={3} className="h-8 w-8" />
            </button>
            <p className="text-center text-xs">&copy; 2025 The-Law-Says.Com</p>
            <button onClick={() => router.forward()} className="rounded-md p-2 hover:bg-destructive-foreground/10" aria-label="Go forward">
              <ArrowRight strokeWidth={3} className="h-8 w-8" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
