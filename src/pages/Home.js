import React from 'react'
import Navbar2 from '../components/Navbar2'
import Form from '../components/Form';
import Footer from '../components/Footer'
import { AiOutlinePlus } from 'react-icons/ai';
import { ImUserCheck } from 'react-icons/im';
import { GrOrganization } from 'react-icons/gr';
import { Link } from "react-router-dom";
import './Home.css'
const Home = () => {
  return (
    <>
      <div>
        <section className='image'>
          <Navbar2 />
          <div className='form-comp'>
            <Form />
            <div id='post-button'><a href='#'><h2>Post a Volunteering work here!</h2></a></div>  </div>
        </section>



        <section className='card'>
          <div className='card-item card1 '>
            <a> <AiOutlinePlus size={45} /></a>
            <h1>152</h1>
            <h3>Work added</h3>
          </div>
          <div className='card-item card2'>
            <a> <ImUserCheck size={38} /></a>
            <h1>2000</h1>
            <h3>Active Volunteers</h3>

          </div>
          <div className='card-item card3'>
            <a> <GrOrganization size={38} /></a>
            <h1>98</h1>
            <h3>Active organizations</h3>
          </div>
        </section>

        <section className='categories'>

          <div className='line'></div>
          <h1>Popular Volunteering Categories</h1>
          <div className='categories-item'>

            <Link className="cat-1 no_underline" to="/login">
              <GrOrganization size={38} />
              <h2 >HEALTH</h2>
              <h4>(2 vacancies)</h4>
            </Link>

            <Link className="cat-1 no_underline" to="/login">
              <GrOrganization size={38} />
              <h2 >HEALTH</h2>
              <h4>(2 vacancies)</h4>
            </Link>
            <Link className="cat-1 no_underline" to="/login">
              <GrOrganization size={38} />
              <h2 >HEALTH</h2>
              <h4>(2 vacancies)</h4>
            </Link>
            <Link className="cat-1 no_underline" to="/login">
              <GrOrganization size={38} />
              <h2 >HEALTH</h2>
              <h4>(2 vacancies)</h4>
            </Link>
            <Link className="cat-1 no_underline" to="/login">
              <GrOrganization size={38} />
              <h2 >HEALTH</h2>
              <h4>(2 vacancies)</h4>
            </Link>
            <Link className="cat-1 no_underline" to="/login">
              <GrOrganization size={38} />
              <h2 >HEALTH</h2>
              <h4>(2 vacancies)</h4>
            </Link>
          </div>
        </section>
        <Footer />
      </div>

    </>
  )
}
export default Home;
