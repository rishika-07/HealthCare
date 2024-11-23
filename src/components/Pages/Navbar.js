import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <div className="navbar">
            <div className="left-menu">
          <div className="logo">
            <a href="/" className="left-menu">
              <h2>Healthcare</h2>
            </a>
          </div>
          </div>
          <div className="right-menu">
            <button className="toggle-button" onClick={toggleDarkMode}>
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
          <div className="hamburger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

