// src/pages/_app.js

// Import the global styles
import '../styles/globals.css';

// This is the App component that wraps all your pages
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
