import React from "react";
import { Link } from "react-router-dom";
import { BiUser } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="main-nav">

                <div className="title">
                    <h2>Volun</h2>
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

            <div className="login">
                <ul className="log-in">
                    <li>
                        <Link className="no_underline hover_item" to="/login">Login <BiUser /></Link>
                    </li>
                    <li>
                        <Link className="no_underline hover_item" to="/signup">Signup <AiOutlineUserAdd /></Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;