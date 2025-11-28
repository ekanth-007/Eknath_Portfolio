import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} <strong>Eknath Changade</strong>.  
          All rights reserved. Built with passion and modern technologies ❤️
        </p>
      </div>
    </footer>
  );
}
