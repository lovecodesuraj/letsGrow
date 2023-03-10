import LogoutIcon from "@material-ui/icons/ExitToApp"
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import CloseIcon from "@material-ui/icons/Close"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UserImage=({img})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [styles,setStyles]=useState({
         
        user_image_icon:{
            // position:'fixed',
            backgroundImage:`url("${img}")`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            width:"25px",
            height:"25px",
            borderRadius:"5px",
        },
        user_popup_menu:{

            // display:"none",
            minWidth:"10px",
            zIndex:"-10",
            minHeight:"10px",
            position:"absolute",
            top:"82px",
            transition:"0.5s",
            right:"25px",
            borderRadius:"5px",
            //   color:"white"
            color:"rgb(33, 49, 60)",
            backgroundColor:"white",
            padding:"20px",
            fontWeight:"500",
            
          },
          ul:{
              listStyleType:"none",
              width:"100%",
              height:"100%",
              display:"flex",
              flexDirection:"column",
              gap:"10px",
          },
          li:{
          fontfamily: 'Open Sans',
          display:"flex",
          gap:"10px",
          textTransform:"uppercase",
          alignItems:"center",
          fontSize:"15px",
          //   width:"90%",
         },
    })
    const showMenu=(e)=>{
        e.preventDefault();
        setStyles({...styles,user_popup_menu:{...styles.user_popup_menu,zIndex:"10"}})
    }
    const hideMenu=(e)=>{
        e.preventDefault();
        setStyles({...styles,user_popup_menu:{...styles.user_popup_menu,zIndex:"-10"}})
    }

    const setActive=(e)=>{
    e.preventDefault();
    setStyles({...styles,li:{...styles.li,color:"red"}})
    }
    const setInactive=(e)=>{
    e.preventDefault();
    setStyles({...styles,li:{...styles.li,color:""}})
    }
    return<>
       <div className="user_image_icon"  onMouseOver={showMenu} onMouseLeave={hideMenu} style={styles.user_image_icon}></div>
       <div className="user_popup_menu" onMouseLeave={hideMenu} onMouseOver={showMenu} style={styles.user_popup_menu}>
            <ul style={styles.ul}>
                {/* <li style={styles.li} ><CloseIcon onClick={hideMenu}/></li> */}
                <li style={styles.li} ><DashboardIcon />dashboard</li>
                <li style={styles.li}  onClick={(e)=>{e.preventDefault();dispatch({type:"LOGOUT"})}}><LogoutIcon />logout</li>
            </ul>
        </div>
    </>
}

export const UserPopup=()=>{

    const [styles,setStyles]=useState({
        

    })
    return <>

    </>
}