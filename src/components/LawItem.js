import React from 'react';
import Link from 'next/link'; // Import the Link component
import styles from './LawItem.module.css';

const LawItem = ({ number, description, href }) => {
  // Use custom href if provided, otherwise default to /federal/{number}
  const linkHref = href || `/federal/${number}`;
  
  return (
    <Link href={linkHref} className={styles.lawItem}>
      <div className={styles.itemNumber}>{number}</div>
      <div className={styles.itemDescription}>{description}</div>
    </Link>
  );
};

export default LawItem;
