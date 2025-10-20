import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from './HomePage.module.css';

const federalLaws = [
  { id: 'constitution', name: 'US Constitution', description: 'The supreme law of the United States' },
  { id: 'civil-rights', name: 'Civil Rights/A.D.A.', description: 'Civil Rights Act and Americans with Disabilities Act' },
  { id: 'title-1', name: 'Title 1 - General Provisions', description: 'Rules of construction and general provisions' },
  { id: 'title-2', name: 'Title 2 - The Congress', description: 'Organization and procedures of Congress' },
  { id: 'title-3', name: 'Title 3 - The President', description: 'Presidential powers and administration' },
  { id: 'title-4', name: 'Title 4 - Flag and Seal', description: 'Flag, seal, seat of government, and the states' },
  { id: 'title-5', name: 'Title 5 - Government Organization', description: 'Government organization and employees' },
  { id: 'title-6', name: 'Title 6 - Domestic Security', description: 'Homeland security and domestic security' },
  { id: 'title-7', name: 'Title 7 - Agriculture', description: 'Agricultural programs and regulations' },
  { id: 'title-8', name: 'Title 8 - Aliens and Nationality', description: 'Immigration and naturalization' },
  { id: 'title-9', name: 'Title 9 - Arbitration', description: 'Arbitration agreements and procedures' },
  { id: 'title-10', name: 'Title 10 - Armed Forces', description: 'Military organization and regulations' },
  { id: 'title-11', name: 'Title 11 - Bankruptcy', description: 'Bankruptcy laws and procedures' },
  { id: 'title-12', name: 'Title 12 - Banks and Banking', description: 'Banking regulations and institutions' },
  { id: 'title-13', name: 'Title 13 - Census', description: 'Census procedures and data collection' },
  { id: 'title-14', name: 'Title 14 - Coast Guard', description: 'Coast Guard organization and duties' },
  { id: 'title-15', name: 'Title 15 - Commerce and Trade', description: 'Commerce, trade, and consumer protection' },
  { id: 'title-16', name: 'Title 16 - Conservation', description: 'Natural resource conservation' },
  { id: 'title-17', name: 'Title 17 - Copyrights', description: 'Copyright laws and protections' },
  { id: 'title-18', name: 'Title 18 - Crimes and Criminal Procedure', description: 'Federal criminal laws and procedures' },
  { id: 'title-19', name: 'Title 19 - Customs Duties', description: 'Customs and international trade' },
  { id: 'title-20', name: 'Title 20 - Education', description: 'Federal education programs and policies' },
  { id: 'title-21', name: 'Title 21 - Food and Drugs', description: 'Food, drug, and cosmetic regulations' },
  { id: 'title-22', name: 'Title 22 - Foreign Relations', description: 'Foreign relations and intercourse' },
  { id: 'title-23', name: 'Title 23 - Highways', description: 'Federal highway programs and funding' },
  { id: 'title-24', name: 'Title 24 - Hospitals and Asylums', description: 'Federal hospitals and health facilities' },
  { id: 'title-25', name: 'Title 25 - Indians', description: 'Native American affairs and tribal law' },
  { id: 'title-26', name: 'Title 26 - Internal Revenue Code', description: 'Federal tax laws and regulations' },
  { id: 'title-27', name: 'Title 27 - Intoxicating Liquors', description: 'Alcohol regulations and enforcement' },
  { id: 'title-28', name: 'Title 28 - Judiciary', description: 'Federal courts and judicial procedures' },
  { id: 'title-29', name: 'Title 29 - Labor', description: 'Labor laws and employment regulations' },
  { id: 'title-30', name: 'Title 30 - Mineral Lands and Mining', description: 'Mining regulations and mineral rights' },
  { id: 'title-31', name: 'Title 31 - Money and Finance', description: 'Federal financial management' },
  { id: 'title-32', name: 'Title 32 - National Guard', description: 'National Guard organization and duties' },
  { id: 'title-33', name: 'Title 33 - Navigation and Waters', description: 'Navigable waters and waterways' },
  { id: 'title-34', name: 'Title 34 - Crime Control', description: 'Crime control and law enforcement' },
  { id: 'title-35', name: 'Title 35 - Patents', description: 'Patent laws and procedures' },
  { id: 'title-36', name: 'Title 36 - Patriotic Societies', description: 'Patriotic and national organizations' },
  { id: 'title-37', name: 'Title 37 - Pay and Allowances', description: 'Military pay and allowances' },
  { id: 'title-38', name: 'Title 38 - Veterans Benefits', description: 'Veterans affairs and benefits' },
  { id: 'title-39', name: 'Title 39 - Postal Service', description: 'United States Postal Service' },
  { id: 'title-40', name: 'Title 40 - Public Buildings', description: 'Public buildings and property' },
  { id: 'title-41', name: 'Title 41 - Public Contracts', description: 'Federal procurement and contracting' },
  { id: 'title-42', name: 'Title 42 - Public Health', description: 'Public health and social welfare' },
  { id: 'title-43', name: 'Title 43 - Public Lands', description: 'Federal public lands management' },
  { id: 'title-44', name: 'Title 44 - Public Printing', description: 'Government printing and documents' },
  { id: 'title-45', name: 'Title 45 - Railroads', description: 'Railroad regulations and safety' },
  { id: 'title-46', name: 'Title 46 - Shipping', description: 'Maritime shipping and navigation' },
  { id: 'title-47', name: 'Title 47 - Telecommunications', description: 'Communications and broadcasting' },
  { id: 'title-48', name: 'Title 48 - Territories', description: 'US territories and possessions' },
  { id: 'title-49', name: 'Title 49 - Transportation', description: 'Transportation regulations and safety' },
  { id: 'title-50', name: 'Title 50 - War and National Defense', description: 'War powers and national defense' },
  { id: 'title-51', name: 'Title 51 - National and Commercial Space', description: 'Space programs and commercial space' },
  { id: 'title-52', name: 'Title 52 - Voting and Elections', description: 'Federal election laws and voting rights' },
  { id: 'title-53', name: 'Title 53 - Small Business', description: 'Small business administration and programs' },
  { id: 'title-54', name: 'Title 54 - National Park Service', description: 'National parks and historic preservation' }
];

const FederalLawsPage = () => {
  return (
    <Layout>
      <div className={styles.missionContainer}>
        <h2 className={styles.missionTitle}>Federal Laws</h2>
      </div>

      <div className={styles.buttonContainer}>
        {federalLaws.map((law) => (
          <Link key={law.id} href={`/federal/${law.id}`} passHref>
            <button className={styles.actionButton}>
              <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{law.name}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 'normal' }}>{law.description}</div>
            </button>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default FederalLawsPage;
