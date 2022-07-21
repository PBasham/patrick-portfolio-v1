import React from 'react'
import Typewriter from "typewriter-effect";


import "./HeaderArea.css"

export default function HeaderArea() {
    return (
        <div className="header-area-wrapper">
            <div className="header-div">
                <img src="public/imgs/profile_pic.jpg" alt="" />
                <h1 id="profile-name">Hello,</h1>
                <h3>My name is Patrick Basham.</h3>
                <h3>I am located in Queens, NY,</h3>
                <div className="typed-text-div">
                    <h3>and I</h3><h3 className="typed-text">

                    <Typewriter
                        onInit={(typewriter) => {
                            // typewriter.typeString("a software engineer.")
                            // .pauseFor(1000)
                            // .deleteAll()
                            // .pauseFor(1000)
                            // typewriter.typeString("always looking to learn more.")
                            // .pauseFor(1000)
                            // .deleteAll()
                            // .start();
                        }}
                        options={{
                            strings: ["am a software engineer.", "am always looking to learn more.", "am highly motivated.", "love to code!"],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                        </h3>
                </div>
            </div>
            <div className="animation-div"></div>
        </div>
    )
}
