import React from 'react';
import { useRouter } from 'next/router';
// --- FIXED IMPORT PATHS ---
import { arsTitles } from '../../../../data/arizonaStatutes';
import { title1Data } from '../../../../data/ars/title1';
import { title3Data }from '../../../../data/ars/title3';
import styles from '../../../../pages/HomePage.module.css';
// --- END OF FIXED PATHS ---
import { useTextToSpeech } from '../../../../hooks/useTextToSpeech';
import { RiVoiceprintFill } from 'react-icons/ri';
import Layout from '../../../../components/Layout'; // <-- *** THIS LINE IS NOW FIXED ***

const ArsTitleDetailPage = () => {
  const router = useRouter();
  const { titleId } = router.query;
  const { isSpeaking, speak, stop } = useTextToSpeech();

  const titleInfo = arsTitles.find(
    (title) => title.id === parseInt(titleId)
  );

  let titleData = null;
  const currentTitleId = parseInt(titleId);

  if (currentTitleId === 1) {
    titleData = title1Data;
  } else if (currentTitleId === 3) {
    titleData = title3Data;
  }
  // (We will add more 'else if' blocks here for other titles later)

  if (!router.isReady || !titleInfo) {
    return <Layout><p>Loading...</p></Layout>;
  }

  if (!titleData) {
    return (
      <Layout>
        <h2 className={styles.missionTitle}>{titleInfo.name}</h2>
        <p className={styles.missionText} style={{ textAlign: 'center', marginTop: '30px' }}>
          Detailed statutes for {titleInfo.name} will be added soon.
        </p>
      </Layout>
    );
  }
  
  const titleName = titleInfo.name;

  const prepareSpeechText = () => {
    let fullText = `${titleName}. `;
    if (titleData && titleData.chapters) {
      titleData.chapters.forEach(chapter => {
        fullText += `Chapter: ${chapter.name}. `;
        if (chapter.articles) {
          chapter.articles.forEach(article => {
            fullText += `Article: ${article.name}. `;
            if (article.sections) {
              article.sections.forEach(section => {
                const cleanText = section.text.replace(/<[^>]*>?/gm, '');
                fullText += `Section ${section.name}. ${cleanText} `;
              });
            }
          });
        }
      });
    }
    return fullText;
  };

  const textToSpeak = prepareSpeechText();

  return (
    <Layout>
      <h2 className={styles.missionTitle}>{titleName}</h2>

      <div className={styles.buttonContainer}>
        <button
          className={styles.listenButton}
          onClick={() => isSpeaking ? stop() : speak(textToSpeak)}
        >
          <RiVoiceprintFill className={styles.icon} />
          {isSpeaking ? 'Stop Listening' : 'Listen to Title'}
        </button>
      </div>

      {titleData.chapters.map((chapter, chapIndex) => (
        <div key={chapIndex} style={{ textAlign: 'left', marginBottom: '20px' }}>
          <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '5px' }}>
            {chapter.name}
          </h3>
          {chapter.articles && chapter.articles.map((article, artIndex) => (
            <div key={artIndex} style={{ marginLeft: '15px', marginTop: '10px' }}>
              <h4 style={{ fontStyle: 'italic' }}>{article.name}</h4>
              {article.sections && article.sections.map((section, secIndex) => (
                <div key={secIndex} style={{ marginLeft: '15px', marginTop: '10px' }}>
                  <h5>{section.name}</h5>
                  <p style={{ whiteSpace: 'pre-wrap' }}>{section.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </Layout>
  );
};

export default ArsTitleDetailPage;