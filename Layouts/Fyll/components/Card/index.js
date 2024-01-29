import Image from "next/image"

import './card.scss'

const Card = ({id}) => {
    return <div className="fyll-card">
        <div className="fyll-card__logo">
            <Image
                src="/projects/fyll/card-logo.png"
                width={85}
                height={45}
            />
        </div>

        <div className="fyll-card__image">
            <Image
                src={`/projects/fyll/card-${id}.png`}
                width={535}
                height={535}
            />
        </div>

        <div className="fyll-card__buttons">
            <div className="fyll-card__left">
                <Image
                    src="/projects/fyll/card-btn-1.png"
                    width={24}
                    height={23}
                />

                <Image
                    src="/projects/fyll/card-btn-2.png"
                    width={23}
                    height={23}
                />

                <Image
                    src="/projects/fyll/card-btn-3.png"
                    width={24}
                    height={21}
                />
            </div>
            
            <div className="fyll-card__right">
                <Image
                    src="/projects/fyll/card-btn-4.png"
                    width={17}
                    height={22}
                />
            </div>
        </div>

    </div>
}

export default Card