import React from "react";
import plusIcon from "./plus.svg";
import "../App.css";

function PlusButton({ text }) {
  return (
    <button className="plus-icon">
      <img src={plusIcon} alt="Plus" className="plus-icon" />
      {text}
    </button>
  );
}

export default PlusButton;
