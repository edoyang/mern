import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { Gap } from '../../atoms';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Placeholder for your logo */}
        {/* <img src="path_to_your_logo.png" alt="Website Logo" /> */}
      </div>
      <button onClick={toggleMenu} className="menu-toggle">
        &#9776; {/* Hamburger icon */}
      </button>
      <ul ref={menuRef} className={`navbar-list ${menuOpen ? 'open' : ''}`}> {/* Attach the ref here */}
        <li className="navbar-item" onClick={closeMenu}>
          <Link to="/home" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item" onClick={closeMenu}>
          <Link to="/mainapp" className="navbar-link">Main App</Link>
        </li>
        <li className="navbar-item" onClick={closeMenu}>
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
        <li className="navbar-item" onClick={closeMenu}>
          <Link to="/register" className="navbar-link">Register</Link>
        </li>
      </ul>
    </nav>
);
}


export default Navbar;
