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
                    <p>I'm a Software Engineer based in New York with a background in electrical construction. After almost 5 years in the electrical industry from the warehouse to the field then the office, I finally took a leap with a lot of help from my wife to leave my job and go towards something I felt I would be truly passionate about. I'm always trying to find more efficent ways to do things and always welcome the challange of learning somehting new. Becoming a software engineer has given me the oppurtunity to always learn and advance my skills to overcome challanges that come my way.</p>
                </div>
            </div>
        </div>
        // </div>
    )
}
