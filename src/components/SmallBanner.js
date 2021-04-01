import React from 'react'
import './SmallBanner.css'

function SmallBanner(props) {
    return (
        <div className="smallbanner">
            <h1>{props.bannerhead}</h1>
            <a href="#">{props.bannerbutton}</a>
        </div>
    )
}

export default SmallBanner 
