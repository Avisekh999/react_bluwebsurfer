import React from 'react'
import './WebHosting.css'

function WebHosting() {
    return (
        <div className="webhosting">
            <div className="webhosting-img about-container">
        <header>
            <div className="webhosting-front-text">
                <h1>Web Hosting</h1>
            </div>
        </header>
    </div>
    
    <div className="webhosting-cards">
                <div className="webhosting-card"
                data-aos="fade-left">
                    {/* <i className="fa fa-facebook"></i> */}
                    <h1>Basic Package</h1>
                    <h2>&#8377; 1000/-</h2>
                    <ul>
                        <li>10 GB hosting</li>
                        <li>10 e-mail ID</li>
                        <li>100GB Bandwidth</li>
                        <li>10 Databases</li>
                        <li>Renewal amount ₹ 1000</li>
                        <li>Control Panel</li>
                    </ul>
                </div>
                <div className="webhosting-card"
                data-aos="fade-left"
                data-aos-delay="100">
                    {/* <i className="fa fa-facebook"></i> */}
                    <h1>Basic Package</h1>
                    <h2>&#8377; 2100/-</h2>
                    <ul>
                        <li>100 GB Hosting</li>
                        <li>50 email ID</li>
                        <li>100 GB Bandwidth</li>
                        <li>50 Databases</li>
                        <li>Renewal amount ₹ 2100</li>
                        <li>Control Panel</li>
                    </ul>
                </div>
                <div className="webhosting-card"
                data-aos="fade-left"
                data-aos-delay="150">
                    {/* <i className="fa fa-facebook"></i> */}
                    <h1>Basic Package</h1>
                    <h2>&#8377; 3300/-</h2>
                    <ul>
                        <li>Unlimited Hosting</li>
                        <li>Unlimited email ID</li>
                        <li>Unlimited Bandwidth</li>
                        <li>Unlimited Databases</li>
                        <li>Renewal amount ₹ 3300</li>
                        <li>Control Panel</li>
                    </ul>
                </div>
</div>
        </div>
    )
}

export default WebHosting
