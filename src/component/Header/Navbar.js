import React from 'react';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`}  // Correct way to use the logo from public folder
            alt="Logo"
            className="d-inline-block align-text-top"
            style={{ width: '50px', height: '50px' }}  // Adjust size as needed
          />
        </a>

        {/* Board Education System Text */}
        <div className="navbar-text board-education-system">
          Board Education System
        </div>

        {/* Toggle button for responsive design */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links (Login/Signup and Notes Button) */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-primary notes-btn" onClick={() => {/* Add your click handler here */}}>
                Notes
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-secondary" onClick={() => {/* Add your click handler here */}}>
                Login / Signup
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
