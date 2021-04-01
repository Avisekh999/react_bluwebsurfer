import React from 'react';
import "./Services.css";
import WebDevelopment from '../assets/img/webdevelopment.jpg';
import DigitalMarketing from '../assets/img/digitalmarketing.jpg';
import GraphicDesign from '../assets/img/graphicdesign.jpg';
import LogoDesign from '../assets/img/logodesign.jpg';
import SEO from '../assets/img/seo.jpg';
import MobileAppDevelopment from '../assets/img/mobileappdevelopment.jpg';

function Services() {
    return (
        <div className="services">
            <div>
                <h1 
                    data-aos="fade-right"
                >Our Services</h1>
            </div>
            <div className="services-cards">
                <div 
                    data-aos="fade-up"
                    data-aos-delay="100"
                     className="services-card">
                    <div className="services-card-img">
                        <img src={WebDevelopment} />
                    </div>
                    <div className="services-card-content">
                        <h1>Web Development</h1>
                        <p>We make your online presence creatively.</p>
                    </div>
                </div>
                <div 
                    data-aos="fade-up"
                    data-aos-delay="200" 
                    className="services-card">
                    <div className="services-card-img">
                        <img src={DigitalMarketing} />
                    </div>
                    <div className="services-card-content">
                        <h1>Digital Marketing</h1>
                        <p>We make your online presence creatively.</p>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                    className="services-card">
                    <div className="services-card-img">
                        <img src={GraphicDesign} />
                    </div>
                    <div className="services-card-content">
                        <h1>Graphic Design</h1>
                        <p>We make your online presence creatively.</p>
                    </div>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="100"
                    className="services-card">
                    <div className="services-card-img">
                        <img src={LogoDesign} />
                    </div>
                    <div className="services-card-content">
                        <h1>Logo Design</h1>
                        <p>We make your online presence creatively.</p>
                    </div>
                </div>
                <div 
                    data-aos="fade-up"
                    data-aos-delay="100" 
                    className="services-card">
                    <div className="services-card-img">
                        <img src={SEO} />
                    </div>
                    <div className="services-card-content">
                        <h1>SEO</h1>
                        <p>We make your online presence creatively.</p>
                    </div>
                </div>
                <div 
                    data-aos="fade-up"
                    data-aos-delay="200" 
                    className="services-card">
                    <div className="services-card-img">
                        <img src={MobileAppDevelopment} />
                    </div>
                    <div className="services-card-content">
                        <h1>Mobile <br/> App Development</h1>
                        <p>We make your online presence creatively.</p>
                    </div>
                </div>
            </div>
            
            <hr/>

        </div>
    )
}

export default Services
