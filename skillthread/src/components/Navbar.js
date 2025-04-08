
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/TransparentLogo.png';

function Navbar() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src={logo} alt="Skillthread Logo" />
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#team">Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;