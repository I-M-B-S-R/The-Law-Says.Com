import React from 'react';
import { useRouter } from 'next/router';
import { adaTitles } from '../../../data/ada'; // <-- Use ADA data
import styles from '../../../pages/HomePage.module.css';
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';
import { RiVoiceprintFill } from 'react-icons/ri';

const AdaTitlePage = () => {
    const router = useRouter();
    const { titleId } = router.query; // Get 'titleId' from URL
    const { isSpeaking, speak, stop } = useTextToSpeech();

    // Find the correct ADA title from our data
    const title = adaTitles.find(
        (t) => t.id === parseInt(titleId)
    );

    if (!title) {
        return <p>Loading...</p>;
    }

    const textToSpeak = `${title.name}. ${title.text}`;

    return (
        <div className={styles.appContainer}>
            <header className={styles.appHeader}>
                {title.name}
            </header>

            <main className={styles.mainContent}>

                {/* --- "LISTEN" BUTTON --- */}
                <div className={styles.buttonContainer}>
                    <button 
                        className={styles.listenButton} 
                        onClick={() => isSpeaking ? stop() : speak(textToSpeak)}
                    >
                        <RiVoiceprintFill className={styles.icon} />
                        {isSpeaking ? 'Stop Listening' : 'Listen to Title'}
                    </button>
                </div>
                
                <div 
                    className={styles.missionText} 
                    style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}
                >
                    {title.text}
                </div>
            </main>

            <footer className={styles.appFooter}>
                <div className={styles.navButtonContainer}>
                    <button className={styles.navButton} onClick={() => router.back()}>&#x2B05;</button>
                    <button className={styles.navButton} onClick={() => window.history.forward()}>&#x27A1;</button>
                </div>
                <p className={styles.copyrightText}>
                    &copy; 2025 The-Law-Says.Com. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default AdaTitlePage;