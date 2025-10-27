
'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

const CHUNK_SIZE = 180; // A safe chunk size for most TTS engines

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceQueueRef = useRef<SpeechSynthesisUtterance[]>([]);
  const isCancelledRef = useRef(false);

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) {
      console.error('Text-to-speech is not supported in this browser.');
      return;
    }

    if (window.speechSynthesis.speaking) {
      isCancelledRef.current = true;
      window.speechSynthesis.cancel();
    }

    isCancelledRef.current = false;

    // A more robust chunking function
    const createChunks = (textToChunk: string) => {
      const chunks: string[] = [];
      let i = 0;
      while (i < textToChunk.length) {
        let chunkEnd = i + CHUNK_SIZE;
        if (chunkEnd < textToChunk.length) {
          // Find the last space within the chunk to avoid splitting words
          let lastSpace = textToChunk.lastIndexOf(' ', chunkEnd);
          if (lastSpace > i) {
            chunkEnd = lastSpace;
          }
        }
        chunks.push(textToChunk.substring(i, chunkEnd));
        i = chunkEnd;
      }
      return chunks;
    };
    
    const chunks = createChunks(text);

    if (chunks.length === 0) return;

    const processQueue = () => {
      if (isCancelledRef.current) return;
      
      const chunk = utteranceQueueRef.current.shift();
      if (chunk) {
        window.speechSynthesis.speak(chunk);
      } else {
        setIsSpeaking(false);
      }
    };

    utteranceQueueRef.current = chunks.map(chunk => {
      const utterance = new SpeechSynthesisUtterance(chunk.trim());
      utterance.onend = processQueue;
      utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
        setIsSpeaking(false);
        utteranceQueueRef.current = []; // Clear queue on error
      };
      return utterance;
    });

    setIsSpeaking(true);
    processQueue();

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
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { isSpeaking, speak, stop };
};
