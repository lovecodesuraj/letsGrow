import React from 'react'
import "./styles.css";
import BGI from "./BGI.png";
import Navbar from '../../header/navbar/Navbar';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const user =JSON.parse(localStorage.getItem('user'));
  return <>
    {/* <Navbar /> */}
    <div className="homeWrapper">
      <div className="home">
        <div className="intro_home" >
          <img src={BGI} className='intro_home_image' alt="" />
           <div className="intro_home_text">
            <h1>making India</h1>
            <p>Welcome to our platform for peaceful expression of opinions. Join us today to support or oppose proposed legislation and make your voice heard. Together, we can reduce the negative impacts of protests and create a brighter future for everyone.</p>
            {/* <button>Join Us</button> */}
            <Button onClick={()=>{!user ? navigate("/account/register") : navigate("/")}}>Join Us</Button>
           </div>
        </div>
      </div>
    </div>
  </>
}

export default Home