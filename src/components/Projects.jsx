import React from "react";
import ProjectItem from "./ProjectItem";
import scadaImg from "../assets/scada.png";
import mipsImg from "../assets/mips.jpg";
import flexflowImg from "../assets/flexflow.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eveniet
        aliquid consectetur quas blanditiis sapiente praesentium quis eius,
        perferendis sint deleniti ab dignissimos quam earum itaque voluptate
        porro, veniam mollitia.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={scadaImg} title="SCADA System Development" />
        <ProjectItem img={mipsImg} title="MIPS Simulator" />
        <ProjectItem img={flexflowImg} title="FlexFlow iOS Fitness App" />
        <ProjectItem img={scadaImg} title="TBD" />
      </div>
    </div>
  );
};

export default Projects;
