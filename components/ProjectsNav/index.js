import Link from 'next/link';
import Image from '../Image';
import isClient from '../../utils/isClient';

import "./projects-nav.scss"
import Container from '../Container';

const ProjectsNav = () => {
    const isMobile = isClient() && window.outerWidth < 768;

    return (
        <section className="projects-nav">
            
            <Link href="/projetos">
                <Container className="projects-nav__container">
                        <h1 className="projects-nav__title">
                            Projetos
                        </h1>

                        <Image src="/images/arrow.svg" className="projects-nav__arrow" />
                </Container>
            </Link>
        </section>
    )
}

export default ProjectsNav