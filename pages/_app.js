import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion'
import Router from 'next/router';

import '../styles/index.scss';

function MyApp({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(false)

  Router.onRouteChangeStart = () => {
    console.log("carregando")
    setIsLoading(true)
  } 

  Router.onRouteChangeComplete = () => {
    console.log("CARREGADO")
    setIsLoading(false)
  }

  return (
    isLoading ? <>CARREGANDO</> :
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <ParallaxProvider>
        <Component {...pageProps} key={router.asPath}/>
      </ParallaxProvider>
    </AnimatePresence>
  );
}

export default MyApp;
