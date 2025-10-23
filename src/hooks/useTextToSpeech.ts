
"use client";

import { useState, useEffect } from 'react';

export const useTextToSpeech = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);

    // This function will be called to start speaking
    const speak = (text: string) => {
        // Stop any speech that is already in progress
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        
        // When the speech ends, set isSpeaking to false
        utterance.onend = () => {
            setIsSpeaking(false);
        };
        
        // When speech starts, set isSpeaking to true
        utterance.onstart = () => {
            setIsSpeaking(true);
        };

        // Tell the browser to speak
        window.speechSynthesis.speak(utterance);
    };

    // This function will be called to stop speaking
    const stop = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    // This is a safety cleanup.
    // If you navigate to another page, this stops any speech.
    useEffect(() => {
        // This is the cleanup function
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return { isSpeaking, speak, stop };
};
