import React, {useState} from "react";
import { ReactComponent as Python } from "../images/python-plain.svg"
import { ReactComponent as Java } from "../images/java-plain.svg"
import { ReactComponent as HTML } from "../images/html5-plain.svg"
import { ReactComponent as JavaS } from "../images/javascript-plain.svg"
import { ReactComponent as Postgres } from "../images/postgresql-plain.svg"
import { ReactComponent as C } from "../images/c-plain.svg"


const Icons = () => {
    const [hover, setHover] = useState("")

    const handleHover = (e) => {
        const name = e.target.getAttribute('name')
        if (hover !== name) {
            setHover(name)
        } else {
            setHover("")
        }


    }

  return (
    <div className="icon-items">
      <Python name={"Python"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
      <text className={hover==="Python"?"true":"false"}>Python</text>
      <Java name={"Java"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon" />
      <HTML name={"HTML"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon"/>
      <JavaS name={"JavaS"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon"/>
      <Postgres name={"Postgres"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon"/>
      <C name={"C"} onMouseEnter={handleHover} onMouseLeave={handleHover} className="icon"/>
    </div>
  )
}

export default Icons;