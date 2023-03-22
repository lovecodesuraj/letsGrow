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
export const sendNotification=(formData)=>API.post('users/sendNotification',formData);
export const fetchNotifications=({userId})=>API.get(`users/fetchNotifications/${userId}`);



// discussions

export const fetchDiscussions=()=>API.get(`/discussions`);
export const fetchDiscussion=({_id})=>API.get(`/discussions/${_id}`);
export const joinDiscussion=({userId,_id})=>API.patch(`/discussions/${_id}/join`,{userId});
export const leaveDiscussion=({userId,_id})=>API.patch(`/discussions/${_id}/leave`,{userId});
export const fetchDefaultDiscussion=({userId})=>API.get(`/discussions/default/${userId}`);
export const  fetchJoinedDiscussions=({userId})=>API.get(`/discussions/joined/${userId}`);
export const saveMessage=(formData)=>API.patch(`discussions/saveMessage`,formData);



//votings

export const fetchVotings=()=>API.get('/votings');
export const fetchVoting=({_id})=>API.get(`/votings/${_id}`);
export const fetchSearchedVotings=(formData)=>API.post('/votings/search',formData);
export const fetchMyVotings=(formData)=>API.post('votings/myVotings',formData);
export const fetchMySubscribedVotings=(formData)=>API.post('/votings/subscribedVotings',formData);
export const createVoting=(formData)=>API.post('/votings/create',formData);
export const addApproval=(formData)=>API.patch('/votings/addApproval',formData);
export const addDisapproval=(formData)=>API.patch('/votings/addDisapproval',formData);
export const subscribe=(formData)=>API.patch('/votings/subscribe',formData);
export const deleteVoting=({votingId})=>API.delete(`/votings/delete/${votingId}`);



