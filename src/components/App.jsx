import React, { useEffect } from "react";
import Menu from "./Menu";
import Home from "./Home";
import Pro from "./Pro";
import Foot from "./Foot";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/App.scss";
import projects from "../helpers/ProjectsArray";
import WorkWithMe from "./WorkWithMe";

export default function App() {
  // const [clicked, setClicked] = useState({ mode: false });
  // const handleDarkMode = () => {
  //   setClicked((prevState) => ({
  //     ...prevState,
  //     mode: !clicked.mode,
  //   }));

  //   const container = document.querySelector(".container");
  //   const wrapperRight = document.querySelector(".wrapper-right");
  //   const mobileFooter = document.querySelector(".mobileFooter");
  //   const darkModeBtn = document.querySelector(".darkModeBtn");

  //   wrapperRight.classList.toggle("dark-mode");
  //   container.classList.toggle("dark-mode");
  //   mobileFooter.classList.toggle("dark-mode");
  //   darkModeBtn.classList.toggle("dark-mode");
  // };
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);

  return (
    <div>
      <Menu />
      <Home />
      <Pro projects={projects} />
      <WorkWithMe />
      <Foot />
    </div>
  );
}
