import React from "react";

const projects = [
  {
    title: "My Portfolio",
    desc: "My Portfolio page.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive", "Bootstrap"],
    live: "https://eknath-portfolio.vercel.app",
    repo: "https://github.com/ekanth-007/Eknath-Portfolio",
    icon: "fas fa-briefcase",
  },
  {
    title: "Blogging Website",
    desc: "A modern, full-stack blogging platform built with React, Node.js, Express.js, and MongoDB Atlas.",
    tech: ["React", "Node.js", "Express.js", "WebSocket", "MongoDB Atlas"],
    live: "https://my-alpha-infiniti.vercel.app",
    repo: "https://github.com/ekanth-007/my",
    icon: "fas fa-blog",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured e-commerce application built with Spring Boot backend and React frontend.",
    tech: ["Spring Boot", "Thymeleaf", "MySQL", "Hibernate", "Stripe API", "Spring Security"],
    live: "#",
    repo: "#",
    icon: "fas fa-shopping-cart",
  },
  {
    title: "Banking Management System",
    desc: "Secure banking application with Spring Security, transaction management, and admin features.",
    tech: ["Spring Boot", "Spring Security", "Hibernate", "MySQL", "Thymeleaf"],
    live: "#",
    repo: "#",
    icon: "fas fa-chart-line",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title"><h2>Featured Projects</h2><p>Some of my recent work showcasing Full Stack Java expertise</p></div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-image"><i className={p.icon}></i></div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.live} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
