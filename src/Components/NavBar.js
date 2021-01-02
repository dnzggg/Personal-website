import React, {useEffect, useState} from "react";
// import History from "../utils/history"

const NavBar = () => {
    const height = "1%";

    const [scrollTop, setScrollTop] = useState(window.scrollY);
    const [hide, setHide] = useState("show");
    // const [section, setSection] = useState("logo")

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
        setScrollTop(window.scrollY);
    };

    return(
        <nav className={"nav navbar-sticky navbar-" + hide}>
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