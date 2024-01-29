import "./color-card.scss"

const ColorCard = ({index, color, title, support, borderColor = "white"}) => {
    return (
        <div className="color-card" style={{backgroundColor: color}}>
            <span className="color-card__index" style={{borderColor}}>
                { index }
            </span>

            <div className="color-card__content">
                <div className="color-card__principal-content">
                    { title } <br />
                    { color }
                </div>

                <p className="color-card__support">
                    { support }
                </p>
            </div>
        </div>
    )    
}

export default ColorCard