import React, {useState} from "react";
import { ReactComponent as Python } from "../images/python-plain.svg"
import { ReactComponent as Java } from "../images/java-plain.svg"
import { ReactComponent as HTML } from "../images/html5-plain.svg"
import { ReactComponent as JavaS } from "../images/javascript-plain.svg"
import { ReactComponent as Postgres } from "../images/postgresql-plain.svg"
import { ReactComponent as C } from "../images/c-plain.svg"
import { ReactComponent as Latex } from "../images/Latex.svg";
import { ReactComponent as Prolog } from "../images/prolog.svg";


const Icons = () => {
    const [hover, setHover] = useState("")
    const [mouse, setMouse] = useState({x:0, y:0})

    const handleHover = (e) => {
        const name = e.target.getAttribute('name')
        if (hover !== name) {
            setHover(name)
        } else {
            setHover("")
        }

        handleMouseMove(e)
    }

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect()

        setMouse({x: rect.x + 20, y: rect.y + window.scrollY + 60})
    }

  return (
    <div className="icon-items">
      <Python name={"Python"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
        <p className={hover==="Python"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>Python</p>
      <Java name={"Java"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
        <p className={hover==="Java"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>Java</p>
      <HTML name={"HTML"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon"/>
        <p className={hover==="HTML"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>HTML</p>
      <JavaS name={"JavaS"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon"/>
        <p className={hover==="JavaS"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>JavaScript</p>
      <Postgres name={"Postgres"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon"/>
        <p className={hover==="Postgres"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>SQL</p>
      <C name={"C"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
        <p className={hover==="C"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>C</p>
      <Latex name={"Latex"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
        <p className={hover==="Latex"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>Latex</p>
      <Prolog name={"Prolog"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
        <p className={hover==="Prolog"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>Prolog</p>
    </div>
  )
}

export default Icons;