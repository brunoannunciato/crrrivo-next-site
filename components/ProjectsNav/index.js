import Link from 'next/link';
import Image from 'next/image';
import isClient from '../../utils/isClient';

import "./projects-nav.scss"
import { ReactSVG } from 'react-svg';
import Container from '../Container';

const ProjectsNav = () => {
    const isMobile = isClient() && window.outerWidth < 768;

    return (
        <section className="projects-nav">
            
            <Link href="/projects">
                <Container className="projects-nav__container">
                        <h1 className="projects-nav__title">
                            Projetos
                        </h1>

                        <ReactSVG src="/images/arrow.svg" className="projects-nav__arrow" />
                </Container>
            </Link>
        </section>
    )
}

export default ProjectsNav