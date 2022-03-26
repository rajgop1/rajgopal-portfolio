import React from 'react'
import "./experience.css"
import { AiFillHtml5, AiOutlineConsoleSql, AiFillFileWord, AiFillFileExcel } from 'react-icons/ai'
import { DiCss3, DiJavascript, DiPython, DiJava } from 'react-icons/di'
import { SiPhp, SiCplusplus } from "react-icons/si"
import { FaFilePowerpoint } from "react-icons/fa"
import { VscTerminalCmd } from "react-icons/vsc"
import { GrReactjs } from "react-icons/gr"
function experience() {
    return (
        <div className='experience' id="experience">
            <div className='experience-heading top'>
                <h4>My Experience</h4>
                <h2>Work Experience</h2>

            </div>
            <div className='experience-container'>
                <div className='experience-left'>
                    <h2>Teacher</h2>
                    <h4>As a Computer Teacher, I taught technologies like</h4>
                    <div className='tech-container'>
                        <div className='tech-container-left'>

                            <AiFillHtml5 className='tech-icon' />
                            <DiCss3 className='tech-icon' />
                            <DiJavascript className='tech-icon' />
                            <DiPython className='tech-icon' />
                            <DiJava className='tech-icon' />
                            <SiPhp className='tech-icon' />
                        </div>
                        <div className='tech-container-right'>
                            <SiCplusplus className='tech-icon' />
                            <AiOutlineConsoleSql className='tech-icon' />
                            <FaFilePowerpoint className='tech-icon' />
                            <AiFillFileExcel className='tech-icon' />
                            <AiFillFileWord className='tech-icon' />
                            <VscTerminalCmd className='tech-icon' />
                        </div>

                    </div>

                </div>
                <div className='experience-right'>

                    <h2>Front-end Developer</h2>
                    <h4>As a Front-end Developer, I worked on the following technologies</h4>
                    <div className="tech-container">
                        <AiFillHtml5 className='tech-icon' />
                        <DiCss3 className='tech-icon' />
                        <DiJavascript className='tech-icon' />
                        <GrReactjs />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default experience