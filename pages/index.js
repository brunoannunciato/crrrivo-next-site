import Head from "next/head"
import Script from "next/script"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Services from "../components/Services"
import ProjectsNav from "../components/ProjectsNav"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PHGSS40QTR"
        />

      </Head>
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PHGSS40QTR'});
        `}
      </Script>
      <Header />
      <Content />
      <Services />
      <ProjectsNav />
      <Footer />
    </Layout>
  )
}
