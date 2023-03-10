import * as api from "../api/index";

export const verification=(data,navigate)=>async (dispatch)=>{
    const {email}=data;
    try {
        
        dispatch({type:"START_LOADING"});
        const otpVerificationResponse=await api.otpVerification(data);
        const {OTP}=otpVerificationResponse.data;
        if(OTP){
            dispatch({type:"OTP",OTP});
            dispatch({type:"SIGNUP_DATA",data:JSON.stringify(data)})
            navigate('/account/verification');
        }
        dispatch({type:"END_LOADING"});
    } catch (error) {
        if(error?.response?.status===409){
            return dispatch({type:"SIGNUP_ERROR",message:error.response.data.message});
        }else if(error?.response?.status===401){
            return dispatch({type:"SIGNUP_ERROR",message:error.response.data.message});   
        }else{
            console.log(error);
        }
    }
} 
export const signup=(signupData,navigate)=>async (dispatch)=>{
    try {
        dispatch({type:"START_LOADING"});
        const response=await api.signup(signupData);
        dispatch({type:"AUTH",response});
        navigate("/");
        dispatch({type:"END_LOADING"});
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
        console.log("loginData",loginData);
        dispatch({type:"START_LOADING"});
        const {data}=await api.googleLogin(loginData);
        dispatch({type:"AUTH",data});
        dispatch({type:"END_LOADING"});
        navigate('/');
    } catch (error) {
        console.log(error);
    }
 }

 export const signin=(signinData,navigate)=>async (dispatch)=>{
     try {
        dispatch({type:"START_LOADING"});
        const {data}=await api.signin(signinData);
        dispatch({type:"AUTH",data});
        dispatch({type:"END_LOADING"});
        navigate("/");
     } catch (error) {
        if(error?.response?.status===404){
            return dispatch({type:"SIGNIN_ERROR",message:error.response.data.message});
        }else if(error?.response?.status===401){
             return dispatch({type:"SIGNIN_ERROR",message:error.response.data.message});   
        }else{
            console.log(error);
        }
     }
 }