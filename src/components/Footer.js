import React from "react";
import "../App.css";
import NavbarBlack from "../NavbarBlack";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="column1">
          <h3>
            Get in touch with us <br /> for your service
          </h3>
          <div className="social">
            <img src="facebook.svg" alt="Facebook" />
            <img src="twitter.svg" alt="Twitter" />
            <img src="instagram.svg" alt="Instagram" />
            <img src="linkedin.svg" alt="LinkedIn" />
          </div>
        </div>
        <div className="column2">
          <p>Help line Number</p>
          <h4>1800 265 24 52</h4>
          <p>Address</p>
          <h4>NH 234 Public Square San Francisco 65368</h4>
          <p>We are open</p>
          <h4>Monday to Friday 9:00 AM to 10:00 AM</h4>
        </div>
      </footer>
      <NavbarBlack />
    </div>
  );
}

export default Footer;
