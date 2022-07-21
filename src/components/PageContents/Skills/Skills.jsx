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
                            <li>
                                <i class="fa-brands fa-html5"></i>
                                HTML5
                            </li>
                            <li>
                                <i class="fa-brands fa-css3-alt"></i>
                                CSS3
                            </li>
                            <li>
                                <i class="fa-brands fa-react"></i>
                                React
                            </li>
                            <li>
                                <i class="fa-brands fa-js"></i>
                                JavaScript
                            </li>

                        </ul>
                    </div>
                    <div className="skill-list skills-tools">
                        <h3>Tools</h3>
                        <ul>
                            <li>
                                <i class="fa-brands fa-git-alt"></i>
                                Git
                            </li>
                            <li>
                                <i class="devicon-heroku-original colored"></i>
                                Heroku
                            </li>
                        </ul>
                    </div>
                    <div className="skill-list skills-back-end">
                        <h3>Back-End</h3>
                        <ul>
                            <li>
                                <i class="fa-brands fa-node"></i>
                                Node.js
                            </li>
                            <li>
                                <i class="devicon-express-original"></i>
                                Express
                            </li>
                            <li>
                                <i class="fa-solid fa-cloud"></i>
                                RESTful API
                            </li>
                            <li>
                                <i class="fa-solid fa-leaf"></i>
                                MongoDB
                            </li>
                            <li>
                                <i class="fa-solid fa-database"></i>
                                SQL
                            </li>
                            <li>
                                <i class="devicon-postgresql-plain-wordmark colored"></i>
                                PostgressSQL
                            </li>
                            <li>
                                <i class="fa-brands fa-python"></i>
                                Python
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
