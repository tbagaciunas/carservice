import React from "react";
import "../App.css";
import Button from "../components/Button";

function Services() {
  return (
    <div>
      <div className="our-services-container">
        <img className="porsche" src="porsche.png" alt="porche" />
        <div className="box">
          <h1>Our services</h1>
          <p>
            Through True Rich Attended does no end it his mother since <br></br>{" "}
            real had half every him case in packages enquire we up ecstatic{" "}
            <br></br>unsatiable saw Through True Rich Attended does{" "}
          </p>
          <Button text="Book a service" />
        </div>
      </div>
      <div class="auto-diagnostics-container">
        <div class="container-left">
          <img
            src="autodiagnostics.png"
            alt="diagnostics"
            className="autodiagnostics-img"
          ></img>
          <h3>Auto Diagnostics</h3>
          <p>
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic. Through True Rich Attended does no end it his mother.{" "}
          </p>
        </div>
        <div class="container-right">
          <div class="card-grid">
            <div class="card">
              <img src="icon1.svg" alt="Icon 1" />
              <p>Diagnostics</p>
            </div>
            <div class="card">
              <img src="icon2.svg" alt="Icon 2" />
              <p>Engine Repair</p>
            </div>
            <div class="card">
              <img src="icon5.svg" alt="Icon 3" />
              <p>Wheel Repair</p>
            </div>
            <div class="card">
              <img src="icon4.svg" alt="Icon 4" />
              <p>Oil Filter</p>
            </div>
            <div class="card">
              <img src="icon5.svg" alt="Icon 5" />
              <p>Body Work</p>
            </div>
            <div class="card">
              <img src="icon6.svg" alt="Icon 6" />
              <p>Batteries</p>
            </div>
          </div>
        </div>
      </div>
      <div className="how-section1">
        <div className="how-left">
          <h3>How we work and the process we follow</h3>
          <div className="checkmark-container">
            <p>
              <img src="checkmark.svg" alt="checkmark" />
              Through True Rich Attended does no end it his mother since
            </p>
            <p>
              <img src="checkmark.svg" alt="checkmark" />
              Attended does no end it his mother since real had half every
            </p>
            <p>
              <img src="checkmark.svg" alt="checkmark" />
              Since real had half every him case in packages enquire we up
              ecstatic
            </p>
          </div>
        </div>

        <div className="how-right">
          <img className="how-image" src="golf.png" alt="golf1"></img>
          <img className="how-image" src="golf2.png" alt="golf2"></img>
        </div>
      </div>
      <div className="how-section2">
        <div className="how-right">
          <img className="how-image" src="golf3.png" alt="golf3"></img>
          <img className="how-image" src="golf4.png" alt="golf4"></img>
        </div>
        <div className="how-left">
          <h3>
            Diagnose Car Problems If You Don’t Know Much <br></br>About Cars
          </h3>
          <p>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes
            everything from struts, shocks, and tie rod ends to ball joints,
            springs everything from struts, shocks, and tie rod ends to ball
            joints, springs
          </p>
          <Button text="Book a service" />
        </div>
      </div>
      <div className="getintouch-section">
        <img className="getintouch-img" src="getintouch1.png" alt="getin"></img>
        <img
          className="getintouch-img"
          src="getintouch2.png"
          alt="getin2"
        ></img>
        <div className="box-card">
          <h3>Get in touch with us for your service related query</h3>
          <Button text="Contact us" />
        </div>
      </div>
    </div>
  );
}

export default Services;
