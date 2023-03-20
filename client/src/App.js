import './App.css';
import Navbar from './components/header/navbar/Navbar';
import Home from './components/main/home/Home';
import { Routes, Route, redirect } from "react-router-dom"
import Discussion from './components/main/discussions/discussion/Discussion';
import Login from './components/main/account/register/login/Login'
import Register from './components/main/account/register/Register';
import Otp from './components/main/account/register/verification/Otp';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import About from './components/main/about/About';
import Votings from './components/main/votings/Votings';
import CreateVotingForm from './components/forms/votings/createVotingForm/CreateVoting';
import Discussions from './components/main/discussions/Discussions';
function App() {
  const navigate=useNavigate();
  const {signupData}=useSelector(state=>state.auth);
  const {authData}=useSelector(state=>state.auth);
  // console.log("authData",authData);
  // localStorage.clear();
  return <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/account/login" element={<Login />} />
        <Route exact path="/account/register" element={<Register />} />
        <Route exact path="/account/verification" element={signupData?<Otp />:<Register />} />
        <Route exact path="/votings" element={<Votings />} />
        <Route exact path="/votings/create" element={<CreateVotingForm />} />
        <Route exact path="/discussions" element={<Discussions />} />
        <Route exact path="/discussions/:_id" element={<Discussion />} />
      </Routes>
    </div>
  </>;
}

export default App;
