import React, { useState } from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='navbar'>
        <h3 className='logo'> Logo </h3>
        <div className={toggle? 'nav-links-mobile':"nav-links"} onClick={()=>setToggle(false)}>

        <a className='home'>
            Home
        </a>

        <a className='home'>
            About Us 
        </a>

        <a  className='home'>
            Internship
        </a>

        <a  className='home'>
             Our Youth 
        </a>

        <a  className='home'>
            Program
        </a>

        <a className='home'>
            Contact Us
        </a>

        <a className='home'>
            Login
        </a>
        </div>
        <button className='mobile-menu-icon' onClick={()=>setToggle(!toggle)}>
            {toggle?(
            <CloseIcon />
            ):(
            <MenuIcon />
            )}
        </button>
    </nav>
  )
}

export default Navbar