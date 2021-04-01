import React from 'react'
import Header from './Header'
import './Home.css'
import Services from './Services'
import ServicesCards from './ServicesCards'
import SmallBanner from './SmallBanner'
import DevelopmentSteps from './DevelopmentSteps'
import WhyChooseUs from './WhyChooseUs'
import ScrollCards from './ScrollCards'
import OurPlans from './OurPlans'
import WhatWeDo from "./WhatWeDo";
import Contactus from './Contactus'

function Home() {
    return (
        <div>
            <Header />
            <Services />
            <ServicesCards />
            <SmallBanner 
                bannerhead={"We make the best website that you need !"} 
                bannerbutton={"Contact Us"}
            />
            <DevelopmentSteps />
            <WhyChooseUs />
            <ScrollCards />
            <OurPlans />
            <WhatWeDo />
            <SmallBanner
                bannerhead={"If you want a fast, powerful easily managed website bluewebsurfer is for you."} 
                bannerbutton={"Know Us"}
            />
            <Contactus />
            
        </div>
    )
}

export default Home
