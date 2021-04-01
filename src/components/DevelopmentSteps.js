import React from 'react'
import './DevelopmentSteps.css'
import CallusGif from '../assets/img/callus.gif'
import DevlopingstepGif from '../assets/img/developingstep.gif'
import DeliveryGif from '../assets/img/delivery.gif'


function DevelopmentSteps() {
    return (
        <div className="developmentsteps">
            <h1>Get your website ready in 3 easy steps.</h1>
            <div className="developmentsteps-cards">
                <div className="developmentsteps-card"
                    data-aos="fade-left">
                    <div className="developmentsteps-card-img">
                        <img src={CallusGif} />
                    </div>
                    <div className="developmentsteps-card-content">
                        <h1>Give us a call</h1>
                    </div>
                </div>
                <div className="developmentsteps-card"
                data-aos="fade-left"
                data-aos-delay="100">
                    <div className="developmentsteps-card-img">
                        <img src={DevlopingstepGif} />
                    </div>
                    <div className="developmentsteps-card-content">
                        <h1>Let our developers handle it</h1>
                    </div>
                </div>
                <div className="developmentsteps-card"
                data-aos="fade-left"
                data-aos-delay="200">
                    <div className="developmentsteps-card-img">
                        <img src={DeliveryGif} />
                    </div>
                    <div className="developmentsteps-card-content">
                        <h1>Get it delivered as promised</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevelopmentSteps
