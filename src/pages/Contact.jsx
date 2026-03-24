import { Contact } from "lucide-react"
import ContactInfo from "../components/ContactInfo"
import ContactForm from "../components/ContactForm"

 function Contac() {
  return (
    <div className="contact-page">
      <div className="hero">
        <h1 className="hero-heading">Contact Us</h1>
        <div className="hero-underline" />
        <p className="hero-subheading">
          We'd love to hear from you — reach out and we'll respond promptly
        </p>
      </div>

      <div className="content-grid">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}


export default Contac;