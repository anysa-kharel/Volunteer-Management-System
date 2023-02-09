import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';

const Signup = () => {
  return (
   <>
     <div className="container"> 

      {/* image  */}
     <div className="imagee">
        <div className='img'></div>
      </div>

{/* Create account  */}

       <div className='loginn'>
        <div className="log">

          <h2>Create an account!</h2>
          <h3>Please enter your details.</h3>

          <div className="google align ">
            <FcGoogle/> Sign up with Google.
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
           <input type="submit" value="Create account" className="but my-4"/>
           </div>

           <div className="orr last">
          Already have an account? <Link to="/login"> Login Here.</Link>
           </div>

        </div>
       </div>



     

     </div>



   </>
  )
}

export default Signup
