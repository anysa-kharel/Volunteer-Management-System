import React from 'react'
import Navbar2 from '../components/Navbar2'
import Select1 from '../components/Select1'
import Select2 from '../components/Select2'
import Select3 from '../components/Select3'
import { BsSearch } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { ImUserCheck } from 'react-icons/im';
import { GrOrganization } from 'react-icons/gr';
import './Home.css'
const Home = () => {
  return (
    <>
      <section className='image'>
        <Navbar2 />
        <div className='search-bar'>
          <div><Select1 /></div>
          <div><Select2 /></div>
          <div><Select3 /></div>
          <div className='search'><BsSearch /></div>
        </div>
      </section>

      <section className='card'>
        <div className='card-item card1 '>
          <a> <AiOutlinePlus size={45} /></a>
          <h1>152</h1>
          <h3>Work added</h3>
        </div>
        <div className='card-item card2'>
          <a> <ImUserCheck size={38}/></a>
          <h1>2000</h1>
          <h3>Active Volunteers</h3>

        </div>
        <div className='card-item card3'>
          <a> <GrOrganization size={38}/></a>
          <h1>98</h1>
          <h3>Active organizations</h3>
        </div>
      </section>

    </>
  )
}

export default Home
