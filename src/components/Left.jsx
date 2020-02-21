import React from "react";
import "../styles/Left.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlane } from "@fortawesome/free-solid-svg-icons";

export default function Left() {
  return (
    <div className="wrapper-left">
      <div className="aboutDebs">
        <p className="name-title">Hi, I'm Adebola.</p>
        <p className="description">
          I'm a full-stack developer from
          <span className="city">&nbsp;Lagos, Nigeria.</span>
        </p>
        <p className="description">
          I write in Ruby and Javascript and build apps in Rails and React.
        </p>
        <p className="description">I design in Photoshop and illustrator.</p>
        <p className="description">
          I write techy and random articles on my
          <a href="http://wwww.onedebos.wordpress.com">&nbsp;blogs.</a>
        </p>
        <p className="description">
          I can talk all day about food, travel{" "}
          <FontAwesomeIcon icon={faPlane} />, startups, design, love{" "}
          <FontAwesomeIcon icon={faHeart} color="red" />, social enterprises and
          everything in between.
        </p>
      </div>
      <div className="profiles">
        <div className="description">
          <a href="https://github.com/onedebos/">github</a> |
          <a href="https://www.linkedin.com/in/adebola-niran"> linkedin</a> |
          <a href="https://twitter.com/debosthefirst"> twitter</a> |
          <a href="https://linktr.ee/adebol_a"> linktree</a> |
          <div className="linksUnder">
            <a href="https://medium.com/@adebola.niran">medium</a> |{" "}
            <a href="mailto: adebola.rb.js@gmail.com">shoot an email &nbsp;</a>|{" "}
            <a href="https://gist.github.com/onedebos/08c6d089a55e53e07b9bf56451c912fc">
              resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
