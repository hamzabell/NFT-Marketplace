import '../styles/globals.css';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { Navbar, Footer } from './components';

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/3a253c3484.js" crossOrigin="anonymous" />
  </ThemeProvider>
);

export default App;
