import React from "react";
import "../styles/Right.css";
export default function Right() {
  return (
    <div className="wrapper-right">
      <div className="projects-grid">
        <div className="project-1">
          <div className="project-name-1">
            Mentally&nbsp;
            <span className="project-title-1">
              Built with Rails API and React
            </span>
          </div>
          <a href="https://awesome-kare-c984ee.netlify.com/">
            <img
              className="project-img-1"
              alt="mentally"
              src="https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1582185345/personal-portfolio/app_screenshot_mvkavi.png"
            />
          </a>
        </div>
        <div className="project-2">
          <div className="project-name">
            Modern Home&nbsp;
            <span className="project-title">Built with HTML and CSS</span>
          </div>
          <a href="https://onedebos.github.io/portfolio-site-1/">
            <img
              className="project-img"
              alt="modern-home"
              src="https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1582185341/personal-portfolio/app1_lmoopo.png"
            />
          </a>
        </div>
        <div className="project-3">
          <div className="project-name">
            BookStr&nbsp;
            <span className="project-title">Built with React and Redux</span>
          </div>
          <a href="https://redux-bookstr.herokuapp.com/">
            <img
              className="project-img"
              alt="redux-bookstr"
              src="https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1582185339/personal-portfolio/app2_ry23fm.png"
            />
          </a>
        </div>
        <div className="project-4">
          <div className="project-name">
            Weatherify&nbsp;
            <span className="project-title">with JS fetch API and Webpack</span>
          </div>
          <a href="https://sleepy-wing-03ddf5.netlify.com/">
            <img
              alt="weatherify"
              className="project-img"
              src="https://res.cloudinary.com/onedebeos/image/upload/q_auto:best/v1582185364/personal-portfolio/app4_hoiwib.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
