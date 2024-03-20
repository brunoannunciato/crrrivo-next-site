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



const Cafe = ({data}) => {
    const theme = data?.theme[0]
    console.log(theme)

    const colors = [
        {
            name: theme?.color1Name,
            r: theme?.color1r,
            g: theme?.color1g,
            b: theme?.color1b,
            color: theme?.color1textColor
        },  {
            name: theme?.color2Name,
            r: theme?.color2r,
            g: theme?.color2g,
            b: theme?.color2b,
            color: theme?.color2textColor
        },{
            name: theme?.color3Name,
            r: theme?.color3r,
            g: theme?.color3g,
            b: theme?.color3b,
            color: theme?.color3textColor
        }, {
            name: theme?.color4Name,
            r: theme?.color4r,
            g: theme?.color4g,
            b: theme?.color4b,
            color: theme?.color4textColor
        }, {
            name: theme?.color5Name,
            r: theme?.color5r,
            g: theme?.color5g,
            b: theme?.color5b,
            color: theme?.color5textColor
        }, {
            name: theme?.color6Name,
            r: theme?.color6r,
            g: theme?.color6g,
            b: theme?.color6b,
            color: theme?.color6textColor
        }, {
            name: theme?.color7Name,
            r: theme?.color7r,
            g: theme?.color7g,
            b: theme?.color7b,
            color: theme?.color7textColor
        }, {
            name: theme?.color8Name,
            r: theme?.color8r,
            g: theme?.color8g,
            b: theme?.color8b,
            color: theme?.color8textColor
        },
    ]

    return (
        <div className="cafe" style={{backgroundColor: theme?.backgroundColor}}>
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
            <SubHeader color={theme?.headerColor} projectName="Café na Cama"/>

            <Container>
                <div className="cafe__hero-wrapper" style={{backgroundColor: theme?.parallaxBg}}>
                    <div className="cafe__hero">
                        <Parallax speed={-80}>
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

                <div className="cafe__description-wrapper">
                    <div className="cafe__logo">
                        <ReactSVG
                            src={`/${theme?.descriptionImage}`}
                            width={558}
                            height={294}
                            quality={100}
                            priority
                        />
                    </div>
                    
                    <p className="cafe__description" style={{color: theme?.descriptionColor}} dangerouslySetInnerHTML={{__html: theme?.description}}/>
                </div>

                <div className="cafe__card-grid">
                    <div className="cafe__card">
                        <Image
                            src={`/${theme?.card1}`}
                            width={283}
                            height={448}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="cafe__card">
                        <Image
                            src={`/${theme?.card2}`}
                            width={283}
                            height={448}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="cafe__card">
                        <Image
                            src={`/${theme?.card3}`}
                            width={283}
                            height={448}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="cafe__card">
                        <Image
                            src={`/${theme?.card4}`}
                            width={283}
                            height={448}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="cafe__card">
                        <Image
                            src={`/${theme?.card5}`}
                            width={283}
                            height={448}
                            quality={100}
                            priority
                        />
                    </div>
                </div>

                <div className="cafe__jornal">
                    <Image
                        src={`/${theme?.middleImage}`}
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
                                return <Card key={color.name} icon={theme?.colorIcon} {...color} />
                            })
                        }
                    </div>

                    <Parallax speed={30}>
                        <div className="cafe__seal-shelf">
                            <div className="cafe__seal">
                                <Image
                                    src={`/${theme?.cardColor1}`}
                                    width={324}
                                    height={321}
                                    priority
                                />
                            </div>

                            <div className="cafe__seal">
                                <Image
                                    src={`/${theme?.cardColor2}`}
                                    width={324}
                                    height={321}
                                    priority
                                />
                            </div>

                            <div className="cafe__seal">
                                <Image
                                    src={`/${theme?.cardColor3}`}
                                    width={324}
                                    height={321}
                                    priority
                                />
                            </div>

                            <div className="cafe__seal">
                                <Image
                                    src={`/${theme?.cardColor4}`}
                                    width={324}
                                    height={321}
                                    priority
                                />
                            </div>

                            <div className="cafe__seal">
                                <Image
                                    src={`/${theme?.cardColor5}`}
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
                            src={`/${theme?.logosLeft}`}
                            width={431}
                            height={597}
                            priority
                        />
                    </div>

                    <div className="cafe__logo">
                        <Image
                            src={`/${theme?.logosRight}`}
                            width={774}
                            height={517}
                            priority
                        />
                    </div>
                </div>

                <div className="cafe__colors-footer" style={{background: `linear-gradient(90deg, ${theme?.colorPreFooter1} 0%, ${theme?.colorPreFooter1} 33%, ${theme?.colorPreFooter2} 33%, ${theme?.colorPreFooter2} 55%, ${theme?.colorPreFooter3} 55%, ${theme?.colorPreFooter3} 77%, ${theme?.colorPreFooter4} 77%, ${theme?.colorPreFooter4} 100%)`}}/>
            </Container>


            <Footer color={theme?.footerColor} backgroundColor={theme?.footerBackground}/>
        </div>
    )
}

export default Cafe