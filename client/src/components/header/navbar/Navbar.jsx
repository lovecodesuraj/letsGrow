import React, { useState } from 'react'
import icon from "./green-tea.png";
import "./styles.css";
import SearchIcon from "@material-ui/icons/SearchSharp";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import UserIcon from "@material-ui/icons/Person"
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
//   const user=true;          
  const user=JSON.parse(localStorage.getItem('user'));
  const [active,setActive]=useState("home");
  return <>
    <div className="navbar">
        <div className="brand">
            <img src={icon} alt="letsGrow" />
        </div>
        <div className="tools">
            <div className="navItems">
                <ul>
                    <li className={active==="home"?"activeNavItem":""} onClick={()=>{navigate("/");setActive("home")}}>home</li>
                    <li className={active==="catalogs"?"activeNavItem":""} onClick={()=>{setActive("catalogs")}}>catalogs</li>
                </ul>
            </div>
            <div className="searchBar" >
                <input type="text"  className='search'/>
                    <SearchIcon className='searchIcon' />
            </div>
            <div className="userSide">
                {user ?
                 <> 
                    <div className="notifications"><NotificationIcon /><span className='notificationsCount'>2</span></div>
                    <div className="user" style={{backgroundImage:`url("")`}} onClick={()=>{}}> 
                        {!user?.image ? <UserIcon /> : "" }
                    </div>
                </> :
                <Button variant='outlined' size='small' onClick={()=>{navigate("/auth"); setActive("signin")}} className={active==="signin"?"activeNavItem":""} >SIGN IN</Button>}
            </div>
        </div>
    </div>
  </>
}

export default Navbar