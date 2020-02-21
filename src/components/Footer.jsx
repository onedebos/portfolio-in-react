import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="allFooters">
      <div className="mobileFooter">
        built with <FontAwesomeIcon icon={faHeart} color="red" /> and everything
        good. - A.A
      </div>
      <div className="mainFooter"></div>
      <div class="grid-free">
        <p class="full-text">Adebola Adeniran</p>
      </div>
    </div>
  );
}
