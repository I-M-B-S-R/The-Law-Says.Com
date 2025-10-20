import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { statesAndTerritories } from '../../data/states';
import { arsTitles } from '../../data/arizonaStatutes';
import styles from '../HomePage.module.css';
import Layout from '../../components/Layout'; // <-- Import Layout

const StateDetailPage = () => {
  const router = useRouter();
  const { stateId } = router.query;

  const stateInfo = statesAndTerritories.find(
    (item) => item.id === stateId
  );

  if (!router.isReady || !stateInfo) {
    return <Layout><p>Loading...</p></Layout>; // Use Layout
  }

  const stateName = stateInfo.name;
  const isArizona = stateId === 'arizona';

  return (
    <Layout>
      <h2 className={styles.missionTitle} style={{marginBottom: '20px'}}>{stateName}</h2>

      {isArizona ? (
        <>
          <h2 className={styles.missionTitle}>Arizona Resources</h2>
          <div className={styles.buttonContainer}>
            <Link href={`/states/${stateId}/counties`} passHref>
              <button className={styles.actionButton}>Counties (15)</button>
            </Link>
            <Link href={`/states/${stateId}/municipalities`} passHref>
              <button className={styles.actionButton}>Municipalities (92)</button>
            </Link>
            <Link href={`/states/${stateId}/tribes`} passHref>
              <button className={styles.actionButton}>Tribes (22)</button>
            </Link>
          </div>

          <h2 className={styles.missionTitle} style={{ marginTop: '30px' }}>Arizona Revised Statutes (Titles)</h2>
          <div className={styles.buttonContainer}>
            {arsTitles.map((title) => (
              <Link key={title.id} href={`/states/arizona/ars/${title.id}`} passHref>
                <button className={styles.actionButton}>
                  {title.name}
                </button>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className={styles.missionTitle}>{stateName} Laws</h2>
          <p className={styles.missionText} style={{ textAlign: 'center', marginTop: '30px' }}>
            Information for {stateName} will be added soon.
          </p>
        </>
      )}
    </Layout>
  );
};

export default StateDetailPage;
