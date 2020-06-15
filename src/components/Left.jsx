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
          I write in Ruby and JavaScript and build apps in Rails and React.{" "}
          <code>Update: Add some Node.js, express and MongoDB in there</code> .
        </p>
        <p className="description">
          I design in Photoshop, Illustrator and create UI&nbsp;
          <a href="https://github.com/onedebos/Designs">designs</a>&nbsp;in
          Figma.
        </p>
        <p className="description">
          I write technical articles that are short and noob-friendly!&nbsp;
          <a href="https://medium.com/@adebola.niran">Read some</a>. I recently
          had one translated and published in Chinese!
        </p>
        <p className="description">
          I can talk all day about food, travel{" "}
          <FontAwesomeIcon icon={faPlane} />, startups, design, romance/love{" "}
          <FontAwesomeIcon icon={faHeart} color="red" />, social enterprises and
          everything in between.
        </p>
      </div>
      <div className="profiles">
        <p className="description profiles">
          <a
            href="https://github.com/onedebos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          &nbsp; &nbsp;
          <a
            href="mailto: adebola.rb.js@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/adebola-niran"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          &nbsp; &nbsp;
          <a
            href="https://twitter.com/debosthefirst"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          &nbsp;&nbsp;
          <a
            href="https://medium.com/@adebola.niran"
            target="_blank"
            rel="noopener noreferrer"
          >
            medium
          </a>{" "}
          &nbsp; &nbsp;
          <a
            href="https://drive.google.com/file/d/1NWlP25IMbtSPpUCKuEPqBFmHaMfwKoJC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          &nbsp;&nbsp;
          <a
            href="https://linktr.ee/adebol_a"
            target="_blank"
            rel="noopener noreferrer"
          >
            linktree
          </a>{" "}
          &nbsp;&nbsp;
          <a
            href="https://dev.to/@debosthefirst"
            target="_blank"
            rel="noopener noreferrer"
          >
            dev.to
          </a>
          &nbsp;&nbsp;
          <a
            href="https://hackernoon.com/@adebola"
            target="_blank"
            rel="noopener noreferrer"
          >
            hackernoon
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.freecodecamp.org/news/author/adebola/"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp
          </a>
          &nbsp;&nbsp;
        </p>
      </div>
    </div>
  );
}
