import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Skills() {
    return (
        <div id="skills" className="href-div">

            <div className="content-div">
                <h1>Skills</h1>
                <div className="skills-wrapper">
                    <div className="skill-list skills-front-end">
                        <h3>Front-End</h3>
                        <ul>
                            <i class="fa-brands fa-html5"></i>
                            <li>HTML5</li>
                            <i class="fa-brands fa-css3-alt"></i>
                            <li>CSS3</li>
                            {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
                            <i class="fa-brands fa-react"></i>
                            <li>React</li>
                            <i class="fa-brands fa-js"></i>
                            <li>JavaScript</li>

                        </ul>
                    </div>
                    <div className="skill-list skills-tools">
                        <h3>Tools</h3>
                        <ul>
                            <i class="fa-brands fa-git-alt"></i>
                            <li>Git</li>
                            <i class="devicon-heroku-original colored"></i>
                            <li>Heroku</li>
                        </ul>
                    </div>
                    <div className="skill-list skills-back-end">
                        <h3>Back-End</h3>
                        <ul>
                            <i class="fa-brands fa-node"></i>
                            <li>Node.js</li>
                            <i class="devicon-express-original"></i>
                            <li>Express</li>
                            <i class="fa-solid fa-cloud"></i>
                            <li>RESTful API</li>
                            <i class="fa-solid fa-leaf"></i>
                            <li>MongoDB</li>
                            <i class="fa-solid fa-database"></i>
                            <li>SQL</li>
                            <i class="devicon-postgresql-plain-wordmark colored"></i>
                            <li>PostgressSQL</li>
                            <i class="fa-brands fa-python"></i>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
