import { Link } from 'react-router-dom'
import './CTABanner.css'

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <p className="cta-text">Need help choosing the right course?</p>
        <Link to="/contact" className="cta-link">Contact Us →</Link>
      </div>
    </section>
  )
}

export default CTABanner