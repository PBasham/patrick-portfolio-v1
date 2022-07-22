/*========================================
        import dependencies
========================================*/
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function AboutMe() {
    const [onScreen, setOnScreen] = useState(false)
    const { ref: myRef, inView: myElementIsVisible } = useInView()
    console.log(myElementIsVisible);
    useState(() => {

    }, [myElementIsVisible])
    return (
        // <div ref={myRef} id="about" className="href-div">
        <div id="about" className={`content-div`}>
            <h1>About Me</h1>
            <div className="about-innercontent-wrapper">
                <div className="about-picture">
                </div>
                <div className="content-about">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
        // </div>
    )
}
