import React, { useEffect, useState } from "react";
import history from "../utils/history"
import "./NavBar.scss"
import Dropdown from "./Dropdown";
import scrollToRef from "../function/scrollToRef"

const NavBar = () => {
  const height = "1%";

  const [scrollTop, setScrollTop] = useState(window.scrollY);
  const [hide, setHide] = useState("show");
  const [section, setSection] = useState("about")

  useEffect(() => {
    // subscribe event
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      // unsubscribe event
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [scrollTop]);

  const handleOnScroll = () => {
    if (scrollTop < window.scrollY) {
      setHide("hide")
    } else if (scrollTop > window.scrollY) {
      setHide("show")
    }
    const screenY = window.scrollY + window.innerHeight / 2
    const skillsY = document.getElementById("skills").getBoundingClientRect().y + window.scrollY
    const projectsY = document.getElementById("projects").getBoundingClientRect().y + window.scrollY
    const contactY = document.getElementById("contact").getBoundingClientRect().y + window.scrollY
    if (screenY > contactY) {
      setSection("contact")
    } else if (screenY > projectsY) {
      setSection("projects")
    } else if (screenY < skillsY) {
      setSection("about")
    } else if (screenY > skillsY) {
      setSection("skills")
    }
    setScrollTop(window.scrollY);
  };

  let list = ["Cooperative Strategies in Multi-agent Systems", "Restaurant App", "Calculator",
    "Tower Defence", "Self Pong Playing Robot", "Snake", "Minesweeper", "Tic Tac Toe"];

  return (
    <nav className={"navbar-sticky navbar-" + hide}>
      <div className="content nav-items" style={{ height: height }}>
        <button className="logo" onClick={() => history.push('/')}>Deniz</button>
        <div className="nav-links">
          <button className="section" style={section === "about" ? { textDecorationLine: 'underline' } : {}}
            onClick={scrollToRef}>About</button>
          <button className="section" style={section === "skills" ? { textDecorationLine: 'underline' } : {}}
            onClick={scrollToRef}>Skills</button>
          <Dropdown header={"Projects"} list={list} section={section} />
          <button className="section" style={section === "contact" ? { textDecorationLine: 'underline' } : {}}
            onClick={scrollToRef}>Contact</button>
        </div>


      </div>
    </nav>
  )
}

export default NavBar;