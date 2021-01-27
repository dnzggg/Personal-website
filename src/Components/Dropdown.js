import React, {useEffect, useState} from "react";
import "./Dropdown.scss"
import scrollToRef from "../function/scrollToRef";
import {ReactComponent as Arrow} from "../images/arrow.svg";

const MapButtons = (props) => {
    return props.list.map((item) => {
            return(
                <div>
                    <button className="dropdown-item" onClick={scrollToRef}>{item}</button>
                    <hr />
                </div>
            )
        }
    )
}


const Dropdown = (props) => {
    const [isOpen ,setIsOpen] = useState(false)
    const [pos, setPos] = useState([-1000, -1000, 0])
    const [scrollTop, setScrollTop] = useState(window.scrollY);

    const handlePos = () => {
        const rect = document.getElementById("1").getBoundingClientRect()
        const x = rect.x
        const y = rect.y + rect.height
        setPos([x, y, rect.width])
    }

    useEffect(()=> {
        window.addEventListener("scroll", () => handleOnScroll());
        window.addEventListener("resize", () => handlePos())
    }, [scrollTop])

    const toggling = (e) => {
        if (e.type === "mousemove") {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
        handlePos()
    }

    const handleOnScroll = () => {
        if (scrollTop > window.scrollY) {
            setIsOpen(false)
        }
        setScrollTop(window.scrollY)
    }

    return (
        <div className="dropdown" onMouseMove={toggling}  onMouseLeave={toggling}>

            <button className="section" id="1" style={props.section === "projects"?{textDecorationLine: 'underline'}: {}}>
                {props.header}<Arrow className={"text-" + isOpen}/>
            </button>
            <div className={"dropdown-container dropdown-" + isOpen} style={{left: pos[0].toString() + "px", top: pos[1].toString() + "px", width: pos[2].toString() + "px"}}>
                <MapButtons list={props.list}/>
            </div>

        </div>
    )
}

export default Dropdown;