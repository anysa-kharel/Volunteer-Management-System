import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import loginimage from '../assests/volun.jpg'

const Signup = () => {
  return (
   <>
     <div className="containerr"> 

      {/* image  */}
      <div className="imagee">
        <div className='img'><img src={loginimage}></img></div>
      </div>

     

{/* Create account  */}

       <div className='signup'>
        <div className="log">

          <h2>Create an account!</h2>
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
            <input type="password" className="email my-2" value="" placeholder='Password'/>
            </div>         



           
            <div className='orr_or'>
              <div className='checkbox'><input type ="checkbox"/><h3 className='my-1 mmm' style={{fontSize:'14px'}}>&nbsp;&nbsp;Remember Me</h3></div>
              <h3 className='my-1'>Forgot Password?</h3>

            </div>

           <div >
           <input type="submit" value="Create account" className="but my-4"/>
           </div>

           <div className="orr last">
          Already have an account? <Link className="no_underline"to="/login"> &nbsp; Login Here.</Link>
           </div>

        </div>
       </div>



     

     </div>



   </>
  )
}

export default Signup
