import React from 'react'
import './WhyChooseUs.css'


function WhyChooseUs() {
    return (
        <div className="whychooseus">
            <h1>Why choose us</h1>     
            <div className="whychooseus-cards">
                <div className="whychooseus-card"
                data-aos="fade-up"
                >
                    <div className="whychooseus-card-img">
                        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                    </div>
                    <div className="whychooseus-card-content">
                        <h1>Highly Optimized</h1>
                        <p>The websites we make are highly optimized & mobile
                            friendly that auto adapt to device screens.
                        </p>
                    </div>
                </div>
                <div className="whychooseus-card"
                data-aos="fade-up"
                data-aos-delay="100">
                    <div className="whychooseus-card-img">
                    <i class="fa fa-wrench" aria-hidden="true"></i>
                    </div>
                    <div className="whychooseus-card-content">   
                        <h1>Services & Reliability</h1>
                        <p>We’re quick to response to the clients need & Delivering services and solutions right for business.
                        </p>
                    </div>
                </div>
                <div className="whychooseus-card"
                data-aos="fade-up"
                data-aos-delay="200">
                    <div className="whychooseus-card-img">
                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                    </div>
                    <div className="whychooseus-card-content">
                        <h1>Superior Support</h1> 
                        <p>
                            Customer satisfaction always stand first in our priority list that's why we are available 24/7.
                        </p>
                    </div>
                </div>
                <div className="whychooseus-card"
                data-aos="fade-up"
                data-aos-delay="500">
                    <div className="whychooseus-card-img">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    </div>
                    <div className="whychooseus-card-content">
                    <h1>Affordable Prices</h1>
                    <p>
                        We are always able offer our customers the widest range of services at the best prices
                    </p>
                    </div>
                </div>
                <div className="whychooseus-card"
                data-aos="fade-up"
                data-aos-delay="400">
                    <div className="whychooseus-card-img">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <div className="whychooseus-card-content">
                    <h1>Certified Developer</h1>
                    <p>
                        No worrying as we have an certified , experienced and expert development team members.
                    </p>
                    </div>
                </div>
                <div className="whychooseus-card"
                data-aos="fade-up"
                data-aos-delay="300">
                    <div className="whychooseus-card-img">
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    </div>
                    <div className="whychooseus-card-content">
                    <h1>Advanced Technology</h1>
                    <p>
                        we are up to date on the market trends & follow advanced and cutting edge technology.
                    </p>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default WhyChooseUs
