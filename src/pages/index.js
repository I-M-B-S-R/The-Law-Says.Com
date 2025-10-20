import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiVoiceprintFill } from 'react-icons/ri';
import { MdTranslate } from 'react-icons/md';
import styles from './HomePage.module.css';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import Layout from '../components/Layout';

const HomePage = () => {
  const { isSpeaking, speak, stop } = useTextToSpeech();

  const contentToRead = `
    Translate. Listen. Federal Laws. States.
  `;

  const handleListenClick = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(contentToRead);
    }
  };

  return (
    <Layout>
      {/* QR Code - Square, same width as navigation button */}
      <div className={styles.qrCodeContainer}>
        <Image
          src="/qr-code.png"
          alt="QR Code for The-Law-Says.Com"
          width={400}
          height={400}
          className={styles.qrCodeImage}
        />
      </div>


      {/* Translate Button */}
      <Link href="/translate" passHref>
        <button className={styles.translateButton}>
          <MdTranslate className={styles.icon} />
          Translate
        </button>
      </Link>

      {/* Listen Button */}
      <button onClick={handleListenClick} className={styles.listenButton}>
        <RiVoiceprintFill className={styles.icon} />
        {isSpeaking ? 'Stop' : 'Listen'}
      </button>

      {/* Federal Laws Button */}
      <Link href="/federal" passHref>
        <button className={styles.actionButton}>Federal Laws</button>
      </Link>

      {/* States Button */}
      <Link href="/states" passHref>
        <button className={styles.actionButton}>States</button>
      </Link>

      {/* Mission Statement */}
      <div className={styles.missionContainer}>
        <h2 className={styles.missionTitle}>Our Mission</h2>
        <div className={styles.missionText}>
          <p>
            Our Mission Is To Provide Every Adult Living In Or Passing Through The United States Of America Or 1 Of The States Contained Therein, Including There Countys, Municipalities, Or Tribes, With The Most Comprehensive, Quick Reference Mobile App And Legal Research Platform Ever Built! It Has <strong>"AUTHENTIC, VERIFIED, AND REGULARLY UPDATED CONTENT FROM OFFICIAL GOVERNMENT SOURCES"!</strong> It Will Allow All Persons Using This APP To Understand Their <strong>RIGHTS, AND THEIR OBLIGATIONS, AS PRESCRIBED BY LAW.</strong> The Laws That Govern All Of Us Who Reside In, Or Who Are Passing Through, "The United States Of America".
          </p>

          <p>
            It Is Our Belief That Most Disagreements Can Be Settled Simply By People "Knowing What The Laws Say, How Judges Have Interpreted Those Laws In The Past, And Are Likely To Interpret Them In Their Particular Case, And How Their Decisions Have Been Documented In (Case Law), And Again, What Their Rights and Obligations Are Under Law, That We All Have To Each Other, And To Those Authorities That Have Been Placed Above Us When We Are In, Or Passing Through Their Districts, As Prescribed By Law"!
          </p>
          <p>
            In The Past People Had To Rely On Legal Advice Provided By Lawyers In Making Their Decisions, But The Simple Fact Of The Matter Is Most People Cannot Afford A Lawyer's Advice! So, They Called The Police To Settle These Disagreements, The Problem With That Is The Police May Not Know What The Laws Are Themselves, That Deal With The Disagreement That The People Are Having!
          </p>
          <p>
            And Unfortunately, When The Police Don't Know The Laws Themselves They Can Be Influenced Not By The Laws Themselves, But By The Perceived Finances Or Political Standing That 1 Party May Have Over The Other In Their Decision Making! <strong>"THATS NOT JUSTICE!"</strong>
          </p>
          <p>
            The Other Thing The Police Do Is To Tell People To Go To Court To Settle The Matter, And <strong style={{ color: '#FF0000' }}>"IF YOU NEED TO GO TO COURT, YOU WILL NEED A LAWYER!"</strong> A Lawyer That Most People Cannot Afford! So, They End Up Forfeiting Their Rights Are Not Proving True To Their Obligations As Prescribed By Law! <strong>"THATS NOT JUSTICE EATHER!"</strong>
          </p>
          <p>
            It Is Our Hope That By People Using "The Arizona Law Quick Reference Mobile App", people will understand their "Rights and their Obligations" As Prescribed By Law. The Laws That Govern All Of Us Who Reside In Or Who Are Passing Through The 131 Districts That Are In "The Great State Of Arizona" Educating Them To Be Better Law Abiding Citizens Who Can Settle Disagreements Peacefully, And Legally, Even If They're Reading Ability Is Very Limited, They Can Listen To The Information, Without The Need Of The Police, Paralegals, Lawyers, Or Our Court System, Or Even Our Lawmakers!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
