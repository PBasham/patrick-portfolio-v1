/*========================================
        import dependencies
========================================*/
import React from 'react'
import { Link } from "react-scroll"
import { animateScroll as scroll } from 'react-scroll';
/*========================================
        import styling
========================================*/
import "./NavBar.css"

export default function NavBar({ navBarState, toggleActiveNavBtn }) {

    /*========================================
            Functions Start
    ========================================*/
    const handleNavStyleChange = (index) => {
        // if (navBarState.links[index] === navBarState.activeLink) {
        //   return "nav-btn nav-active"
        // } else {
        return "nav-btn"
        // }
    };

    const handleNavClick = (index) => {
        toggleActiveNavBtn(index)
    }
    /* Functions End */


    return (
        <div className='nav-bar'>
            <div className="nav-logo">
                <Link
                    onClick={scroll.scrollToTop}
                >
                    P
                </Link>
            </div>
            <div className="nav-btns">
                {navBarState.links.map((element, index) => (
                    <Link
                        to={element.href}
                        key={index}
                        className={handleNavStyleChange(index)}
                        onClick={() => {
                            handleNavClick(index);
                        }}
                        smooth={true}
                        duration={1000}
                    >
                        {element.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}
