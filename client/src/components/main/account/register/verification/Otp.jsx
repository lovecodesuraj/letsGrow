import React, { useState } from 'react';
import brandIcon from "../../login/green-tea.png";
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./styles.css"
import { signup } from '../../../../../actions/auth';

const Otp = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[otp,setOtp]=useState("");
  const [message,setMessage]=useState("Enter the OTP sent to provided email.");
  const {OTP,signupData}=useSelector(state=>state.auth);

  const register=async()=>{
      try {
         if(otp==OTP){
             dispatch(signup(JSON.parse(signupData),navigate));
         }else{
            setMessage("Incorrect OTP.");
         }
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
        <h4 className='loginText'>OTP Verification</h4>

        <div className="manualLogin">
          <div className="input">
            <label htmlFor="otp" >{message}</label>
            <input type="text" name='otp'value={otp} onChange={(e) => { setOtp(e.target.value ) }} />
          </div>

          <div className="submit">
          <Button variant="contained" color='primary' onClick={register}>Verify</Button>
          <p>Incorrect email ? <span onClick={()=>{navigate("/account/register")}}>Change Email </span></p>
        </div>
        </div>
      </div>
      {/* <div className="assist"></div> */}
     </div>
  </>
}

export default Otp;