'use server';

import { getLegalGuidance, type GetLegalGuidanceInput } from '@/ai/flows/get-legal-guidance';
import { translateText, type TranslateTextInput } from '@/ai/flows/translate-text';
import { textToSpeech, type TextToSpeechInput } from '@/ai/flows/text-to-speech';
import { z } from 'zod';
import { streamFlow } from 'genkit/next/server';

const LegalActionInputSchema = z.object({
  jurisdiction: z.string().min(1, 'Jurisdiction is required.'),
  legalQuestion: z.string().min(20, 'Your question must be at least 20 characters.'),
});

export async function getGuidanceAction(values: GetLegalGuidanceInput) {
  try {
    const validatedInput = LegalActionInputSchema.parse(values);
    const result = await getLegalGuidance(validatedInput);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors.map(e => e.message).join(', ') };
    }
    console.error('Error getting legal guidance:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}

const TranslateActionInputSchema = z.object({
    textToTranslate: z.string(),
    targetLanguage: z.string(),
});

export async function translateTextAction(values: TranslateTextInput) {
    if (!values.textToTranslate.trim()) {
        return { success: true, data: { translatedText: '' } };
    }
    try {
        const validatedInput = TranslateActionInputSchema.parse(values);
        const result = await translateText(validatedInput);
        return { success: true, data: result };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.errors.map(e => e.message).join(', ') };
        }
        console.error('Error translating text:', error);
        return { success: false, error: 'An unexpected error occurred. Please try again.' };
    }
}

const TextToSpeechActionInputSchema = z.object({
  text: z.string(),
});

export async function textToSpeechAction(values: TextToSpeechInput) {
  if (!values.text.trim()) {
    return { success: false, error: 'Cannot convert empty text to speech.' };
  }
  try {
    const validatedInput = TextToSpeechActionInputSchema.parse(values);
    return streamFlow(
      (await import('@/ai/flows/text-to-speech')).textToSpeech,
      validatedInput
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors.map(e => e.message).join(', ') };
    }
    console.error('Error converting text to speech:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}
