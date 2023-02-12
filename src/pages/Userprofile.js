import React from 'react'
import Navbar from "../components/Navbar1.js";
import Footer from '../components/Footer.js';
import { SlBadge } from 'react-icons/sl';
import profileimage from '../assests/profile.jpg'



const Userprofile = () => {
  return (
    <div>
      <Navbar/>
<section className='user-profile'>
    <div className='leftbar'>
        <div className='photo'>
      {/* <img src={profileimage}></img> */}
      
            <button>Edit profile</button>
        </div>
        <div className='achieve'>
            <h2>Achievements:</h2>
            <div className='badge'>
            <SlBadge size={40}/>
            <SlBadge size={40}/>
            <SlBadge size={40}/>



            </div>
        </div>

    </div>
    <div className='rightbar'></div>
</section>



{/* <Footer/> */}

    </div>
  )
}

export default Userprofile
