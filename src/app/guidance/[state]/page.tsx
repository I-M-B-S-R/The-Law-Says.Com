
'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, ArrowRight, Bot, Loader2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { getGuidanceAction } from '@/app/actions';

const formSchema = z.object({
  legalQuestion: z.string().min(20, 'Your question must be at least 20 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function StateGuidancePage() {
  const router = useRouter();
  const params = useParams();
  const state = params.state ? (params.state as string).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';
  
  const [guidance, setGuidance] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      legalQuestion: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    setGuidance(null);
    startTransition(async () => {
      const result = await getGuidanceAction({
        jurisdiction: state,
        legalQuestion: values.legalQuestion,
      });

      if (result.success && result.data) {
        setGuidance(result.data.guidance);
      } else {
        setGuidance(`Error: ${result.error || 'An unexpected error occurred.'}`);
      }
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="flex h-[95svh] w-full max-w-sm flex-col overflow-hidden rounded-2xl border-x-4 border-destructive bg-background shadow-2xl">
        <header className="flex-shrink-0 bg-destructive p-4 text-center text-3xl font-bold text-destructive-foreground shadow-md">
          <Link href="/guidance">{state} Law</Link>
        </header>

        <ScrollArea className="flex-grow">
          <main className="p-4">
            

            {isPending && (
              <div className="mt-6 flex items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            )}

            {guidance && (
              <Card className="mt-6 border-destructive">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Bot className="h-6 w-6" />
                  <CardTitle className="text-2xl">AI Legal Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: guidance }} />
                </CardContent>
              </Card>
            )}
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
