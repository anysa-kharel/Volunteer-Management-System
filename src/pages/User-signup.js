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
          <br/>

          <div className="google align ">
            <FcGoogle/>&nbsp;&nbsp; Log in with Google.
          </div>
          


          <div className='orr'>
            <div className='line'></div>
            <div className='or'>or</div>
            <div className='line'></div>
          </div><br/>




        <div className="in">
          <div className='name'>
            <div><input type="text" className="namefill" value="" placeholder='First Name'/></div>
            <div><input type="text" className="namefill" value="" placeholder='Last Name'/></div>
          </div>

          <div>
            <input type="email" className="emaill " value="" placeholder='Email'/>
            </div>
            <div>
            <input type="password" className="emaill " value="" placeholder='Password'/>
            </div>
            <div>
            <input type="password" className="emaill " value="" placeholder='Confirm Password'/>
            </div><br/>
            </div>  



          <div className="field">Interested Fields:</div>
          <div className="fie">
            <div><input type="radio" className=""/>&nbsp;Environment</div>
            <div><input type="radio" className=""/>&nbsp;Business</div>
            <div><input type="radio" className=""/>&nbsp;Public Health</div>
            <div><input type="radio" className=""/>&nbsp;Engineering</div>
          </div><br/>


           
            <div className='orr_or'>
              <div className='checkbox'><input type ="checkbox"/>
              <h3 className='my-1 mmm' style={{fontSize:'14px'}}>&nbsp;&nbsp;By clicking, you agree to our 
              <Link className='no_underline' to="#">&nbsp;terms & conditions.</Link>
              </h3></div>
            </div><br/>



           <div >
           <input type="submit" value="Create account" className="but my-4"/>
           </div><br/>



           <div className="orr last">
          Already have an account? <Link className="no_underline blue-text"to="/login"> &nbsp; Login</Link>
           </div>



        </div>
       </div>



     

     </div>



   </>
  )
}

export default Signup
