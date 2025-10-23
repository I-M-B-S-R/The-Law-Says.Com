
"use client";

import { useState, useEffect } from 'react';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text: string) => {
    if (!window.speechSynthesis) {
      console.error("Text-to-speech not supported in this browser.");
      return;
    }
    // Basic implementation for now
    console.log("Reading aloud:", text);
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => {
        setIsSpeaking(false);
    }
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };
  
  useEffect(() => {
    // Cleanup synthesis on component unmount
    return () => {
        if(window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
    }
  }, []);

  return { isSpeaking, speak, stop };
};
