import React from 'react'
import Navbar from '../components/Navbar'
import Select1 from '../components/Select1'
import Select2 from '../components/Select2'
import Select3 from '../components/Select3'
import { BsSearch } from 'react-icons/bs';
import './Home.css'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='image'>
        <div className='search-bar'>
          <div><Select1/></div>
          <div><Select2/></div>
          <div><Select3/></div>
          <div className='search'><BsSearch/></div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
