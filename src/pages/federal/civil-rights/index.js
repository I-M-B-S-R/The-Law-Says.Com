// src/pages/federal/civil-rights/index.js
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { civilRightsActs } from '../../../data/civilRights'; // <-- Use Civil Rights data
import styles from '../../../pages/HomePage.module.css';

const CivilRightsPage = () => {
    const router = useRouter();

    return (
        <div className={styles.appContainer}>
            <header className={styles.appHeader}>
                Key Civil Rights Acts
            </header>

            <main className={styles.mainContent}>

                <h2 className={styles.missionTitle}>Federal Civil Rights Legislation</h2>
                <div className={styles.buttonContainer}>
                    {civilRightsActs.map((act) => (
                        // Each button links to our new dynamic page
                        <Link key={act.id} href={`/federal/civil-rights/${act.id}`} passHref>
                            <button className={styles.actionButton}>
                                {act.name}
                            </button>
                        </Link>
                    ))}
                </div>

            </main>

            <footer className={styles.appFooter}>
                <div className={styles.navButtonContainer}>
                    <button className={styles.navButton} onClick={() => router.back()}>&#x2B05;</button>
                    <button className={styles.navButton} onClick={() => window.history.forward()}>&#x27A1;</button>
                </div>
                <p className={styles.copyrightText}>
                    &copy; 2025 The-Law-Says.Com. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default CivilRightsPage;