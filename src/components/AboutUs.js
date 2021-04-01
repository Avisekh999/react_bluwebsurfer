import React from 'react'
import './AboutUs.css'
import RootImg from '../assets/img/e7babf69d087de922622169a0a4762ba.jpg'
import PeopleImg from '../assets/img/352dc8ecf3c4ffc76a8512121282f5cc.jpg'


function AboutUs() {
    return (
        <div className="aboutus">
        <div className="about-bg-img about-container">
        <header>
            {/* <div className="about-front-text">
                <h1>Blueweb surfer</h1>
                <h1>specialized in</h1> 
                <h1>customize websites.</h1>
            </div> */}
        </header>
        
    </div>
    <div className="aboutus-content"
    data-aos="fade-up"
    data-aos-deay="100">
        <h1>About Us</h1>
        <p>
            In today's increasingly technology market place, it is critical to keep up with the latest innovations
            and solutions, in oreder to make the most  of your investments and keep your business moving forward. 
            So whether your are new to working with an IT partner, or have worked with one for years, with Blueweb Surfer
            your will find cost-efficient support, guidance and inspiration you need to provide your business with a 
            competitive advantage.  
        </p>
        <div className="aboutus-cards">
            <div className="aboutus-cards-img"
            data-aos="fade-right">
                <img src={RootImg} />
            </div>
            <div className="aboutus-cards-content"
            data-aos="fade-left">
                <p>
                BlueWeb Surfer is a full-service solution provider. We strive to deliver more efficient, effective and relevant quality services and solutions tailored to the increasingly complex demands of organizations, in order to boost the productivity of operations and to maximize value for our customers.
                </p>
            </div>
        </div>
        <div className="aboutus-cards reverse">
            <div className="aboutus-cards-img"
            data-aos="fade-left">
                <img src={PeopleImg} />
            </div>
            <div className="aboutus-cards-content"
            data-aos="fade-right">
                <p>
                BlueWeb Surfer has been formed by a group of professionals having vivid experience and wide exposure in Information Technology. Backed by a team of skilled and experienced developers and designers we are here to help you with your website problems.                </p>
            </div>
        </div>

    </div>
    <div className="promote">
            <p>If you want to create a website on a limited budget, there’s no website builder cheaper than BlueWeb Surfer.</p>
    </div>
    <div className="offer">
        <p>We Offer Website Designing Services at affordable rates.</p>
        <p> We design websites that reflect your products, services and your business positively.</p>
        <p>Our websites are customized to your needs!</p>
    </div>
    </div>
    )
}

export default AboutUs
