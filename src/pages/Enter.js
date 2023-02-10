import React from 'react'
import Navbar3 from '../components/Navbar3'
import { BsSearch } from 'react-icons/bs';
import Form from '../components/Form';
import './Enter.css'
import {Volundata} from "../components/volundata";
import Showresult from './showresultpage';
const Enter = () => {
  return (
    <>
    <Navbar3/>

    <div className="enter">
    <Form/>

    <h2>Recommended for you</h2>
    <h3>Based on your profile and search history.</h3>
    
    <Showresult />
    {/* <Show */}
    </div>
    </>
   
  )
}

export default Enter
