import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-me">About Me</Link></li>
        <li><Link to="/practical-works">Practical Works</Link></li>
        <li><Link to="/lab-works">Lab Works</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
