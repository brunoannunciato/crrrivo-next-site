import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion'
import Router from 'next/router';
import OnImagesLoaded from 'react-on-images-loaded';

import '../styles/index.scss';

function MyApp({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true)

  Router.onRouteChangeStart = () => {
    console.log("carregando")
    setIsLoading(true)
  } 

  Router.onRouteChangeComplete = () => {
    console.log("CARREGADO")
    setIsLoading(false)
  }

  return (
    <>
      <OnImagesLoaded onLoaded={() => {setIsLoading(false)}}>
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <ParallaxProvider>
            <Component {...pageProps} key={router.asPath}/>
          </ParallaxProvider>
        </AnimatePresence>
      </OnImagesLoaded>

      {
        isLoading &&
        <div className="loading" style={{backgroundColor: 'red', width: '100vw', height: '100vw', position: 'absolute', left: 0, top: 0}}>
          CARREGANDO
        </div>
      }
    </>
  );
}

export default MyApp;
