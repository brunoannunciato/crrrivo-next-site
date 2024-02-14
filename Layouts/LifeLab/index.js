import Head from 'next/head'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'


import './life-lab.scss'
import Container from '../../components/Container'

const Lifelab = () => {
    return (
        <div className="life-lab">
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
            <Header hideAt color='#FFFFFF' disableMixBlendMode/>
            <SubHeader color='#FFFFFF' projectName="LifeLab"/>

            <div className="life-lab__hero">
                <div className="life-lab__hero-logo">
                    <Image
                        src="/projects/lifelab/hero-logo.png"
                        width={653}
                        height={274}
                        priority
                    />
                </div>

                <div className="life-lab__hero-right">
                    <Image
                        src="/projects/lifelab/hero-right.png"
                        width={1117}
                        height={1072}
                        priority
                    />
                </div>
            </div>

            <Container>
                <div className="life-lab__description-wrapper">
                    <p className="life-lab__description">
                        <u>A Lifelab é uma lab de curadoria de conteúdo.</u> <br/>
                        O desafio era criar uma marca que desse “voz” às pessoas - por isso as aspas abertas, - que representam as experiências colaborativas dos que buscam crescimento individual e humano. 
                    </p>

                    <div className="life-lab__quote">
                        <Image
                            src="/projects/lifelab/quote.png"
                            width={195}
                            height={126}
                            priority
                        />
                    </div>
                </div>
            </Container>

            <div className="life-lab__plastic-wrapper">
                <Parallax speed={-20}>
                    <div className="life-lab__plastic">
                        <Image
                            src="/projects/lifelab/plastic.png"
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
                        src="/projects/lifelab/colors-title.png"
                        width={393}
                        height={112}
                        quality={100}
                        priority
                    />
                </div>

                <div className="life-lab__colors-life">
                    <div className="life-lab__colors-life-image">
                        <Image
                            src="/projects/lifelab/life-logo.png"
                            width={666}
                            height={375}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="life-lab__colors-description">
                        <p className="life-lab__colors-sup">
                            azul
                        </p>

                        <p className="life-lab__colors-hex">
                            #0047FD
                        </p>

                        <p className="life-lab__colors-desc">
                            contentamento, <br />
                            lealdade, paz, <br />
                            <span>tranquilidade</span>, calma, <br />
                            estabilidade, harmonia,<br />
                            unidade, conﬁança,<br />
                            verdade, segurança,<br />
                            ordem e tecnologia. <br />
                        </p>
                    </div>
                </div>

                <div className="life-lab__colors-lab">
                    <div className="life-lab__colors-lab-image">
                        <Image
                            src="/projects/lifelab/lab-logo.png"
                            width={672}
                            height={375}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="life-lab__colors-description">
                        <p className="life-lab__colors-sup">
                            laranja
                        </p>

                        <p className="life-lab__colors-hex">
                            #FF6400
                        </p>

                        <p className="life-lab__colors-desc">
                            humor, <span>energia, </span> <br />
                            equilíbrio, calor, <br />
                            entusiasmo, <br />
                            <span>vibração,</span> expansão,<br />
                            extravagância, <br />
                            excessivo e <br />
                            ﬂamejante
                        </p> 
                    </div> 
                </div>

                <div className="life-lab__colors-expo">
                    <div className="life-lab__colors-expo-image">
                        <Image
                            src="/projects/lifelab/expo.png"
                            width={111}
                            height={262}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="life-lab__colors-description">
                        <p className="life-lab__colors-sup">
                            black
                        </p>

                        <p className="life-lab__colors-hex">
                            #000000
                        </p>

                        <p className="life-lab__colors-desc">
                            poder, <br />
                            sofisticação, <br />
                            elegância, <br />
                            riqueza, mistério <br />
                            <span>profundidade </span>e <br />
                            estilo.
                        </p>
                    </div> 
                </div>
            </div>

            <Container>
                <div className="life-lab__stickers-wrapper">
                    <Parallax speed={-30}>
                        <div className="life-lab__stickers">
                            <Image
                                src="/projects/lifelab/stickers.png"
                                width={1763}
                                height={991}
                                quality={100}
                                priority
                            />
                        </div>
                    </Parallax>
                </div>
            </Container>


            <Footer color='#FFFFFF' backgroundColor='#103ae1'/>
        </div>
    )
}

export default Lifelab