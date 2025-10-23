
'use client';

import { translateTextAction } from '@/app/actions';
import React, { createContext, useContext, useState, useCallback, useTransition } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  translate: (text: string, targetLanguage?: string) => Promise<string>;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('English');
  const [isTranslating, startTransition] = useTransition();

  const translate = useCallback(
    async (text: string, targetLanguage?: string) => {
      const lang = targetLanguage || language;
      if (lang === 'English') {
        return text;
      }
      
      try {
        const result = await translateTextAction({
          textToTranslate: text,
          targetLanguage: lang,
        });
        if (result.success && result.data) {
          return result.data.translatedText;
        }
        return text; // Fallback to original text
      } catch (error) {
        console.error("Translation failed", error);
        return text; // Fallback on error
      }
    },
    [language]
  );

  const handleSetLanguage = (newLanguage: string) => {
    startTransition(() => {
        setLanguage(newLanguage);
    });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, translate, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
