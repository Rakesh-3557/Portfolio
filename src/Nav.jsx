import React from 'react'
import { Link } from 'react-router-dom'
import rakesh from "../src/rsources/rakesh.jpg"
import Contact from './Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Nav = () => {
  return (
    <div>
    <nav className='mainnav'>
        <div className='divphoto'> 
        <img  className="divphoto" src={rakesh} alt="" />
        </div>
        <div className='divnav1'>
          
        <Link to={"/"}> 
        <img  className="navhomeimg" src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png" alt="" /></Link>
        </div>
        <div className='divnav2' >
          <Link to={"/Skills"} style={{textDecoration:"none"}}>Skills</Link></div>

        <div className='divnav3'>
          <Link to={"/About"}style={{textDecoration:"none"}}>About</Link>
        </div>
        <div className='divnav4'>

        <Link to={"/Education"}style={{textDecoration:"none"}}>Education</Link>
          
        </div>
        <div className='divnav4'>

        <Link to={"/Projects"}style={{textDecoration:"none"}}>Projects</Link>
          
        </div>
        <div className='divnav4'>

        <Link to={"/Contact"}style={{textDecoration:"none"}}>Contact</Link>
          
        </div>
       
       
        </nav>
        
        </div>
  )
}

export default Nav