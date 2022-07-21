import React from 'react'

import "./HeaderArea.css"

export default function HeaderArea() {
    return (
        <div className="header-area-wrapper">
            <div className="header-div">
                <img src="public/imgs/profile_pic.jpg" alt="" />
                <h1 id="profile-name">Hello,</h1>
                <h3>My name is Patrick Basham.</h3>
                <h3>I am located in Queens, NY.</h3>
                <h3 className="typed-text">I am ...</h3>
            </div>
            <div className="animation-div"></div>
        </div>
    )
}
