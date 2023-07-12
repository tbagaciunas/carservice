import React from "react";
import Button from "../components/Button";
import "../App.css";
function contact() {
  return (
    <div>
      <div className="quote-section2">
        <div className="column1">
          <div className="services">
            <p>Address</p>
            <h5>NH 234 Public Square San Francisco 65368</h5>
            <p>Contact Details</p>
            <h5>1800 265 24 52 Finsweet@gmail.com</h5>
            <p>Opening Hours</p>
            <h5>Monday to Friday 9:00 AM to 10:00 AM</h5>
          </div>
        </div>
        <div className="column2">
          <h2>Get in touch with our experts</h2>
          <div className="input-fields">
            <input type="text" placeholder="Enter your location" />
            <input type="text" placeholder="Enter your location" />
            <input type="text" placeholder="Enter your location" />
            <input type="text" placeholder="Enter your location" />
          </div>

          <Button text="Send a message" style={{ marginTop: "70px" }} />
        </div>
      </div>{" "}
      <img src="map.png" className="img111" alt="map"></img>{" "}
      <img src="background.png" className="img222" alt="background"></img>
    </div>
  );
}

export default contact;
