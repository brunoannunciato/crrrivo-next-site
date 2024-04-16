import * as NextImage from "next/image"
import { ReactSVG } from "react-svg"

const Image = (props) => {
    const isSvg = props.src.includes(".svg")

    return isSvg ? <ReactSVG {...props}/> : (
        <NextImage 
            {...props}    
        />
    ) 
}

export default Image