import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="home-header">
      <div className="home-container">
        <h1>
          Get your vehicle <br />
          service done online <br />
          at one place
        </h1>
      </div>
      <div className="image-container">
        <img className="homeimg" src="image1.png" alt="homeimg" />
        <div className="rating">
          <img src="rating.png" alt="rating" />
        </div>
      </div>
    </div>
  );
}

export default Home;
