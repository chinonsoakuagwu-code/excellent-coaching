import { Link } from 'react-router-dom'
import classroomImg from '../assets/classroom image.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${classroomImg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-brand">Excellent Coaching</p>
          <h1 className="hero-heading">'Shaping Brilliant Minds'</h1>
          <p className="hero-subtitle">
            Excellence in Mathematics, Sciences, Commerce, Languages, Law & Literature
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn-primary">Explore Courses</Link>
            <Link to="/faculty" className="btn-outline">Meet Our Faculty</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero