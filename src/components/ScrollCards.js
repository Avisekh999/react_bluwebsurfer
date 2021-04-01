import React from 'react'
import './ScrollCards.css'

function ScrollCards() {
    return (
        <div className="scrollcards">
            <a className="first" href="#">
                <div className="scrollcard one">
                    <h1>Web Development</h1>
                </div>
            </a>
             <a className="second" href="#">
                <div className="scrollcard two">
                    <h1>Digital Marketing</h1>
                </div>
            </a>
            <a className="third" href="#">
                <div className="scrollcard three">
                    <h1>Graphic Design</h1>
                </div>
            </a>
            {/*<a className="fourth" href="#">
                <div className="scrollcard three">
                    <h1>Graphic Design</h1>
                </div>
            </a>
            <a className="fifth" href="#">
                <div className="scrollcard three">
                    <h1>Graphic Design</h1>
                </div>
            </a>
            <a className="sixth" href="#">
                <div className="scrollcard three">
                    <h1>Graphic Design</h1>
                </div>
            </a> */}
        </div>
    )
}

export default ScrollCards
