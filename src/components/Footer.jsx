
import { Link } from 'react-router-dom' // For internal navigation links
import logo from '../assets/lightlogonobg.png'
import './Footer.css'
import ig from '../assets/ig.png'
import fb from '../assets/fb.png'
import lin from '../assets/lin.png'
import X from '../assets/X.png'


function Footer() {
  return (
    // Main footer wrapper - dark charcoal background
    <footer className="footer">

      {/* Top section - 3 columns */}
      <div className="footer-container">

        {/* Left column - logo and tagline */}
        <div className="footer-brand">
          <img src={logo} alt="Excellent Coaching Logo" className="footer-logo" />
          <p className="footer-tagline">Shaping Brilliant Minds Since 2005</p>
          <p className="footer-description">Quality coaching for excellence in every subject</p>
        </div>

        {/* Middle column - quick links */}
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/success-stories">Success Stories</Link></li>
            <li><Link to="/price-list">Price List</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right column - contact and social media */}
        <div className="footer-contact">
          <h4 className="footer-heading">Follow Us</h4>

          {/* Social media icons */}
          <div className="footer-socials">
            <a href="#" className="social-icon"><img src={fb} alt="f" /></a>
            <a href="#" className="social-icon"><img src={lin} alt="in" /></a>
            <a href="#" className="social-icon"><img src={ig} alt="ig" /></a>
            <a href="#" className="social-icon"><img src={X} alt="X" /></a>
          </div>

          {/* Contact details */}
          <p className="footer-contact-item">📧 info@excellentcoaching.com</p>
          <p className="footer-contact-item">📞 +234 801 234 5678</p>
        </div>

      </div>

      {/* Divider line */}
      <div className="footer-divider"></div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>© 2026 Excellent Coaching. All Rights Reserved.</p>
      </div>

    </footer>
  )
}

export default Footer