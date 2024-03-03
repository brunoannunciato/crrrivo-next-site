import Head from 'next/head'
import Marquee from "react-fast-marquee";

import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'


import './gol.scss'
import Image from 'next/image'
import Container from '../../components/Container'
import { Parallax } from 'react-scroll-parallax';

const Gol = ({data}) => {
    const theme = data.theme[0]

    return (
        <div className="gol" style={{backgroundColor: theme?.backgroundColor}}>
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
        <Header hideAt color={theme?.headerColor} disableMixBlendMode/>
        <SubHeader color={theme?.headerColor} projectName="Gol Smiles"/>

        <div className="gol__hero">
            <Image
                quality={100}
                priority
                src={`/${theme?.hero}`}
                width={1920}
                height={1072}
            />
        </div>

        <Container>
        <div className="gol__stamp">
            <Image
                quality={100}
                priority
                src={`/${theme?.logo}`}
                width={340}
                height={140}
            />
        </div>

        <p className="gol__description" dangerouslySetInnerHTML={{__html: theme?.description }}/>

        <div className="gol__cards">
            <div className="gol__card">
                <Image
                    quality={100}
                    priority
                    src={`/${theme?.card1}`}
                    width={844}
                    height={475}
                />
            </div>

            <div className="gol__card">
                <Image
                    quality={100}
                    priority
                    src={`/${theme?.card2}`}
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
                    src={`/${theme?.poster}`}
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
                    src={`/${theme?.postPoster}`}
                    width={1760}
                    height={990}
                />
            </div>
            <div className="gol__products-wrapper">
                <div className="gol__card" style={{background: theme?.parallax1Background}}>
                    <Parallax speed={-13}>
                        <Image
                            quality={100}
                            priority
                            src={`/${theme?.parallax1}`}
                            width={391}
                            height={638}
                        />
                    </Parallax>
                </div>

                <div className="gol__bag" style={{background: theme?.parallax2Background}}>
                    <Parallax speed={13}>
                        <div className="gol__bag-wrapper">
                            <Image
                                quality={100}
                                priority
                                src={`/${theme?.parallax2}`}
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
                        src={`/${theme?.fullImage}`}
                        width={1760}
                        height={990}
                    />
                </div>
        </Container>

        <Footer color={theme?.footerColor} backgroundColor={theme?.footerBackground}/>
        </div>
    )
}

export default Gol