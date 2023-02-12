import React from 'react'
import Navbar2 from '../components/Navbar2'
import Form from '../components/Form';
import Footer from '../components/Footer'
import { AiOutlinePlus } from 'react-icons/ai';
import { ImUserCheck } from 'react-icons/im';
import { GrOrganization } from 'react-icons/gr';
import { Link } from "react-router-dom";
import './Home.css'
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Volundata from "../components/volundata";
import SearchResults from './SearchResults';
const Home = () => {

  const [location, setLocation] = useState("");
  const [field, setField] = useState("");
  const [type, setType] = useState("");
  const [searchData, setSearchData] = useState([]);
const [click, setClick] = useState(false);

const handleClick = (e) => {
  setClick(true);
  e.preventDefault();
  console.log(location, field, type);
  console.log(!location, !type);

  const locationData = Volundata.filter((data) => {
    if (!location && !field && !type) {
      return Volundata;
    } else if (!location && !type) {
      return data.field === field;
    } else if (!field && !type) {
      return data.location === location;
    } else if (!location && !field) {
      return data.type === type;
    } else if (!location) {
      return data.type === type && data.field === field;
    } else if (!type) {
      return data.location === location && data.field === field;
    } else if (!field) {
      return data.type === type && data.location === location;
    } else {
      return (
        data.field === field &&
        data.type === type &&
        data.location === location
      );
    }
  });
  console.log(locationData);
  setSearchData(locationData);
 
};

  return (
    <>
      <div>
        <section className='image'>
          <Navbar2 />
          <div className='form-comp'>
          <div> <h1>"Connecting Kindness, Streamlining Volunteering"</h1>
        <form >
          <select
            value={field}
            onChange={(e) => setField(e.currentTarget.value)}
          >
            <option value="">Sector, Interested field</option>
            <option value="Environment">Environment</option>
            <option value="Business">Business</option>
            <option value="Public health">Public health</option>
            <option value="Technology">Technology</option>
            <option value="Others">Others</option>
          </select>

          <select
            value={location}
            onChange={(e) => setLocation(e.currentTarget.value)}
          >
            <option value="">City, State , Zip</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Baglung">Baglung</option>
            <option value="Butwal">Butwal</option>
          </select>

          <select value={type} onChange={(e) => setType(e.currentTarget.value)}>
            <option value="">Select Type</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>

          <button onClick={handleClick}>
            <BiSearch size={20} />
          </button>
        </form>
        </div> 


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
