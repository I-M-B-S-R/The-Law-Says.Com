// src/pages/states/arizona/index.js
import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { arsTitles } from '../../../data/arizonaStatutes';
import styles from './Arizona.module.css';

const ArizonaPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter titles based on search and category
    const filteredTitles = arsTitles.filter(title => {
        const matchesSearch = title.name.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (selectedCategory === 'all') return matchesSearch;
        
        // Category filtering logic
        const categoryMap = {
            'criminal': [13, 31],
            'traffic': [28],
            'family': [25, 8],
            'property': [33, 27],
            'business': [10, 29, 44, 47],
            'government': [9, 11, 38, 41],
            'health': [36, 24],
        };
        
        return matchesSearch && categoryMap[selectedCategory]?.includes(title.id);
    });

    const categories = [
        { id: 'all', name: 'All Titles', icon: '📚' },
        { id: 'criminal', name: 'Criminal Law', icon: '⚖️' },
        { id: 'traffic', name: 'Traffic & Transportation', icon: '🚗' },
        { id: 'family', name: 'Family & Children', icon: '👨‍👩‍👧‍👦' },
        { id: 'property', name: 'Property & Real Estate', icon: '🏠' },
        { id: 'business', name: 'Business & Commerce', icon: '💼' },
        { id: 'government', name: 'Government & Public', icon: '🏛️' },
        { id: 'health', name: 'Health & Safety', icon: '🏥' },
    ];

    const breadcrumbs = [
        { label: 'Arizona Laws', href: null }
    ];

    return (
        <Layout showBreadcrumbs={true} breadcrumbs={breadcrumbs}>
            <div className={styles.arizonaContainer}>
                <header className={styles.header}>
                    <h1>Arizona Revised Statutes (ARS)</h1>
                    <p className={styles.subtitle}>Complete collection of Arizona state laws</p>
                    <Link href="/search">
                        <button className={styles.advancedSearchButton}>
                            🔍 Advanced Search
                        </button>
                    </Link>
                </header>

                <main className={styles.mainContent}>
                    {/* Search Section */}
                    <section className={styles.searchSection}>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder="Search titles... (e.g., Criminal, Traffic, Property)"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={styles.searchInput}
                            />
                            <span className={styles.searchIcon}>🔍</span>
                        </div>
                    </section>

                    {/* Category Filter */}
                    <section className={styles.categorySection}>
                        <div className={styles.categoryGrid}>
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`${styles.categoryButton} ${selectedCategory === cat.id ? styles.active : ''}`}
                                    onClick={() => setSelectedCategory(cat.id)}
                                >
                                    <span className={styles.categoryIcon}>{cat.icon}</span>
                                    <span className={styles.categoryName}>{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Info Banner */}
                    <section className={styles.infoBanner}>
                        <div className={styles.infoContent}>
                            <span className={styles.infoIcon}>ℹ️</span>
                            <p>
                                Arizona has 47 titles covering all aspects of state law. 
                                Click any title to explore its chapters, articles, and sections.
                            </p>
                        </div>
                    </section>

                    {/* Titles Grid */}
                    <section className={styles.titlesSection}>
                        <div className={styles.resultsHeader}>
                            <h2>
                                {selectedCategory === 'all' ? 'All Titles' : categories.find(c => c.id === selectedCategory)?.name}
                            </h2>
                            <span className={styles.resultCount}>
                                {filteredTitles.length} {filteredTitles.length === 1 ? 'title' : 'titles'}
                            </span>
                        </div>

                        {filteredTitles.length === 0 ? (
                            <div className={styles.noResults}>
                                <p>No titles found matching your search.</p>
                                <button 
                                    className={styles.clearButton}
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCategory('all');
                                    }}
                                >
                                    Clear Filters
                                </button>
                            </div>
                        ) : (
                            <div className={styles.titlesGrid}>
                                {filteredTitles.map(title => (
                                    <Link key={title.id} href={`/states/arizona/ars/${title.id}`} passHref>
                                        <div className={styles.titleCard}>
                                            <div className={styles.titleNumber}>
                                                Title {title.id}
                                            </div>
                                            <h3 className={styles.titleName}>
                                                {title.name.replace(`Title ${title.id}: `, '')}
                                            </h3>
                                            <div className={styles.titleFooter}>
                                                <span className={styles.viewLink}>View Details →</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Quick Links */}
                    <section className={styles.quickLinksSection}>
                        <h3>Popular Titles</h3>
                        <div className={styles.quickLinksGrid}>
                            <Link href="/states/arizona/ars/13">
                                <div className={styles.quickLinkCard}>
                                    <span className={styles.quickLinkIcon}>⚖️</span>
                                    <span>Title 13: Criminal Code</span>
                                </div>
                            </Link>
                            <Link href="/states/arizona/ars/28">
                                <div className={styles.quickLinkCard}>
                                    <span className={styles.quickLinkIcon}>🚗</span>
                                    <span>Title 28: Transportation</span>
                                </div>
                            </Link>
                            <Link href="/states/arizona/ars/25">
                                <div className={styles.quickLinkCard}>
                                    <span className={styles.quickLinkIcon}>👨‍👩‍👧‍👦</span>
                                    <span>Title 25: Family Law</span>
                                </div>
                            </Link>
                            <Link href="/states/arizona/ars/33">
                                <div className={styles.quickLinkCard}>
                                    <span className={styles.quickLinkIcon}>🏠</span>
                                    <span>Title 33: Property</span>
                                </div>
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export default ArizonaPage;
