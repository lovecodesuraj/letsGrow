import './App.css';
import Navbar from './components/header/navbar/Navbar';
import Home from './components/main/home/Home';
import { Routes, Route } from "react-router-dom"
import Login from './components/main/account/login/Login';
import Register from './components/main/account/register/Register';

function App() {
  return <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/account/login" element={<Login />} />
        <Route exact path="/account/register" element={<Register />} />
      </Routes>
    </div>
  </>;
}

export default App;
