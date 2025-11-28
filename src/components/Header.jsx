import React, { useEffect, useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [...document.querySelectorAll("section")];

    const onScroll = () => {
      let current = "";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          current = section.id;
        }
      });

      setActive(current || "home");

      // 🔥 Scroll Header Animation (future GSAP or CSS class)
      const header = document.querySelector("header");
      if (window.scrollY > 100) {
        header.classList.add("scrolled");   // <– add your CSS or GSAP here
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });

    setShowMenu(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">

          {/* LOGO */}
          <a
            href="#home"
            className="logo"
            onClick={(e) => onNavClick(e, "home")}
          >
            Portfolio
          </a>

          {/* NAV MENU */}
          <nav>
            <ul id="nav-menu" className={showMenu ? "show" : ""}>
              {[
                ["home", "Home"],
                ["about", "About"],
                ["education", "Education"],
                ["skills", "Skills"],
                ["projects", "Projects"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link ${active === id ? "active" : ""}`}
                    onClick={(e) => onNavClick(e, id)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="mobile-menu-toggle"
            id="mobile-toggle"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>

        </div>
      </div>
    </header>
  );
}
