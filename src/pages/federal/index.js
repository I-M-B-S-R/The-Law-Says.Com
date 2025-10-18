// src/pages/federal/index.js (Updated)
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../HomePage.module.css';
import LawItem from '../../components/LawItem';
import { federalTitles } from '../../data';

const FederalLawsPage = () => {
    const router = useRouter();

    return (
        <div className={styles.appContainer}>
            <header className={styles.appHeader}>
                The-Law-Says.Com
            </header>

            <main className={styles.mainContent}>

                {/* --- START OF UPDATED BUTTONS --- */}
                <div className={styles.buttonContainer}>

                    <Link href="/federal/constitution" passHref>
                        <button className={styles.actionButton}>U.S. Constitution</button>
                    </Link>

                    <Link href="/federal/ada" passHref>
                        <button className={styles.actionButton}>ADA Law</button>
                    </Link>

                    {/* THIS IS THE UPDATED BUTTON */}
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
                        />
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

export default FederalLawsPage;