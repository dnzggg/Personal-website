import React, {useState} from "react";
import "./Dropdown.scss"
import {ReactComponent as Arrow} from "../images/arrow.svg";

const MapButtons = (props) => {
    return props.list.map((item, index) => {
            return(
                <div key={index}>
                    <button className="dropdown-item" onClick={props.handleClick}>{item}</button>
                    <hr />
                </div>

            )
        }
    )
}


const MobileDropdown = (props) => {
    const [isOpen ,setIsOpen] = useState(false)

    const toggling = () => {
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