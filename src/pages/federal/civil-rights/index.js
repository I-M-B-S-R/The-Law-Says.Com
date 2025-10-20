import React from 'react';
import Link from 'next/link';
import { civilRightsActs } from '../../../data/civilRights';
import styles from '../../../pages/HomePage.module.css';
import Layout from '../../../components/Layout'; // <-- Import Layout

const CivilRightsPage = () => {
  return (
    <Layout>
      <h2 className={styles.missionTitle}>Federal Civil Rights Legislation</h2>
      <div className={styles.buttonContainer}>
        {civilRightsActs.map((act) => (
          <Link key={act.id} href={`/federal/civil-rights/${act.id}`} passHref>
            <button className={styles.actionButton}>
              {act.name}
            </button>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default CivilRightsPage;
