import React from 'react';
import { useRouter } from 'next/router';
import { civilRightsActs } from '../../../data/civilRights';
import styles from '../../../pages/HomePage.module.css';
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';
import { RiVoiceprintFill } from 'react-icons/ri';
import Layout from '../../../components/Layout'; // <-- Import Layout

const CivilRightsActPage = () => {
  const router = useRouter();
  const { actId } = router.query;
  const { isSpeaking, speak, stop } = useTextToSpeech();

  const act = civilRightsActs.find(
    (a) => a.id === parseInt(actId)
  );

  if (!act) {
    return <Layout><p>Loading...</p></Layout>; // Use Layout
  }

  const textToSpeak = `${act.name}. ${act.text}`;

  return (
    <Layout>
      <h2 className={styles.missionTitle}>{act.name}</h2>

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
    </Layout>
  );
};

export default CivilRightsActPage;
