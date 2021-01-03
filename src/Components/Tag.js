import React, {useState} from "react";
import "./Tag.scss"


const Tag = (props) => {
    const [hover, setHover] = useState("")

    return(
        <li className={hover} onMouseOver={() => setHover("hover")} onMouseLeave={() => setHover("")}>
            {props.text}
        </li>
    )
}

export default Tag;