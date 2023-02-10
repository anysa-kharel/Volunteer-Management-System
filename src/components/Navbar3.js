import React from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineUserAdd } from 'react-icons/ai';
import './Navbar.css'
import './Navbar3.css'

const Navbar3 = () => {
    return (
        <>
            <div className="main-nav">

                <div className="title">
                    <Link className="no_underline" to="/home">Volun</Link>
                </div>

                <div className="Menus">
                    <ul className="nav_item">
                        <li>
                            <Link >
                                <div className="dropdown">
                                    <button className="dropbtn no_underline hover_item">Volunteering oppurtunities<i className=""></i></button>
                                    <div className="dropdown-content">
                                        <a href="#">Paid</a>
                                        <a href="#">Unpaid</a>
                                        
                                    </div>
                                </div>
                            </Link>
                    </li>

                    <li>
                        <Link className="no_underline hover_item" to="/about"> About Us</Link>
                    </li>
                    <li>
                        <Link className="no_underline hover_item" to="/contact"> Contact Us </Link>
                    </li>
                </ul>
            </div>

        <div className="icon">
            <div className="noti"><IoMdNotificationsOutline/></div>
            <div className="noti"><AiOutlineUserAdd/>
            <div className="acc">&nbsp; My account</div></div>
             </div>


         
        </div>
        </>
    )
}

export default Navbar3;