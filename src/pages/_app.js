// src/pages/_app.js

// Import the global styles from the src directory
import '../index.css';

// This is the App component that wraps all your pages
function MyApp({ Component, pageProps }) {
  return (
    // This is the new structure that creates the phone visual
    <div className="phone-container">
      <div className="screen">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;