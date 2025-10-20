import React from 'react';
import { useRouter } from 'next/router';
import { adaTitles } from '../../../data/ada';
import styles from '../../../pages/HomePage.module.css';
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';
import { RiVoiceprintFill } from 'react-icons/ri';
import Layout from '../../../components/Layout'; // <-- Import Layout

const AdaTitlePage = () => {
  const router = useRouter();
  const { titleId } = router.query;
  const { isSpeaking, speak, stop } = useTextToSpeech();

  const title = adaTitles.find(
    (t) => t.id === parseInt(titleId)
  );

  if (!title) {
    return <Layout><p>Loading...</p></Layout>; // Use Layout
  }

  const textToSpeak = `${title.name}. ${title.text}`;

  return (
    <Layout>
      <h2 className={styles.missionTitle}>{title.name}</h2>

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
    </Layout>
  );
};

export default AdaTitlePage;
