import React from 'react'
import myPhoto5 from "../../assets/myphoto5.jpeg"
import { FaAward, FaCode } from 'react-icons/fa'
import "./about.css"
function About({ clickHandler, active }) {
  return (
    <div id="about" className='about'>
      <div className='top'>

        <h4>Get to Know</h4>
        <h2>About Me</h2>

      </div>
      <div>
        <div className='bottom'>
          <div className='about-left'>
            <div className='img-about-container'>
              <img src={myPhoto5} />
            </div>
          </div>
          <div className='about-right'>

            <div className="card-container">
              <a className='about-me-card' href='#experience'>
                <FaAward />
                <span className='about-me-card-title'> Experience</span>
              </a>
              <a onClick={clickHandler} href='#project' name="#project" className='about-me-card'>
                <FaCode />
                <span className='about-me-card-title'> Projects</span>
              </a>
            </div>
            <p className='about-me-para'>
              Experienced Frontend Web Developer with over 3 years of professional experience in software engineering. Proficient in crafting intuitive interfaces and optimizing performance across devices. Skilled in leading the development of web applications from scratch, utilizing technologies such as Next.js, React, Tailwind CSS, and Angular. Demonstrated expertise in streamlining processes and enhancing UI/UX for various projects, including CRM and PDF automation websites.
            </p>
            <a className='talk' onClick={clickHandler} href="#contact" name="#contact">Let's Talk</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About