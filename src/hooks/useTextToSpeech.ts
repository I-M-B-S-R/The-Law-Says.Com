
'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { textToSpeechAction } from '@/app/actions';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize the Audio object once when the component mounts.
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    const handleEnd = () => {
      setIsSpeaking(false);
    };

    audio.addEventListener('ended', handleEnd);

    // Cleanup function to remove the event listener.
    return () => {
      audio.removeEventListener('ended', handleEnd);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const speak = useCallback(async (text: string) => {
    if (isSpeaking || isGenerating) {
      // If it's already speaking or generating, calling speak again should stop it.
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsSpeaking(false);
      setIsGenerating(false); // also reset generating state
      return;
    }
    
    setIsGenerating(true);
    
    try {
      const result = await textToSpeechAction({ text });
      if (result.success && result.data && audioRef.current) {
        audioRef.current.src = result.data.audioDataUri;
        audioRef.current.play();
        setIsSpeaking(true);
      } else {
        // If the action fails, ensure we reset the state.
        setIsSpeaking(false);
      }
    } catch (error) {
        console.error('Text-to-speech failed:', error);
        setIsSpeaking(false);
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
