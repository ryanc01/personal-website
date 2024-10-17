import React from "react";
import ProjectItem from "./ProjectItem";
import scadaImg from "../assets/scada.png";
import mipsImg from "../assets/mips.jpg";
import flexflowImg from "../assets/flexflow.png";
import eceImg from "../assets/ece.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 text-stone-500">
        These are some of the projects that I worked on recently in my
        undergraduate program at Virginia Tech, along with the programming
        languages and technologies used to develop them. Click on each one to
        learn more!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={scadaImg}
          title="SCADA System Development"
          stack="C++, Python, PostgreSQL, Linux"
          id="scada-system"
        />
        <ProjectItem
          img={mipsImg}
          title="MIPS Simulator"
          stack="C++, Qt"
          id="mips-simulator"
        />
        <ProjectItem
          img={flexflowImg}
          title="FlexFlow iOS Fitness App"
          stack="Swift"
          id="flexflow-ios"
        />
        <ProjectItem
          img={eceImg}
          title="ECE Surfers Minigame"
          stack="Embedded C"
          id="ece-surfers"
        />
      </div>
    </div>
  );
};

export default Projects;
