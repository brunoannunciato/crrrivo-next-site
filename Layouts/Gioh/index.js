import Head from 'next/head'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'


import './gioh.scss'
import Container from '../../components/Container'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

const Gioh = ({data}) => {
    const theme = data.theme[0] && data.theme[0]
    
    return (
        <div className="gioh" style={{backgroundColor: theme?.backgroundColor}}>
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
            <SubHeader color={theme?.headerColor} projectName="Gióh Acupuntura"/>

            <Container>
                <div className="gioh__hero-wrapper">
                    <div className="gioh__hero">
                        <Parallax speed={-20}>
                            <Image
                                src={`/${theme?.hero}`}
                                width={1764}
                                height={1224}
                                quality={100}
                                priority
                            />
                        </Parallax>
                    </div>
                </div>

                <div className="gioh__description-wrapper">
                    <div className="gioh__logo">
                        <Image
                            src={`/${theme?.descriptionImage}`}
                            width={571}
                            height={310}
                            quality={100}
                            priority
                        />
                    </div>
                    
                    <p className="gioh__description" style={{color: theme?.descriptionColor}} dangerouslySetInnerHTML={{__html: theme?.description}}/>
                </div>
            </Container>

            <div className="gioh__color-grid">
                <div className="gioh__color" style={{backgroundImage: theme?.color1Image}}>
                    <p className="gioh__color-text" style={{color: theme?.color1TextColor}}>
                        {theme?.color1Hex}
                    </p>
                </div>

                <div className="gioh__color" style={{backgroundColor: theme?.color2background}}>
                    <p className="gioh__color-text" style={{color: theme?.color2TextColor}}>
                        {theme?.color2Hex}
                    </p>
                </div>

                <div className="gioh__color" style={{backgroundColor: theme?.color3background}}>
                    <p className="gioh__color-text" style={{color: theme?.color3TextColor}}>
                        {theme?.color3Hex}
                    </p>
                </div>
            </div>


            <div className="gioh__oooh-wrapper">
                <Container className="gioh__oooh">
                    <div className="gioh__oooh-image">
                        <Image
                            src={`/${theme?.centralImage}`}
                            width={1307}
                            height={192}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="gioh__oooh-text-wrapper">
                        <p className="gioh__oooh-text" style={{color: theme?.centralTextColor}}>
                            <div dangerouslySetInnerHTML={{__html: theme?.centralText}}/>
                        <span className="gioh__at" dangerouslySetInnerHTML={{__html: theme?.centralAt}}/>
                        </p>
                    </div>
                </Container>
            </div>

            <Container>
            <div className="gioh__sign">
                <Parallax speed={-20}>
                    <Image
                        src={`/${theme?.parallax1}`}
                        width={1760}
                        height={990}
                        quality={100}
                        priority
                    />

                </Parallax>
            </div>

            <div className="gioh__candle">
                <Parallax speed={-20}>
                    <Image
                        src={`/${theme?.parallax2}`}
                        width={1760}
                        height={990}
                        quality={100}
                        priority
                    />
                </Parallax>
            </div>

            <div className="gioh__grid">
                <div className="gioh__grid-wrapper">
                    <div className="gioh__card">
                        <Image
                            src={`/${theme?.card1}`}
                            width={358}
                            height={358}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="gioh__card">
                        <Image
                            src={`/${theme?.card2}`}
                            width={358}
                            height={358}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="gioh__card">
                        <Image
                            src={`/${theme?.card3}`}
                            width={358}
                            height={358}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="gioh__card">
                        <Image
                            src={`/${theme?.card4}`}
                            width={358}
                            height={358}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="gioh__card">
                        <Image
                            src={`/${theme?.card5}`}
                            width={358}
                            height={358}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="gioh__card">
                        <Image
                            src={`/${theme?.card6}`}
                            width={358}
                            height={358}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="gioh__card">
                        <Image
                            src={`/${theme?.card7}`}
                            width={358}
                            height={358}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="gioh__card">
                        <Image
                            src={`/${theme?.card8}`}
                            width={358}
                            height={358}
                            quality={100}
                            priority
                        />
                    </div>
                    <div className="gioh__card">
                        <Image
                            src={`/${theme?.card9}`}
                            width={358}
                            height={358}
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="gioh__logo-grid">
                <Image
                    src={`/${theme?.imagePostCards}`}
                    width={830}
                    height={395}
                    quality={100}
                    priority
                />
            </div>

            <div className="gioh__footer">
                <p className="gioh__footer-text" style={{color: theme?.preFooterTextColor}} dangerouslySetInnerHTML={{__html: theme?.preFooterText}}/>
                <div className="gioh__logo-mini">
                    <Image
                        src={`/${theme?.imagePreFooter}`}
                        width={214}
                        height={69}
                        quality={100}
                        priority
                    />
                </div>
            </div>
            </Container>


            <Footer color={theme?.footerColor} backgroundColor={theme?.footerBackground}/>
        </div>
    )
}

export default Gioh