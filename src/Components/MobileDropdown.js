import React, {useEffect, useState} from "react";
import "./Dropdown.scss"
import scrollToRef from "../function/scrollToRef";
import {ReactComponent as Arrow} from "../images/arrow.svg";

const MapButtons = (props) => {
    return props.list.map((item) => {
            return(
                <div>
                    <button className="dropdown-item" onClick={props.handleClick}>{item}</button>
                    <hr />
                </div>

            )
        }
    )
}


const MobileDropdown = (props) => {
    const [isOpen ,setIsOpen] = useState(false)

    const toggling = (e) => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown-mobile">

            <button className="section" onClick={toggling}>
                {props.header}<Arrow className={"text-" + isOpen}/>
            </button>
            <div className={"dropdown-mobile-container dropdown-mobile-" + isOpen}>
                <MapButtons list={props.list} handleClick={props.handleClick}/>
            </div>

        </div>
    )
}

export default MobileDropdown;