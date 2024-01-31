import Head from 'next/head'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'


import './gioh.scss'
import Container from '../../components/Container'
import Image from 'next/image'

const Gol = () => {
    return (
        <div className="gioh">
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
            <Header hideAt color='#211C18' disableMixBlendMode/>
            <SubHeader color='#211C18' projectName="Gióh Acupuntura"/>

            <Container>
                <div className="gioh__hero">
                    <Image
                        src="/projects/gioh/hero.png"
                        width={1764}
                        height={1224}
                        quality={100}
                        priority
                    />
                </div>

                <div className="gioh__description-wrapper">
                    <div className="gioh__logo">
                        <Image
                            src="/projects/gioh/logo.png"
                            width={571}
                            height={310}
                            quality={100}
                            priority
                        />
                    </div>
                    
                    <p className="gioh__description">
                        <u>Gióh é um projeto que surgiu para ressignificar o mercado de acupuntura no Brasil.</u> Andando totalmente na contramão do setor, inovando em design, gestão e com foco em bem estar. A marca busca originalidade, além da qualidade do serviço.
                    </p>
                </div>
            </Container>

            <div className="gioh__color-grid">
                <div className="gioh__color">
                    <p className="gioh__color-text">
                        #C19D85
                    </p>
                </div>

                <div className="gioh__color">
                    <p className="gioh__color-text">
                        #FFDCC5
                    </p>
                </div>

                <div className="gioh__color">
                    <p className="gioh__color-text">
                        #211C18
                    </p>
                </div>
            </div>


            <div className="gioh__oooh-wrapper">
                <Container className="gioh__oooh">
                    <div className="gioh__oooh-image">
                        <Image
                            src="/projects/gioh/oooh.png"
                            width={1307}
                            height={192}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="gioh__oooh-text-wrapper">
                        <p className="gioh__oooh-text">
                            nós pensamos em um espaço onde você se sinta segura, confortável e livre para cuidar do seu corpo e mente. a gióh é um lugar para o seu autocuidado. 
                        <span className="gioh__at">
                            @giohacupuntura
                        </span>
                        </p>
                    </div>
                </Container>
            </div>

            <Container>
            <div className="gioh__sign">
                <Image
                    src="/projects/gioh/sign.png"
                    width={1760}
                    height={990}
                    quality={100}
                    priority
                />
            </div>

            <div className="gioh__candle">
                <Image
                    src="/projects/gioh/candle.png"
                    width={1760}
                    height={990}
                    quality={100}
                    priority
                />
            </div>

            <div className="gioh__grid">
                <div className="gioh__card">
                    <Image
                        src="/projects/gioh/card-1.png"
                        width={358}
                        height={358}
                        quality={100}
                        priority
                    />
                </div>

                <div className="gioh__card">
                    <Image
                        src="/projects/gioh/card-2.png"
                        width={358}
                        height={358}
                        quality={100}
                        priority
                    />
                </div>

                <div className="gioh__card">
                    <Image
                        src="/projects/gioh/card-3.png"
                        width={358}
                        height={358}
                        quality={100}
                        priority
                    />
                </div>

                <div className="gioh__card">
                    <Image
                        src="/projects/gioh/card-4.png"
                        width={358}
                        height={358}
                        quality={100}
                        priority
                    />
                </div>

                <div className="gioh__card">
                    <Image
                        src="/projects/gioh/card-5.png"
                        width={358}
                        height={358}
                        quality={100}
                        priority
                    />
                </div>

                <div className="gioh__card">
                    <Image
                        src="/projects/gioh/card-6.png"
                        width={358}
                        height={358}
                        quality={100}
                        priority
                    />
                </div>

                <div className="gioh__card">
                    <Image
                        src="/projects/gioh/card-7.png"
                        width={358}
                        height={358}
                        quality={100}
                        priority
                    />
                </div>

                <div className="gioh__card">
                    <Image
                        src="/projects/gioh/card-8.png"
                        width={358}
                        height={358}
                        quality={100}
                        priority
                    />
                </div>
                <div className="gioh__card">
                    <Image
                        src="/projects/gioh/card-9.png"
                        width={358}
                        height={358}
                        quality={100}
                        priority
                    />
                </div>
            </div>

            <div className="gioh__logo-grid">
                <Image
                    src="/projects/gioh/logo-grid.png"
                    width={830}
                    height={395}
                    quality={100}
                    priority
                />
            </div>

            <div className="gioh__footer">
                <p className="gioh__footer-text">
                    versão reduzida <br />
                    2cm de altura
                </p>
                <div className="gioh__logo-mini">
                    <Image
                        src="/projects/gioh/logo-mini.png"
                        width={214}
                        height={69}
                        quality={100}
                        priority
                    />
                </div>
            </div>
            </Container>


            <Footer color='#211C18' backgroundColor='#b88f74'/>
        </div>
    )
}

export default Gol