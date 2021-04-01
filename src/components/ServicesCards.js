import React from 'react'
import './ServicesCards.css'
import WebGif from "../assets/img/webd.gif"
import DigitalGif from "../assets/img/digitalm.gif"

function ServicesCards() {
    return (
        <div className="servicescards">
            <div className="servicescards-row">
                <div className="servicescards-img"
                data-aos="fade-right"
                >
                    <img src={WebGif} alt="Web Development"/>
                </div>
                <div className="servicescards-content"
                data-aos="fade-left"
                >
                    <h1 
                    data-aos="fade-left"
                    data-aos-delay="100">Web Development</h1>
                    <p 
                    data-aos="fade-left"
                    data-aos-delay="150">We know that your business is unique and so are our websites. We establish a strong presence of your business in the e-market creative designing team invests energy to comprehend your business objectives & target corner before beginning the outlining process.</p>
                    <button
                    data-aos="fade-left"
                    data-aos-delay="200">Explore More</button>
                </div>
            </div>
            <div className="servicescards-row reverseCards">
                <div className="servicescards-img"
                    data-aos="fade-left">
                    <img src={DigitalGif} alt="Web Development"/>
                </div>
                <div className="servicescards-content"
                    data-aos="fade-right">
                    <h1
                    data-aos="fade-right"
                    data-aos-delay="100">Digital Marketing</h1>
                    <p
                    data-aos="fade-right"
                    data-aos-delay="150">At a high level, digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. Using these online media channels, digital marketing is the method by which companies endorse goods, services, and brands.</p>
                    <button
                    data-aos="fade-right"
                    data-aos-delay="200">Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default ServicesCards
