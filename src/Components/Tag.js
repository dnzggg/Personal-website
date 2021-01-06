import React from "react";
import "./Tag.scss"


const Tag = (props) => {

    return(
        <li>
            {props.text}
        </li>
    )
}

export default Tag;