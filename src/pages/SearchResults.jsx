import React from "react";
import Navbar3 from "../components/Navbar3";
import { useState } from "react";
import "./Enter.css";
import Volundata from "../components/volundata";
import "../components/Form.css";
import { BiSearch } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";

const SearchResults = (searchData) => {
  // const [searchData, setSearchData] = useState([]);
  const {id,program,picture,datentime,location,duration,stipend}=searchData

  return (
    <>
      <Navbar3 />
  
      {/* Containers */}

      <div className="pro-container">
        {searchData.slice(0, 6).map((data) => {
          return (
            <>
              <div className="info" key={data.id}>
                <div className="pro-logo">
                  <img src={data.picture} alt="pic" />
                </div>

                <div className="pro-details">
                  <div className="book">
                    {" "}
                    <h2>Program:&nbsp;{data.program}</h2>
                    <div className="bookmark">
                      <FaRegBookmark />
                    </div>
                  </div>
                  <div key={data.id}>
                    {" "}
                    <h3>Organization:&nbsp;{data.organization}</h3>
                  </div>
                  <div key={data.id}>
                    {" "}
                    <h3>Date & Time:&nbsp;{data.datantime}</h3>
                  </div>
                  <div key={data.id}>
                    {" "}
                    <h3>Location:&nbsp;{data.location}</h3>
                  </div>
                  <div key={data.id}>
                    {" "}
                    <h3>Duration:&nbsp;{data.duration}</h3>
                  </div>
                  <div key={data.id}>
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
    </>
  );
};

export default SearchResults;
