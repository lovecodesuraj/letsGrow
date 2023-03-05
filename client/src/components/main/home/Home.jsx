import React from 'react'
import "./styles.css";
import BGI from "./homeBGI.png";

const Home = () => {
  return <>
    <div className="homeWrapper">
     <div className="home" style={{backgroundImage:`url("${BGI}")`}}>
      {/* <div className="gradientWrapper"></div> */}
     </div>
    </div>
  </>
}

export default Home