import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { adaTitles } from '../../../data/ada'; // <-- Use ADA data
import styles from '../../../pages/HomePage.module.css';

const AdaPage = () => {
    const router = useRouter();

    return (
        <div className={styles.appContainer}>
            <header className={styles.appHeader}>
                ADA Law
            </header>

            <main className={styles.mainContent}>
                
                <h2 className={styles.missionTitle}>Titles of the ADA</h2>
                <div className={styles.buttonContainer}>
                    {adaTitles.map((title) => (
                        // Each button links to our new dynamic page
                        <Link key={title.id} href={`/federal/ada/${title.id}`} passHref>
                            <button className={styles.actionButton}>
                                {title.name}
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

export default AdaPage;