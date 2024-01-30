import "./card.scss"

const Color = ({color, backgroundColor}) => {
    return (
        <div className="ana-color" style={{backgroundColor}}>
            <p className="ana-color__text" style={{color}}>{backgroundColor}</p>
        </div>
    )
}

export default Color