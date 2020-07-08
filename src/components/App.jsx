import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import Menu from "./Menu";
import Home from "./Home";
import Pro from "./Pro";
import Foot from "./Foot";
import sal from "sal.js";
import "../../node_modules/sal.js/dist/sal.css";
import projects from "../helpers/ProjectsArray";
import WorkWithMe from "./WorkWithMe";

ReactGA.initialize("UA-171680853-2");

export default function App() {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adebola | Fullstack Engineer</title>
        <link rel="adebola adeniran" href="https://adebola.dev" />
        <meta
          name="Adebola Adeniran - Fullstack Engineer, Software developer"
          content="Adebola Adeniran - Fullstack Engineer"
        />
      </Helmet>
      <Menu />
      <Home />
      <Pro projects={projects} />
      <WorkWithMe />
      <Foot />
    </div>
  );
}
