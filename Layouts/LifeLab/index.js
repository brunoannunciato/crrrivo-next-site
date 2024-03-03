import Head from 'next/head'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'


import './life-lab.scss'
import Container from '../../components/Container'

const Lifelab = ({data}) => {
    const theme = data.theme[0]
    console.log(theme)
    return (
        <div className="life-lab" style={{backgroundColor: theme?.backgroundColor}}>
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
                rel="icon"                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
                />
            </Head>
            <Header hideAt color={theme?.headerColor} disableMixBlendMode/>
            <SubHeader color={theme?.headerColor} projectName="LifeLab"/>

            <div className="life-lab__hero">
                <div className="life-lab__hero-logo">
                    <Image
                        src={`/${theme?.heroLogo}`}
                        width={653}
                        height={274}
                        priority
                    />
                </div>

                <div className="life-lab__hero-right">
                    <Image
                        src={`/${theme?.hero}`}
                        width={1117}
                        height={1072}
                        priority
                    />
                </div>
            </div>

            <Container>
                <div className="life-lab__description-wrapper">
                    <p className="life-lab__description" dangerouslySetInnerHTML={{__html: theme?.description}} />

                    <div className="life-lab__quote">
                        <Image
                            src={`/${theme?.descriptionImage}`}
                            width={195}
                            height={126}
                            priority
                        />
                    </div>
                </div>
            </Container>

            <div className="life-lab__plastic-wrapper" style={{backgroundColor: theme?.parallaxBackground}}>
                <Parallax speed={-20}>
                    <div className="life-lab__plastic">
                        <Image
                            src={`/${theme?.parallaxImage}`}
                            width={1920}
                            height={1080}
                            priority
                        />
                    </div>
                </Parallax>
            </div>

            <Container>
                <div className="life-lab__outdoor">
                    <Image
                        src="/projects/lifelab/outdoor.png"
                        width={1760}
                        height={1060}
                        quality={100}
                        priority
                    />
                </div>
            </Container>

            <div className="life-lab__colors">
                <div className="life-lab__colors-title">
                    <Image
                        src={`/${theme?.colorGridTitle}`}
                        width={393}
                        height={112}
                        quality={100}
                        priority
                    />
                </div>

                <div className="life-lab__colors-life">
                    <div className="life-lab__colors-life-image">
                        <Image
                            src={`/${theme?.colorGridImage1}`}
                            width={666}
                            height={375}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="life-lab__colors-description">
                        <p className="life-lab__colors-sup">
                            {theme?.colorGridName1}
                        </p>

                        <p className="life-lab__colors-hex">
                            {theme?.colorGridHex1}
                        </p>

                        <p className="life-lab__colors-desc" dangerouslySetInnerHTML={{__html: theme?.colorGridDesc1}} />
                    </div>
                </div>

                <div className="life-lab__colors-lab" style={{background: theme?.colorGridHex2}}>
                    <div className="life-lab__colors-lab-image">
                        <Image
                            src={`/${theme?.colorGridImage2}`}
                            width={672}
                            height={375}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="life-lab__colors-description">
                        <p className="life-lab__colors-sup">
                            {theme?.colorGridName2}
                        </p>

                        <p className="life-lab__colors-hex">
                            {theme?.colorGridHex2}
                        </p>

                        <p className="life-lab__colors-desc" dangerouslySetInnerHTML={{__html: theme?.colorGridDesc2}} />
                    </div> 
                </div>

                <div className="life-lab__colors-expo" style={{background: theme?.colorGridHex3}}>
                    <div className="life-lab__colors-expo-image">
                        <Image
                            src={`/${theme?.colorGridImage3}`}
                            width={111}
                            height={262}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="life-lab__colors-description">
                        <p className="life-lab__colors-sup">
                        {theme?.colorGridName3}
                        </p>

                        <p className="life-lab__colors-hex">
                            {theme?.colorGridHex3}
                        </p>

                        <p className="life-lab__colors-desc" dangerouslySetInnerHTML={{__html: theme?.colorGridDesc3}} />
                    </div> 
                </div>
            </div>

            <Container>
                <div className="life-lab__stickers-wrapper">
                    <Parallax speed={-30}>
                        <div className="life-lab__stickers" style={{backgroundColor: theme?.finalParallaxBackground}}>
                            <Image
                                src={`/${theme?.imageParallaxFinal}`}
                                width={1763}
                                height={991}
                                quality={100}
                                priority
                            />
                        </div>
                    </Parallax>
                </div>
            </Container>


            <Footer color={theme?.footerColor} backgroundColor={theme?.footerBackground}/>
        </div>
    )
}

export default Lifelab