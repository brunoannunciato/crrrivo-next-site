import Container from '../../components/Container'
import Head from 'next/head'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'
import Card from './components/Card'
import { Parallax } from 'react-scroll-parallax'


import './cafe.scss'
import Image from 'next/image'
import { ReactSVG } from 'react-svg'

const colors = [
    {
        name: "cinza",
        r: 234,
        g: 233,
        b: 229,
        color: "#000000"
    },  {
        name: "preto",
        r: 33,
        g: 33,
        b: 33,
        color: "#ffffff"
    },{
        name: "terra",
        r: 192,
        g: 90,
        b: 56,
        color: "#ffffff"
    }, {
        name: "verde",
        r: 77,
        g: 104,
        b: 71,
        color: "#ffffff"
    }, {
        name: "amarelo",
        r: 242,
        g: 164,
        b: 87,
        color: "#ffffff"
    }, {
        name: "azul",
        r: 32,
        g: 58,
        b: 122,
        color: "#ffffff"
    }, {
        name: "verde",
        r:  166,
        g: 209,
        b: 194,
        color: "#ffffff"
    }, {
        name: "rosa",
        r: 237,
        g: 164,
        b: 191,
        color: "#ffffff"
    },
]

const Cafe = () => {
    return (
        <div className="cafe">
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
            <Header hideAt color='#000000' disableMixBlendMode/>
            <SubHeader color='#000000' projectName="Café na Cama"/>

            <Container>
                <div className="cafe__hero-wrapper">
                    <div className="cafe__hero">
                        <Parallax speed={-80}>
                            <Image
                                src="/projects/cafe/hero.png"
                                width={1764}
                                height={1224}
                                quality={100}
                                priority
                            />
                        </Parallax>
                    </div>
                </div>

                <div className="cafe__description-wrapper">
                    <div className="cafe__logo">
                        <ReactSVG
                            src="/projects/cafe/logo.svg"
                            width={558}
                            height={294}
                            quality={100}
                            priority
                        />
                    </div>
                    
                    <p className="cafe__description">
                        <u>Branding para o Café na Cama.</u> A ideia é posicionar a marca como referência para clientes de classe A. Busca proporcionar uma experiência de hotel de luxo em casa.
                    </p>
                </div>

                <div className="cafe__card-grid">
                    <div className="cafe__card">
                        <Image
                            src="/projects/cafe/card-1.png"
                            width={283}
                            height={448}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="cafe__card">
                        <Image
                            src="/projects/cafe/card-2.png"
                            width={283}
                            height={448}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="cafe__card">
                        <Image
                            src="/projects/cafe/card-3.png"
                            width={283}
                            height={448}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="cafe__card">
                        <Image
                            src="/projects/cafe/card-4.png"
                            width={283}
                            height={448}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="cafe__card">
                        <Image
                            src="/projects/cafe/card-5.png"
                            width={283}
                            height={448}
                            quality={100}
                            priority
                        />
                    </div>
                </div>

                <div className="cafe__jornal">
                    <Image
                        src="/projects/cafe/jornal.png"
                        width={1760} 
                        height={1232}
                        quality={100}
                        priority 
                    />
                </div>

                <div className="cafe__grid-wrapper">
                    <div className="cafe__color-grid">
                        {
                            colors.map((color) => {
                                return <Card key={color.name} {...color} />
                            })
                        }
                    </div>

                    <Parallax speed={30}>
                        <div className="cafe__seal-shelf">
                            <div className="cafe__seal">
                                <Image
                                    src="/projects/cafe/seal-1.png"
                                    width={324}
                                    height={321}
                                    priority
                                />
                            </div>

                            <div className="cafe__seal">
                                <Image
                                    src="/projects/cafe/seal-2.png"
                                    width={324}
                                    height={321}
                                    priority
                                />
                            </div>

                            <div className="cafe__seal">
                                <Image
                                    src="/projects/cafe/seal-3.png"
                                    width={324}
                                    height={321}
                                    priority
                                />
                            </div>

                            <div className="cafe__seal">
                                <Image
                                    src="/projects/cafe/seal-4.png"
                                    width={324}
                                    height={321}
                                    priority
                                />
                            </div>

                            <div className="cafe__seal">
                                <Image
                                    src="/projects/cafe/seal-5.png"
                                    width={324}
                                    height={321}
                                    priority
                                />
                            </div>

                        </div>
                    </Parallax>
                </div>

                <div className="cafe__logos">
                    <div className="cafe__logo">
                        <Image
                            src="/projects/cafe/logos-left.png"
                            width={431}
                            height={597}
                            priority
                        />
                    </div>

                    <div className="cafe__logo">
                        <Image
                            src="/projects/cafe/logos-right.png"
                            width={774}
                            height={517}
                            priority
                        />
                    </div>
                </div>

                <div className="cafe__colors-footer" />
            </Container>


            <Footer color='#000000' backgroundColor='#dfddd7'/>
        </div>
    )
}

export default Cafe