import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className="bg-img container">
    <header>
    
        <div className="front-text">  
            <h1 
                data-aos="fade-right"
                data-aos-delay="250">
                    Blueweb surfer
                    </h1>
            <h1
                data-aos="fade-right"
                data-aos-delay="350">
                 specialized in
                 </h1> 
            <h1 data-aos="fade-right"
                data-aos-delay="450">
                    customize websites.
                    </h1>
        </div>
        <div className="header-text">
        <h1>
            Professional <span className="design" data-aos="fade-up">design</span> and <span className="development" data-aos="fade-up">development</span><br/>
            company in India.</h1>
        </div>
    </header>
</div>
    )
}

export default Header
