/*========================================
        import dependencies
========================================*/
import React from 'react'

/*========================================
        import styling
========================================*/
import "./NavBar.css"

export default function NavBar({ navBarState, toggleActiveNavBtn}) {

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
            <a href="#">P</a>
        </div>
        <div className="nav-btns">
        {navBarState.links.map((element, index) => (
            <a
            href={element.href}
            key={index}
            className={handleNavStyleChange(index)}
            onClick={() => {
                handleNavClick(index);
            }}
            >
          {element.name}
        </a>
        ))}
        </div>
    </div>
  )
}
