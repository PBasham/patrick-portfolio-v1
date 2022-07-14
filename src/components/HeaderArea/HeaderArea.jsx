import React from 'react'

import "./HeaderArea.css"

export default function HeaderArea() {
    return (
        <div className="header-area-wrapper">
            <div className="header-div">
                <h1 id="profile-name">Hello, I'm Patrick Basham</h1>
                <h3 id="profile-tagline">Software Engineer</h3>
                <img src="public/imgs/profile_pic.jpg" alt="" />
            </div>
        </div>
    )
}
