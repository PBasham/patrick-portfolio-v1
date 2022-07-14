/*========================================
        Import dependencies
========================================*/
import { useState } from "react";
/*========================================
        Import pages & components
========================================*/
import HomePage from "../HomePage/HomePage";
/*========================================
        import styles
========================================*/
import "../../styles.css"
import NavBar from "../../components/NavBar/NavBar";

export default function App() {

    const [ navBarState, setNavBarState ] = useState({
        activeLink: null,
        links: [
            {
                id: 0,
                name: "About Me",
                href: "#content-about",
            },
            {
                id: 1,
                name: "Skills",
                href: "#content-skills",
            },
            {
                id: 2,
                name: "Projects",
                href: "#content-projects",
            },
            {
                id: 3,
                name: "Contact",
                href: "#content-contact",
            },
        ]
    })


    /*========================================
            Functions Start
    ========================================*/
    const toggleActiveNavBtn = (index) => {
        setNavBarState({
          ...navBarState,
          activeLink: navBarState.links[index]
        });
      };
    /* Functions END */

    return (
        <div className="App">
            <NavBar navBarState={navBarState} toggleActiveNavBtn={toggleActiveNavBtn}/>
            <HomePage />
            <div className="footer-div"></div>
        </div>
    );
}