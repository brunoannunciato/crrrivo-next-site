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


const Fyll = ({data}) => {
    const theme = data?.theme[0]

    const colors = [
        {
          index: 1,
          title: theme?.colorName1,
          color: theme?.color1,
          support: theme?.colorRole1
        }, {
          index: 3,
          title: theme?.colorName2,
          color: theme?.color2,
          support: theme?.colorRole2
        }, {
            index: 2,
            title: theme?.colorName3,
            color: theme?.color3,
            support: theme?.colorRole3
          }, {
          index: 4,
          title: theme?.colorName4,
          color: theme?.color4,
          support: theme?.colorRole4,
          borderColor: "#DDB2A6"
        }, {
          index: 5,
          title: theme?.colorName5,
          color: theme?.color5,
          support: theme?.colorRole5
        },
      ]
      
    return (
        <div className="fyll" style={{backgroundColor: theme?.backgroundColor}}>
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
            <SubHeader color={theme?.headerColor} projectName="Fyll"/>

            <Container>
                <div className="fyll__hero">
                    <Image
                        quality={100}
                        priority
                        src={`/${theme?.hero}`}
                        width={1150}
                        height={815}
                    />
                </div>

                <div className="fyll__description-wrapper">

                    <p className="fyll__description" style={{color: theme?.descriptionColor}} dangerouslySetInnerHTML={{__html: theme?.description}}/>

                    <div className="fyll__logo">
                        <Image
                            quality={100}
                            priority
                            src={`/${theme?.descriptionImage}`}
                            width={540}
                            height={282}
                        />
                    </div>
                </div>

                <div className="fyll__cards-shelf">
                    <Card theme={theme} id="1"/>
                    <Card theme={theme} id="2"/>
                    <Card theme={theme} id="3"/>
                </div>

                <div className="fyll__player-wrapper" style={{backgroundColor: theme?.screenBackground}}>
                    <div className="fyll__player-row">
                        <div className="fyll__player">
                            <Image
                                quality={100}
                                priority
                                src={`/${theme?.screen1}`}
                                width={410}
                                height={728}
                            />
                        </div>
                        
                        <div className="fyll__player">
                            <Image
                                quality={100}
                            priority
                            src={`/${theme?.screen2}`}
                                width={410}
                                height={728}
                            />
                        </div>

                        <div className="fyll__player">
                            <Image
                                quality={100}
                            priority
                            src={`/${theme?.screen3}`}
                                width={410}
                                height={728}
                            />
                        </div>
                    </div>
                </div>

                <div className="fyll__phone-wrapper" style={{backgroundColor: theme?.parallaxBackground}}>
                    <Parallax speed={20}>
                        <div className="fyll__phone">
                            <Image
                                quality={100}
                                priority
                                src={`/${theme?.parallaxImage}`}
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
                            return <ColorCard  key={color.index} {...color}/>
                            })
                        }
                    </div>
                </Parallax>
            </Container>

            <div className="fyll__land-wrapper" style={{backgroundImage: theme?.backgroundImage}}>
                <Container className="fyll__land-container">
                    <div className="fyll__k">
                        <Image
                            quality={100}
                            priority
                            src={`/${theme?.backgroundLogo}`}
                            width={441}
                            height={594}
                        />
                    </div>

                    <p className="fyll__land-text" style={{color: theme?.rightTextColor}} dangerouslySetInnerHTML={{__html: theme?.rightText}}/>
                </Container>
            </div>

            <Container>
                <div className="fyll__logo-bg">
                    <Image
                        quality={100}
                        priority
                        src={`/${theme?.postImage}`}
                        width={1758}
                        height={988}
                    />
                </div>

                <div className="fyll__logo-guide">
                    <Image
                        quality={100}
                        priority
                        src={`/${theme?.preImage}`}
                        width={793}
                        height={390}
                    />
                </div>
            </Container>


            <Footer color={theme?.footerColor} backgroundColor={theme?.footerBackground} />
        </div>
    )
}

export default Fyll