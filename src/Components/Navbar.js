import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="nav-logo-container">
        <h2>Apple</h2>
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
          <button className="primary-button">Shop Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
