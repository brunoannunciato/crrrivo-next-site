import Image from "next/image"
import isClient from '../../../../utils/isClient';

import "./sub-header.scss"
import Link from "next/link";
import { ReactSVG } from "react-svg";
import Container from "../../../../components/Container";

const SubHeader = ({color = "#ffffff", projectName}) => {
    const isMobile = isClient() && window.outerWidth < 768;

    return (
        <Container className="sub-header" style={{color}}>
            <h2 className="sub-header__title">
                Projetos
            </h2>


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