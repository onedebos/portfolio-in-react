import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import Footer from "./Footer";
import "../styles/App.scss";

export default function App() {
  const [clicked, setClicked] = useState({ mode: false });
  const handleDarkMode = () => {
    setClicked(prevState => ({
      ...prevState,
      mode: !clicked.mode
    }));

    const container = document.querySelector(".container");
    const wrapperRight = document.querySelector(".wrapper-right");
    const mobileFooter = document.querySelector(".mobileFooter");
    const darkModeBtn = document.querySelector(".darkModeBtn");

    wrapperRight.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    mobileFooter.classList.toggle("dark-mode");
    darkModeBtn.classList.toggle("dark-mode");
  };
  return (
    <div className="container">
      <div className="main-wrapper">
        <Left handleDarkMode={handleDarkMode} clicked={clicked} />
        <Right />
      </div>
      <Footer />
    </div>
  );
}
