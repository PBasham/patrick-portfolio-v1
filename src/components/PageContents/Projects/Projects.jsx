/*========================================
        import dependencies
========================================*/
import { React, useState } from 'react'
import ProjectCard from "../../ProjectCard/ProjectCard.jsx"



/*========================================
        ref to skills
========================================*/
/*
<i className="fa-brands fa-css3-alt"></i>
<i className="fa-brands fa-html5"></i>
<i className="fa-brands fa-js"></i>
<i className="fa-brands fa-react"></i>
<i className="fa-brands fa-git-alt"></i>
<i className="devicon-heroku-original colored"></i>
<i className="fa-brands fa-node"></i>
<i className="devicon-express-original"></i>
<i className="fa-solid fa-cloud"></i>
<i className="devicon-mongodb-plain colored"></i>
<i className="fa-solid fa-database"></i>
<i className="devicon-postgresql-plain-wordmark colored"></i>
<i className="fa-brands fa-python"></i>
*/

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
                technologies: [
                    <i className="fa-brands fa-css3-alt"></i>,
                    <i className="fa-brands fa-html5"></i>,
                    <i className="fa-brands fa-js"></i>
                ],
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
                description: "Pokemon-Tracker makes use of a free pokemon api to populate the ''pokedex'' with amost 1,000 pokemon. From this pokedex you as a user can view stats for an individual pokemon as well as create a team of up to 5 pokemon of your choice, name it and share it for anyone to be able to view.",
                technologies: [
                    <i className="fa-brands fa-css3-alt"></i>,
                    <i className="fa-brands fa-html5"></i>,
                    <i className="fa-brands fa-js"></i>,
                    <i className="fa-brands fa-node"></i>,
                    <i className="devicon-express-original"></i>,
                    <i className="fa-solid fa-cloud"></i>,
                    <i className="devicon-mongodb-plain colored"></i>,
                ],
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
                technologies: [
                    <i className="fa-brands fa-css3-alt"></i>,
                    <i className="fa-brands fa-html5"></i>,
                    <i className="fa-brands fa-js"></i>,
                    <i className="fa-brands fa-react"></i>,
                    <i className="fa-brands fa-git-alt"></i>,
                    <i className="fa-solid fa-cloud"></i>,
                    <i className="devicon-mongodb-plain colored"></i>,
                ],
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
