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
        <text className={hover==="Python"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>Python</text>
      <Java name={"Java"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
        <text className={hover==="Java"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>Java</text>
      <HTML name={"HTML"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon"/>
        <text className={hover==="HTML"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>HTML</text>
      <JavaS name={"JavaS"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon"/>
        <text className={hover==="JavaS"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>JavaScript</text>
      <Postgres name={"Postgres"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon"/>
        <text className={hover==="Postgres"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>SQL</text>
      <C name={"C"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
        <text className={hover==="C"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>C</text>
      <Latex name={"Latex"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
        <text className={hover==="Latex"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>Latex</text>
      <Prolog name={"Prolog"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
        <text className={hover==="Prolog"?"true":"false"} style={{top: mouse.y, left: mouse.x}}>Prolog</text>
    </div>
  )
}

export default Icons;