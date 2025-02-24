import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='nav-page'>
      <nav>
        <div className="name">
            <h3>Piyush Jha</h3>
        </div>
        <div className="nav-links">
            <a href="">About</a>
            <a href="">Resume</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
            <div className="theme">
        <i class="fa-solid fa-moon"></i>
        <i class="fa-regular fa-sun"></i>
        </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
