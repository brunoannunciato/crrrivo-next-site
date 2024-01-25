import Image from "next/image"
import isClient from '../../../../utils/isClient';

import "./sub-header.scss"
import Link from "next/link";

const SubHeader = () => {
    const isMobile = isClient() && window.outerWidth < 768;

    return (
        <div className="sub-header">
            <h2 className="sub-header__title">
                Projetos
            </h2>

            <Link href="/">
                <Image
                    src="/images/arrow.svg"
                    alt=""
                    width={isMobile ? '28px' : '20px'}
                    height={isMobile ? '14px' : '26px'}
                    className="sub-header__arrow"
                />
            </Link>
        </div>
    )
}

export default SubHeader