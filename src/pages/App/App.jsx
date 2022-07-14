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
                href: "#content-about",
            },
            {
                id: 1,
                href: "#content-skills",
            },
            {
                id: 2,
                href: "#content-projects",
            },
            {
                id: 3,
                href: "#content-contact",
            },
        ]
    })


    /*========================================
            Functions Start
    ========================================*/
    
    /* Functions END */

    return (
        <div className="App">
            <NavBar navBarState={navBarState} />
            <HomePage />
            <div className="footer-div"></div>
        </div>
    );
}