// src/components/AccessibilityPanel.js
import React, { useState } from 'react';
import { RiVoiceprintFill, RiCloseLine, RiSettings3Line } from 'react-icons/ri';
import styles from './AccessibilityPanel.module.css';

const AccessibilityPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState('medium');
    const [highContrast, setHighContrast] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    const changeFontSize = (size) => {
        setFontSize(size);
        document.documentElement.style.fontSize = 
            size === 'small' ? '14px' : 
            size === 'large' ? '18px' : 
            '16px';
    };

    const toggleHighContrast = () => {
        setHighContrast(!highContrast);
        if (!highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button 
                className={styles.floatingBtn}
                onClick={togglePanel}
                title="Accessibility Options"
            >
                <RiSettings3Line />
            </button>

            {/* Accessibility Panel */}
            {isOpen && (
                <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <h3>Accessibility</h3>
                        <button 
                            className={styles.closeBtn}
                            onClick={togglePanel}
                        >
                            <RiCloseLine />
                        </button>
                    </div>

                    <div className={styles.panelContent}>
                        {/* Font Size Control */}
                        <div className={styles.controlGroup}>
                            <label>Text Size</label>
                            <div className={styles.buttonGroup}>
                                <button
                                    className={`${styles.controlBtn} ${fontSize === 'small' ? styles.active : ''}`}
                                    onClick={() => changeFontSize('small')}
                                >
                                    A
                                </button>
                                <button
                                    className={`${styles.controlBtn} ${fontSize === 'medium' ? styles.active : ''}`}
                                    onClick={() => changeFontSize('medium')}
                                >
                                    A
                                </button>
                                <button
                                    className={`${styles.controlBtn} ${styles.large} ${fontSize === 'large' ? styles.active : ''}`}
                                    onClick={() => changeFontSize('large')}
                                >
                                    A
                                </button>
                            </div>
                        </div>

                        {/* High Contrast Toggle */}
                        <div className={styles.controlGroup}>
                            <label>High Contrast</label>
                            <button
                                className={`${styles.toggleBtn} ${highContrast ? styles.active : ''}`}
                                onClick={toggleHighContrast}
                            >
                                {highContrast ? 'On' : 'Off'}
                            </button>
                        </div>

                        {/* Text-to-Speech Info */}
                        <div className={styles.infoBox}>
                            <RiVoiceprintFill className={styles.infoIcon} />
                            <div>
                                <h4>Text-to-Speech</h4>
                                <p>Look for the <RiVoiceprintFill /> icon on law pages to listen to content</p>
                            </div>
                        </div>

                        {/* Keyboard Shortcuts */}
                        <div className={styles.shortcutsBox}>
                            <h4>Keyboard Shortcuts</h4>
                            <ul>
                                <li><kbd>Tab</kbd> - Navigate between elements</li>
                                <li><kbd>Enter</kbd> - Activate buttons/links</li>
                                <li><kbd>Esc</kbd> - Close panels</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay */}
            {isOpen && (
                <div 
                    className={styles.overlay}
                    onClick={togglePanel}
                />
            )}
        </>
    );
};

export default AccessibilityPanel;
