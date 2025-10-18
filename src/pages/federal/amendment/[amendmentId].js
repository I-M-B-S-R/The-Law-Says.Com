import React from 'react';
import { useRouter } from 'next/router';
import { constitutionData } from '../../../data/constitution';
import styles from '../../../pages/HomePage.module.css'; 
// --- NEW IMPORTS ---
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';
import { RiVoiceprintFill } from 'react-icons/ri'; // A good speaker icon

const AmendmentPage = () => {
    const router = useRouter();
    const { amendmentId } = router.query;
    
    // --- NEW SPEECH HELPER ---
    const { isSpeaking, speak, stop } = useTextToSpeech();

    const amendment = constitutionData.amendments.find(
        (am) => am.id === parseInt(amendmentId)
    );

    if (!amendment) {
        return <p>Loading...</p>;
    }

    // This is the text we want to read
    const textToSpeak = `${amendment.name}. ${amendment.text}`;

    return (
        <div className={styles.appContainer}>
            <header className={styles.appHeader}>
                {amendment.name}
            </header>

            <main className={styles.mainContent}>

                {/* --- NEW "LISTEN" BUTTON --- */}
                <div className={styles.buttonContainer}>
                    <button 
                        className={styles.listenButton} 
                        onClick={() => isSpeaking ? stop() : speak(textToSpeak)}
                    >
                        <RiVoiceprintFill className={styles.icon} />
                        {isSpeaking ? 'Stop Listening' : 'Listen to Amendment'}
                    </button>
                </div>
                
                <div 
                    className={styles.missionText} 
                    style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}
                >
                    {amendment.text}
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

export default AmendmentPage;