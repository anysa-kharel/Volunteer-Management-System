// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import {Routes,Route } from 'react-router-dom';

function App() {
  return (
  <>
  
  <Routes>
    <Route index element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/> 
    <Route exact path="/signup" element={<Signup/>}/> 
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/about" element={<About/>}/>  
  </Routes>
  

  </>
  );
}

export default App;
