import React, { useEffect } from "react";

export default function Education() {
  useEffect(() => {
    const items = document.querySelectorAll(".education-item");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(30px)";
      item.style.transition = "all 0.6s ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, Array.from(items).indexOf(entry.target) * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2>Work Experience</h2>
          <p>Professional experience in IT industry</p>
        </div>

        <div className="experience-item">
          <h3>Software Engineer (Java)</h3>
          <div className="company">Accure Softech Pvt Ltd</div>
          <div className="duration"><i className="fas fa-calendar"></i> 2025 - Present</div>
          <p>Developing and maintaining enterprise-level applications using Java, Spring Boot, React, and modern web technologies.</p>
        </div>

        <div className="section-title">
          <h2>Education & Training</h2>
          <p>My academic background and professional training</p>
        </div>

        <div className="education-timeline">
          <div className="education-item">
            <div className="education-card">
              <h3>Full Stack Java Developer Course</h3>
              <div className="institution">Seed Infotech Pvt Ltd</div>
              <div className="duration"><i className="fas fa-clock"></i> 6 Months Intensive Program</div>
              <p>Comprehensive training in Java ecosystem including Spring Boot, Hibernate, REST APIs, microservices architecture, React.js, and database management.</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-card">
              <h3>Bachelor of Engineering - Information Technology</h3>
              <div className="institution">Engineering College</div>
              <div className="duration"><i className="fas fa-calendar"></i> 2019 - 2023</div>
              <p>Strong foundation in computer science fundamentals, data structures, algorithms, and software engineering.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
