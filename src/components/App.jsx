import React, { useEffect } from "react";
import Menu from "./Menu";
import Home from "./Home";
import Pro from "./Pro";
import Foot from "./Foot";
import sal from "sal.js";
import "../../node_modules/sal.js/dist/sal.css";
import "../styles/App.scss";
import projects from "../helpers/ProjectsArray";
import WorkWithMe from "./WorkWithMe";

export default function App() {
  useEffect(() => {
    sal();
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
