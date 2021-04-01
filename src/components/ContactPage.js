import React from 'react'
import './ContactPage.css'
import Contactus from './Contactus'

function ContactPage() {
    return (
        <div className="contactpage">
             <div className="contact-bg-img contact-container">
        <header>
            {/* <div className="about-front-text">
                <h1>Blueweb surfer</h1>
                <h1>specialized in</h1> 
                <h1>customize websites.</h1>
            </div> */}
        </header>
        
    </div>
            <h1>How to find us</h1>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28513.97149726576!2d88.35085840249226!3d26.704573032773208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e447446ca3cc87%3A0xe78f7395c1fcc50c!2sBlueWeb%20Surfer!5e0!3m2!1sen!2sin!4v1616998349196!5m2!1sen!2sin" 
                width="95%" 
                className="map"
                height="450" 
                style={{border:0}} 
                allowfullscreen="" 
                loading="lazy">  
            </iframe>
            <div className="contact-info">
                <div className="contact-address">
                    <h1>Address</h1>
                    <ul>
                        <li>Phansidewa More (Opp. St joseph more), Shiv Mandir, Siliguri 734011 Dist. Darjeeling.</li>
                        <li>Mobile :<a href="tel:97333479999">97333479999</a></li>
                        <li>Email: <a href="mailto:bluewebsurfer@gmail.com">bluewebsurfer@gmail.com</a></li>
                    </ul>
                </div>
                <div className="contact-form">
                        <h1>Contact Us</h1>
                        <div className="contact-form-card">
                            <div className="contact-form-form">
                                <form action={""}>
                                    <div className="contact-form-name">
                                        <label>Name</label><input type="text" name="name" placeholder="Your name" />
                                    </div>
                                    <div className="contact-form-mail">
                                        <label>Email</label> <input type="email" name="email" placeholder="Your email" />
                                    </div>
                                    <div className="contact-form-phone">
                                        <label>Phone</label> <input type="number" name="phone" placeholder="Phone" />
                                    </div>  
                                    <div className="contact-form-message">
                                        <label>Message</label> 
                                        <textarea type="number" name="phone" placeholder="Your message..."></textarea>
                                    </div>
                                    <div className="contact-form-button">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ContactPage
