import React from "react"
import "./App.css"
import About from "./components/about/about"
import Experience from "./components/experience/experience"
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import Contact from "./components/contact/contact"
import Project  from "./components/projects/projects"

import Canvas from "./components/Canvas/Canvas"
function App() {

    const [active, setActive] = React.useState("#");
    function clickHandler(e)
    { // this function should return url of the web page 
        setActive( (prev)=> e.target.name)
    }

    return (
        <React.Fragment>


            <Nav clickHandler={clickHandler} active={active}/>
            <Header clickHandler={clickHandler}/>
            <About clickHandler={clickHandler} active={active}/>
            <Project/>
            <Experience/>
            <Contact clickHandler={clickHandler}/>
            <Canvas/>


        </React.Fragment>
    )
}

export default App