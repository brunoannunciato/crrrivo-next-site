import Head from 'next/head';
import Header from '../../../components/Header';
import SubHeader from '../components/SubHeader';
import { Parallax } from 'react-scroll-parallax';

import './leo.scss';
import Image from 'next/image';
import Container from '../../../components/Container';
import ColorCard from './components/ColorCard';

export default function Leo() {
  const colors = [
    {
      index: 1,
      title: "Verde Leo",
      color: "#204F32",
      support: "principal"
    }, {
      index: 2,
      title: "Verde",
      color: "#009A31",
      support: "secundária"
    }, {
      index: 3,
      title: "Amarelo",
      color: "#E7B228",
      support: "secundária"
    }, {
      index: 4,
      title: "Azul",
      color: "#0191C2",
      support: "apoio"
    }, {
      index: 5,
      title: "Rosa",
      color: "#8C1278",
      support: "apoio"
    },
  ]

  return (
    <div className="leo">
      <Head>
        <title>Crrrivo</title>
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
      <Header hideAt color='#F4E84F' disableMixBlendMode/>
      <SubHeader color='#F4E84F' projectName="Leo Madeiras"/>


      <Container>
        <div className="leo__hero">
          <Image
            src="/projects/leo/hero.png"
            width={1764}
            height={1224}
          />
        </div>

        <Parallax speed={80}>
          <div className="leo__notebook">
            <Image
              src="/projects/leo/notebook.png"
              width={1852}
              height={1036}
            />
          </div>
        </Parallax>

        <div className="leo__description-wrapper">
          <p className="leo__description">
            A Crrrivo e a Leo tem uma parceria sólida, onde criamos campanhas institucionais, além de peças de e-commerce e redes sociais. É um projeto 360º, onde trabalhamos em várias frentes. O resultado dessa parceria é que sempre estamos batendo recorde de vendas e resultados incríveis. 
          </p>

          <Image
            src="/projects/leo/logo.png"
            width={434}
            height={253}
          />
        </div>
      </Container>

      <span className="leo__bus-stop" />

      <Parallax speed={80}>
        <div className="leo__color-grid">
          {
            colors.map(color => {
              return <ColorCard {...color}/>
            })
          }
        </div>
      </Parallax>

      <Container>
          <div className="leo__product-grid">
            <Image
              src="/projects/leo/card-1.png"
              width={416}
              height={416}
            />

            <Image
              src="/projects/leo/card-2.png"
              width={416}
              height={416}
            />
          </div>

      </Container>

      <Parallax speed={80}>
        <div className="leo__bag">
            <Image
              src="/projects/leo/bag.png"
              width={2070}
              height={1380}
            />
        </div>
      </Parallax>
    </div>
  );
}
