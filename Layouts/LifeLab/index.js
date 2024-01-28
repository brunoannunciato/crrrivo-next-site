import Head from 'next/head'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Footer from '../../components/Footer'


import './life-lab.scss'

const Gol = () => {
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
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
                />
            </Head>
            <Header hideAt color='#FFFFFF' disableMixBlendMode/>
            <SubHeader color='#FFFFFF' projectName="LifeLab"/>


            <Footer color='#FFFFFF' backgroundColor='#103ae1'/>
        </div>
    )
}

export default Gol