import Head from 'next/head';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Services from '../components/Services';
import ProjectsNav from '../components/ProjectsNav';

export default function Home() {
  return (
    <div>
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
      <Header />
      <Content />
      <Services />
      <ProjectsNav />
      <Footer />
    </div>
  );
}
