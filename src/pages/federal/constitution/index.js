import React from 'react';
import Link from 'next/link';
import { constitutionData } from '../../../data/constitution';
import styles from '../../../pages/HomePage.module.css';
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';
import { RiVoiceprintFill } from 'react-icons/ri';
import Layout from '../../../components/Layout'; // <-- Import Layout

const ConstitutionPage = () => {
  const { isSpeaking, speak, stop } = useTextToSpeech();
  const textToSpeak = `Original Constitution From 1787. ${constitutionData.original}`;

  return (
    <Layout>
      {/* --- 1. Original Constitution Text --- */}
      <h2 className={styles.missionTitle}>Original Constitution From 1787</h2>

      {/* --- "LISTEN" BUTTON --- */}
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
    </Layout>
  );
};

export default ConstitutionPage;
