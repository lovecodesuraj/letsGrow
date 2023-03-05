import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { clientId } from '../login/data';
import brandIcon from "../login/green-tea.png";
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import "./styles.css"
import { signup, verification } from '../../../../actions/auth';

const Register = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {signupError} =useSelector(state=>state.auth);
  const[registerData,setRegisterData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  });
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
  const register=async()=>{
      try {
         dispatch(verification(registerData,navigate));
      } catch (error) {
        console.log(error);
      }
  }
  return <>
     <div className="register">
      <div className="left"></div>
      <div className="right">
      <div className="brand">
          <img src={brandIcon} className="brandIcon" alt="" />
          <h2 className='brandName'>LetsGrow</h2>
        </div>
        <h4 className='loginText'>Create your account</h4>
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
          <p className='partitionLine'>or</p>
          <p className="signupError">{signupError}</p>
          <div className="input">
            <label htmlFor="email" >Email Address</label>
            <input type="text" name='email'value={registerData.email} onChange={(e) => { setRegisterData({ ...registerData, email: e.target.value }) }} />
          </div>

          <div className="input">
            <label htmlFor="firtName" >First Name</label>
            <input type="text" name='firstName' value={registerData.firstName} onChange={(e) => { setRegisterData({ ...registerData, firstName: e.target.value }) }} />
          </div>
          <div className="input">
            <label htmlFor="lastName" >Last Name</label>
            <input type="text" name='lastName' value={registerData.lastName} onChange={(e) => { setRegisterData({ ...registerData, lastName: e.target.value }) }}/>
          </div>
          <div className="input">
            <label htmlFor="password" >Password</label>
            <input type="password" name='password' value={registerData.password} onChange={(e) => { setRegisterData({ ...registerData, password: e.target.value }) }} />
          </div>
          <div className="input">
            <label htmlFor="confirmPassword" >Confirm Password</label>
            <input type="password" name='confirmPassword' value={registerData.confirmPassword} onChange={(e) => { setRegisterData({ ...registerData, confirmPassword: e.target.value }) }} />
          </div>
          <div className="submit">
          <Button variant="contained" onClick={register}>Sign Up</Button>
          <p>Have an account? <span onClick={()=>{navigate("/account/login")}}>Sign In</span></p>
        </div>
        </div>
      </div>
      <div className="assist"></div>
     </div>
  </>
}

export default Register