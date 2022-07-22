/*========================================
        Header
========================================*/
import { React, useState } from 'react'
import ProjectCard from "../../ProjectCard/ProjectCard.jsx"

export default function Projects() {
    const [projectsState, setProjectsState] = useState({
        projectDetail: null,
        projectsList: [
            {
                id: 0,
                readyForPortfolio: false,
                title: "Dungeon Fighter",
                img: "https://github.com/PBasham/Dungeon-fighter/blob/main/imgs/ReadMe/wireframe_startScreen.png?raw=true",
                description: "",
                collaboration: false,
                team: [
                    {
                        id: 0,
                        name: "",
                        githubLink: "",
                    },
                ],
                githubLink: "https://github.com/PBasham/Dungeon-fighter",
                deploymentLink: "https://pbasham.github.io/Dungeon-fighter/",
            },
            {
                id: 1,
                readyForPortfolio: false,
                title: "Pokemon-Tracker",
                img: "https://github.com/PBasham/Pokemon-Tracker/blob/main/imgs/readme/PT-MainPage.png?raw=true",
                description: "",
                collaboration: false,
                team: [
                    {
                        id: 0,
                        name: "",
                        githubLink: "",
                    },
                ],
                githubLink: "https://github.com/PBasham/Pokemon-Tracker",
                deploymentLink: false,
            },
            {
                id: 2,
                readyForPortfolio: true,
                title: "LeetRigs",
                img: "https://github.com/PBasham/mern-project-3/blob/main/public/imgs/readMe/header-img.png?raw=true",
                description: "My team and I build out an e-commerce website featuring computer rigs and equipment. I was the lead for this project managing the Github branches, handling the styling and handling aspect of both the front and back end.",
                collaboration: true,
                team: [
                    {
                        id: 0,
                        name: "Bobby Romano",
                        githubLink: "https://github.com/raromano92",
                    },
                    {
                        id: 1,
                        name: "Ian De Leon",
                        githubLink: "https://github.com/IanDLeon",
                    },
                ],
                githubLink: "https://github.com/PBasham/mern-project-3",
                deploymentLink: false,
            },
        ]
    })

    return (
        // <div id="projects" className="href-div">

        <div id="projects" className="content-div">
            <h1>Projects</h1>
            <div className="project-card-wrapper">
                {projectsState.projectsList.map((project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />

                )))
                }
            </div>
        </div>
        // </div>
    )
}
