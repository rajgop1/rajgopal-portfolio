import React from 'react'
import { FaGithub } from "react-icons/fa"
import "./projects.css"
import data from "../../assets/data/data.json"
function projects() {
  console.log(data)
  const ProjectData = data.map(project => (
    <div key={project.id} className='project-container'>
      <div className='project-image'>

        <img src={project.image} alt={project.name} />
      </div>
      <div className='project-details'>

        <h2> {project.project} </h2>
        <div className='description-container'>
          <h4>{project.description}</h4>
          </div>
      </div>
      <div className='project-links'>
        <a href={project.github} target="_blank" className='github'>Github</a>
        {project.demo && <a className='demo' target="_blank" href={project.demo}>Demo</a>}
      </div>
    </div>

  ))
  return (
    <div id="project" className='projects'>
      <div className='project-heading top'>
        <h4>My Recent Work</h4>
        <h2>Projects</h2>
      </div>
      <div className='projects-every-container'>
        {
          ProjectData
        }
      </div>
    </div>
  )
}


export default projects