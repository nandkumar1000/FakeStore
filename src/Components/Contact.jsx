import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact <span>Us</span></h1>
        <p>We'd love to hear from you. Whether you're curious about features, a free trial, or even press—we're ready to answer any and all questions.</p>
      </header>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Address</h3>
              <p>123 FakeStore Street, Jaipur, rj 10001</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 12234563434</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>support@fakestore.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
