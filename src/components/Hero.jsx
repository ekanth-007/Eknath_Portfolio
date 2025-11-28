import React from "react";
import TypingText from "./TypingText";
import img from "../components/img/ekka.jpeg";
import Resume from "../components/Resume/Eknath_Changade_resume.pdf";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Eknath Changade</h1>
            <p className="subtitle">
              I'm a{" "}
              <span className="typing-text">
                <TypingText texts={["Full Stack Java Developer"]} />
              </span>
            </p>

            <p>
              Passionate Full Stack Java Developer with expertise in Spring
              Boot, React, and modern web technologies. I create scalable
              enterprise applications with robust backends and responsive UIs.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                {" "}
                <i className="fas fa-code"></i> View Projects{" "}
              </a>
              <a
                href={Resume}
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fas fa-download"></i> Download Resume{" "}
              </a>
            </div>

            <div className="social-links">
              <a
                href="mailto:ekanathchangade@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://linkedin.com/in/eknath-changade-full-stack-java-developer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/ekanth-007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://wa.me/918329274587"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={img} alt="EC" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
