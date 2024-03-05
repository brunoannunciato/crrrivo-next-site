import Head from 'next/head';
import Image from 'next/image';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import SubHeader from '../../components/SubHeader';

import "./projects.scss"
import Link from 'next/link';
import { ReactSVG } from 'react-svg';


const projects = [
  {
      id: 1,
      image: "/images/thumb-leo.png",
      title: "Leo Madeiras",
      description: "Pensamos olhando para o mundo. Hábitos, tendências e mudanças são a base do nosso raciocínio criativo e estratégico, que parte das pessoas ao mesmo tempo em que as coloca no centro de tudo.",
      link: "/projetos/leo"
  },

  {
      id: 2,
      image: "/images/thumb-gol.png",
      title: "Gol Smiles",
      description: "Pensamos olhando para o mundo. Hábitos, tendências e mudanças são a base do nosso raciocínio criativo e estratégico, que parte das pessoas ao mesmo tempo em que as coloca no centro de tudo.",
      link: "/projetos/gol-smiles"
  },

  {
      id: 3,
      image: "/images/thumb-lifelab.png",
      title: "Lifelab",
      description: "Pensamos olhando para o mundo. Hábitos, tendências e mudanças são a base do nosso raciocínio criativo e estratégico, que parte das pessoas ao mesmo tempo em que as coloca no centro de tudo.",
      link: "/projetos/lifelab"
  },

  {
      id: 4,
      image: "/images/thumb-gioh.png",
      title: "Gióh",
      description: "Pensamos olhando para o mundo. Hábitos, tendências e mudanças são a base do nosso raciocínio criativo e estratégico, que parte das pessoas ao mesmo tempo em que as coloca no centro de tudo.",
      link: "/projetos/gioh"
  },

  {
      id: 5,
      image: "/images/thumb-fyll.png",
      title: "Fyll",
      description: "Pensamos olhando para o mundo. Hábitos, tendências e mudanças são a base do nosso raciocínio criativo e estratégico, que parte das pessoas ao mesmo tempo em que as coloca no centro de tudo.",
      link: "/projects/fyll"
  },

  {
      id: 6,
      image: "/images/thumb-ana.png",
      title: "Ana Hirata",
      description: "Pensamos olhando para o mundo. Hábitos, tendências e mudanças são a base do nosso raciocínio criativo e estratégico, que parte das pessoas ao mesmo tempo em que as coloca no centro de tudo.",
      link: "/projetos/ana-hirata"
  },
  {
    id: 7,
    image: "/images/thumb-cafe.png",
    title: "Café na Cama",
    description: "Penamos olhando para o mundo. Hábitos, tendências e mudanças são a base do nosso raciocínio criativo e estratégico, que parte das pessoas ao mesmo tempo em que as coloca no centro de tudo.",
    link: "/projects/cafe-na-cama"
  },
]
export default function Projects() {
  const scrollToTop = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

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
            projects.map(({id, image, title, description, link}) => {
              return (
                <div className='projects__project' key={id}>
                  <div className="projects__project-image">
                    <Link href={link}>
                      <Image
                        src={image}
                        width={849}
                        height={478}
                      />
                    </Link>
                  </div>

                  <div className="projects__project-content">
                    <Link href={link}>
                      <div className="projects__project-title">
                        {title}
                      </div>
                    </Link>

                    <div className="projects__project-description">
                      {description}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="projects__arrow-wrapper" onClick={scrollToTop}>
          <div className="projects__arrow">
            <ReactSVG
              src='/images/arrow.svg'
            />
          </div>

          <p className="projects__arrow-text">
            Topo
          </p>
        </div>
      </div>
      
    </Layout>
  );
}
