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
      <div className="provide-section">
        <div className="steps-left">
          <h2>
            We Provide Expert Service <br></br> and aim to have a long term{" "}
            <br></br>with you
          </h2>
          <h5>
            We provide a full range of front end mechanical repairs for{" "}
            <br></br>all makes and models of cars, no matter
          </h5>
          <div className="quote">
            <h3>Get a Quote</h3>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him.
            </p>
            <h3>Book an Appointment</h3>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him.
            </p>
            <h3>Get your Service Done</h3>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him.
            </p>
          </div>
        </div>
        <div className="steps-right">
          <img src="stepsright.png" alt="stepsright"></img>
        </div>
      </div>
      <div className="overlay">
        <div className="image-container">
          <img className="img1" src="stepsright.png" alt="stepsright" />
          <div className="overlay-mask"></div>
          <div class="image-content">
            <h2>Heading 1</h2>
            <p>Text 1</p>
          </div>
        </div>

        <div className="image-container">
          <img className="img4" src="wires.png" alt="wires" />
          <div className="overlay-mask"></div>
          <div class="image-content">
            <h2>Heading 2</h2>
            <p>Text 2</p>
          </div>
        </div>

        <div className="image-container">
          <img className="img3" src="wires.png" alt="wires" />
          <div className="overlay-mask"></div>
          <div class="image-content">
            <h2>Heading 3</h2>
            <p>Text 3</p>
          </div>
        </div>
      </div>
      <div class="features-section">
        <h2>Services we provide to our valued customers</h2>
        <div class="features-block">
          <div class="feature">
            <div className="circle">
              <img
                className="feature-image"
                src="wrench.png"
                alt="wrench"
              ></img>
            </div>
            <h3>Convenient Service</h3>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>
          <div class="feature">
            <div className="circle">
              <img
                className="feature-image"
                src="wrench.png"
                alt="wrench"
              ></img>
            </div>
            <h3>Expert Mechanics</h3>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>
          <div class="feature">
            <div className="circle">
              <img
                className="feature-image"
                src="wrench.png"
                alt="wrench"
              ></img>
            </div>
            <h3>Transparent Pricing</h3>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>
        </div>
      </div>
      <div className="counter-section">
        <h2 className="counter">
          20+<p>Proffesional</p>
        </h2>

        <h2 className="counter">
          10+<p>Years Eperience</p>
        </h2>
        <h2 className="counter">
          12K+<p>Years Eperience</p>
        </h2>
        <h2 className="counter">
          100%<p>Customer Satisfaction</p>
        </h2>
      </div>
      <div className="team-section">
        <div className="person-grid">
          <div className="person">
            <img src="person1.png" alt="person1"></img>
            <div className="person-box"></div>
          </div>
          <div className="person">
            <img src="person2.png" alt="person1"></img>
            <div className="person-box"></div>
          </div>
          <div className="person">
            <img src="person3.png" alt="person1"></img>
            <div className="person-box"></div>
          </div>
          <div className="person">
            <img src="person4.png" alt="person1"></img>
            <div className="person-box"></div>
          </div>
          <div className="person">
            <img src="person5.png" alt="person1"></img>
            <div className="person-box"></div>
          </div>
          <div className="person">
            <img src="person6.png" alt="person1"></img>
            <div className="person-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
