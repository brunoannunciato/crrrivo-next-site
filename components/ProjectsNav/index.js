import "./projects-nav.scss"
import Image from 'next/image';
import isClient from '../../utils/isClient';

const ProjectsNav = () => {
    const isMobile = isClient() && window.outerWidth < 768;

    return (
        <section className="projects-nav">
            <div className="projects-nav__container">
                <h1 className="projects-nav__title">
                    Projetos
                </h1>

                <Image
                    src="/images/arrow.svg"
                    alt=""
                    width={isMobile ? '28px' : '20px'}
                    height={isMobile ? '14px' : '26px'}
                    className="projects-nav__arrow"
                  />
            </div>
        </section>
    )
}

export default ProjectsNav