import React from "react";
import "../styles/slider.scss";

export const Slider = ({ handleClick, clicked }) => {
  return (
    <div>
      <button onClick={handleClick} className="darkModeBtn" type="button">
        Tap for {clicked.mode ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
};
