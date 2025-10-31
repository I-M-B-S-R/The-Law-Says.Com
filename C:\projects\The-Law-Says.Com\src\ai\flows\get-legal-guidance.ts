'use server';
/**
 * @fileOverview An AI agent that provides legal guidance based on user questions and selected jurisdiction.
 *
 * - getLegalGuidance - A function that handles the legal guidance process.
 * - GetLegalGuidanceInput - The input type for the getLegalGuidance function.
 * - GetLegalGuidanceOutput - The return type for the getLegalGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetLegalGuidanceInputSchema = z.object({
  jurisdiction: z.string().describe('The jurisdiction (state, county, municipality, or tribe) within the USA for which legal guidance is sought.'),
  legalQuestion: z.string().describe('The legal question the user is asking.'),
});
export type GetLegalGuidanceInput = z.infer<typeof GetLegalGuidanceInputSchema>;

const GetLegalGuidanceOutputSchema = z.object({
  guidance: z.string().describe('The personalized legal guidance based on the user question and jurisdiction.'),
});
export type GetLegalGuidanceOutput = z.infer<typeof GetLegalGuidanceOutputSchema>;

export async function getLegalGuidance(input: GetLegalGuidanceInput): Promise<GetLegalGuidanceOutput> {
  return getLegalGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getLegalGuidancePrompt',
  input: {schema: GetLegalGuidanceInputSchema},
  output: {schema: GetLegalGuidanceOutputSchema},
  prompt: `You are a legal expert providing guidance to users based on their legal questions and the selected jurisdiction.

  Jurisdiction: {{{jurisdiction}}}
  Question: {{{legalQuestion}}}

  Provide clear and concise legal guidance, explaining relevant rights and obligations.
  Consider all relevant information when making the guidance.
  Respond as if the user has limited legal knowledge.
  `,
});

const getLegalGuidanceFlow = ai.defineFlow(
  {
    name: 'getLegalGuidanceFlow',
    inputSchema: GetLegalGuidanceInputSchema,
    outputSchema: GetLegalGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
