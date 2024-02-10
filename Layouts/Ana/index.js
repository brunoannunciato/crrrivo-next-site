import Head from 'next/head'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'
import Card from './components/Color'


import './ana.scss'
import Container from '../../components/Container'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

const colors = [
    {
        color: "#F2F2F2",
        backgroundColor: "#000000"
    },
    {
        color: "#000000",
        backgroundColor: "#EAEAEA"
    },
    {
        color: "#F2F2F2",
        backgroundColor: "#0441AD"
    },
    {
        color: "#F2F2F2",
        backgroundColor: "#10AEC4"
    },
    {
        color: "#F2F2F2",
        backgroundColor: "#760F44"
    },
    {
        color: "#F2F2F2",
        backgroundColor: "#C00B53"
    },
    {
        color: "#F2F2F2",
        backgroundColor: "#EA6D80"
    },
    {
        color: "#F2F2F2",
        backgroundColor: "#FBBB8A"
    }
]

const Gol = () => {
    return (
        <div className="ana">
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
            <SubHeader color='#000000' projectName="Ana Hirata "/>

            <div className="ana__hero">
                <Container className="ana__hero-container">
                    <p className="ana__description">
                        <u>Branding para a Ana Hirata.</u><br/>
                        Para este projeto, usamos como premissa, uma massa fermentando. a primeira letra mais light e a última mais bold, passando a sensação de uma massa crescendo, como em um processo de fermentação natural. além de trazer uma tipologia desenhada especialmente para a chef. 
                    </p>
                </Container>
            </div>

            <Container className="ana__container">
                <div className="ana__portifolio-1">
                    <Image
                        src="/projects/ana/portifolio-1.png"
                        width={273}
                        height={99}
                        quality={100}
                        priority
                    />
                </div>

                <div className="ana__portifolio-2">
                    <Image
                        src="/projects/ana/portifolio-2.png"
                        width={933}
                        height={539}
                        quality={100}
                        priority
                    />
                </div>

                <div className="ana__portifolio-3">
                    <Image
                        src="/projects/ana/portifolio-3.png"
                        width={296}
                        height={170}
                        quality={100}
                        priority
                    />
                </div>

                <div className="ana__poster-1-wrapper">
                        <div className="ana__poster-1">
                            <Parallax speed={20}>
                                <Image
                                    src="/projects/ana/poster.png"
                                    width={1280}
                                    height={1263}
                                    quality={100}
                                    priority
                                />
                            </Parallax>
                        </div>
                </div>
                </Container>
                <div className="ana__second-part">
                    <Container className="ana__container">
                    <div className="ana__poster-2-wrapper">
                        <div className="ana__poster-2">
                            <Parallax speed={-20}>
                                <Image
                                    src="/projects/ana/poster-2.png"
                                    width={1280}
                                    height={1260}
                                    quality={100}
                                    priority
                                />
                            </Parallax>
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
                            src="/projects/ana/variants.png"
                            width={1234}
                            height={611}
                            quality={100}
                            priority
                        />
                    </div>
                </div>

                <div className="ana__phone">
                    <Image
                        src="/projects/ana/phone.png"
                        width={1722}
                        height={968}
                        quality={100}
                        priority
                    />
                </div>
            </div>
               


            <Footer color='#000000 ' backgroundColor='#f2f2f2'/>
        </div>
    )
}

export default Gol