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
                    <p>I'm a Software Engineer based in New York with a background in electrical construction. After almost 6 years in the electrical industry—from the warehouse to the field then the office—I finally took a leap to leave my job and go towards something I am truly passionate about. I'm always trying to find more efficient ways to do things and always welcome the challenge of learning something new. Becoming a software engineer has given me the opportunity to always learn and advance my skills to overcome challenges that come my way.</p>
                </div>
            </div>
        </div>
        // </div>
    )
}
