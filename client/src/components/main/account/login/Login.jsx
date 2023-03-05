import React, { useState } from 'react';
import "./styles.css";
import jwt_decode from "jwt-decode";
import brandIcon from "./green-tea.png";
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import { clientId } from './data';
import { TextField, Button } from "@material-ui/core";
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [signup, setSignup] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const login=(e)=>{
     e.preventDefault();
     dispatch(login)
  }
  const googleSuccess = async (res) => {
    try {
      const result = await jwt_decode(res.credential);
      const {name,email,sub,picture}=result;
      const token=res.credential;
      //  dispatch(googleLogin({name,email,_id:sub,picture,token},navigate));
      //  navigate("/")
    } catch (error) {

      console.log(error);
    }
  }
  const googleFailure = (err) => {
    console.log(err, "Google Sign In was unsuccessfull. Try again later ")
  }
  return <>
    <div className="auth">
      <div className="left">
        <div className="brand">
          <img src={brandIcon} className="brandIcon" alt="" />
          <h2 className='brandName'>LetsGrow</h2>
        </div>
        <h4 className='loginText'>Log in to your account</h4>
        <div className="googleLogin">

          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={googleSuccess}
              onError={googleFailure}
              // theme="outlined"
              size="large"
              type='icon'
            />
          </GoogleOAuthProvider>
          <span className='googleLoginText'>Google</span>
        </div>
        <div className="manualLogin">
          <p>or</p>
          <div className="emailInput">
            <label htmlFor="email" >Email Address</label>
            <input type="text" name='email'value={loginData.email} onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }} />
          </div>
          <div className="passwordInput">
            <label htmlFor="password" >Password</label>
            <input type="password" name='password' value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }} />
          </div>
        </div>

        <div className="submit">
          <Button variant="contained" onClick={login}>Login</Button>
          <p>Don't have an account? <span onClick={()=>{navigate("/account/register")}}>Sign Up</span></p>
        </div>
      </div>

      <div className="right"></div>
      {/* {signup ?:"signin"} */}
    </div>
  </>
}

export default Auth