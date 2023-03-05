import * as api from "../api/index";

export const verification=(data,navigate)=>async (dispatch)=>{
    const {email}=data;
    try {

        const otpVerificationResponse=await api.otpVerification(data);
       
        const {OTP}=otpVerificationResponse.data;
        if(OTP){
           dispatch({type:"OTP",OTP});
           dispatch({type:"SIGNUP_DATA",data:JSON.stringify(data)})
           navigate('/account/verification');
        }
    } catch (error) {
        if(error.response.status===409){
            return dispatch({type:"SIGNUP_ERROR",message:error.response.data.message});
        }else if(error.response.status===401){
             return dispatch({type:"SIGNUP_ERROR",message:error.response.data.message});   
        }else{
            console.log(error);
        }
    }
 } 
 export const signup=(signupData,navigate)=>async (dispatch)=>{
    try {
        const response=await api.signup(signupData);
        dispatch({type:"AUTH",response});
        navigate("/");
    } catch (error) {
        if(error.response.status===401){
            return dispatch({type:"SIGNUP_ERROR",message:error.response.data.message});
         }else{
            console.log(error);
         }
    }
 }

 export const googleLogin=(loginData,navigate)=>async (dispatch)=>{
    try {
        const response=await api.googleLogin(loginData);
        dispatch({type:"AUTH",response});
        navigate('/');
    } catch (error) {
        console.log(error);
    }
 }

 export const signin=(signinData,navigate)=>async (dispatch)=>{
     try {
        const {data}=await api.signin(signinData);
        dispatch({type:"AUTH",data});
        navigate("/");
     } catch (error) {
        
     }
 }