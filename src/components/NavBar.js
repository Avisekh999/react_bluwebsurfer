import React from 'react'
import {useState} from 'react'
import './NavBar.css';
import CompanyLogo from "../assets/img/BluewebSurferLogo.gif";
import {Link} from 'react-router-dom'


function NavBar() {
    // const [isExpanded, setExpanded] = useState('false');

    const [navbarOpen, setNavbarOpen] = useState(false)

    // function makeResponsive(){
    //         var x = document.getElementById("myId");
    //         if (x.className === "nav-menu") {
    //           x.className += " responsive";
    //         } else {
    //           x.className = "nev-menu";
    //         }

    // }
    return (
        <nav>
        <div className="logo">
            <img src={CompanyLogo} alt="BluewebSurferLogo" />
        </div>
        <div className="nav-menu" id="myId">
            <ul> 
                {/* <li><a href="javascript:void(0);" className="icon">
                    <i className="fa fa-bars"></i>
                    
                  </a></li> */}
                <li><Link to="/">Home</Link></li>
                <li className="dropdown">
                    <div className="dropdownbtn">Services</div>
                    <div className="dropdown-content">
                        <a href="#">Payment Gateway Ad &#8377; 2199/-</a>
                        <a href="#">Website Maintainance &#8377; 2199/month</a>
                        <a href="#">Content Writing &#8377; 449/page</a>
                    </div>    
                </li>
                <li><Link to="/about-us">About</Link></li>
                <li className="dropdown">
                    <div className="dropdownbtn">Our Plan</div>
                    <div className="dropdown-content">
                        {/* <a href="#">Static Website</a> */}
                        {/* <a href="#">Dynamic Website</a> */}
                        <Link to="/ecommerce">E-commerce Website</Link>
                        <Link to="/business">Business Website</Link>
                        <Link to="/web-hosting">Web Hosting</Link>
                        <Link href="#">Logo Design</Link>
                    </div>    
                </li>
                <li><a href="#">Demo</a></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/token">Token</Link></li>
               
            </ul>
        </div>
    </nav>

    )
}

export default NavBar
