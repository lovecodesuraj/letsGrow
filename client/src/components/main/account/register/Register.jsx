import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { clientId } from '../register/login/data';
import brandIcon from "../register/login/green-tea.png";
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { googleLogin } from '../../../../actions/auth';

import "./styles.css"
import { signup, verification } from '../../../../actions/auth';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupError, isLoading } = useSelector(state => state.auth);
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const googleSuccess = async (res) => {
    try {
      const result = await jwt_decode(res.credential);
      const { name, email, sub, picture } = result;
      const token = res.credential;
      dispatch(googleLogin({ name, email, _id: sub, picture, token }, navigate));
    } catch (error) {

      console.log(error);
    }
  }
  const googleFailure = (err) => {
    console.log(err, "Google Sign In was unsuccessfull. Try again later ")
  }
  const register = async (e) => {
    e.preventDefault();
    try {
      dispatch(verification(registerData, navigate));
    } catch (error) {
      console.log(error);
    }
  }
  return <>
    <div className="register">
      <div className="left"></div>
      <div className="right">
        <div className="brand" onClick={()=>{navigate("/")}}>
          <img src={brandIcon} className="brandIcon" alt="" />
          <h2 className='brandName'>VoiceNation</h2>
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
          <p className='partition'>or</p>
          <form onSubmit={register} >

            <p className="signupError">{signupError}</p>
            <div className="input">
              <label htmlFor="email" >Email Address</label>
              <input type="text" name='email' required value={registerData.email} onChange={(e) => { setRegisterData({ ...registerData, email: e.target.value }) }} />
            </div>

            <div className="input">
              <label htmlFor="firtName" >First Name</label>
              <input type="text" name='firstName' required value={registerData.firstName} onChange={(e) => { setRegisterData({ ...registerData, firstName: e.target.value }) }} />
            </div>
            <div className="input">
              <label htmlFor="lastName" >Last Name</label>
              <input type="text" name='lastName' required value={registerData.lastName} onChange={(e) => { setRegisterData({ ...registerData, lastName: e.target.value }) }} />
            </div>
            <div className="input">
              <label htmlFor="password" >Password</label>
              <input type="password" name='password' required value={registerData.password} onChange={(e) => { setRegisterData({ ...registerData, password: e.target.value }) }} />
            </div>
            <div className="input">
              <label htmlFor="confirmPassword" >Confirm Password</label>
              <input type="password" name='confirmPassword' required value={registerData.confirmPassword} onChange={(e) => { setRegisterData({ ...registerData, confirmPassword: e.target.value }) }} />
            </div>
            <div className="submit">
              <Button type="submit" variant={isLoading ? "contained" : "outlined"} className="submitButton" >Sign Up</Button>
              <p>Have an account? <span onClick={() => { navigate("/account/login") }}>Sign In</span></p>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="assist"></div> */}
    </div>
  </>
}

export default Register