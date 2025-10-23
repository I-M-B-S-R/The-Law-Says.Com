'use server';

import { getLegalGuidance, type GetLegalGuidanceInput } from '@/ai/flows/get-legal-guidance';
import { translateText, type TranslateTextInput } from '@/ai/flows/translate-text';
import { z } from 'zod';

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
  textToTranslate: z.string().min(1, 'Text to translate is required.'),
  targetLanguage: z.string().min(1, 'Target language is required.'),
});

export async function translateTextAction(values: TranslateTextInput) {
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
