import React from 'react'

export default function Skills() {
    return (
        <div id="skills" className="content-div">
            <h1>Skills</h1>
            <div className="skills-wrapper">
                <div className="skill-list skills-front-end">
                    <h3>Front-End</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>React</li>
                        <li>JavaScript</li>

                    </ul>
                </div>
                <div className="skill-list skills-tools">
                    <h3>Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>Heroku</li>
                    </ul>
                </div>
                <div className="skill-list skills-back-end">
                    <h3>Back-End</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>RESTful API</li>
                        <li>Python</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
