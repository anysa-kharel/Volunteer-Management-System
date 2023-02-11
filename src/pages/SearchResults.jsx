import { useState } from "react";
import Volundata from "../components/volundata";
import {FaRegBookmark} from 'react-icons/fa';
import './Enter.css';

const SearchResults = () => {
    const [location, setLocation] = useState("")
    const [field, setField] = useState("")
    const [type, setType] = useState("")
    const [searchData, setSearchData] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        console.log(location, field, type);


        const locationData = Volundata.filter(data => {

            if(!location && !field && !type){
                return(Volundata)
            }

            if(!location){
                return(data.type===type && data.field ===field)
            }

            if(!type){
                return(data.location===location && data.field ===field)
            }

            if(!field){
                return(data.type===type && data.location ===location)
            }

            if(!location && !type){
                return(data.field ===field)
            }

            if(!field && !type){
                return(data.location===location)
            }

            if(!location && !field){
                return(data.type===type)
            }

            else{
                return(data.field===field && data.type===type && data.location === location)
            }

        })
        console.log(locationData)
        setSearchData(locationData)

    }

  return (
    <>
      <h2>Search Results</h2>
      <form >
        <select value={location}  onChange={e => setLocation(e.currentTarget.value)}>
        <option value="">City, State , Zip</option>
      <option value="Kathmandu">Kathmandu</option>
      <option value="Pokhara">Pokhara</option>
      <option value="Baglung">Baglung</option>
      <option value="Butwal">Butwal</option>
        </select>

        <select value={field}  onChange={e => setField(e.currentTarget.value)}>
          <option value="">Sector, Interested field</option>
          <option value="Environment">Environment</option>
          <option value="Business">Business</option>
          <option value="Public health">Public health</option>
          <option value="Engineering">Engineering</option>
        </select>

        <select value={type}  onChange={e => setType(e.currentTarget.value)}>
        <option value="">Select Type</option>
      <option value="Paid">Paid</option>
      <option value="Unpaid">Unpaid</option>
        </select>
        <button onClick={handleClick}>Search</button>
      </form>
      <div>
        {
            searchData.slice(0, 6).map(data => {
                return(
                    <div key={data.id}>
                    Program:{data.program} <br/>
                    Organization:{data.organization} <br/>
                    Date & Time:{data.datentime}<br/>
                    Location:{data.location}<br/>
                    Stipend:{data.stipend}<br/>
                    Type:{data.type}<br/>
                    Duration:{data.duration}<br/>
                        <hr />
                        <br/>
                    </div>
                    
                )
            })
        }
      </div>


        {/* <div className="pro-container">
      {
      searchData.slice(0, 6).map(data => {
        return(
    <>
      <div key={data.id} className="pro-logo">
           Picture Here.
      </div>
 
      <div className="pro-details">
        <div key={data.id} className="book"> <h2>Program:&nbsp;{data.program}</h2><div className="bookmark"><FaRegBookmark/></div></div>
        <div key={data.id}> <h3>Organization:&nbsp;{data.organization}</h3></div>
        <div key={data.id}> <h3>Date & Time:&nbsp;{data.datantime}</h3></div>
        <div key={data.id}> <h3>Location:&nbsp;{data.location}</h3></div>
        <div key={data.id}> <h3>Duration:&nbsp;{data.duration}</h3></div>
        <div key={data.id}> <h3>Type:&nbsp;{data.type}</h3></div>
        <div key={data.id} className="book"> <h3>Stipend:&nbsp;{data.stipend}</h3><div >
           
           <input type="button" value="Want to Join?" className="but"></input>
           </div></div>
      </div>
      </>
        )}
        )
        } 
    </div> */}


    </>
  );
};

export default SearchResults;
