import React from "react";

const WorkWithMe = () => {
  return (
    <div
      className="px-8 py-20 md:py-40 md:max-w-2xl lg:max-w-5xl m-auto mb-8"
      id="work-with-me"
    >
      <div>
        <div
          className="text-center font-bold text-4xl md:text-6xl"
          data-sal="slide-left"
        >
          <mark>Work with me.</mark>
        </div>
        <p className="text-center text-2xl" data-sal="slide-up">
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
            href="https://drive.google.com/file/d/1NWlP25IMbtSPpUCKuEPqBFmHaMfwKoJC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </p>
      </div>
      <div className="mt-8 mb-20 pr-10">
        <div
          className="text-center font-bold text-4xl md:text-6xl"
          data-sal="slide-right"
        >
          <mark>Publications.</mark>
        </div>
        <div className="text-center text-2xl" data-sal="slide-down">
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
            href="https://medium.com/@adebola.niran"
            target="_blank"
            rel="noopener noreferrer"
          >
            medium
          </a>{" "}
          &nbsp;&nbsp;
          <a
            href="https://linktr.ee/adebol_a"
            target="_blank"
            rel="noopener noreferrer"
          >
            linktree
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.freecodecamp.org/news/author/adebola/"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkWithMe;
