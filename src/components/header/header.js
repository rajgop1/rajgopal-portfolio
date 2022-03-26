import React from "react";
import Photo from "../../assets/myPhoto.jpg"
import myPhotoBack from "../../assets/my_photo_back.jpeg"
import CV from "../../assets/resume.pdf"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"

import "./header.css"


import { FaLinkedin, FaInstagram, FaGithub, FaHackerrank } from "react-icons/fa"
import myPhoto1 from "../../assets/myphoto1.jpeg"

import myPhoto2 from "../../assets/myphoto2.jpeg"
import myPhoto3 from "../../assets/myphoto3.jpeg"
import myPhoto4 from "../../assets/myphoto4.jpeg"
export default function Header({actice, clickHandler}) {



    return (

        <div className="container-header">

          
            <div className="download-buttons">
                <a className="cv" href={CV} download >Download CV</a>

                <a className="talk" href="#contact" name="#contact" onClick={clickHandler}>Lets Talk</a>

            </div>

            <div className="card">

                <div className="profile-photo-container">
                    <img src={Photo} className="profile-photo" />
                    <img src={myPhoto2} className="profile-photo img-back" />
                </div>
                <div className="details">
                    <div className="content">
                        <h2>Rajgopal Jakhmola
                            <br /><span>Frontend Web Developer</span>
                        </h2>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/rajgopal-jakhmola-653024212/" target="_blank">

                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/rajgopaljakhmola/" target="_blank">
                            <FaInstagram />
                        </a>
                        <a href="https://www.instagram.com/rajgopal511/" target="_blank">
                            <FaGithub />
                        </a>
                        <a href="https://www.hackerrank.com/rajgopaljakhmola" target="_blank">
                            <FaHackerrank />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}