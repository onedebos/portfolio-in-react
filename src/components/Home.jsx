import React from "react";
import WorkWithMe from "./WorkWithMe";
import Foot from "./Foot";

const Home = ({ ga }) => {
  
  return (
    <div>
      <div className="md:flex flex-col text-lg md:text-2xl m-auto w-64 sm:w-auto md:max-w-md lg:max-w-3xl">
        <h1 class="mt-20 text-5xl font-bold">Hey! <span role="img" aria-label="emoji">👋</span></h1>
        <p>
          <mark>Adebola</mark> here. I'm a Fullstack Software Engineer passionate about
          building Developer Communities, creating easy to follow technical content,
          building products and helping minority communities start a career in Software Engineering.
        </p>
      </div>
      <WorkWithMe ga={ga} />
      <Foot />
    </div>
  );
};

export default Home;
