import React from "react";

function Navbar() {
  return (
    <nav className="navbarBlack">
      <img class="nav_logo" src="logo2.svg" alt="logo"></img>
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
      <p>@ Copyright Finsweet 2021</p>
    </nav>
  );
}

export default Navbar;
