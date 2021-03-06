/*========================================
        Import dependencies
========================================*/
import React from 'react'
import { useInView } from 'react-intersection-observer'
/*========================================
        import pages & components
========================================*/
import HeaderArea from "../../components/HeaderArea/HeaderArea";
import AboutMe from "../../components/PageContents/AboutMe/AboutMe.jsx"
import Skills from "../../components/PageContents/Skills/Skills.jsx"
import Projects from "../../components/PageContents/Projects/Projects.jsx"
import Contact from "../../components/PageContents/Contact/Contact.jsx"
/*========================================
        Import Styling
========================================*/
import "./HomePage.css"
import "../../components/PageContents/PageContents.css"

export default function HomePage() {
const { ref: myRef, inView: myElementIsVisible } = useInView()

    return (
        <>
            <HeaderArea />
            {/* <div className="header-area-bottom-bar"></div> */}
            <div ref={myRef} className="content-wrapper">
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    )
}
