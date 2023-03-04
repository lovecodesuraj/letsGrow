import './App.css';
import Navbar from './components/header/navbar/Navbar';
import Home from './components/main/home/Home';
import {Routes,Route} from "react-router-dom"
import Auth from './components/main/auth/Auth';

function App() {
  return <>
  <div className='app'>
   <Navbar />
   <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/auth" element={<Auth />}/>
   </Routes>
  </div>
  </>;
}

export default App;
