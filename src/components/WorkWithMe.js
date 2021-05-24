import React from "react";

const WorkWithMe = ({ ga }) => {
  const handleClick = (action) => {
    ga.event({
      category: "Click",
      action,
    });
  };

  return (
    <div>
      <div
        className="px-8 py-5 pb-20 md:pb-0 md:py-10 md:max-w-md lg:max-w-3xl m-auto"
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
              onClick={handleClick(`clicked link to github profile.`)}
            >
              github
            </a>
            &nbsp; &nbsp;
            <a
              href="mailto: adebola.rb.js@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link to email.`)}
            >
              email
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/adebola-niran"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link to linkedin.`)}
            >
              linkedin
            </a>
            &nbsp; &nbsp;
            <a
              href="https://twitter.com/debosthefirst"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link to twitter.`)}
            >
              twitter
            </a>
            &nbsp;&nbsp;
            <a
              href="https://drive.google.com/file/d/1MX05MreJNM27sbJySaQuBVBnuBSjcnG1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link to resume`)}
            >
              resume
            </a>
          </p>
        </div>
        <div className="mt-8 pr-10">
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
              onClick={handleClick(`clicked link to dev.to.`)}
            >
              dev.to
            </a>
            &nbsp;&nbsp;
            {/* <a
              href="https://hackernoon.com/@adebola"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link to hackernoon.`)}
            >
              hackernoon
            </a> */}
            <a
              href="https://blog.logrocket.com/author/adebolaadeniran/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link to LogRocket.`)}
            >
              logRocket
            </a>
            &nbsp;&nbsp;
            <a
              href="https://medium.com/@adebola.niran"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link to medium.`)}
            >
              medium
            </a>{" "}
            &nbsp;&nbsp;
            {/* <a
              href="https://linktr.ee/adebol_a"
              target="_blank"
              rel="noopener noreferrer"
            >
              linktree
            </a> */}
            &nbsp;&nbsp;
            <a
              href="https://www.freecodecamp.org/news/author/adebola/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link to fcc.`)}
            >
              freeCodeCamp
            </a>
            &nbsp;&nbsp;
            <a
              href="https://blog.adebola.dev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link to blog from publications.`)}
            >
              blog
            </a>
          </div>
        </div>
        {/* <div className="mt-8 mb-20 pr-10">
          <div
            className="text-center font-bold text-4xl md:text-6xl"
            data-sal="slide-right"
          >
            <mark>Open source.</mark>
          </div>
          <div className="text-center text-2xl" data-sal="slide-down">
            <a
              href="https://npmjs.com/package/naija-faker"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link naija-faker package.`)}
            >
              naija-faker(<strong>NPM</strong>)
            </a>
            &nbsp;&nbsp;
            <a
              href="https://rubygems.org/gems/naija-faker/versions/1.0.1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link naija-faker ruby gem.`)}
            >
              naija-faker(<strong>RubyGem</strong>)
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.npmjs.com/package/react-direction"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick(`clicked link react-direction NPM package.`)}
            >
              react-direction(<strong>NPM</strong>)
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WorkWithMe;
