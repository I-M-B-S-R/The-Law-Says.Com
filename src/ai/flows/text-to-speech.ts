
'use server';
/**
 * @fileOverview A flow for converting text to speech.
 *
 * THIS FILE IS DEPRECATED. The app now uses the browser's built-in SpeechSynthesis API.
 */
import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const TextToSpeechInputSchema = z.object({
  text: z.string().describe('The text to be converted to speech.'),
});
export type TextToSpeechInput = z.infer<typeof TextToSpeechInputSchema>;

const TextToSpeechOutputSchema = z.object({
  audioDataUri: z.string().describe('The base64 encoded audio data URI.'),
});
export type TextToSpeechOutput = z.infer<typeof TextToSpeechOutputSchema>;

export async function textToSpeech(
  input: TextToSpeechInput
): Promise<any> {
  return Promise.resolve(null);
}
