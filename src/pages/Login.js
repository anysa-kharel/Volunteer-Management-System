import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';

const Login = () => {
  return (
   <>
     <div className="container">

       <div className='loginn'>
        <div className="log">

          <h2>Welcome back!</h2>
          <h3>Please enter your details.</h3>

          <div className="google align ">
            <FcGoogle/> Log in with Google.
          </div>
          
          <div className='orr'>
            <ul className="or ">
              <li className="line"/>
              <li>or</li>
              <li className="line"/>
            </ul>
          </div>

          <div>
            <input type="email" className="email my-2" value="Email"/>
            </div>
            <div>
            <input type="password" className="email my-2" value="Password"/>
            </div>           



           
           <div >
            <ul className="orr or">
              <li> <input type="checkbox"></input> Remember Me </li>
              <li> Forgot Password?</li>
              </ul>
           </div>

           <div >
           <input type="submit" value="Log In" className="but my-4"/>
           </div>

           <div className="orr last">
          Don't have an account? <Link to="/signup">Sign up for free.</Link>
           </div>

        </div>
       </div>



      <div className="imagee">
        <div className='img'></div>
      </div>

     </div>



   </>
  )
}

export default Login
