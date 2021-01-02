import React from "react";
// import History from "../utils/history"
import ScrollTrigger from "@terwanerik/scrolltrigger/dist/ScrollTrigger";


const NavBar = () => {
    const height = "1%";
    const trigger = new ScrollTrigger();
    trigger.add('.nav', {toggle: {
        class: {
            in: ".nav",
            out: ".invisible"
    }}})
    return(
    <nav className="nav navbar-sticky">

        <div className="content" style={{height: height}}>
            <button className="logo" onClick={() => console.log("link to page")}>Deniz</button>
            <button className="section" style={{textDecorationLine: 'underline'}} onClick={() => console.log("link to section")}>Section1</button>
            <button className="section" onClick={() => console.log("link to section")}>Section1</button>
            <button className="section" onClick={() => console.log("link to section")}>Section1</button>
            <button className="section" onClick={() => console.log("link to section")}>Section1</button>
        </div>
    </nav>
    )
}

export default NavBar;