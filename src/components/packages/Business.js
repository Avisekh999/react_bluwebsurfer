import React from 'react'
import './Business.css'

function Business() {
    return (
        <div className="business">
            <div className="business-img about-container">
        <header>
            <div className="business-front-text">
            <h1>Business Package</h1>
            </div>
        </header>
    </div>
    
    <div className="business-cards">
                <div className="business-card"
                data-aos="fade-left">
                    {/* <i className="fa fa-facebook"></i> */}
                    <h1>Silver Package</h1>
                    <h2>&#8377; 5999/-</h2>
                    <ul>
                    <li>1 free domain name</li>
                    <li>Unlimited pages (basic design)</li>
                    <li>Unlimited product listing</li>
                    <li>Business e-mail ID</li>
                    <li>Unlimited images and videos</li>
                    <li>Unlimited bandwidth</li>
                    <li>100% responsive website</li>
                    <li>24/7 customer support</li>
                    <li>Renewal amount Rs.2000</li>
                    <li>Social media integration</li>
                    <li>-</li>
                    <li>30% advance payment</li>
                    <li>1.5 year free service</li>
                    <li>-</li>
                    <li>-</li>
                    <li>Note: 18% GST applicable on all purchase</li>
                    </ul>
                </div>
                <div className="business-card"
                data-aos="fade-left"
                data-aos-delay="100">
                    {/* <i className="fa fa-facebook"></i> */}
                    <h1>Gold Package</h1>
                    <h2>&#8377; 11111/-</h2>
                    <ul>
                        <li>1 free domain name</li>
                        <li>Unlimited pages (basic design)</li>
                        <li>Unlimited product listing</li>
                        <li>Business e-mail ID</li>
                        <li>Unlimited images and videos</li>
                        <li>Unlimited bandwidth</li>
                        <li>100% responsive website</li>
                        <li>24/7 customer support</li>
                        <li>Renewal amount Rs.3500</li>
                        <li>Social media integration</li>
                        <li>Payment Gateway</li>
                        <li>50% advance payment</li>
                        <li>2 year free service</li>
                        <li>C-panel and SSL access</li>
                        <li>Live chat integration</li>
                        <li>Note: 18% GST applicable on all purchase</li>
                    </ul>
                </div>
</div>
        </div>
    )
}

export default Business
