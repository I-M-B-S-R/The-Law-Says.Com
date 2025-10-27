
'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

const CHUNK_SIZE = 150; // A safe chunk size for most TTS engines

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceQueueRef = useRef<SpeechSynthesisUtterance[]>([]);
  const isCancelledRef = useRef(false);

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) {
      console.error('Text-to-speech is not supported in this browser.');
      return;
    }
    
    // Stop any ongoing speech before starting a new one
    if (window.speechSynthesis.speaking) {
      isCancelledRef.current = true;
      window.speechSynthesis.cancel();
    }
    
    isCancelledRef.current = false;

    // Split text into manageable chunks
    const sentences = text.match(/[^.!?]+[.!?]*/g) || [];
    const chunks = sentences.reduce((acc: string[], sentence) => {
        if (sentence.length > CHUNK_SIZE) {
            // Further split long sentences
            const parts = sentence.match(new RegExp(`.{1,${CHUNK_SIZE}}`, 'g')) || [];
            return acc.concat(parts);
        }
        acc.push(sentence);
        return acc;
    }, []);

    if (chunks.length === 0) return;

    utteranceQueueRef.current = chunks.map(chunk => {
        const utterance = new SpeechSynthesisUtterance(chunk.trim());
        utterance.onend = () => {
            // Dequeue and speak next chunk
            utteranceQueueRef.current.shift();
            if (utteranceQueueRef.current.length > 0 && !isCancelledRef.current) {
                window.speechSynthesis.speak(utteranceQueueRef.current[0]);
            } else {
                setIsSpeaking(false);
            }
        };
        utterance.onerror = (event) => {
            console.error('SpeechSynthesisUtterance.onerror', event);
            setIsSpeaking(false);
            utteranceQueueRef.current = []; // Clear queue on error
        };
        return utterance;
    });
    
    setIsSpeaking(true);
    window.speechSynthesis.speak(utteranceQueueRef.current[0]);

  }, []);

  const stop = useCallback(() => {
    isCancelledRef.current = true;
    utteranceQueueRef.current = [];
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { isSpeaking, speak, stop };
};
