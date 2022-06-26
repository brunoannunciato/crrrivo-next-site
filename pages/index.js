import Head from 'next/head';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Services from '../components/Services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crrrivo</title>
      </Head>
      <Header />
      <Content />
      <Services />
      <Footer />
    </div>
  );
}
