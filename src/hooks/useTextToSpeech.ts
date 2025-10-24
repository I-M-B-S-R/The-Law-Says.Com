'use client';

import { useState, useCallback, useRef } from 'react';
import { textToSpeechAction } from '@/app/actions';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const speak = useCallback(async (text: string) => {
    if (isSpeaking || isGenerating) {
      stop();
      return;
    }
    
    setIsGenerating(true);
    
    try {
      const result = await textToSpeechAction({ text });
      if (result.success && result.data) {
        if (!audioRef.current) {
            audioRef.current = new Audio();
        }
        audioRef.current.src = result.data.audioDataUri;
        audioRef.current.play();
        setIsSpeaking(true);
        
        audioRef.current.onended = () => {
            setIsSpeaking(false);
        };
      }
    } catch (error) {
        console.error('Text-to-speech failed:', error);
    } finally {
        setIsGenerating(false);
    }

  }, [isSpeaking, isGenerating]);

  const stop = useCallback(() => {
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }
    setIsSpeaking(false);
    setIsGenerating(false);
  }, []);

  return { isSpeaking, isGenerating, speak, stop };
};