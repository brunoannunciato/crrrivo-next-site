import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion'

import '../styles/index.scss';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <ParallaxProvider>
        <Component {...pageProps} key={router.asPath}/>
      </ParallaxProvider>
    </AnimatePresence>
  );
}

export default MyApp;
