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
      description: "Campanha para a Leo Madeiras, pensada de forma 360. Unindo social, e-commerce e campanha publicitária para a Leoquidação, que já é um clássico de vendas da marca e que em 2024, foi um sucesso absoluto.",
      link: "/projetos/leo"
  },

  {
      id: 2,
      image: "/images/thumb-gol.png",
      title: "Gol Smiles",
      description: "Campanha completa de endomarketing para a Gol Smiles, que fala sobre inovação e os novos caminhos para o futuro da empresa e dos colaboradores, com um evento chamado Unland, que faz parte dos eventos anuais da Gol.",
      link: "/projetos/gol-smiles"
  },

  {
      id: 3,
      image: "/images/thumb-lifelab.png",
      title: "Lifelab",
      description: "Branding criado para a Life Lab, empresa do Caetano Tona, organizador do TEDx e criador de conteúdo. A marca foi desenvolvida com o intuito de dar voz às pessoas. É uma empresa de desenvolvimento humano.",
      link: "/projects/life-lab"
  },

  {
      id: 4,
      image: "/images/thumb-gioh.png",
      title: "Gióh",
      description: "O projeto de branding criado para a Gióh surgiu para ressignificar o mercado de acupuntura no Brasil, trazendo novos assets visuais para o mercado, que anda na contramão. Inovação e terapias específicas faz da Gióh uma marca ímpar.",
      link: "/projects/gioh"
  },

  {
      id: 5,
      image: "/images/thumb-fyll.png",
      title: "Fyll",
      description: "“Não há linhas retas na natureza”. É a premissa que norteia toda a identidade visual da Fyll. Branding focado na natureza, pessoas e relações. A marca tem um posicionamento bem sólido, além de trazer as relações humanas como ponto focal.",
      link: "/projects/fyll"
  },

  {
      id: 6,
      image: "/images/thumb-ana.png",
      title: "Ana Hirata",
      description: "Marca criada para a Chef Ana Hirata, que estava entrando em um reality show de culinária na Rede Record. Foi criado um logo que representa os estágios da fermentação de um pão, para dar o mesmo dinamismo do processo à marca.",
      link: "/projects/ana-hirata"
  },
  {
    id: 7,
    image: "/images/thumb-cafe.png",
    title: "Café na Cama ",
    description: "Projeto criado para trazer de volta as clássicas cestas de café da manhã dos anos 90, mas com um toque de luxo e pratos criados por chefs de cozinha, além de uma identidade toda pensada nos grandes tabloides globais.  ",
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
