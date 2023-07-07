import React from "react";
import minusIcon from "./minus.svg";
import "../App.css";

function MinusButton({ text }) {
  return (
    <button className="minus-icon">
      <img src={minusIcon} alt="Minus" className="minus-icon" />
      {text}
    </button>
  );
}

export default MinusButton;
