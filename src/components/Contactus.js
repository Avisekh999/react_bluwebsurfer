import React from 'react'
import './Contactus.css'
import FormImg from "../assets/img/bram-naus-N1gUD_dCvJE-unsplash.jpg";

function Contactus() {
    return (
        <div className="contactus"> 
            <h1>Contact Us</h1>
            <div className="contactus-card">
                <div className="contactus-form">
                    <form action={""}>
                        <div className="form-name"
                        data-aos="fade-right">
                            <label>Name</label><input type="text" name="name" placeholder="Your name" />
                        </div>
                        <div className="form-mail"
                        data-aos="fade-right">
                            <label>Email</label> <input type="email" name="email" placeholder="Your email" />
                        </div>
                        <div className="form-phone"
                        data-aos="fade-right">
                            <label>Phone</label> <input type="number" name="phone" placeholder="Phone" />
                        </div>  
                        <div className="form-message"
                        data-aos="fade-right">
                            <label>Message</label> 
                            <textarea type="number" name="phone" placeholder="Your message..."></textarea>
                        </div>
                        <div className="form-button"
                        data-aos="fade-up">
                        <button type="submit">Submit</button>
                        </div>
                        
                    </form>
                    <div className="contactus-img"
                    
                    >
                        <img src={FormImg} />
                    </div>
                </div>
               
                
            </div>
        </div>
    )
}

export default Contactus
