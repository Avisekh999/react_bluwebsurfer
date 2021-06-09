import React, {useState} from 'react'
import './Contactus.css'
import FormImg from "../assets/img/bram-naus-N1gUD_dCvJE-unsplash.jpg";
import axios from "axios"


function Contactus() {

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
        <div className="contactus"> 
            <h1>Contact Us</h1>
            <div className="contactus-card">
                <div className="contactus-form">
                    <form action={""} onSubmit={(e)=> submit(e)}>
                        <div className="form-name"
                        data-aos="fade-right">
                            <label>Name</label><input type="text" value={data.name} onChange={(e)=>handle(e) } id="name" placeholder="Your name" />
                        </div>
                        <div className="form-mail"
                        data-aos="fade-right">
                            <label>Email</label> <input type="email" value={data.email} onChange={(e)=>handle(e) } id="email" placeholder="Your email" />
                        </div>
                        <div className="form-phone"
                        data-aos="fade-right">
                            <label>Phone</label> <input type="number" value={data.mobileNumber} onChange={(e)=>handle(e) } id="mobileNumber" placeholder="Phone" />
                        </div>  
                        <div className="form-message"
                        data-aos="fade-right">
                            <label>Message</label> 
                            <textarea type="text" id="message" value={data.message} onChange={(e)=>handle(e) } placeholder="Your message..."></textarea>
                        </div>
                        <div className="form-button"
                        data-aos="fade-up">
                        <button  type="submit">Submit</button>
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
