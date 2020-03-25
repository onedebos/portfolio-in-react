import React from "react";
import "../styles/Left.css";
import { Slider } from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlane } from "@fortawesome/free-solid-svg-icons";

export default function Left({ handleDarkMode, clicked }) {
  return (
    <div className="wrapper-left">
      <div className="aboutDebs">
        <p className="name-title">Hi, I'm Adebola.</p>
        <Slider handleClick={handleDarkMode} clicked={clicked} />

        <p className="description">
          I'm a full-stack developer from
          <span className="city">&nbsp;Lagos, Nigeria.</span>
        </p>
        <p className="description">
          I write in Ruby and JavaScript and build apps in Rails and React.
        </p>
        <p className="description">
          I design in Photoshop, Illustrator and create UI&nbsp;
          <a href="https://github.com/onedebos/Designs">designs</a>&nbsp;in
          Figma.
        </p>
        <p className="description">
          I write techy and random articles on my personal&nbsp;
          <a href="http://wwww.onedebos.wordpress.com">blog</a>.
        </p>
        <p className="description">
          I can talk all day about food, travel{" "}
          <FontAwesomeIcon icon={faPlane} />, startups, design, love{" "}
          <FontAwesomeIcon icon={faHeart} color="red" />, social enterprises and
          everything in between.
        </p>
      </div>
      <div className="profiles">
        <p className="description profiles">
          <a href="https://github.com/onedebos/">github</a>&nbsp; &nbsp;
          <a href="mailto: adebola.rb.js@gmail.com">email</a>&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/adebola-niran">linkedin</a>
          &nbsp; &nbsp;<a href="https://twitter.com/debosthefirst">twitter</a>
          &nbsp;&nbsp;
          <a href="https://medium.com/@adebola.niran">medium</a> &nbsp; &nbsp;
          <a href="https://gist.github.com/onedebos/08c6d089a55e53e07b9bf56451c912fc#file-adebola-cv-md">
            resume
          </a>
          &nbsp;&nbsp;
          <a href="https://linktr.ee/adebol_a">linktree</a> &nbsp;&nbsp;
          <a href="https://dev.to/@debosthefirst">dev.to</a>&nbsp;&nbsp;
          <a href="https://www.instagram.com/adebola.js">instagram</a>
          &nbsp;&nbsp;
          <a href="https://hackernoon.com/@adebola">hackernoon</a>{" "}
        </p>
      </div>
    </div>
  );
}
