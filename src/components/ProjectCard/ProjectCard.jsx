/*========================================
        import dependencies
========================================*/
import React from 'react'
/*========================================
        import styling
========================================*/
import "./ProjectCard.css"

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-card-img">
                <img src={project.img} alt="" />
            </div>
            <div className="project-card-detail">
                <p className="project-card-title">{project.title}</p>
                <p className="project-card-description">{project.description}</p>
                {project.collaboration ?
                    <div className="collaborators">
                        <h3>{`Collaborators:`}&nbsp;</h3>
                        <ul>
                            {project.team.map(member => (
                                <li key={member.id}>
                                    <a key={member.id} href={member.githubLink} target="_blank">
                                    {member.name}{member.id < project.team.length - 1 ? ", " : ""}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    : null}
            </div>
            <div className="github-detail">
                <a className="card-link" href={project.githubLink} target="_blank">
                    <i className="devicon-github-original"></i>
                    Github Repo
                </a>
                {project.deploymentLink ? <a className="card-link" href={project.deploymentLink} target="_blank">Deployment</a>
                    :
                    null
                }
            </div>
        </div>
    )
}
