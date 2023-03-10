import axios from "axios";

const API=axios.create({baseURL:"http://localhost:5000"});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')){
        req.headers.authorization= `Bearer ${JSON.parse(localStorage.getItem('user'))?.token}`
    }
    return req;
})

// auth apis
export const  signup=(signupData)=>API.post('users/signup',signupData);
export const  otpVerification=(data)=>API.post('users/otpVerification',data);
export const  signin=(signinData)=>API.post('users/signin',signinData);
export const  googleLogin=(loginData)=>API.post('users/googleLogin',loginData);


// bills apis
export const fetchBills=()=>API.get(`/bills`);