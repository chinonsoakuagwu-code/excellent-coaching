// Navbar.jsx
// Navigation bar with hamburger menu for mobile

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo 1 light.png'
import './Navbar.css'

function Navbar() {
  // Controls whether mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false)

  // Closes menu when a link is clicked
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Excellent Coaching Logo" />
        </div>

        {/* Desktop links */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/courses" onClick={closeMenu}>Courses</NavLink></li>
          <li><NavLink to="/faculty" onClick={closeMenu}>Faculty</NavLink></li>
          <li><NavLink to="/success-stories" onClick={closeMenu}>Success Stories</NavLink></li>
          <li><NavLink to="/price-list" onClick={closeMenu}>Price List</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
          {/* Enroll Now inside mobile menu */}
          <li className="mobile-enroll">
            <NavLink to="/contact" onClick={closeMenu} className="enroll-btn">Enroll Now</NavLink>
          </li>
        </ul>

        {/* Desktop Enroll Now button */}
        <NavLink to="/contact" className="enroll-btn desktop-enroll">Enroll Now</NavLink>

        {/* Hamburger button - only shows on mobile */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  )
}

export default Navbar