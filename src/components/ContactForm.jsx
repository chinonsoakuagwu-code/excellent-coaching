import { Link } from "react-router-dom";
import { useState } from "react";
import './Contact.css'

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <div className="form-group">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="form-select"
        >
          <option>General Inquiry</option>
          <option>Course Information</option>
          <option>Enrollment</option>
          <option>Support</option>
        </select>
      </div>
      <div className="form-group">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
          rows={5}
          className="form-input form-textarea"
        />
      </div>
      <button type="submit" className="submit-btn">
        {submitted ? "✓ Message Sent!" : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;