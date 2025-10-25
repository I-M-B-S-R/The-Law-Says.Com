
'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { textToSpeechAction } from '@/app/actions';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = useCallback((audioDataUri: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.addEventListener('ended', () => {
        setIsSpeaking(false);
      });
    }
    audioRef.current.src = audioDataUri;
    audioRef.current.play();
    setIsSpeaking(true);
  }, []);

  const speak = useCallback(async (text: string) => {
    if (isSpeaking || isGenerating) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsSpeaking(false);
      setIsGenerating(false);
      return;
    }
    
    setIsGenerating(true);
    
    try {
      const result = await textToSpeechAction({ text });
      if (result.success && result.data?.audioDataUri) {
        playAudio(result.data.audioDataUri);
      } else {
        setIsSpeaking(false);
      }
    } catch (error) {
        console.error('Text-to-speech failed:', error);
        setIsSpeaking(false);
    } finally {
        setIsGenerating(false);
    }
  }, [isSpeaking, isGenerating, playAudio]);

  const stop = useCallback(() => {
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }
    setIsSpeaking(false);
    setIsGenerating(false);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  return { isSpeaking, isGenerating, speak, stop };
};
