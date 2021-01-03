import React, {useState} from "react";
import "./Dropdown.scss"

const MapButtons = (props) => {
    return props.list.map((item) => {
            return(<button className="dropdown-item" >{item}</button>)
        }
    )
}


const Dropdown = (props) => {
    const [isOpen ,setIsOpen] = useState(false)
    const [pos, setPos] = useState([0, 0, 0])

    const toggling = () => {
        setIsOpen(!isOpen)
        const rect = document.getElementById("1").getBoundingClientRect()
        const x = rect.x
        const y = rect.y + rect.height
        setPos([x, y, rect.width])

    }

    return (
        <div className="dropdown">

            <button className="section" id="1" style={props.section === props.header.lower?{textDecorationLine: 'underline'}: {}} onClick={toggling}>
                {props.header}
            </button>
            <div className={"dropdown-container dropdown-" + isOpen} style={{left: pos[0].toString() + "px", top: pos[1].toString() + "px", width: pos[2].toString() + "px"}}>
                <MapButtons list={props.list}/>
            </div>

        </div>
    )
}

export default Dropdown;