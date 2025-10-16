import React from 'react';
import { useRouter } from 'next/router';
import styles from '../HomePage.module.css';
import LawItem from '../../components/LawItem';
import { federalTitles } from '../../data'; // Import the data from our new file

const FederalLawsPage = () => {
    const router = useRouter();

    return (
        <div className={styles.appContainer}>
            <header className={styles.appHeader}>
                The-Law-Says.Com
            </header>

            <main className={styles.mainContent}>
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
                    <button className={styles.navButton} onClick={() => router.forward()}>&#x27A1;</button>
                </div>
                <p className={styles.copyrightText}>
                    &copy; 2025 The-Law-Says.Com. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default FederalLawsPage;