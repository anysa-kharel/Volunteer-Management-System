import React from "react";
import {Link} from "react-router-dom";
import {BiUser} from 'react-icons/bi';
import {AiOutlineUserAdd}from 'react-icons/ai'; 
import './Navbar.css'

const Navbar=()=>{
    return(
        <>
        <div className="main-nav">

            <div className="title">
                <h2>Volun</h2>
            </div>

            <div className="Menus">
                <ul>
                    <li>
                    <Link > Voluntering Opportunities</Link>
                    </li>
                    <li>
                    <Link to="/about"> About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact"> Contact Us </Link>
                    </li>
                </ul>
            </div>

            <div className="login">
                 <ul>
                    <li>
                        <Link to="/login">Login <BiUser/></Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup <AiOutlineUserAdd/></Link>
                    </li>
                 </ul>
                 </div>
        </div>
        </>
    )
}

export default Navbar;