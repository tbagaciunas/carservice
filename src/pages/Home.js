import React from "react";
import "../App.css";
import Button from "../components/Button";
import MinusButton from "../components/MinusButton";
import PlusButton from "../components/PlusButton";

function Home() {
  return (
    <div>
      <div className="home-header">
        <div className="home-container">
          <h1>
            Get your vehicle <br />
            service done online <br />
            at one place
          </h1>
          <Button text="Book a service" />
        </div>
        <div className="image-container">
          <img className="homeimg" src="image1.png" alt="homeimg" />
          <div className="rating">
            <img src="rating.png" alt="rating" />
          </div>
        </div>
      </div>
      <div className="quote-section">
        <div className="column1">
          <h2>
            We are taking car <br></br> servicing seriously
          </h2>
          <div className="services">
            <h3>
              {" "}
              <img src="wrench.png" alt="wrench"></img>Convenient service
            </h3>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him.
            </p>
            <h3>
              {" "}
              <img src="mechanic.png" alt="mechanic"></img>Expert mechanics
            </h3>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him.
            </p>
            <h3>
              {" "}
              <img src="pricing.png" alt="pricing"></img>Transparent pricing
            </h3>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <p>
              Know more about us{" "}
              <img className="arrow" src="arrow.svg" alt="arrow"></img>
            </p>
          </div>
        </div>
        <div className="column2">
          <h2>Get a quote for the car service</h2>
          <div className="input-fields">
            <input type="text" placeholder="Enter your location" />
            <input type="text" placeholder="Enter your location" />
            <input type="text" placeholder="Enter your location" />
            <input type="text" placeholder="Enter your location" />
          </div>

          <Button text="Get your quote" style={{ marginTop: "70px" }} />
        </div>
      </div>
      <div className="follow-section">
        <div className="column1">
          <h2>
            We follow a clear <br></br>process to help you <br></br>out.
          </h2>
          <p>
            Through True Rich Attended does no end it his mother since real had
            half every him.
          </p>
          <Button text="Learn more" />
        </div>
        <div className="column2">
          <div className="instructions">
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
      </div>

      <div className="whatweoffer-section">
        <p>What we Offer</p>
        <h2>
          We offer full service auto repair <br></br>& maintenance
        </h2>

        <div className="card-grid">
          <div className="card">
            <img src="icon1.svg" alt="Icon 1"></img>
            <p>Diagnostics</p>
          </div>
          <div className="card">
            <img src="icon2.svg" alt="Icon 2"></img>
            <p>Engine Repair</p>
          </div>
          <div className="card">
            <img src="icon5.svg" alt="Icon 3"></img>
            <p>Wheel Repair</p>
          </div>
          <div className="card">
            <img src="icon4.svg" alt="Icon 4"></img>
            <p>Oil Filter</p>
          </div>
          <div className="card">
            <img src="icon5.svg" alt="Icon 5"></img>
            <p>Body Work</p>
          </div>
          <div className="card">
            <img src="icon6.svg" alt="Icon 6"></img>
            <p>Batteries</p>
          </div>
          <div className="card">
            <img src="icon7.svg" alt="Icon 7"></img>
            <p>Insurance Claim</p>
          </div>
          <div className="card">
            <img src="icon8.svg" alt="Icon 8"></img>
            <p>Custom Service</p>
          </div>
          <p className="knowmore">
            Know more about us{" "}
            <img className="arrow" src="arrow.svg" alt="arrow"></img>
          </p>
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
      <div className="brands-section">
        <h3>Brands we Serve</h3>
        <div class="image-grid">
          <img src="logoipsum.svg" alt="Image 1"></img>
          <img src="logoipsum.svg" alt="Image 1"></img>
          <img src="logoipsum.svg" alt="Image 1"></img>
          <img src="logoipsum.svg" alt="Image 1"></img>
          <img src="logoipsum.svg" alt="Image 1"></img>
          <img src="logoipsum.svg" alt="Image 1"></img>
          <img src="logoipsum.svg" alt="Image 1"></img>
          <img src="logoipsum.svg" alt="Image 1"></img>
          <img src="logoipsum.svg" alt="Image 1"></img>
          <img src="logoipsum.svg" alt="Image 1"></img>
        </div>
      </div>
      <div className="customers-section">
        <h3>Our customers say the nicest things about our service</h3>
        <div className="customer-cards-container">
          <div className="customer-card">
            <h4>
              {" "}
              <img src="jonathan.png" alt="jonathan"></img>Jonathan Vallem
            </h4>
            <h5>New York</h5>
            <p>
              I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car in a short
              comprehensive look on all the working
            </p>
          </div>
          <div className="customer-card">
            <h4>
              {" "}
              <img src="jonathan.png" alt="jonathan"></img>Jonathan Vallem
            </h4>
            <h5>New York</h5>
            <p>
              I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car in a short
              comprehensive look on all the working
            </p>
          </div>
        </div>
      </div>
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="question-card">
          <MinusButton />
          <h5>How long should a car repair take?</h5>
          <p>
            I have got my car repaired at Finsweet many times before, they are
            good at what they do. Not only did they repair my car I have got my
            car repaired at Finsweet I have got my car repaired at Finsweet
          </p>
        </div>
        <div className="question-card2">
          <PlusButton />
          <h5>How do I schedule my car's appointment ?</h5>
        </div>
        <div className="question-card2">
          <PlusButton />
          <h5>What are the repair services provided?</h5>
        </div>
        <div className="question-card2">
          <PlusButton />
          <h5>How do I find auto body shops near me?</h5>
        </div>
        <div className="question-card2">
          <PlusButton />
          <h5>Genuine spare parts during car repair?</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
