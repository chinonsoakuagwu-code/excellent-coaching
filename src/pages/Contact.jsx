import { Contact } from "lucide-react"
import ContactInfo from "../components/ContactInfo"
import ContactForm from "../components/ContactForm"
import classroomImg from '../assets/classroom image.png'


 function Contac() {
  return (
    <div className="contact-page">
      <div
              className="faculty-hero"
              style={{ backgroundImage: `url(${classroomImg})` }}
            >
              <div className="faculty-hero-overlay">
                <p className="faculty-hero-tag">Excellent Coaching</p>
                <h1 className="faculty-hero-title">Contact</h1>
                <div className="faculty-hero-underline"></div>
                <p className="faculty-hero-subtitle">
                  We'd love to hear from you — reach out and we'll respond promptly
                </p>
              </div>
            </div>

      <div className="content-grid">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}


export default Contac;