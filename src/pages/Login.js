import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import loginimage from '../assests/volun.jpg'

const Login = () => {
  return (
   <>
     <div className="containerr">

       <div className='loginn'>
        <div className="log">

          <h2>Welcome back!</h2>
          <h3>Please enter your details.</h3>

          <div className="google align ">
            <FcGoogle/>&nbsp;&nbsp; Log in with Google.
          </div>
          
          <div className='orr'>
            <div className='line'></div>
            <div className='or'>or</div>
            <div className='line'></div>
          </div>

          <div>
            <input type="email" className="email my-2" value="" placeholder='Email'/>
            </div>
            <div>
            <input type="password" className="email my-2" value="" placeholder='password'/>
            </div>           



           

            <div className='orr_or'>
              <div className='checkbox'><input type ="checkbox"/><h3 className='my-1 mmm' style={{fontSize:'14px'}}>&nbsp;&nbsp;Remember Me</h3></div>
              <h3 className='my-1'>Forgot Password?</h3>

            </div>



       

           <div >
           <input type="submit" value="Log In" className="but my-4"/>
           </div>

           <div className="orr last" style={{fontSize:'14px'}}>
          Don't have an account? <Link to="/signup" className='no_underline'>&nbsp;Sign up for free.</Link>
           </div>

        </div>
       </div>



      <div className="imagee">
        <div className='img'><img src={loginimage}></img></div>
      </div>

     </div>



   </>
  )
}

export default Login
