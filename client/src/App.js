import './App.css';
import Navbar from './components/header/navbar/Navbar';
import Home from './components/main/home/Home';
import { Routes, Route, redirect } from "react-router-dom"
import Login from './components/main/account/login/Login';
import Register from './components/main/account/register/Register';
import Otp from './components/main/account/register/verification/Otp';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import About from './components/main/about/About';
import Bills from './components/main/catalogs/bills/Bills';

function App() {
  const navigate=useNavigate();
  const {signupData}=useSelector(state=>state.auth);
  const {authData}=useSelector(state=>state.auth);
  // console.log("authData",authData);

  return <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/account/login" element={<Login />} />
        <Route exact path="/account/register" element={<Register />} />
        <Route exact path="/account/verification" element={signupData?<Otp />:<Register />} />
        <Route exact path="/catalogs" element={<Bills />} />
      </Routes>
    </div>
  </>;
}

export default App;
