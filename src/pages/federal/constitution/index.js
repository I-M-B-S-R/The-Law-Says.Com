import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; 
import { constitutionData } from '../../../data/constitution';
import styles from '../../../pages/HomePage.module.css';
// --- NEW IMPORTS ---
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';
import { RiVoiceprintFill } from 'react-icons/ri'; // A good speaker icon

const ConstitutionPage = () => {
    const router = useRouter();
    // --- NEW SPEECH HELPER ---
    const { isSpeaking, speak, stop } = useTextToSpeech();

    // This is the text we want to read
    const textToSpeak = `Original Constitution From 1787. ${constitutionData.original}`;

    return (
        <div className={styles.appContainer}>
            <header className={styles.appHeader}>
                U.S. Constitution
            </header>

            <main className={styles.mainContent}>
                
                {/* --- 1. Original Constitution Text --- */}
                <h2 className={styles.missionTitle}>Original Constitution From 1787</h2>

                {/* --- NEW "LISTEN" BUTTON --- */}
                <div className={styles.buttonContainer}>
                    <button 
                        className={styles.listenButton} 
                        onClick={() => isSpeaking ? stop() : speak(textToSpeak)}
                    >
                        <RiVoiceprintFill className={styles.icon} />
                        {isSpeaking ? 'Stop Listening' : 'Listen to Constitution'}
                    </button>
                </div>
                
                <div 
                    className={styles.missionText} 
                    style={{ textAlign: 'left', whiteSpace: 'pre-wrap', marginBottom: '20px' }}
                >
                    {constitutionData.original}
                </div>

                {/* --- 2. The 27 Amendment Buttons --- */}
                <h2 className={styles.missionTitle}>Amendments</h2>
                <div className={styles.buttonContainer}>
                    {constitutionData.amendments.map((am) => (
                        <Link key={am.id} href={`/federal/amendment/${am.id}`} passHref>
                            <button className={styles.actionButton}>
                                {am.name}
                            </button>
                        </Link>
                    ))}
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

export default ConstitutionPage;