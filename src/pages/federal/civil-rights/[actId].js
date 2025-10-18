// src/pages/federal/civil-rights/[actId].js
import React from 'react';
import { useRouter } from 'next/router';
import { civilRightsActs } from '../../../data/civilRights'; // <-- Use Civil Rights data
import styles from '../../../pages/HomePage.module.css';
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';
import { RiVoiceprintFill } from 'react-icons/ri';

const CivilRightsActPage = () => {
    const router = useRouter();
    const { actId } = router.query; // Get 'actId' from URL
    const { isSpeaking, speak, stop } = useTextToSpeech();

    // Find the correct act from our data
    const act = civilRightsActs.find(
        (a) => a.id === parseInt(actId)
    );

    if (!act) {
        return <p>Loading...</p>;
    }

    const textToSpeak = `${act.name}. ${act.text}`;

    return (
        <div className={styles.appContainer}>
            <header className={styles.appHeader}>
                {act.name}
            </header>

            <main className={styles.mainContent}>

                {/* --- "LISTEN" BUTTON --- */}
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.listenButton}
                        onClick={() => isSpeaking ? stop() : speak(textToSpeak)}
                    >
                        <RiVoiceprintFill className={styles.icon} />
                        {isSpeaking ? 'Stop Listening' : 'Listen to Act Summary'}
                    </button>
                </div>

                <div
                    className={styles.missionText}
                    style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}
                >
                    {act.text}
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

export default CivilRightsActPage;