import { Link } from 'react-router-dom'
import './Contact.css'

function ContactInfo() {
  return (
    <div className="info-card">
      <div className="info-row">
        <span className="info-icon">📍</span>
        <span>12 Excellence Avenue, Victoria Island, Lagos</span>
      </div>
      <div className="info-row">
        <span className="info-icon">✉️</span>
        <a href="mailto:info@excellentcoaching.com" className="info-link">
          info@excellentcoaching.com
        </a>
      </div>
      <div className="info-row">
        <span className="info-icon">📞</span>
        <span>+234 801 234 5678</span>
      </div>
      <div className="info-row">
        <span className="info-icon">🕐</span>
        <span>
          <strong>Office hours</strong>
          <br />
          Monday - Saturday: 8am - 6pm
        </span>
      </div>
      <div className="map-box">
        <iframe
          title="Excellent Coaching Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.4210!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDIuMiJOIDPCsDI1JzE1LjYiRQ!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
          width="100%"
          height="160"
          style={{ border: 0, borderRadius: 8 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default ContactInfo;