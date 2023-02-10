import './App.css';
import Login from './pages/Login';
import Signup from './pages/User-signup';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Enter from './pages/Enter';
import {Routes,Route } from 'react-router-dom';

function App() {
  return (
  <>
  
  <Routes>
    <Route index element={<Home/>}/>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/> 
    <Route exact path="/enter" element={<Enter/>}/>
    <Route exact path="/user-signup" element={<Signup/>}/> 
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/about" element={<About/>}/>  
  </Routes>
  

  </>
  );
}

export default App;
