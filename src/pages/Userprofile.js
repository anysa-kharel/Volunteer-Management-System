import React from 'react'
import Navbar from "../components/Navbar1.js";
import Footer from '../components/Footer.js';
import { SlBadge } from 'react-icons/sl';
import profileimage from '../assests/profile.jpg'
import { Link } from 'react-router-dom';
import "../pages/userprofile.css"


const Userprofile = () => {
  return (
    <div>
      <Navbar />
      <section className='user-profile'>
        <div className='leftbar'>
          <div className='photo'>
            {/* <img src={profileimage}></img> */}
            <h1>Namo Sapkota</h1>
            <button>Edit profile</button>
          </div>
          <div className='achieve'>
            <h2>Achievements:</h2> </div>
          <div className='badge'>
            <SlBadge size={40} />
            <SlBadge size={40} />
            <SlBadge size={40} />
          </div>

          <div className='link' >
            <Link className='link-item' to="/userprofile">My Profile</Link>
            <Link className='link-item' to="/my-work">Applied Work</Link>
            <Link className='link-item' to="/fav-work">Favourite Work</Link>
            <Link className='link-item' to="/logout">Logout</Link>
          </div>

        </div>
        <div className='rightbar'>
          <h1>Basic information:</h1>
        <div className='name'>
        <div className='firstname'>
          <h2>First Name:</h2>
          <input type="text"></input>
          </div>
          <div className='lastname'>
          <h2>Last Name:</h2>
          <input type="text"></input>
          </div>
        </div>
         
        </div>
      </section>



      {/* <Footer/> */}

    </div>
  )
}

export default Userprofile
