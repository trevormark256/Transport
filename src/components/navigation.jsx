import React, { useState } from "react";
import "./navigation.css";

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("#page-top");
  const [isOpen, setIsOpen] = useState(false);  // NEW state for toggle menu

  const handleClick = (href) => {
    setActiveLink(href);
    setIsOpen(false); // close menu when a link is clicked (optional)
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#page-top" className="brand">RICHROY</a>
        <button className="toggle-button" onClick={toggleMenu}>
          ☰
        </button>

        {/* Add a class to show/hide the menu based on isOpen */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className={activeLink === link.href ? "active" : ""}
                onClick={() => handleClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
