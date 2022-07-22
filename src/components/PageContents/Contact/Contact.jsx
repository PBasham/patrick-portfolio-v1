import React from 'react'

export default function Contact() {
    return (

        // <div id="contact" className="href-div">
            <div id="contact" className="content-div">
                <h1>Contact Me</h1>
                <form className="contact-form" action="https://formsubmit.co/1297a0fa1a7f93e4f761fce3583a363c" method="POST">
                    <input id="email" type="email" name="email" placeholder="your email"/>
                    <input id="name" type="text" name="name" placeholder="name"/>
                    <textarea id="message" name="message" rows="4" placeholder="message"></textarea>
                    <button className="shake" type="submit">Send Email</button>
                </form>
            </div>
        // </div>
    )
}
