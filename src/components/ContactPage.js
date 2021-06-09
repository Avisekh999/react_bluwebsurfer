import React, {useState} from 'react'
import './ContactPage.css'
import axios from 'axios'

function ContactPage() {


    const url="http://localhost:5000/api/contact"
    const [data, setData] = useState({
        name: "",
        email:"",
        mobileNumber:"",
        message:""

    })

    function submit(e){
        e.preventDefault(); 
        axios.post(url,{
            name: data.name,
            email:data.email,
            mobileNumber:data.mobileNumber,
            message:data.message
            
        })
        .then(res => {
            console.log(res.data)
        })
    }

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
         
    }
   
   
    

    return (
        <div className="contactpage">
             <div className="contact-bg-img contact-container">
        <header>
            <div className="contact-front-text">
                <h1>Reseller Services</h1>
            </div>
        </header>
        
    </div>
            {/* <h1>How to find us</h1> */}
            
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
                        <h1>Enquiry For Reseller Services</h1>
                        <div className="contact-form-card">
                            <div className="contact-form-form">
                                <form action={""} onSubmit={(e)=> submit(e)}>
                                    <div className="contact-form-name">
                                        <label>Name</label><input type="text" id="name" onChange={(e)=>handle(e)} value={data.name} placeholder="Your name" />
                                    </div>
                                    <div className="contact-form-mail">
                                        <label>Email</label> <input type="email" id="email" onChange={(e)=>handle(e)} value={data.email} placeholder="Your email" />
                                    </div>
                                    <div className="contact-form-phone">
                                        <label>Phone</label> <input type="number" id="mobileNumber" onChange={(e)=>handle(e)} value={data.mobileNumber} placeholder="Phone" />
                                    </div>  
                                    <div className="contact-form-message">
                                        <label>Message</label> 
                                        <textarea type="text" id="message" onChange={(e)=>handle(e)} value={data.message} placeholder="Your message..."></textarea>
                                    </div>
                                    <div className="contact-form-button">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28513.97149726576!2d88.35085840249226!3d26.704573032773208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e447446ca3cc87%3A0xe78f7395c1fcc50c!2sBlueWeb%20Surfer!5e0!3m2!1sen!2sin!4v1616998349196!5m2!1sen!2sin" 
                width="95%" 
                className="map"
                height="450" 
                style={{border:0}} 
                allowfullscreen="" 
                loading="lazy">  
            </iframe>
        </div>
    )
}

export default ContactPage
