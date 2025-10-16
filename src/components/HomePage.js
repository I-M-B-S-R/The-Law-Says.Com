import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="app-header">
                <h1>The Law Says...</h1>
                <p>An Arizona Law Quick Reference</p>
            </header>
            <main>
                {/* Law items will be listed here later */}
                <p>Welcome! Law content will be displayed here soon.</p>
            </main>
        </div>
    );
};

export default HomePage;