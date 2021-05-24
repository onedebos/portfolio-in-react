import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import sal from "sal.js";
import "../../node_modules/sal.js/dist/sal.css";
import { DESCRIPTION, TITLE, TYPE, URL } from "../helpers/meta";
import Debs from "../helpers/debs-og.jpg";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Subscribe from "./Subscribe";

// if (process.env.NODE_ENV !== "development") {
ReactGA.initialize("UA-171680853-2");
ReactGA.pageview(window.location.pathname + window.location.search);
// }

export default function App() {


  useEffect(() => {
    let mounted = true;
    if (mounted) {
      sal();
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="overflow-hidden app obs">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Adebola | Fullstack Engineer</title>
          <link rel="adebola adeniran" href="https://adebola.dev" />
          <meta name="og:url" content={URL} />
          <meta name="og:title" content={TITLE} />
          <meta name="og:description" content={DESCRIPTION} />
          <meta name="og:type" content={TYPE} />
          <meta name="og:image" content={Debs} />

          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:image" content={Debs} />
          <meta
            name="twitter:card"
            content="Fullstack Engineer, Content Creator, Building Communities."
          />

          <meta
            name="description"
            content="Adebola Adeniran - Fullstack Engineer"
          />
        </Helmet>
      </div>
      <Switch>
        <Route exact path="/" component={()=> <Home ga={ReactGA} />} />
        <Route path="/subscribe" component={Subscribe} />
      </Switch>
    </BrowserRouter>
  );
}
