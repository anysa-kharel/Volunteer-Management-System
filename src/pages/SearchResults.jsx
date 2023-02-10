import { useState } from "react";
import Volundata from "../components/volundata";

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
                setSearchData(Volundata)
            }
            // return (data.location === location && data.type === type)
        })
        // console.log(locationData);
        // setSearchData(locationData)
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
                        {data.program}
                        {data.organization}
                        {data.location}
                        {data.type}
                        <hr />
                    </div>
                )
            })
        }
      </div>
    </>
  );
};

export default SearchResults;
