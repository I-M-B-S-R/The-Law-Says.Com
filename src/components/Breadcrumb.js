import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.css';
import { RiHome4Fill } from 'react-icons/ri'; // Home icon

const Breadcrumb = () => {
  return (
    <nav className={styles.breadcrumbNav}>
      <Link href="/" className={styles.breadcrumbLink}>
        <RiHome4Fill className={styles.breadcrumbIcon} />
        <span>Home</span>
      </Link>
    </nav>
  );
};

export default Breadcrumb;
