import React from "react";
import WorkWithMe from "./WorkWithMe";
import Foot from "./Foot";

const Home = ({ ga }) => {
  
  return (
    <div>
      <div className="md:flex flex-col text-lg md:text-2xl m-auto w-64 sm:w-auto md:max-w-md lg:max-w-3xl">
        <h1 class="mt-20 text-5xl font-bold">Hey!</h1>
        <p>
          Adebola here. I'm a Fullstack Software Engineer passionate about
          building Developer Communities. I enjoy creating technical content,
          building products and speaking to Developer teams.
        </p>
      </div>
      <WorkWithMe ga={ga} />
      <Foot />
    </div>
  );
};

export default Home;
