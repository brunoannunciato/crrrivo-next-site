import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { projects } from './constants';

import "./projects.scss"
import SubHeader from './components/SubHeader';

export default function Projects() {
  return (
    <Layout className="projects">
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
      <Header hideAt/>
      <SubHeader />

      <div className="projects__container">
        <div className="projects__shelf">
          {
            projects.map(({id, image, title, description}) => {
              return (
                <div className='projects__project' key={id}>
                  <div className="projects__project-image">
                    <Image
                      src={image}
                      layout='fill'
                    />
                  </div>

                  <div className="projects__project-content">
                    <div className="projects__project-title">
                      {title}
                    </div>

                    <div className="projects__project-description">
                      {description}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      
    </Layout>
  );
}
