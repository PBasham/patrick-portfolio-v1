import React from 'react'

export default function Contact() {
    return (

        <div id="contact" className="href-div">
            <div className="content-div">
                <h1>Contact Me</h1>
                <form className="contact-form" action="https://formsubmit.co/patricktbasham@email.com" method="POST">
                    <input id="name" type="text" name="name" placeholder="name"/>
                    <input id="email" type="email" name="email" placeholder="your email"/>
                    <textarea id="message" name="message" rows="4" placeholder="message"></textarea>
                    <button type="submit">Send Email</button>
                </form>
            </div>
        </div>
    )
}
