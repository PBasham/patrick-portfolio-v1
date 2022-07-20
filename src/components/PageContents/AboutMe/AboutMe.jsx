/*========================================
        import dependencies
========================================*/
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function AboutMe() {

    const [myElementIsVisible, setMyElementIsVisible] = useState()
    console.log(myElementIsVisible);
    const myRef = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])



    return (
        <div ref={myRef} id="about" className="href-div">
            <div className="content-div">
                <h1>About Me</h1>
                <div className="profile-pic-two-wrapper" >
                    <div id="profile-pic-two"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}
