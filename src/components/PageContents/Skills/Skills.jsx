import React from 'react'

export default function Skills() {
    return (
        <div id="skills" className="href-div">

            <div className="content-div">
                <h1>Skills</h1>
                <div className="skills-wrapper">
                    <div className="skill-list skills-front-end">
                        <h3>Front-End</h3>
                        <ul>
                            <li>HTML5</li>
                            <i class="fa fa-html5"></i>
                            <li>CSS3</li>
                            <i class="fa fa-css3-alt"></i>
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
                            <li>RESTful API</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>PostgressSQL</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
