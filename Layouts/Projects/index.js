import Head from 'next/head';
import Image from '../../components/Image';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import SubHeader from '../../components/SubHeader';

import "./projects.scss"
import Link from 'next/link';
import classNames from 'classnames';


export default function Projects({posts}) {
  const projects = posts.map((post, index) => {
    return {
      id: index,
      actived: post?.showInProjects,
      image: post?.thumbnail,
      title: post?.projectTitle,
      description: post?.projectDescription,
      link: `/projetos/${post?.title}`
    }
  }).filter(post => {
    return post.actived
  })

  const highlightProjects = projects.slice(0, 4)
  const otherProjects = projects.slice(4)
  console.log(otherProjects)


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
      </Head>
      <Header hideAt/>
      <SubHeader />

      <div className="projects__container">
        <div className="projects__shelf">
          {
            highlightProjects.map(({id, image, title, description, link}) => {
              return (
                <div className="projects__project" key={id}>
                  <div className="projects__project-image">
                    <Link href={link}>
                      <Image
                        src={`/${image}`}
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

        <div className="projects__list">
        {
            otherProjects.map(({id, image, title, description, link}) => {
              return (
                <div className={classNames('projects__project projects__list-item', {'--inverted' : Number(id) % 2 !== 0})} key={id}>
                  <div className="projects__project-image">
                    <Link href={link}>
                      <Image
                        src={`/${image}`}
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
            <Image
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