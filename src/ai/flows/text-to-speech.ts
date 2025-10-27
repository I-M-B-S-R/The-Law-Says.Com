'use server';
/**
 * @fileOverview A flow for converting text to speech.
 *
 * - textToSpeech - A function that handles the text to speech conversion.
 * - TextToSpeechInput - The input type for the textToSpeech function.
 * - TextToSpeechOutput - The return type for the textToSpeech function.
 */
import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';
import { media, prompt } from 'genkit/ai';

const TextToSpeechInputSchema = z.object({
  text: z.string().describe('The text to be converted to speech.'),
});
export type TextToSpeechInput = z.infer<typeof TextToSpeechInputSchema>;

const TextToSpeechOutputSchema = z.object({
  audioDataUri: z.string().describe('The base64 encoded audio data URI.'),
});
export type TextToSpeechOutput = z.infer<typeof TextToSpeechOutputSchema>;

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const textToSpeechFlow = ai.defineFlow(
  {
    name: 'textToSpeechFlow',
    inputSchema: TextToSpeechInputSchema,
    outputSchema: z.any(),
    stream: z.any(),
  },
  async ({ text }, streamingCallback) => {
    const { stream, response } = await ai.generateStream({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: text,
    });

    if (streamingCallback) {
      for await (const chunk of stream) {
        const audioChunk = chunk.media;
        if (!audioChunk) continue;

        const audioBuffer = Buffer.from(
          audioChunk.url.substring(audioChunk.url.indexOf(',') + 1),
          'base64'
        );

        const wavChunk = await toWav(audioBuffer);
        streamingCallback( { index: chunk.index, data: { wavChunk } });
      }
    } else {
        const result = await response;
        const audioChunk = result.media;
        if (!audioChunk) {
            throw new Error('no media returned');
        }
        const audioBuffer = Buffer.from(
            audioChunk.url.substring(audioChunk.url.indexOf(',') + 1),
            'base64'
        );
        const audioDataUri =
            'data:audio/wav;base64,' + (await toWav(audioBuffer));
        
        return {audioDataUri};
    }
  }
);

export async function textToSpeech(
  input: TextToSpeechInput
): Promise<TextToSpeechOutput> {
  return textToSpeechFlow(input);
}
