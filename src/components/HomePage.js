import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AccessibilityPanel from './AccessibilityPanel';
import styles from './HomePage.module.css';

const HomePage = () => {
    const router = useRouter();
    const [showFullMission, setShowFullMission] = useState(false);

    const navigateTo = (path) => {
        router.push(path);
    };

    return (
        <div className={styles.homepageContainer}>
            <header className={styles.appHeader}>
                <div className={styles.logoSection}>
                    <h1>The-Law-Says.Com</h1>
                    <p className={styles.tagline}>Know Your Rights. Understand Your Obligations.</p>
                </div>
            </header>

            <main className={styles.mainContent}>
                {/* Mission Statement Section */}
                <section className={styles.missionSection}>
                    <h2>Our Mission</h2>
                    <div className={styles.missionContent}>
                        <p className={styles.missionIntro}>
                            To provide every adult living in or passing through the United States of America 
                            with the most comprehensive, quick reference mobile app and legal research platform ever built!
                        </p>
                        
                        {showFullMission && (
                            <div className={styles.missionFull}>
                                <p>
                                    <strong>AUTHENTIC, VERIFIED, AND REGULARLY UPDATED CONTENT FROM OFFICIAL GOVERNMENT SOURCES!</strong>
                                </p>
                                <p>
                                    This app allows all persons to understand their RIGHTS and their OBLIGATIONS as prescribed by law. 
                                    The laws that govern all of us who reside in, or who are passing through, &quot;The United States Of America&quot;.
                                </p>

                                <p>
                                    It is our belief that most disagreements can be settled simply by people knowing what the laws say, 
                                    how judges have interpreted those laws in the past, and are likely to interpret them in their particular case, 
                                    and how their decisions have been documented in case law.
                                <p>
                                    In the past, people had to rely on legal advice provided by lawyers. But the simple fact is most people 
                                    cannot afford a lawyer&apos;s advice! When police are called, they may not know the laws themselves that deal 
                                    with the disagreement. When police tell people to go to court, &quot;IF YOU NEED TO GO TO COURT, YOU WILL NEED A LAWYER!&quot; 
                                    A lawyer that most people cannot afford!
                                </p>
                                <p>
                                    <strong>THAT&apos;S NOT JUSTICE!</strong>
                                </p>

                                </p>
                                <p>
                                    It is our hope that by using this app, people will understand their rights and obligations as prescribed by law, 
                                    educating them to be better law-abiding citizens who can settle disagreements peacefully and legally, 
                                    even if their reading ability is very limited - they can listen to the information!
                                </p>
                            </div>
                        )}
                        
                        <button 
                            className={styles.missionToggleBtn}
                            onClick={() => setShowFullMission(!showFullMission)}
                        >
                            {showFullMission ? 'Show Less' : 'Read Full Mission'}
                        </button>
                    </div>
                </section>

                {/* Search Bar Section */}
                <section className={styles.searchBarSection}>
                    <h2>Search Laws</h2>
                    <div className={styles.searchBarContainer}>
                        <input
                            type="text"
                            placeholder="Search Arizona laws, chapters, articles..."
                            className={styles.searchBarInput}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' && e.target.value.trim()) {
                                    navigateTo(`/search?q=${encodeURIComponent(e.target.value)}`);
                                }
                            }}
                        />
                        <button 
                            className={styles.searchBarButton}
                            onClick={(e) => {
                                const input = e.target.previousSibling;
                                if (input.value.trim()) {
                                    navigateTo(`/search?q=${encodeURIComponent(input.value)}`);
                                }
                            }}
                        >
                            🔍 Search
                        </button>
                    </div>
                    <p className={styles.searchHint}>
                        Try searching: &quot;criminal code&quot;, &quot;traffic laws&quot;, &quot;property rights&quot;
                    </p>
                </section>


                {/* Quick Access Section */}
                <section className={styles.quickAccessSection}>
                    <h2>Quick Access</h2>
                    <div className={styles.accessGrid}>
                        <div className={styles.accessCardFeatured} onClick={() => navigateTo('/states/arizona')}>
                            <div className={styles.cardIcon}>📜</div>
                            <h3>Arizona Laws</h3>
                            <p>Arizona Revised Statutes (ARS)</p>
                            <span className={styles.cardBadge}>47 Titles Available</span>
                        </div>

                        <div className={styles.accessCard} onClick={() => navigateTo('/federal')}>
                            <div className={styles.cardIcon}>🏛️</div>
                            <h3>Federal Laws</h3>
                            <p>US Constitution & Federal Code</p>
                            <span className={styles.cardBadge}>Coming Soon</span>
                        </div>

                        <div className={styles.accessCard} onClick={() => navigateTo('/states')}>
                            <div className={styles.cardIcon}>🗺️</div>
                            <h3>All States</h3>
                            <p>Laws from all 50 states</p>
                            <span className={styles.cardBadge}>50 States</span>
                        </div>

                        <div className={styles.accessCard} onClick={() => navigateTo('/counties')}>
                            <div className={styles.cardIcon}>🏘️</div>
                            <h3>Counties & Cities</h3>
                            <p>Local ordinances & regulations</p>
                            <span className={styles.cardBadge}>Coming Soon</span>
                        </div>
                    </div>
                </section>

                {/* Popular Topics Section */}
                <section className={styles.popularTopicsSection}>
                    <h2>Popular Topics</h2>
                    <div className={styles.topicsGrid}>
                        <div className={styles.topicCard} onClick={() => navigateTo('/states/arizona/ars/13')}>
                            <h4>Criminal Code</h4>
                            <p>Title 13</p>
                        </div>
                        <div className={styles.topicCard} onClick={() => navigateTo('/states/arizona/ars/28')}>
                            <h4>Traffic Laws</h4>
                            <p>Title 28</p>
                        </div>
                        <div className={styles.topicCard} onClick={() => navigateTo('/states/arizona/ars/25')}>
                            <h4>Family Law</h4>
                            <p>Title 25</p>
                        </div>
                        <div className={styles.topicCard} onClick={() => navigateTo('/states/arizona/ars/33')}>
                            <h4>Property Law</h4>
                            <p>Title 33</p>
                        </div>
                        <div className={styles.topicCard} onClick={() => navigateTo('/states/arizona/ars/23')}>
                            <h4>Labor Laws</h4>
                            <p>Title 23</p>
                        </div>
                        <div className={styles.topicCard} onClick={() => navigateTo('/states/arizona/ars/36')}>
                            <h4>Public Health</h4>
                            <p>Title 36</p>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className={styles.featuresSection}>
                    <h2>Why Use The-Law-Says.Com?</h2>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>✓</div>
                            <h4>Authentic & Verified</h4>
                            <p>Content directly from official government sources</p>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>🔄</div>
                            <h4>Regularly Updated</h4>
                            <p>Stay current with the latest legal changes</p>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>🔊</div>
                            <h4>Text-to-Speech</h4>
                            <p>Listen to laws if reading is difficult</p>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>📱</div>
                            <h4>Mobile Friendly</h4>
                            <p>Quick reference on any device</p>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>🔍</div>
                            <h4>Powerful Search</h4>
                            <p>Find exactly what you need quickly</p>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>💰</div>
                            <h4>Free Access</h4>
                            <p>No lawyers needed for basic understanding</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className={styles.ctaSection}>
                    <h2>Start Exploring</h2>
                    <p>Begin your journey to understanding your rights and obligations under the law</p>
                    <button 
                        className={styles.ctaButton}
                        onClick={() => navigateTo('/states/arizona')}
                    >
                        Browse Arizona Laws
                    </button>
                </section>
            </main>

            <footer className={styles.appFooter}>
                <p>&copy; 2025 The-Law-Says.Com. All rights reserved.</p>
                <p className={styles.disclaimer}>
                    This site provides legal information for educational purposes only. 
                    Always consult with a qualified attorney for legal advice.
                </p>
                <div className={styles.footerLinks}>
                    <button onClick={() => navigateTo('/')}>Home</button>
                    <button onClick={() => navigateTo('/search')}>Search</button>
                    <button onClick={() => navigateTo('/states/arizona')}>Arizona Laws</button>
                </div>
            </footer>

            {/* Accessibility Panel */}
            <AccessibilityPanel />
        </div>
    );
};

export default HomePage;
