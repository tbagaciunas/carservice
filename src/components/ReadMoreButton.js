import React from "react";
import { useNavigate } from "react-router-dom";

const ReadMoreButton = ({ path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button className="orange-button" onClick={handleClick}>
      Read more
    </button>
  );
};

export default ReadMoreButton;
