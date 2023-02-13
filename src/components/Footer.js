import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

import { TiSocialFacebookCircular } from 'react-icons/ti';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import logo from "../assests/logo2.png"


const Footer = () => {
    return (

        <footer>
            <div id="comp1">
                <div id="title">
                <Link className="no_underline" to="/home">
          <img src= {logo} className="logo"/>
          </Link>
                    <p className="intro"> Connect is an volunteer-focused platform started with the main focus of helping volunteer to get oppurtunities to help.</p>
                </div>
                <div className='about-company footer-comp'>
                    <h2>About Title</h2>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us </Link>
                    <Link to="#">Terms and condition</Link>
                    <Link to="#">Privacy Policy-Title</Link>
                    <Link to="#">FAQ's</Link>
                </div>
                <div className='volunteer footer-comp'>
                    <h2>For volunteer</h2>
                    <Link to="#">Work Listing</Link>
                    <Link to="#">How to apply? </Link>
                    <Link to="/login">Login</Link>
                    <Link to="#">Signup</Link>
                </div>
                <div className='organization footer-comp'>
                    <h2>For organization</h2>
                    <Link to="#">Post a work</Link>
                    <Link to="#">How to post? </Link>
                </div>

            </div>
            <div className='line'></div>

            <div className='lastline'>
                <h5>Copyright ©️ All Rights Reserved.</h5>
                <div className="followus">
                    <h5>Follow us:</h5>
                    <Link to="https://www.facebook.com/"><TiSocialFacebookCircular size={20} /></Link>
                    <Link to="https://www.linkedin.com/"><TiSocialLinkedinCircular size={20} /></Link>
                    <Link to="https://www.instagram.com/"><TiSocialInstagram size={20} /></Link>
                    <Link to="https://www.twitter.com/"><TiSocialTwitterCircular size={20} /></Link>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
