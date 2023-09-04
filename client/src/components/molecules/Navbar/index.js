import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Placeholder for your logo */}
        {/* <img src="path_to_your_logo.png" alt="Website Logo" /> */}
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/home" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/mainapp" className="navbar-link">Main App</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="navbar-link">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
