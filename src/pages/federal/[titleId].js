import React from 'react';
import { useRouter } from 'next/router';
import styles from '../HomePage.module.css';
import LawItem from '../../components/LawItem'; // Import the LawItem component
import { federalTitles } from '../../data'; // Import our data

const FederalTitlePage = () => {
    const router = useRouter();
    const { titleId } = router.query;

    // Find the specific title from our data list based on the URL
    const title = federalTitles.find(t => t.number.toString() === titleId);

    // If the title isn't found or data is loading, show a loading message
    if (!title) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.appContainer}>
            <header className={styles.appHeader}>
                The-Law-Says.Com
            </header>

            <main className={styles.mainContent}>
                <h2 className={styles.missionTitle}>Title {title.number}: {title.description}</h2>
                
                <div className={styles.buttonContainer}>
                    {/* Check if there are chapters to display */}
                    {title.chapters && title.chapters.length > 0 ? (
                        title.chapters.map(chapter => (
                            <LawItem
                                key={chapter.number}
                                number={chapter.number}
                                description={chapter.name}
                            />
                        ))
                    ) : (
                        <p className={styles.missionText}>No chapters available for this title.</p>
                    )}
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

export default FederalTitlePage;