import React from "react";
import Button from "../components/Button";
import "../App.css";
function blog() {
  return (
    <div className="blog">
      <div className="our-services-container">
        <img className="formula" src="formula.png" alt="about" />
        <div className="box">
          <h5>TRENDING</h5>
          <h1>Diagnose Car Problems If You Don’t Know Much About Cars</h1>
          <p>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </p>
          <Button text="Read more" />
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

        <div className="blog-right">
          <div className="group1">
            <img src="car1.png" alt="car1"></img>
            <h2>Get an Awesome Number Plate for Your New Car</h2>
          </div>
          <div className="group2">
            <img src="car2.png" alt="car2"></img>
            <h2>Get an Awesome Number Plate for Your New Car</h2>
          </div>
          <div className="group3">
            <img src="car3.png" alt="car3"></img>
            <h2>Get an Awesome Number Plate for Your New Car</h2>
          </div>
        </div>
      </div>
      <div className="blog-end">
        <div className="blogfull-section">
          <div className="blog-item">
            <img src="blog1.png" alt="blog1"></img>
            <h4>5 Genius Car Accessories You Should Never Drive Without</h4>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </div>
          <div className="blog-item">
            <img src="blog2.png" alt="blog1"></img>
            <h4>We provide blow straight past it with the wheels skidding</h4>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </div>
          <div className="blog-item">
            <img src="blog3.png" alt="blog1"></img>
            <h4>5 Genius Car Accessories You Should Never Drive Without</h4>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </div>
          <div className="blog-item">
            <img src="blog4.png" alt="blog1"></img>
            <h4>We provide blow straight past it with the wheels skidding</h4>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </div>
          <div className="blog-item">
            <img src="blog5.png" alt="blog1"></img>
            <h4>5 Genius Car Accessories You Should Never Drive Without</h4>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </div>
          <div className="blog-item">
            <img src="blog6.png" alt="blog1"></img>
            <h4>We provide blow straight past it with the wheels skidding</h4>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </div>
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

export default blog;
