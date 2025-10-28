import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../pages/HomePage.module.css'; // Import HomePage styles
import Breadcrumb from './Breadcrumb'; // Re-add Breadcrumb import

const Layout = ({ children }) => {
  const router = useRouter();

  const isHomePage = router.pathname === '/';

  return (
    <div className={styles.appContainer}> 
      <Head>
        <title>The-Law-Says.Com</title>
        <meta name="description" content="Quick reference for legal statutes and information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 1. HEADER */}
      <header className={styles.appHeader}>
        The-Law-Says.Com
      </header>

      {/* 2. BREADCRUMB - Re-add usage */}
      {!isHomePage && <Breadcrumb />} 

      {/* 3. MAIN CONTENT */}
      <main className={styles.mainContent}>
        {children}
      </main>

      {/* 4. FOOTER */}
      <footer className={styles.appFooter}>
        <div className={styles.navButtonContainer}>
          {/* Assuming HomePage.module.css provides .navButton */}
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

export default Layout;