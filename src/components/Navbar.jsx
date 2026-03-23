import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/Darklogonobg.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          <img src={logo} alt="Excellent Coaching Logo" />
        </div>

          <ul className="navbar-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/faculty">Faculty</NavLink></li>
          <li><NavLink to="/success-stories">Success Stories</NavLink></li>
          <li><NavLink to="/price-list">Price List</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>

        <Link to="/contact" className="enroll-btn">Enroll Now</Link>

      </div>
    </nav>
  )
}

export default Navbar