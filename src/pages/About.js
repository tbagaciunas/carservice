import React from "react";
import "../App.css";
import Button from "../components/Button";

function About() {
  return (
    <div>
      <div className="our-services-container">
        <img className="about-img" src="about.png" alt="about" />
        <div className="box">
          <h1>About us</h1>
          <p>
            Through True Rich Attended does no end it his mother since <br></br>{" "}
            real had half every him case in packages enquire we up ecstatic{" "}
            <br></br>
            unsatiable saw Through True Rich Attended does
          </p>
          <Button text="Book a service" />
        </div>
      </div>
    </div>
  );
}

export default About;
