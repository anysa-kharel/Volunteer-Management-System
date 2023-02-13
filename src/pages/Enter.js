import React from "react";
import Navbar3 from "../components/Navbar3";
import { useState } from "react";
import "./Enter.css";
import Volundata from "../components/volundata";
import "../components/Form.css";
import { BiSearch } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import Footer from "../components/Footer";

const Enter = () => {
  const [location, setLocation] = useState("");
  const [field, setField] = useState("");
  const [type, setType] = useState("");
  const [searchData, setSearchData] = useState(Volundata);
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
      <Navbar3 />

      {/* Search Bar */}
      <div className="enter">
        <form className="search-barr">
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

        <h2>Recommended for you</h2>
        <h3>Based on your profile and search history.</h3>
      </div>
      {/* Containers */}

      <div className="pro-container">
        {searchData.slice(0, 6).map((data) => {
          const {picture}=data;
          return (
            <>
              <div className="info" key={data.id}>
                <div >
                  <img src={picture} alt="pic" className="pro-logo"/>
                </div>

                <div className="pro-details">
                  <div className="book">
                    {" "}
                    <h2>Program:&nbsp;{data.program}</h2>
                    <div className="bookmark">
                      <FaRegBookmark />
                    </div>
                  </div>
                  <div key={data.id} className="book">
                    {" "}
                    <h3>Organization:&nbsp;{data.organization}</h3>
                  </div>
                  <div key={data.id} className="book">
                    {" "}
                    <h3>Date & Time:&nbsp;{data.datentime}</h3>
                  </div>
                  <div key={data.id} className="book">
                    {" "}
                    <h3>Location:&nbsp;{data.location}</h3>
                  </div>
                  <div key={data.id} className="book">
                    {" "}
                    <h3>Duration:&nbsp;{data.duration}</h3>
                  </div>
                  <div key={data.id} className="book">
                    {" "}
                    <h3>Type:&nbsp;{data.type}</h3>
                  </div>
                  <div className="book">
                    {" "}
                    <h3>Stipend:&nbsp;{data.stipend}</h3>
                    <div>
                      <input
                        type="button"
                        value="Want to Join?"
                        className="but"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        
      </div>

      {/* Footer  */}
      <div className="foot"> <Footer/></div>
      
    </>
  );
};

export default Enter;
