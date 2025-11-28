import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import "./Contact.css"; // Make sure to create Contact.css and paste the CSS below

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get("name");
    const email = fd.get("email");
    const subject = fd.get("subject");
    const message = fd.get("message");

    const mailto = `mailto:ekanathchangade@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailto;
    e.target.reset();
    alert(
      "Thank you for your message! Your email client should open with the pre-filled message."
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Let's discuss your next project or opportunity</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 8329274587</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>ekanathchangade@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-briefcase"></i>
              <div>
                <h4>Availability</h4>
                <p>Open for full-time and freelance work</p>
              </div>
            </div>

            {/* Social Media Icons Horizontal */}
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form id="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required />
              </div>

              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
