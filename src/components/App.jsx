import React from "react";
import Left from "./Left";
import Right from "./Right";
import Footer from "./Footer";
import "../styles/App.css";

export default function App() {
  return (
    <div className="container">
      <div className="main-wrapper">
        <Left />
        <Right />
      </div>
      <Footer />
    </div>
  );
}
