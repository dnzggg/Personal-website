import React, {useEffect, useState} from "react";
// import History from "../utils/history"
import "./NavBar.scss"
import Dropdown from "./Dropdown";

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
        if (window.scrollY < window.innerHeight - 400) {
            setSection("about")
        } else if (window.scrollY > window.innerHeight) {
            setSection("skills")
        }
        setScrollTop(window.scrollY);
    };

    let list = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6", "Project 7"];
    return(
        <nav className={"nav navbar-sticky navbar-" + hide}>
            <div className="content" style={{height: height}}>
                <button className="logo" onClick={() => console.log("link to page")}>Deniz</button>
                <button className="section" style={section === "about"?{textDecorationLine: 'underline'}: {}} onClick={() => console.log("link to section")}>About</button>
                <button className="section" style={section === "skills"?{textDecorationLine: 'underline'}: {}} onClick={() => console.log("link to section")}>Skills</button>
                <Dropdown header={"Projects"} list={list} section={section} onClick={() => console.log("link to section")} />
                <button className="section" style={section === "contact"?{textDecorationLine: 'underline'}: {}} onClick={() => console.log("link to section")}>Contact</button>
            </div>
        </nav>
    )
}

export default NavBar;