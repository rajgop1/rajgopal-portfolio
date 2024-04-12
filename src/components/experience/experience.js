import React from 'react'
import "./experience.css"
import { AiFillHtml5, AiOutlineConsoleSql, AiFillFileWord, AiFillFileExcel } from 'react-icons/ai'
import { DiCss3, DiJavascript, DiPython, DiJava, DiAngularSimple, DiNodejs } from 'react-icons/di'
import { SiPhp, SiCplusplus, SiKotlin, SiAndroidstudio, SiExpress } from "react-icons/si"
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

                <div className='experience-sub-container'>
                    <h2>Android Developer</h2>
                    <h4>As a Android Developer, I used following technologies</h4>
                    <div className='tech-container'>
                        <DiJava className='tech-icon' title='Java' />
                        <SiKotlin className='tech-icon' title='Kotlin' />
                        <SiAndroidstudio className='tech-icon' title='Android Studio' />
                    </div>

                </div>
                <div className='experience-sub-container'>

                    <h2>Frontend Developer</h2>
                    <h4>As a Frontend Developer, I worked on the following technologies</h4>
                    <div className="tech-container">
                        <AiFillHtml5 title='HTML5' className='tech-icon' />
                        <DiCss3 title='CSS3' className='tech-icon' />
                        <DiJavascript title='JavaScript' className='tech-icon' />
                        <GrReactjs title='React' />
                        <DiAngularSimple title='Angular' />
                    </div>

                </div>
                <div className='experience-sub-container'>
                    <h2>Backend Developer</h2>
                    <h4>As a Backend Developer, I worked on the following technologies</h4>
                    <div className="tech-container">
                        <DiNodejs title='Node.Js' className='tech-icon' />
                        <SiExpress title='Express.Js' className='tech-icon' />
                    </div>

                </div>
                <div className='experience-sub-container'>
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
            </div>
        </div >
    )
}

export default experience