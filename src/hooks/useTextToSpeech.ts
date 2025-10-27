
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
  const readerRef = useRef<ReadableStreamDefaultReader<any> | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);


  const stop = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (readerRef.current) {
        readerRef.current.cancel().catch(() => {});
        readerRef.current = null;
    }

    if (audioRef.current) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
      }
      if (audioRef.current.src) {
        URL.revokeObjectURL(audioRef.current.src);
        audioRef.current.removeAttribute('src');
        audioRef.current.load();
      }
    }

    if (mediaSourceRef.current && mediaSourceRef.current.readyState === 'open') {
        try {
            if(sourceBufferRef.current && !sourceBufferRef.current.updating) {
                mediaSourceRef.current.endOfStream();
            }
        } catch (e) {
            console.error('Error ending stream on stop:', e);
        }
    }
    
    mediaSourceRef.current = null;
    sourceBufferRef.current = null;
    audioQueue.current = [];
    streamEnded.current = false;
    setIsGenerating(false);
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    async (text: string) => {
      if (isGenerating || isSpeaking) {
        stop();
        return;
      }
      
      setIsGenerating(true);
      streamEnded.current = false;
      audioQueue.current = [];
      abortControllerRef.current = new AbortController();

      try {
        const stream = await textToSpeechAction({ text });
        if (!stream) {
          throw new Error('Failed to start audio stream.');
        }

        readerRef.current = stream.getReader();
        mediaSourceRef.current = new MediaSource();
        
        if (!audioRef.current) {
            audioRef.current = new Audio();
        }

        const audio = audioRef.current;
        const mediaSource = mediaSourceRef.current;

        const onSourceOpen = () => {
            if (!mediaSource || mediaSource.readyState !== 'open') return;
            try {
                const sourceBuffer = mediaSource.addSourceBuffer('audio/webm; codecs=opus');
                sourceBufferRef.current = sourceBuffer;

                const processQueue = () => {
                    if (sourceBuffer.updating || audioQueue.current.length === 0) {
                        if (streamEnded.current && mediaSource.readyState === 'open' && !sourceBuffer.updating) {
                           try {
                             mediaSource.endOfStream();
                           } catch (e) {
                             console.error("Error ending stream:", e);
                           }
                        }
                        return;
                    }
                    sourceBuffer.appendBuffer(audioQueue.current.shift()!);
                };
                
                sourceBuffer.addEventListener('updateend', processQueue);
                
                // Start processing the queue if there's already data
                processQueue();

            } catch (e) {
                console.error("Error adding source buffer:", e);
                stop();
            }
        };

        const onAudioEnded = () => {
          stop();
        };

        mediaSource.addEventListener('sourceopen', onSourceOpen);
        audio.addEventListener('ended', onAudioEnded);

        audio.src = URL.createObjectURL(mediaSource);
        audio.play().catch(e => {
            console.error("Audio play failed:", e);
            stop();
        });
        setIsSpeaking(true);


        const readStream = async () => {
          if(!readerRef.current) return;
          try {
            while (true) {
                const { done, value } = await readerRef.current.read();

                if (done) {
                    streamEnded.current = true;
                    if (sourceBufferRef.current && !sourceBufferRef.current.updating) {
                        if (mediaSourceRef.current && mediaSourceRef.current.readyState === 'open') {
                          try {
                            mediaSourceRef.current.endOfStream();
                          } catch (e) {
                             console.error("Error ending stream on done:", e);
                          }
                        }
                    }
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

                    if (sourceBufferRef.current && !sourceBufferRef.current.updating) {
                       sourceBufferRef.current.appendBuffer(audioQueue.current.shift()!);
                    }
                }
            }
          } catch(error) {
             if ((error as Error).name !== 'AbortError') {
                console.error('Stream reading failed:', error);
             }
          } finally {
             setIsGenerating(false);
          }
        };
        
        readStream();

      } catch (error) {
        console.error('Text-to-speech failed:', error);
        stop();
      }
    },
    [isGenerating, isSpeaking, stop]
  );
  
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);


  return { isSpeaking, isGenerating, speak, stop };
};
