import React from 'react'
import "./Form.css"
import { BiSearch } from 'react-icons/bi';

const Form = () => {
  return (
    <form >
    <select>
    <option value="">City, State , Zip</option>
    <option value="Kathmandu">Kathmandu</option>
    <option value="Pokhara">Pokhara</option>
    <option value="Baglung">Baglung</option>
    <option value="Butwal">Butwal</option>
    </select>
    
    <select >
      <option value="">Sector, Interested field</option>
      <option value="Environment">Environment</option>
      <option value="Business">Business</option>
      <option value="Public health">Public health</option>
      <option value="Engineering">Engineering</option>
    </select>
    
    <select >
    <option value="">Select Type</option>
    <option value="Paid">Paid</option>
    <option value="Unpaid">Unpaid</option>
    </select>
    <button ><BiSearch size={20}/></button>
    </form>
  )
}

export default Form







