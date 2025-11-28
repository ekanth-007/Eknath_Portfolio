import React from "react";

const categories = [
  {
    title: "Backend Development",
    icon: "fab fa-java",
    skills: ["Java", "Spring Boot", "Spring Framework", "Hibernate/JPA", "RESTful APIs", "Microservices", "Maven", "Node.js"],
  },
  {
    title: "Frontend Development",
    icon: "fab fa-react",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Angular", "Bootstrap", "Material-UI", "Responsive Design"],
  },
  {
    title: "Database & Cloud",
    icon: "fas fa-database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "AWS Basics", "Docker", "Firebase"],
  },
  {
    title: "Tools & Others",
    icon: "fas fa-tools",
    skills: ["Git & GitHub", "IntelliJ IDEA", "VS Code", "Postman", "Jenkins", "JUnit", "Agile/Scrum", "Problem Solving"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title"><h2>Technical Skills</h2><p>Technologies and tools I work with</p></div>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-category">
              <h3><i className={cat.icon}></i> {cat.title}</h3>
              <div className="skills-list">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
