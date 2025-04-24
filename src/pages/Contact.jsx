import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../App.css";

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="main-container">
        <section className="contact-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-text">
            We’d love to hear from you! Whether you have a project idea, need a quote, or just want to say hi, fill out the form below, and we’ll get back to you soon.
          </p>
        </section>
        <div className="contact-form-container">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Your Full Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Your Email Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="form-input"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              id="message"
              className="form-textarea"
              rows="6"
              placeholder="Tell us about your project or question..."
            ></textarea>
          </div>
          <button className="submit-button">Send Message</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}