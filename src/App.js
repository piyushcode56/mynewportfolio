import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Project from './pages/Project';
import resume from './assets/resume.pdf'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode(){
    if(darkMode === false){
      setDarkMode(true);
    } 
    else{
      setDarkMode(false);
    }
  }
  console.log(darkMode);
  return (
    <div className={darkMode ? 'darkModeApp' : 'App'}>
      <nav>
              <div className="name">
                  <Link to={'/'} style={{fontWeight:'bold'}}>Piyush Jha</Link>
              </div>
              <div className="nav-links">
                  <a href="#about">About</a>
                  <a href={resume} download="Piyush_Resume.pdf">Resume</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                  <div className="theme" onClick={handleDarkMode}>
              {
                darkMode
                ?
                <i class="fa-regular fa-sun"></i>
                :
                <i class="fa-solid fa-moon"></i>
              }
              </div>
              </div>
              
            </nav>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/project/:projectname' element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App
