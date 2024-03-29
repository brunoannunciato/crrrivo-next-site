import Head from 'next/head'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'
import Card from './components/Color'


import './ana.scss'
import Container from '../../components/Container'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

const Ana = ({data}) => {
    const theme = data.theme[0] && data.theme[0]

    const colors = [
        {
            color: theme?.colorHex1text,
            backgroundColor: theme?.colorHex1
        },
        {
            color: theme?.colorHex1text,
            backgroundColor: theme?.colorHex2
        },
        {
            color: theme?.colorHex1text,
            backgroundColor: theme?.colorHex3
        },
        {
            color: theme?.colorHex1text,
            backgroundColor: theme?.colorHex4
        },
        {
            color: theme?.colorHex1text,
            backgroundColor: theme?.colorHex5
        },
        {
            color: theme?.colorHex1text,
            backgroundColor: theme?.colorHex6
        },
        {
            color: theme?.colorHex1text,
            backgroundColor: theme?.colorHex7
        },
        {
            color: theme?.colorHex1text,
            backgroundColor: theme?.colorHex8
        }
    ]

    return (
        <div className="ana" style={{backgroundColor: theme?.backgroundColor}}>
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
            <SubHeader color={theme?.headerColor} projectName="Ana Hirata "/>

            <div className="ana__hero" style={{backgroundImage: `url('/${theme?.hero}')`}}>
                <Container className="ana__hero-container">
                    <p className="ana__description" style={{color: theme?.descriptionColor}} dangerouslySetInnerHTML={{__html: theme?.description}}/>
                </Container>
            </div>

            <Container className="ana__container">
                <div className="ana__portifolio-1">
                    <Image
                        src={`/${theme?.postHero1}`}
                        width={273}
                        height={99}
                        quality={100}
                        priority
                    />
                </div>

                <div className="ana__portifolio-2">
                    <Image
                        src={`/${theme?.postHero2}`}
                        width={933}
                        height={539}
                        quality={100}
                        priority
                    />
                </div>

                <div className="ana__portifolio-3">
                    <Image
                        src={`/${theme?.postHero3}`}
                        width={296}
                        height={170}
                        quality={100}
                        priority
                    />
                </div>

                <div className="ana__poster-1-wrapper" style={{backgroundColor: theme?.parallaxBackground1}}>
                    <div className="ana__poster-1">
                        <Parallax speed={20}>
                            <Image
                                src={`/${theme?.parallaxImage1}`}
                                width={1280}
                                height={1263}
                                quality={100}
                                priority
                            />
                        </Parallax>
                    </div>

                    <div className="ana__knife">
                        <Image
                            src={`/${theme?.parallaxAcessory1}`}
                            width={862}
                            height={233}
                            quality={100}
                            priority
                        />
                    </div>
                </div>
                </Container>
                <div className="ana__second-part" style={{backgroundColor: theme?.backgroundColor2}}>
                    <Container className="ana__container">
                    <div className="ana__poster-2-wrapper" style={{backgroundColor: theme?.parallaxBackground2}}>
                        <div className="ana__poster-2">
                            <Parallax speed={-20}>
                                <Image
                                    src={`/${theme?.parallaxImage2}`}
                                    width={1280}
                                    height={1260}
                                    quality={100}
                                    priority
                                />
                            </Parallax>
                        </div>

                        <div className="ana__bread">
                        <Image
                            src={`/${theme?.parallaxAcessory2}`}
                            width={318}
                            height={124}
                            quality={100}
                            priority
                        />
                    </div>
                    </div>

                    <div className="ana__color-grid">
                        {
                            colors.map((color) => {
                                return <Card key={color.backgroundColor} {...color}/>
                            })
                        }
                    </div>
                </Container>

                <div className="ana__variants">
                    <div className="ana__variants-content">
                        <Image
                            src={`/${theme?.logoGrid}`}
                            width={1234}
                            height={611}
                            quality={100}
                            priority
                        />
                    </div>
                </div>

                <div className="ana__phone">
                    <Image
                        src={`/${theme?.preFooterImage}`}
                        width={1722}
                        height={968}
                        quality={100}
                        priority
                    />
                </div>
            </div>
               


            <Footer color={theme?.footerColor} backgroundColor={theme?.footerBackground} />
        </div>
    )
}

export default Ana