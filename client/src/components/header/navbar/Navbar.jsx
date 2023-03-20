import React, { useState ,useEffect} from 'react'
import icon from "./green-tea.png";
import "./styles.css";
import SearchIcon from "@material-ui/icons/SearchSharp";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import UserIcon from "@material-ui/icons/Person"
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserImage, UserPopup } from './parts';
import { Box, IconButton } from '@mui/material';
import { fetchNotifications } from '../../../actions/user';

const Navbar = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
//   const user=true;          
  const user=JSON.parse(localStorage.getItem('user'));
  const {notifications} = useSelector(state=>state.user);
  const {authData}=useSelector(state=>state.auth);
  const [active,setActive]=useState("home");
  useEffect(() => {
    
    user ? dispatch(fetchNotifications({userId:user?._id})) :console.log("no user so no notifications");

  }, [dispatch])
  
  return <>
    <div className="navbar">
    <div className="brand" onClick={()=>{navigate("/")}}>
          <img src={icon} className="brandIcon" alt="" />
          <h2 className='brandName'>VoiceNation</h2>
        </div>
        <div className="tools">
            <div className="navItems">
                <ul>
                    {/* <li className={active==="home"?"activeNavItem":""} onClick={()=>{navigate("/");setActive("home")}}>home</li> */}
                    <li className={active==="votings"?"activeNavItem":""} onMouseEnter={()=>{setActive("votings")}} onClick={()=>{setActive("votings"); navigate("/votings")}}>votings</li>
                    <li className={active==="discussions"?"activeNavItem":""} onMouseEnter={()=>{setActive("discussions")}} onClick={()=>{setActive("discussions")}}>discusssions</li>
                    <li className={active==="about"?"activeNavItem":""} onMouseEnter={()=>{setActive("about")}} onClick={()=>{setActive("about");navigate("/about")}}>about</li>
                </ul>
            </div>
            <div className="searchBar" >
                <input type="text"  className='search'/>
                    <SearchIcon className='searchIcon' />
            </div>
            <div className="userSide">
                {user ?
                 <> 
                    <div className="notifications"><NotificationIcon /><span className='notificationsCount'>{notifications.length}</span></div>
                    <div className="user" style={{backgroundImage:`url("")`}} onClick={()=>{}}> 
                        {!user?.picture ? <UserIcon /> : 
                        <>
                        <Box sx={{backgroundImage:`url("${user?.picture}")`,width:"22px",borderRadius:"5px",backgroundSize:"cover",backgroundPosition:"center", height:"22px"}}></Box>
                        </> }   
                    </div>
                </> :
                <><Button variant="text" size='small' onClick={()=>{navigate("/account/login");}}  >SIGN IN</Button> </>}
            </div>
        </div>
    </div>
  </>
}

export default Navbar