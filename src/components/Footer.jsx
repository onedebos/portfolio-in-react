import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="allFooters">
      <div className="mobileFooter">
        built with &nbsp;
        <FontAwesomeIcon icon={faHeart} color="red" />
        &nbsp; and everything good. - A.A
      </div>
      <div className="mainFooter"></div>
      <div className="grid-free">
        <p className="full-text">Adebola Adeniran</p>
      </div>
    </div>
  );
}
