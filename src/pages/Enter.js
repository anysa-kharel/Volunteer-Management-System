import React from 'react'
import Navbar3 from '../components/Navbar3'
import { BsSearch } from 'react-icons/bs';
import Select1 from '../components/Select1'
import Select2 from '../components/Select2'
import Select3 from '../components/Select3'
import './Enter.css'

const Enter = () => {
  return (
    <>
    <Navbar3/>

    <div className="enter">
    <div className='search-barr'>
          <div><Select1 /></div>
          <div><Select2 /></div>
          <div><Select3 /></div>
          <div className='search'><BsSearch /></div>
        </div>
      

    <h2>Recommended for you</h2>
    <h3>Based on your profile and search history.</h3>
    
    </div>
    </>
   
  )
}

export default Enter
