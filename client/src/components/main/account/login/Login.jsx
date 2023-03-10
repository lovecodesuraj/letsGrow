import React, { useState } from 'react';
import "./styles.css";
import jwt_decode from "jwt-decode";
import brandIcon from "./green-tea.png";
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import { clientId } from './data';
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../../../actions/auth';
import { signin } from '../../../../actions/auth';

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signup, setSignup] = useState(false);
  const { signinError,isLoading } = useSelector(state => state.auth);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const login = (e) => {
    e.preventDefault();
    dispatch(signin(loginData));
  }
  const googleSuccess = async (res) => {
    try {
      const result = await jwt_decode(res.credential);
      const { name, email, sub, picture } = result;
      const token = res.credential;
      dispatch(googleLogin({ name, email, _id: sub, picture, token }, navigate));
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
        <div className="brand" onClick={()=>{navigate("/")}}>
          <img src={brandIcon} className="brandIcon" alt="" />
          <h2 className='brandName'>VoiceNation</h2>
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
          <p className='partition'>or</p>
          <form onSubmit={login}>
            <p className='errorMessage'>{signinError}</p>
            <div className="emailInput">
              <label htmlFor="email" >Email Address</label>
              <input type="text" required id='email' value={loginData.email} onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }} />
            </div>
            <div className="passwordInput">
              <label htmlFor="password" >Password</label>
              <input type="password"  required id='password' value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }} />
            </div>
            <div className="submit">
              <Button variant={isLoading?"contained":"outlined"} type='submit'>Login</Button>
              <p>Don't have an account? <span onClick={() => { navigate("/account/register") }}>Sign Up</span></p>
            </div>
          </form>
        </div>

      </div>

      <div className="right"></div>
      {/* {signup ?:"signin"} */}
    </div>
  </>
}

export default Auth