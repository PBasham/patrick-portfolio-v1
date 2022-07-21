import React from 'react'
import Typewriter from "typewriter-effect";


import "./HeaderArea.css"

export default function HeaderArea() {
    return (
        <div className="header-area-wrapper">
            <img className="profile-img" />
            <div className="header-div">
                <h1 id="profile-name">Hello,</h1>
                <h3>My name is Patrick Basham.</h3>
                <h3>I am located in Queens, NY,</h3>
                <h3>and I...</h3>
                <div className="typed-text-div">
                    <h3 className="typed-text">
                        <Typewriter
                            options={{
                                strings: ["am a software engineer.", "am always looking to learn more.", "am highly motivated.", `love to code!`],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                </div>
                <div className="profile-links">
                    <a id="link-github" className="profile-link" href="https://github.com/PBasham" target="_blank">
                        <i class="fa fa-github"></i>
                    </a>
                    <a id="link-linkedin" className="profile-link" href="https://www.linkedin.com/in/patrickbasham/" target="_blank">
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="animation-div"></div>
        </div>
    )
}
