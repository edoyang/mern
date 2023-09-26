import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));  // New state
  
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('authToken'));
      setUserRole(localStorage.getItem('userRole')); // Update the role
    };

    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole'); // Remove the role on logout
    setIsLoggedIn(false);
    setUserRole(null);  // Reset the role state
    closeMenu();
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
      <ul ref={menuRef} className={`navbar-list ${menuOpen ? 'open' : ''}`}>
        <li className="navbar-item" onClick={closeMenu}>
          <Link to="/home" className="navbar-link">Home</Link>
        </li>
        {isLoggedIn && userRole === 'admin' ? (
          <li className="navbar-item" onClick={closeMenu}>
            <Link to="/mainapp" className="navbar-link">Main App</Link>
          </li>
        ) : null}
        {isLoggedIn ? (
          <li className="navbar-item" onClick={handleLogout}>
            <span className="navbar-link">Logout</span>
          </li>
        ) : (
          <>
            <li className="navbar-item" onClick={closeMenu}>
              <Link to="/login" className="navbar-link">Login</Link>
            </li>
            <li className="navbar-item" onClick={closeMenu}>
              <Link to="/register" className="navbar-link">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;