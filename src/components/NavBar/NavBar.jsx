import React from 'react'

export default function NavBar({ navBarState, toggleActiveNavBtn}) {

    /*========================================
            Functions Start
    ========================================*/
    const handleNavStyleChange = (index) => {
        if (navBarState.links[index] === navBarState.activeLink) {
          return "nav-btn nav-active"
        } else {
          return "nav-btn"
        }
      };

      const handleNavClick = (index) => {
        toggleActiveNavBtn(index)
      }
    /* Functions End */


  return (
    <div className='nav-bar'>
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
  )
}
