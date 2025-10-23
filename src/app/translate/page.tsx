
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, ArrowLeft, ArrowRight,Languages,Send } from 'lucide-react';
import Link from 'next/link';

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
import { translateTextAction } from '@/app/actions';
import type { TranslateTextOutput } from '@/ai/flows/translate-text';
import { LANGUAGES } from '@/lib/languages';

const formSchema = z.object({
  textToTranslate: z.string().min(1, 'Please enter some text to translate.'),
  targetLanguage: z.string().min(1, 'Please select a language.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function TranslatePage() {
  const [translation, setTranslation] = useState<TranslateTextOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      textToTranslate: '',
      targetLanguage: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setTranslation(null);
    const result = await translateTextAction(values);
    setIsLoading(false);

    if (result.success) {
      setTranslation(result.data!);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground pb-28 md:pb-24">
      <header className="sticky top-0 z-10 border-b bg-card text-foreground">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="font-headline text-3xl font-bold">
            The-Law-Says.Com
          </Link>
          <Button asChild variant="outline">
            <Link href="/language-select">
              <Languages className="mr-2 h-4 w-4" />
              Select Site Language
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:p-8">
          <Card>
            <CardHeader>
              <CardTitle>Translate Text</CardTitle>
              <CardDescription>
                Enter text and select a language to translate it.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="textToTranslate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Text to Translate</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter the text you want to translate..."
                            {...field}
                            rows={5}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="targetLanguage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Translate To</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a language" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {LANGUAGES.map((lang) => (
                              <SelectItem key={lang} value={lang}>
                                {lang}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Translating...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Translate
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Translated Text</CardTitle>
              <CardDescription>
                The translated text will appear here.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {isLoading && (
                <div className="flex h-full items-center justify-center">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
              )}
              {translation && (
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <p>{translation.translatedText}</p>
                </div>
              )}
              {!isLoading && !translation && (
                <div className="flex h-full items-center justify-center text-center text-muted-foreground">
                  <p>Your translation will be displayed here.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-card text-foreground">
        <div className="container mx-auto flex h-auto flex-col items-center gap-2 p-4 sm:h-24 sm:flex-row sm:justify-between">
          <div className="order-2 sm:order-1">
            <p className="text-center text-sm">
              © 2025 The-law-says.com. All Rights Reserved
            </p>
          </div>
          <div className="order-1 flex w-full justify-center sm:order-2 sm:w-auto">
            <div className="flex h-14 w-full max-w-xs items-center rounded-md border border-input">
              <button
                onClick={() => router.back()}
                className="flex h-full flex-1 items-center justify-center rounded-l-md hover:bg-accent hover:text-accent-foreground"
                aria-label="Go back"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <div className="h-full w-px bg-border"></div>
              <button
                onClick={() => router.forward()}
                className="flex h-full flex-1 items-center justify-center rounded-r-md hover:bg-accent hover:text-accent-foreground"
                aria-label="Go forward"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
