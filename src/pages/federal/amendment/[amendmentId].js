import React from 'react';
import { useRouter } from 'next/router';
import { constitutionData } from '../../../data/constitution';
import styles from '../../../pages/HomePage.module.css';
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';
import { RiVoiceprintFill } from 'react-icons/ri';
import Layout from '../../../components/Layout'; // <-- Import Layout

const AmendmentPage = () => {
  const router = useRouter();
  const { amendmentId } = router.query;
  const { isSpeaking, speak, stop } = useTextToSpeech();

  const amendment = constitutionData.amendments.find(
    (am) => am.id === parseInt(amendmentId)
  );

  if (!amendment) {
    return <Layout><p>Loading...</p></Layout>; // Use Layout
  }

  const textToSpeak = `${amendment.name}. ${amendment.text}`;

  return (
    <Layout>
      {/* We can move the header inside the main content if we want */}
      {/* <h2 className={styles.missionTitle}>{amendment.name}</h2> */}
      {/* Or we can use the Layout's header (which is what we're doing) */}
      {/* The Layout header will just say "The-Law-Says.Com" */}
      {/* Let's add a title *inside* the main content area */}
      <h2 className={styles.missionTitle}>{amendment.name}</h2>
      
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
    </Layout>
  );
};

export default AmendmentPage;
