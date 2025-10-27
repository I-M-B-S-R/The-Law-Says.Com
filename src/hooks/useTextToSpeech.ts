
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

    // Stop any currently speaking utterance
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const newUtterance = new SpeechSynthesisUtterance(text);
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
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    utteranceRef.current = null;
  }, []);

  useEffect(() => {
    // Cleanup function to cancel speech when the component unmounts
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { isSpeaking, speak, stop };
};
