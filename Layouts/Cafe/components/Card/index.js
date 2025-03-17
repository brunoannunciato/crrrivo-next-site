import Image from "next/image"

import "./card.scss"

const Card = ({r, g, b, name, color, icon}) => {
    return (
        <div className="card-cafe" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
            <div className="card-cafe__ico" style={{filter: color === "#edebe5" ? `brightness(10)`: `initial`}}>
                <Image
                    src={`/${icon}`}
                    width={51}
                    height={50}
                    quality={70}
                    priority
                />
            </div>

            <p className="card-cafe__name" style={{color}}>
                {name}
            </p>

            <div className="card-cafe__rgb" style={{color}}>
                R:{r} G:{g} B:{b}
            </div>
        </div>
    )
}

export default Card