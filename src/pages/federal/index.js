import React from 'react';
import Link from 'next/link';
import styles from '../HomePage.module.css';
import LawItem from '../../components/LawItem';
import { federalTitles } from '../../data';
import Layout from '../../components/Layout'; // <-- Import Layout

const FederalLawsPage = () => {
  return (
    <Layout>
      {/* --- START OF UPDATED BUTTONS --- */}
      <div className={styles.buttonContainer}>
        <Link href="/federal/constitution" passHref>
          <button className={styles.actionButton}>U.S. Constitution</button>
        </Link>
        <Link href="/federal/ada" passHref>
          <button className={styles.actionButton}>ADA Law</button>
        </Link>
        <Link href="/federal/civil-rights" passHref>
          <button className={styles.actionButton}>Civil Rights</button>
        </Link>
      </div>
      {/* --- END OF UPDATED BUTTONS --- */}

      <h2 className={styles.missionTitle}>Federal Law Titles</h2>

      <div className={styles.buttonContainer}>
        {federalTitles.map((title) => (
          <LawItem
            key={title.number}
            number={title.number}
            description={title.description}
            // Fix: Add the link to the detail page
            href={`/federal/${title.number}`}
          />
        ))}
      </div>
    </Layout>
  );
};

export default FederalLawsPage;
