import React from "react"
import "./SocialMedia.scss"
import { ReactComponent as Insta } from "../images/instagram.svg"
import { ReactComponent as GitHub} from "../images/github.svg";
import { ReactComponent as LinkedIn} from "../images/linkedin.svg";


const SocialMedia = () => {
    return (
        <div className="content container">
            <div className="social-items">
                <LinkedIn onClick={() => {window.open("https://uk.linkedin.com/in/deniz-gorur-53a21a15b")}} className="icon" />
                <GitHub onClick={() => {window.open("https://github.com/dnzggg")}} className="icon" />
                <Insta onClick={() => {window.open("https://instagram.com/denizgorur1")}} className="icon" />
            </div>
        </div>
    )
}

export default SocialMedia