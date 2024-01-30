import Head from 'next/head'
import Marquee from "react-fast-marquee";

import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'


import './gol.scss'
import Image from 'next/image'
import Container from '../../components/Container'
import { Parallax } from 'react-scroll-parallax';

const Gol = () => {
    return (
        <div className="gol">
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
        <SubHeader color='#FFFFFF' projectName="Gol Smiles"/>

        <div className="gol__hero">
            <Image
                quality={100}
                priority
                src="/projects/gol/hero.png"
                width={1920}
                height={1072}
            />
        </div>

        <Container>
        <div className="gol__stamp">
            <Image
                quality={100}
                priority
                src="/projects/gol/stamp.png"
                width={340}
                height={140}
            />
        </div>

        <p className="gol__description">
            <u>Campanha de endomarketing para a Gol Smiles.</u>
            Um evento anual para os parceiros e colaboradores, que foi criado com o intuito de abrir portas para o próximo destino: a inovação.
        </p>

        <div className="gol__cards">
            <div className="gol__card">
                <Image
                    quality={100}
                    priority
                    src="/projects/gol/card-1.png"
                    width={844}
                    height={475}
                />
            </div>

            <div className="gol__card">
                <Image
                    quality={100}
                    priority
                    src="/projects/gol/card-2.png"
                    width={844}
                    height={475}
                />
            </div>
        </div>
        </Container>

        <Marquee autoFill className="gol__posters">
            <div className="gol__poster">
                <Image
                    quality={100}
                    priority
                    src="/projects/gol/poster.png"
                    width={583}
                    height={806}
                />
            </div>
        </Marquee>

        <Container>
            <div className="gol__outdoor">
                <Image
                    quality={100}
                    priority
                    src="/projects/gol/outdoor.png"
                    width={1760}
                    height={990}
                />
            </div>
            <div className="gol__products-wrapper">
                <div className="gol__card">
                    <Parallax speed={-13}>
                        <Image
                            quality={100}
                            priority
                            src="/projects/gol/card.png"
                            width={391}
                            height={638}
                        />
                    </Parallax>
                </div>

                <div className="gol__bag">
                    <Parallax speed={13}>
                        <div className="gol__bag-wrapper">
                            <Image
                                quality={100}
                                priority
                                src="/projects/gol/bag.png"
                                width={1280}
                                height={719}
                            />
                        </div>
                    </Parallax>
                </div>
            </div>

            <div className="gol__notebook">
                    <Image
                        quality={100}
                        priority
                        src="/projects/gol/notebook.png"
                        width={1760}
                        height={990}
                    />
                </div>
        </Container>

        <Footer color='#FFFFFF' backgroundColor='#6F6F6F'/>
        </div>
    )
}

export default Gol