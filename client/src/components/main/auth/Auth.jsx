import React, { useState } from 'react';
import "./styles.css";

const Auth = () => {
    const [signup,setSignup]=useState(false);
  return <>
   <div className="auth">
   {signup ?"signup":"signin"}
   </div>
  </>
}

export default Auth