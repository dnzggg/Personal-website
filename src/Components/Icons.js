import React from "react";
import { ReactComponent as Python } from "../images/python-plain.svg"
import { ReactComponent as Java } from "../images/java-plain.svg"
import { ReactComponent as HTML } from "../images/html5-plain.svg"
import { ReactComponent as JavaS } from "../images/javascript-plain.svg"
import { ReactComponent as Postgres } from "../images/postgresql-plain.svg"
import { ReactComponent as C } from "../images/c-plain.svg"


const Icons = () => {

  return (
    <div className="icon-items">
      <Python className="icon" />
      <Java className="icon" />
      <HTML className="icon"/>
      <JavaS className="icon"/>
      <Postgres className="icon"/>
      <C className="icon"/>
    </div>
  )
}

export default Icons;