import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Skills() {
    return (
        // <div id="skills" className="href-div">

        <div id="skills" className="content-div">
            <h1>Skills</h1>
            <div className="skills-wrapper">
                <div className="skill-list skills-front-end">
                    <h3>Front-End</h3>
                    <ul>
                        <li>
                            <i className="fa-brands fa-css3-alt"></i>
                            CSS3
                        </li>
                        <li>
                            <i className="fa-brands fa-html5"></i>
                            HTML5
                        </li>
                        <li>
                            <i className="fa-brands fa-js"></i>
                            JavaScript
                        </li>
                        <li>
                            <i className="fa-brands fa-react"></i>
                            React
                        </li>
                    </ul>
                </div>
                <div className="skill-list skills-tools">
                    <h3>Tools</h3>
                    <ul>
                        <li>
                            <i className="fa-brands fa-git-alt"></i>
                            Git
                        </li>
                        <li>
                            <i className="devicon-heroku-original colored"></i>
                            Heroku
                        </li>
                    </ul>
                </div>
                <div className="skill-list skills-back-end">
                    <h3>Back-End</h3>
                    <ul>
                        <li>
                            <i className="devicon-express-original"></i>
                            Express
                        </li>
                        <li>
                            <i className="devicon-mongodb-plain colored"></i>
                            MongoDB
                        </li>
                        <li>
                            <i className="fa-brands fa-node"></i>
                            Node.js
                        </li>
                        <li>
                            <i className="devicon-postgresql-plain-wordmark colored"></i>
                            PostgreSQL
                        </li>
                        <li>
                            <i className="fa-brands fa-python"></i>
                            Python
                        </li>
                        <li>
                            <i className="fa-solid fa-cloud"></i>
                            RESTful API
                        </li>
                        <li>
                            <i className="fa-solid fa-database"></i>
                            SQL
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        // </div>
    )
}
