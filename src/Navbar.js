import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <img class="nav_logo" src="logo.svg" alt="logo"></img>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" href="/">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/about">
            About Us
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/services">
            Services
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/blog">
            Blog
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="assitance">
        <img className="phone" src="assistance.svg" alt="assistance"></img>
        <div className="road">
          <p className="phone-text">Road Assistance</p>
          <p className="number">18002652452</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
