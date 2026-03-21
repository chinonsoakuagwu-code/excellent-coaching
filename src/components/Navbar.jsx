import { Link } from 'react-router-dom'
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
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
          <li><Link to="/success-stories">Success Stories</Link></li>
          <li><Link to="/price-list">Price List</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <Link to="/contact" className="enroll-btn">Enroll Now</Link>

      </div>
    </nav>
  )
}

export default Navbar