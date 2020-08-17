import React, { useEffect, lazy, Suspense } from "react";
import { useInView, InView } from "react-intersection-observer";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import sal from "sal.js";
import "../../node_modules/sal.js/dist/sal.css";
import projects from "../helpers/ProjectsArray";
import WorkWithMe from "./WorkWithMe";
import { DESCRIPTION, TITLE, TYPE, URL } from "../helpers/meta";
import Debs from "../helpers/debs-og.jpg";
import Loading from "./Loading";
import Pro from "./Pro";

// if (process.env.NODE_ENV !== "development") {
ReactGA.initialize("UA-171680853-2");
ReactGA.pageview(window.location.pathname + window.location.search);
// }

export default function App() {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      sal();
    }

    return () => {
      mounted = false;
    };
  }, []);

  const Menu = lazy(() => import("./Menu"));
  const Home = lazy(() => import("./Home"));
  const Foot = lazy(() => import("./Foot"));

  return (
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
          content="A dev passionate about Jollof rice and plantain!"
        />

        <meta
          name="description"
          content="Adebola Adeniran - Fullstack Engineer"
        />
      </Helmet>

      <Suspense fallback={<Loading />}>
        <InView>
          <Menu ga={ReactGA} inView={inView} />
        </InView>
        <Home ga={ReactGA} />
        <Pro projects={projects} ga={ReactGA} theRef={ref} inView={inView} />

        <WorkWithMe ga={ReactGA} />
        <Foot />
      </Suspense>
    </div>
  );
}
