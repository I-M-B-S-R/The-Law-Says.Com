
'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) {
      console.error('Text-to-speech is not supported in this browser.');
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      // The 'end' event will set isSpeaking to false.
      // We check if the current utterance is the one speaking, if so, we just stop.
      if (utteranceRef.current && utteranceRef.current.text === text) {
        return;
      }
    }
    
    // Clean up text by removing HTML tags
    const strippedText = text.replace(/<[^>]*>/g, ' ');

    const newUtterance = new SpeechSynthesisUtterance(strippedText);
    utteranceRef.current = newUtterance;

    newUtterance.onstart = () => {
      setIsSpeaking(true);
    };

    newUtterance.onend = () => {
      setIsSpeaking(false);
      utteranceRef.current = null;
    };

    newUtterance.onerror = (event) => {
      console.error('SpeechSynthesisUtterance.onerror', event);
      setIsSpeaking(false);
      utteranceRef.current = null;
    };

    window.speechSynthesis.speak(newUtterance);
  }, []);

  const stop = useCallback(() => {
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    // onend handler will set isSpeaking to false
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // isGenerating is no longer relevant for client-side TTS
  const isGenerating = false;

  return { isSpeaking, isGenerating, speak, stop };
};
