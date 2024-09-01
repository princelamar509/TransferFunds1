import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <Link to="/" className="logo">MoneyTransfer</Link>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>

  
     
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/transfer" onClick={toggleMenu}>Transfer</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link to="/signin" onClick={toggleMenu}>Sign In </Link>
        <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
      
      </div>
    </nav>
  );
};

export default Navbar;











