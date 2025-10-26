
'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GILBERT_CODE_CONTENT } from '@/lib/gilbert-code-content';

const GilbertCodeDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [loading, setLoading] = React.useState(true);
  const [law, setLaw] = React.useState<{ title: string; summary: string; keyProvisions: string[]; source: string } | null>(null);

  React.useEffect(() => {
    if (id) {
      const foundLaw = GILBERT_CODE_CONTENT[id as keyof typeof GILBERT_CODE_CONTENT];
      if (foundLaw) {
        setLaw(foundLaw);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
            <div className="flex h-[90svh] w-full max-w-sm flex-col items-center justify-center bg-background shadow-2xl">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        </div>
    );
  }

  if (!law) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
             <div className="flex h-[90svh] w-full max-w-sm flex-col items-center justify-center bg-background shadow-2xl text-center">
                <p className="text-2xl font-bold text-destructive">Law not found for ID: {id}</p>
                <Link href="/guidance/arizona/municipality-laws/gilbert" className="mt-4 inline-block rounded-md bg-destructive px-4 py-2 text-destructive-foreground">
                    Back to Gilbert Town Code
                </Link>
            </div>
        </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
        <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
            <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-xl font-bold text-destructive-foreground shadow-md">
                <Link href="/guidance/arizona/municipality-laws/gilbert">Gilbert Town Code</Link>
            </header>
            <ScrollArea className="flex-grow border-x-2 border-destructive">
              <main className="p-4">
                <Card className="border-destructive">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{law.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none text-justify dark:prose-invert">
                        <p className="font-semibold">{law.summary}</p>
                        <h3 className="text-lg font-bold mt-4">Key Provisions</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            {law.keyProvisions.map((provision, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: provision }} />
                            ))}
                        </ul>
                        <p className="text-xs text-muted-foreground mt-4 break-words">
                            Source: <a href={law.source.startsWith('http') ? law.source : '#'} target="_blank" rel="noopener noreferrer" className="text-primary underline">{law.source}</a>
                        </p>
                    </div>
                  </CardContent>
                </Card>
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
};

export default GilbertCodeDetailPage;
