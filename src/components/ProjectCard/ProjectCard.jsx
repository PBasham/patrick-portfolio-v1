/*========================================
        import dependencies
========================================*/
import React from 'react'
/*========================================
        import styling
========================================*/
import "./ProjectCard.css"

export default function ProjectCard(props) {
  return (
    <div className="project-card">
        <div className="project-card-img">
            <img src={props.img} alt="" />
        </div>
        <div className="project-card-detail">
            <p className="project-card-title">{props.title}</p>
            <p className="project-card-description">{props.description}</p>
        </div>
        <div className="github-detail">
            <a className="card-link" href={props.gitHubLink} target="_blank">
                <i class="devicon-github-original"></i>
           Github Repo
           </a>
           { props.deploymentLink ?  <a className="card-link" href={props.deploymentLink} target="_blank">Deployment</a> 
           : 
            null
           }
        </div>
    </div>
  )
}
