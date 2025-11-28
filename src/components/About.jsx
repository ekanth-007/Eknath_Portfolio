import React from "react";
import img from "../components/img/ekka.jpeg";



export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know more about my journey and expertise</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={img} alt="About" />
          </div>

          <div className="about-text">
            <h3>Full Stack Java Developer</h3>
            <p>
              I'm a passionate Information Technology graduate specializing in full-stack Java development. My journey in technology began with a strong foundation in computer science principles and has evolved into expertise in Java, Spring Boot, React, and modern web technologies.
            </p>
            <p>
              I recently completed an intensive 6-month Full Stack Java Developer course from Seed Infotech Pvt Ltd, where I gained hands-on experience building enterprise-grade applications.
            </p>

            <div className="about-details">
              <div className="detail-item"><i className="fas fa-calendar"></i><span><strong>Age:</strong> 24</span></div>
              <div className="detail-item"><i className="fas fa-graduation-cap"></i><span><strong>Degree:</strong> B.E. Information Technology</span></div>
              <div className="detail-item"><i className="fas fa-map-marker-alt"></i><span><strong>Location:</strong> Pune, Maharashtra</span></div>
              <div className="detail-item"><i className="fas fa-envelope"></i><span><strong>Email:</strong> ekanathchangade@gmail.com</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
