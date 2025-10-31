
'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home, Accessibility, Loader2, MessageSquareQuote, Bot, User, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { JURISDICTIONS } from '@/lib/constants';
import { getGuidanceAction } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AskAiPage() {
  const router = useRouter();
  const [jurisdiction, setJurisdiction] = useState('Arizona');
  const [legalQuestion, setLegalQuestion] = useState('');
  const [guidance, setGuidance] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setGuidance('');
    startTransition(async () => {
      const result = await getGuidanceAction({ jurisdiction, legalQuestion });
      if (result.success) {
        setGuidance(result.data.guidance);
      } else {
        setError(result.error);
      }
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[90svh] w-full max-w-sm flex-col bg-background shadow-2xl">
        <header className="flex-shrink-0 rounded-t-2xl border-x-2 border-t-2 border-b-2 border-destructive bg-muted p-2 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/">Ask The AI</Link>
        </header>

        <ScrollArea className="flex-grow border-x-2 border-destructive">
            <div className="p-2 text-center text-sm font-bold text-destructive-foreground">
              <Link href="/" className="flex items-center justify-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </div>
            <main className="p-4 pt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                     <div className="flex justify-center">
                        <MessageSquareQuote className="h-16 w-16 text-destructive" />
                    </div>
                    <Select onValueChange={setJurisdiction} defaultValue={jurisdiction}>
                        <SelectTrigger className="h-14 rounded-lg border-2 border-destructive bg-transparent text-lg">
                        <SelectValue placeholder="Select a jurisdiction" />
                        </SelectTrigger>
                        <SelectContent>
                        {JURISDICTIONS.map(j => <SelectItem key={j} value={j}>{j}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <div className="relative">
                        <Textarea
                            value={legalQuestion}
                            onChange={(e) => setLegalQuestion(e.target.value)}
                            placeholder="Ask your legal question..."
                            className="min-h-[150px] rounded-lg border-2 border-destructive bg-transparent pr-12 text-lg"
                        />
                        <Button type="button" size="icon" variant="ghost" className="absolute bottom-2 right-2 text-destructive">
                            <Mic className="h-6 w-6" />
                        </Button>
                    </div>
                    <Button type="submit" size="lg" className="h-14 w-full font-bold btn-destructive" disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Getting Guidance...
                            </>
                        ) : (
                            'Get Guidance'
                        )}
                    </Button>
                </form>

                {guidance && (
                    <Card className="mt-6 border-destructive bg-muted/20">
                        <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive text-destructive-foreground">
                                <Bot className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl">Legal Guidance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-justify leading-relaxed">{guidance}</p>
                        </CardContent>
                    </Card>
                )}

                {error && (
                     <Card className="mt-6 border-destructive bg-destructive/10 text-destructive-foreground">
                        <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive text-destructive-foreground">
                                <User className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl text-destructive">Error</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-justify leading-relaxed text-destructive">{error}</p>
                        </CardContent>
                    </Card>
                )}
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
