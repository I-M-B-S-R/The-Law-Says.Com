"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Gavel, Loader2, WandSparkles } from "lucide-react";

import { JURISDICTIONS } from "@/lib/constants";
import { getGuidanceAction } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const FormSchema = z.object({
  jurisdiction: z.string({ required_error: "Please select a jurisdiction." }),
  legalQuestion: z.string().min(20, { message: "Your question must be at least 20 characters." }),
});

type GuidanceResponse = {
  guidance: string;
} | null;

export function LegalGuidanceTool() {
  const [response, setResponse] = useState<GuidanceResponse>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      jurisdiction: "Arizona",
      legalQuestion: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setResponse(null);

    const result = await getGuidanceAction(data);

    if (result.success && result.data) {
      setResponse(result.data);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Failed to get guidance.",
      });
    }

    setIsLoading(false);
  }

  return (
    <div className="space-y-8">
      <Card className="w-full max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <WandSparkles className="text-primary" />
            AI Legal Guidance
          </CardTitle>
          <CardDescription>
            Ask a legal question and our AI will provide guidance based on the selected jurisdiction. This is not legal advice.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="jurisdiction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jurisdiction</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a jurisdiction" />
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
                    <FormLabel>Your Legal Question</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., What are my rights as a tenant if my landlord wants to evict me in Arizona?"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Gavel />
                )}
                Get Guidance
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {isLoading && (
        <Card className="w-full max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Generating Guidance...</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
        </Card>
      )}

      {response && (
        <Card className="w-full max-w-3xl mx-auto animate-in fade-in-50 shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">AI-Powered Guidance</CardTitle>
            <CardDescription>Based on your question and selected jurisdiction.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-foreground whitespace-pre-wrap leading-relaxed">
              {response.guidance}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
