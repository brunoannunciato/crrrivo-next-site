import Link from "next/link";
import { ReactSVG } from "react-svg";

import isClient from '../../utils/isClient';
import Container from "../Container";

import "./sub-header.scss"
const SubHeader = ({color = "#edebe5", projectName}) => {
    const isMobile = isClient() && window.outerWidth < 768;

    return (
        <Container className="sub-header" style={{color}}>
            <Link href="/projetos">
                <h2 className="sub-header__title">
                        Projetos
                </h2>
            </Link>


            <div className="sub-header__content">
                <p className="sub-header__project-name">
                    { projectName }
                </p>
                
                <Link href="/" className="sub-header__button">
                    <ReactSVG
                        src="/images/arrow.svg"
                        width={isMobile ? '28px' : '20px'}
                        height={isMobile ? '14px' : '26px'}
                        className="sub-header__arrow"
                    />
                </Link>
            </div>
        </Container>
    )
}

export default SubHeader