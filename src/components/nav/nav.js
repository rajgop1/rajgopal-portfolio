import React, { useEffect } from "react";
import { FaHome, FaUser, FaPhoneAlt, FaCode} from "react-icons/fa"
import "./nav.css"
export default function Nav({clickHandler, active}) {
    
    return (
        <div className="links-container">
            <div className="links">
               
                <div onClick={clickHandler} className={`icon-container ${active==="#" && "active"}`}>
                    
                    <a href="#" name="#"><FaHome />Home</a>
                </div>

                <div onClick={clickHandler} className={`icon-container ${active==="#about" && "active"}`}>
                    <a href="#about" name="#about"><FaUser />About</a>
                
                </div>
                <div onClick={clickHandler} className={`icon-container ${active==="#project" && "active"}`}>

                    
                    <a href="#project" name="#project"><FaCode/>Projects</a>
                </div>
                
                <div onClick={clickHandler} className={`icon-container ${active==="#contact" && "active"}`}>
                    
                    <a href="#contact" name="#contact"><FaPhoneAlt/>Contact</a>
                </div>
            </div>
        </div>
    )
}