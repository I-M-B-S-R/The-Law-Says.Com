
'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { textToSpeechAction } from '@/app/actions';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mediaSourceRef = useRef<MediaSource | null>(null);
  const sourceBufferRef = useRef<SourceBuffer | null>(null);
  const audioQueue = useRef<ArrayBuffer[]>([]);
  const streamEnded = useRef(false);

  const processAudioQueue = useCallback(() => {
    if (
      sourceBufferRef.current &&
      !sourceBufferRef.current.updating &&
      audioQueue.current.length > 0
    ) {
      const audioData = audioQueue.current.shift();
      if (audioData) {
        sourceBufferRef.current.appendBuffer(audioData);
      }
    } else if (
      mediaSourceRef.current &&
      sourceBufferRef.current &&
      !sourceBufferRef.current.updating &&
      streamEnded.current &&
      audioQueue.current.length === 0
    ) {
      mediaSourceRef.current.endOfStream();
    }
  }, []);

  const speak = useCallback(
    async (text: string) => {
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
      streamEnded.current = false;
      audioQueue.current = [];

      try {
        const stream = await textToSpeechAction({ text });
        if (!stream) {
          throw new Error('Failed to start audio stream.');
        }

        mediaSourceRef.current = new MediaSource();
        if (!audioRef.current) {
          audioRef.current = new Audio();
        }
        audioRef.current.src = URL.createObjectURL(mediaSourceRef.current);

        mediaSourceRef.current.addEventListener('sourceopen', () => {
          if (!mediaSourceRef.current) return;
          sourceBufferRef.current =
            mediaSourceRef.current.addSourceBuffer('audio/webm; codecs=opus');
          sourceBufferRef.current.addEventListener('updateend', processAudioQueue);
        });

        audioRef.current.play();
        setIsSpeaking(true);

        const reader = stream.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            streamEnded.current = true;
            processAudioQueue();
            break;
          }
          if (value?.data?.wavChunk) {
            const byteCharacters = atob(value.data.wavChunk);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            audioQueue.current.push(byteArray.buffer);
            processAudioQueue();
          }
        }
      } catch (error) {
        console.error('Text-to-speech failed:', error);
        setIsSpeaking(false);
      } finally {
        setIsGenerating(false);
      }
    },
    [isSpeaking, isGenerating, processAudioQueue]
  );

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsSpeaking(false);
    setIsGenerating(false);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', () => {
        setIsSpeaking(false);
      });
    }
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
