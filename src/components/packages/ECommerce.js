import React from 'react'
import './ECommerce.css'

function ECommerce() {
    return (
        <div className="ecommerce">
            <div className="ecommerce-img ecommerce-container">
        <header>
            <div className="ecommerce-front-text">
                <h1>Ecommerce Package</h1>
            </div>
        </header>
        
    </div>
            {/* <h1>Ecommerce Package</h1> */}
            <div className="ecommerce-cards">
                <div className="ecommerce-card"
                data-aos="fade-left">
                    {/* <i className="fa fa-facebook"></i> */}
                    <h1>Gold Package</h1>
                    <h2>&#8377; 10999/-</h2>
                    <ul>
                        <li>1 free domain name</li>
                        <li>5/8 pages (basic website)</li>
                        <li>Limited product listing</li>
                        <li>Unlimited e-mail Id</li>
                        <li>Limited image & videos</li>
                        <li>Unlimited bandwidth</li>
                        <li>Renewal amount Rs.3499</li>
                        <li>Socia media integration</li>
                        <li>Live chat integration</li>
                        <li>Payment gateway</li>
                        <li>24/7 customer support</li>
                        <li>Hosting provided separately</li>
                        <li>Note: 18% GST applicable on all purachse</li>
                    </ul>
                </div>
                <div className="ecommerce-card"
                data-aos="fade-left"
                data-aos-delay="100">
                    {/* <i className="fa fa-facebook"></i> */}
                    <h1>Platinum</h1>
                    <h2>&#8377; 19999/-</h2>
                    <ul>
                    <li>1 free domain name</li>
                    <li>Unlimited pages (dynamic website)</li>
                    <li>Unlimited product listing</li>
                    <li>Unlimited email ID</li>
                    <li>Unlimited images and videos</li>
                    <li>Unlimited bandwidth</li>
                    <li>Renewal amount Rs.3999</li>
                    <li>Social media integration</li>
                    <li>Live chat integration</li>
                    <li>Payment Gateway</li>
                    <li>24/7 customer support</li>
                    <li>Hosting provided separately</li>
                    <li>Note: 18% GST applicable on all purchase</li>
                    </ul>
                </div>
                </div>
        </div>
    )
}

export default ECommerce
