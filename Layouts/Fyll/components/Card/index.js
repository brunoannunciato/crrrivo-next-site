import Image from "next/image"

import './card.scss'

const Card = ({id, theme}) => {
    return <div className="fyll-card">
        <div className="fyll-card__logo">
            <Image
                src={`/${theme?.postProfile}`}
                width={85}
                height={45}
            />
        </div>

        <div className="fyll-card__image">
            <Image
                src={`/${theme[`post${id}`]}`}
                width={535}
                height={535}
            />
        </div>

        <div className="fyll-card__buttons">
            <div className="fyll-card__left">
                <Image
                    src={`/${theme?.postLike}`}
                    width={24}
                    height={23}
                />

                <Image
                    src={`/${theme?.postComment}`}
                    width={23}
                    height={23}
                />

                <Image
                    src={`/${theme?.postShare}`}
                    width={24}
                    height={21}
                />
            </div>
            
            <div className="fyll-card__right">
                <Image
                    src={`/${theme?.postSave}`}
                    width={17}
                    height={22}
                />
            </div>
        </div>

    </div>
}

export default Card