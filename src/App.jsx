import React from 'react'
import Nav from "./Nav";
import "./global.css";
import About from "./About";
import Skills  from './Skills';
import Education from './Education';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (

  
    <Router>
       <Nav/>
      <Routes>
       
        <Route path='/' element={<Home/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        
      </Routes>
    </Router>
  )

}

export default App