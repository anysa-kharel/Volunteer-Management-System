import React from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./Navbar.css";
import logo from "../assests/logo2.png"

const Navbar = () => {
  // const {user} = useAppContext()
  // const user = false
  return (
    <>
      <div className="main-nav">
        <div className="title">
          <Link className="no_underline" to="/home">
          <img src= {logo} className="logo"/>
          </Link>
        </div>

        <div className="Menus">
          <ul className="nav_item">
            <li>
              <Link>
                <div className="dropdown">
                  <button className="dropbtn no_underline hover_item">
                    Volunteering oppurtunities<i className=""></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Paid</a>
                    <a href="#">Unpaid</a>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link className="no_underline hover_item" to="/about">
                {" "}
                About Us
              </Link>
            </li>
            <li>
              <Link className="no_underline hover_item" to="/contact">
                {" "}
                Contact Us{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div className="login1">
                    <ul className="log-in2">
                        <li>
                            <Link className="no_underline hover_item" to="/login">Login <BiUser size={15} /></Link>
                        </li>
                       
                        <li>
                            {/* <Link> */}
                                <div className="dropdown">
                                    <button className="dropbtn no_underline hover_item">
                                        Signup <AiOutlineUserAdd size={15}/><i className=""></i>
                                    </button>
                                    <div className="dropdown-content signup1">
                                        <Link to="/user-signup">Sign-up as user</Link>
                                        <Link to="/org-signup">Sign-up as organization</Link>
                                        <Link to="/login">Sign-up as others</Link>
                                    </div>
                                </div>
                            {/* </Link> */}
                        </li>
                    </ul>
                </div>

        
      </div>
    </>
  );
};

export default Navbar;
