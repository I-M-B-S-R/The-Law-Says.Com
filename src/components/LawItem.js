import React from 'react';
import Link from 'next/link'; // Import the Link component
import styles from './LawItem.module.css';

const LawItem = ({ number, description }) => {
  // The 'href' creates the dynamic URL like "/federal/1", "/federal/2", etc.
  return (
    <Link href={`/federal/${number}`} passHref>
      <button className={styles.lawItem}>
        <div className={styles.itemNumber}>{number}</div>
        <div className={styles.itemDescription}>{description}</div>
      </button>
    </Link>
  );
};

export default LawItem;