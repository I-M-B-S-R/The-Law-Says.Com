import React from 'react';
import { useRouter } from 'next/router';
import { federalTitles } from '../../data';
import LawItem from '../../components/LawItem';
import styles from '../HomePage.module.css';
import Layout from '../../components/Layout'; // <-- Import Layout

const FederalTitlePage = () => {
  const router = useRouter();
  const { titleId } = router.query;

  // Find the title data
  const title = federalTitles.find(t => t.number === parseInt(titleId));

  if (!title) {
    return <Layout><p>Loading...</p></Layout>; // Use Layout even for loading
  }

  return (
    <Layout>
      <h2 className={styles.missionTitle}>Title {title.number}: {title.description}</h2>
      
      {/* Check if there are sections to display */}
      {title.sections && title.sections.length > 0 ? (
        <div className={styles.buttonContainer}>
          {title.sections.map((section) => (
            <LawItem
              key={section.number}
              number={section.number}
              description={section.description}
              // This href won't work yet, but it's ready for when we build it
              href={`/federal/${title.number}/${section.number}`}
            />
          ))}
        </div>
      ) : (
        <p className={styles.missionText}>Detailed sections for this Title will be added soon.</p>
      )}
    </Layout>
  );
};

export default FederalTitlePage;
