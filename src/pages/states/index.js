import React from 'react';
import Link from 'next/link';
import { statesAndTerritories } from '../../data/states';
import styles from '../HomePage.module.css';
import Layout from '../../components/Layout'; // <-- Import Layout

const StatesPage = () => {
  return (
    <Layout>
      <h2 className={styles.missionTitle}>Select a State or Territory</h2>
      <div className={styles.buttonContainer}>
        {statesAndTerritories.map((item) => (
          <Link key={item.id} href={`/states/${item.id}`} passHref>
            <button className={styles.actionButton}>
              {item.name}
            </button>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default StatesPage;
