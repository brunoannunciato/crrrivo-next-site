import Head from 'next/head'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'
import Card from './components/Card'
import ColorCard from './components/ColorCard'


import './fyll.scss'
import Container from '../../components/Container'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

const colors = [
    {
      index: 1,
      title: "verde floresta",
      color: "#00534E",
      support: "principal"
    }, {
      index: 3,
      title: "azul oceano",
      color: "#203F72 ",
      support: "secundária"
    }, {
        index: 2,
        title: "marrom terra",
        color: "#C26A48",
        support: "secundária"
      }, {
      index: 4,
      title: "bege areia",
      color: "#FFE2D9",
      support: "apoio",
      borderColor: "#DDB2A6"
    }, {
      index: 5,
      title: "rosa flor",
      color: "#BC6282",
      support: "apoio"
    },
  ]

const Fyll = () => {
    return (
        <div className="fyll">
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
            <Header hideAt color='#FFFFFF' disableMixBlendMode/>
            <SubHeader color='#FFFFFF' projectName="Fyll"/>

            <Container>
                <div className="fyll__hero">
                    <Image
                        quality={100}
                        priority
                        src="/projects/fyll/hero.png"
                        width={1150}
                        height={815}
                    />
                </div>

                <div className="fyll__description-wrapper">

                    <p className="fyll__description">
                        Uma empresa sobre RH: relações humanas. Diferente de todas as outras, a Fyll surgiu, não para falar de recursos humanos, mas em relações. Veio da necessidade de sentir as pessoas, além de trazer um apoio e uma escuta ativa nos seus movimentos. Projeto de branding baseado em pessoas.
                    </p>

                    <div className="fyll__logo">
                        <Image
                            quality={100}
                            priority
                            src="/projects/fyll/logo.png"
                            width={540}
                            height={282}
                        />
                    </div>
                </div>

                <div className="fyll__cards-shelf">
                    <Card id="1"/>
                    <Card id="2"/>
                    <Card id="3"/>
                </div>

                <div className="fyll__player-wrapper">
                    <div className="fyll__player-row">
                        <div className="fyll__player">
                            <Image
                                quality={100}
                                priority
                                src="/projects/fyll/player-1.png"
                                width={410}
                                height={728}
                            />
                        </div>
                        
                        <div className="fyll__player">
                            <Image
                                quality={100}
                            priority
                                src="/projects/fyll/player-2.png"
                                width={410}
                                height={728}
                            />
                        </div>

                        <div className="fyll__player">
                            <Image
                                quality={100}
                            priority
                                src="/projects/fyll/player-3.png"
                                width={410}
                                height={728}
                            />
                        </div>
                    </div>
                </div>

                <div className="fyll__phone-wrapper">
                    <Parallax speed={20}>
                        <div className="fyll__phone">
                            <Image
                                quality={100}
                            priority
                                src="/projects/fyll/phone-transparent.png"
                                width={363}
                                height={584}
                            />
                        </div>
                    </Parallax>
                </div>
                
                <Parallax speed={60} className="fyll__parallax">
                    <div className="fyll__color-grid">
                        {
                            colors.map(color => {
                            return <ColorCard key={color.index} {...color}/>
                            })
                        }
                    </div>
                </Parallax>
            </Container>

            <div className="fyll__land-wrapper">
                <Container className="fyll__land-container">
                    <div className="fyll__k">
                        <Image
                            quality={100}
                            priority
                            src="/projects/fyll/k.png"
                            width={441}
                            height={594}
                        />
                    </div>

                    <p className="fyll__land-text">
                        simplificando <br />
                        as relações <br />
                        entre pessoas.
                    </p>
                </Container>
            </div>

            <Container>
                <div className="fyll__logo-bg">
                    <Image
                        quality={100}
                        priority
                        src="/projects/fyll/logo-bg.png"
                        width={1758}
                        height={988}
                    />
                </div>

                <div className="fyll__logo-guide">
                    <Image
                        quality={100}
                        priority
                        src="/projects/fyll/logo-guide.png"
                        width={793}
                        height={390}
                    />
                </div>
            </Container>


            <Footer color='#FFFFFF' backgroundColor='#b45e3c'/>
        </div>
    )
}

export default Fyll