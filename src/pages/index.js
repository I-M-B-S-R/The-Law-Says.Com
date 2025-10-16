import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the router
import styles from './HomePage.module.css';

const HomePage = () => {
    const contentRef = useRef(null);
    const router = useRouter(); // Initialize the router

    const handleListen = () => {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            return;
        }
        if ('speechSynthesis' in window && contentRef.current) {
            const textToSpeak = contentRef.current.innerText;
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            window.speechSynthesis.speak(utterance);
        } else {
            alert("Sorry, your browser does not support text-to-speech.");
        }
    };

    return (
        <div className={styles.appContainer}>
            <header className={styles.appHeader}>
                The-Law-Says.Com
            </header>

            <main className={styles.mainContent} ref={contentRef}>
                <div className={styles.qrCodeContainer}>
                    <img
                        src="/qr-code.png"
                        alt="QR Code for The-Law-Says.Com"
                        className={styles.qrCodeImage}
                    />
                </div>
                <button className={styles.listenButton} onClick={handleListen}>
                    <span className={styles.icon}>&#x1F50A;</span> Listen
                </button>
                <div className={styles.buttonContainer}>
                    <Link href="/federal" passHref>
                        <button className={styles.actionButton}>Federal Laws</button>
                    </Link>
                    <button className={styles.actionButton}>States</button>
                </div>
                <div className={styles.missionContainer}>
                    <h2 className={styles.missionTitle}>Our Mission</h2>
                    <p className={styles.missionText}>
                        Our Mission Is To Provide Every Adult Living In Or Passing Through "THE GREAT STATE OF ARIZONA" (And Eventually Every State) With The Most Comprehensive, Quick Reference Mobile App And Legal Research Platform Ever Built! It Has "AUTHENTIC, VERIFIED, AND REGULARLY UPDATED CONTENT FROM OFFICIAL GOVERNMENT SOURCES"! It Will Allow All Persons Using This APP To Understand Their RIGHTS, AND THEIR OBLIGATIONS, AS PRESCRIBED BY LAW. The Laws That Govern All Of Us Who Reside In, Or Who Are Passing Through, The 131 Districts That There Are In "THE GREAT STATE OF ARIZONA".
                        <br /><br />
                        It Is Our Belief That Most Disagreements Can Be Settled Simply By People "Knowing What The Laws Say, How Judges Have Interpreted Those Laws In The Past, And Are Likely To Interpret Them In Their Particular Case, And How Their Decisions Have Been Documented In (Case Law), And Again, What Their Rights and Obligations Are Under Law, That We All Have To Each Other And To Those Authorities That Have Been Placed Above Us When We Are In, Or Passing Through Their Districts, As Prescribed By Law"!
                        <br /><br />
                        In The Past People Had To Rely On Legal Advice Provided By Lawyers In Making Their Decisions, But The Simple Fact Of The Matter Is Most People Cannot Afford A Lawyer's Advice! So, They Called The Police To Settle These Disagreements, The Problem With That Is The Police May Not Know What The Laws Are Themselves, That Deal With The Disagreement That The People Are Having!
                        <br /><br />
                        And Unfortunately, When The Police Don't Know The Laws Themselves They Can Be Influenced Not By The Laws Themselves, But By The Perceived Finances Or Political Standing That 1 Party May Have Over The Other In Their Decision Making! <span className={styles.boldText}>"THATS NOT JUSTICE!"</span>
                        <br /><br />
                        The Other Thing The Police Do Is To Tell People To Go To Court To Settle The Matter, And <span className={styles.boldRedText}>"IF YOU NEED TO GO TO COURT, YOU WILL NEED A LAWYER!"</span> A Lawyer That Most People Cannot Afford! So, They End Up Forfeiting Their Rights Are Not Proving True To Their Obligations As Prescribed By Law! <span className={styles.boldText}>"THATS NOT JUSTICE EATHER!"</span>
                        <br /><br />
                        It Is Our Hope That By People Using "The Arizona Law Quick Reference Mobile App", people will understand their "Rights and their Obligations" As Prescribed By Law. The Laws That Govern All Of Us Who Reside In Or Who Are Passing Through The 131 Districts That Are In "The Great State Of Arizona" Educating Them To Be Better Law Abiding Citizens Who Can Settle Disagreements Peacefully, And Legally, Even If They're Reading Ability Is Very Limited, They Can Listen To The Information, Without The Need Of The Police, Paralegals, Lawyers, Or Our Court System, Or Even Our Lawmakers!
                    </p>
                </div>
            </main>

            <footer className={styles.appFooter}>
                <div className={styles.navButtonContainer}>
                    {/* Go to the previous page in history */}
                    <button className={styles.navButton} onClick={() => router.back()}>&#x2B05;</button>
                    {/* Go to the next page in history */}
                    <button className={styles.navButton} onClick={() => router.forward()}>&#x27A1;</button>
                </div>
                <p className={styles.copyrightText}>
                    &copy; 2025 The-Law-Says.Com. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default HomePage;