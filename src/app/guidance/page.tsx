"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { getGuidanceAction } from '@/app/actions';
import type { GetLegalGuidanceOutput } from '@/ai/flows/get-legal-guidance';
import { JURISDICTIONS } from '@/lib/constants';
import Link from 'next/link';

const formSchema = z.object({
  jurisdiction: z.string().min(1, 'Jurisdiction is required.'),
  legalQuestion: z.string().min(20, 'Your question must be at least 20 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function GuidancePage() {
  const [guidance, setGuidance] = useState<GetLegalGuidanceOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jurisdiction: '',
      legalQuestion: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setGuidance(null);
    const result = await getGuidanceAction(values);
    setIsLoading(false);

    if (result.success) {
      setGuidance(result.data!);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="font-headline text-xl font-bold">
            The-Law-Says.Com
          </Link>
        </div>
      </header>

      <div className="container mx-auto grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Ask a Legal Question</CardTitle>
            <CardDescription>
              Select your jurisdiction and ask a question to get AI-powered legal guidance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="jurisdiction"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jurisdiction</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your state, county, or municipality" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {JURISDICTIONS.map((j) => (
                            <SelectItem key={j} value={j}>
                              {j}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="legalQuestion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Question</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., What are my rights as a tenant if my landlord wants to evict me?"
                          {...field}
                          rows={5}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Getting Guidance...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Get Guidance
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Legal Guidance</CardTitle>
            <CardDescription>
              The AI's response will appear here.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {isLoading && (
              <div className="flex h-full items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            )}
            {guidance && (
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <p>{guidance.guidance}</p>
              </div>
            )}
            {!isLoading && !guidance && (
               <div className="flex h-full items-center justify-center text-center text-muted-foreground">
                 <p>Your legal guidance will be displayed here once generated.</p>
               </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
