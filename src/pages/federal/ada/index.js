import React from 'react';
import Link from 'next/link';
import { adaTitles } from '../../../data/ada';
import styles from '../../../pages/HomePage.module.css';
import Layout from '../../../components/Layout'; // <-- Import Layout

const AdaPage = () => {
  return (
    <Layout>
      <h2 className={styles.missionTitle}>Titles of the ADA</h2>
      <div className={styles.buttonContainer}>
        {adaTitles.map((title) => (
          <Link key={title.id} href={`/federal/ada/${title.id}`} passHref>
            <button className={styles.actionButton}>
              {title.name}
            </button>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default AdaPage;
