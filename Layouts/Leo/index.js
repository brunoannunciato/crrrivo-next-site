import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import SubHeader from '../../components/SubHeader';
import Container from '../../components/Container';
import ColorCard from './components/ColorCard';

import './leo.scss';

export default function Leo({data}) {
  const theme = data.theme[0] && data.theme[0]

  const colors = [
    {
      index: 1,
      title: theme?.colorName1,
      color: theme?.color1,
      support: theme?.colorRole1,
      colorText: theme?.colorText1
    }, {
      index: 2,
      title: theme?.colorName2,
      color: theme?.color2,
      support: theme?.colorRole2,
      colorText: theme?.colorText2
    }, {
      index: 3,
      title: theme?.colorName3,
      color: theme?.color3,
      support: theme?.colorRole3,
      colorText: theme?.colorText3
    }, {
      index: 4,
      title: theme?.colorName4,
      color: theme?.color4,
      support: theme?.colorRole4,
      colorText: theme?.colorText4
    }, {
      index: 5,
      title: theme?.colorName5,
      color: theme?.color5,
      support: theme?.colorRole5,
      colorText: theme?.colorText5
    },
  ]

  return (
    <div className="leo" style={{backgroundColor: theme?.backgroundColor }}>
      <Head>
        <title>Crivo</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Header hideAt color={theme?.headerColor} disableMixBlendMode/>
      <SubHeader color={theme?.headerColor} projectName="Leo Madeiras"/>


      <Container>
        <div className="leo__hero">
          <Image
            src={`/${theme?.hero}`}
            width={1764}
            height={1224}
            quality={100}
            priority
          />
        </div>
 
        <Parallax speed={80}>
          <div className="leo__notebook">
            <Image
              src={`/${theme?.parallaxImage}`}
              width={1852}
              height={1036}
              quality={100}
            />
          </div>
        </Parallax>

        <div className="leo__description-wrapper">
          <p className="leo__description" dangerouslySetInnerHTML={{__html: theme?.description}}/>
        </div> 
      </Container>

      <span className="leo__bus-stop" style={{backgroundImage: `url(/${theme?.fullImage})`}}/>

      <Parallax speed={80}>
        <div className="leo__color-grid">
          {
            colors.map(color => {
              return <ColorCard key={color.index} {...color}/>
            })
          }
        </div>
      </Parallax>
      <Container>
          <div className="leo__product-grid" style={{backgroundImage: `url(/${theme?.card3})`}}>
            <Image
              src={`/${theme?.card1}`}
              width={416}
              height={416}
              quality={100}
              priority
            />

            <Image
              src={`/${theme?.card2}`}
              width={416}
              height={416}
              quality={100}
              priority
            />
          </div>

      </Container>

      <Parallax speed={80}>
        <div className="leo__bag">
            <Image
              src={`/${theme?.cardParallax}`}
              width={2070}
              height={1380}
              quality={100}
              priority
            />
        </div>
      </Parallax>

      <Footer color={theme?.footerColor} backgroundColor={theme?.footerBackground}/>
    </div>
  );
}
