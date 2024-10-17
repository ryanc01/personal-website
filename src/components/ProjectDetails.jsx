// ProjectDetails.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import scadaImg from "../assets/scada.png";
import mipsImg from "../assets/mips.jpg";
import flexflowImg from "../assets/flexflow.png";
import eceImg from "../assets/ece.png";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const projectData = {
    "scada-system": {
      title: "SCADA System Development",
      timeline: "Aug 2023 - May 2024",
      img: scadaImg,
      description:
        "As a part of the ECE Major Design Experience at Virginia Tech, I was teamed up with four other students tasked with completing a project given to us by an outside company. Our team was tasked with creating the overarching architecture for all Mid-Atlantic Regional Spaceport facilities. This involves developing a common interface for independent control systems to output to and provide the full visibility into all systems at all sites, including system architecture, networking, and GUI development for data visibility and manipulation. Our team met multiple times per week in efforts to complete our deliverables by April, where we presented our Proof-of-Concept at the Major Design Experience Expo. There were hundreds of attendees, including executives from the Virginia Spaceport Authority itself.",
    },
    "mips-simulator": {
      title: "MIPS Simulator",
      timeline: "Jan 2024 - May 2024",
      img: mipsImg,
      description:
        "The MIPS Simulator was built using C++ and Qt to simulate the MIPS architecture. Simulator adheres to MIPS-I architecture specifications, supporting the execution of a defined subset of MIPS assembly code. The virtual machine to support the simulator was built to emulate MIPS CPU operations, including memory initialization, instruction parsing, and register management for accurate program execution. The GUI was developed for user-friendly interaction and debugging of any MIPS assembly program.",
    },
    "flexflow-ios": {
      title: "FlexFlow iOS Fitness App",
      timeline: "Oct 2023 - Dec 2023",
      img: flexflowImg,
      description:
        "FlexFlow is an iOS app that serves as an all-in-one fitness companion. This app offers users the ability to log and track their workouts with ease, allowing them to record sets, reps, weights, and duration, while also offering progress analysis and personalized recommendations. Moreover, the app provides an extensive exercise library that covers a wide range of fitness areas, such as bodybuilding, powerlifting, yoga, CrossFit, running, and more. Each exercise comes with detailed instructions, images, and videos, ensuring that users can learn and perform them with correct form and technique. By offering a seamless combination of workout tracking and exercise exploration across various fitness disciplines, this iOS app empowers users to achieve their fitness goals effectively and stay motivated on their fitness journey.",
    },
    "ece-surfers": {
      title: "ECE Surfers Minigame",
      timeline: "Nov 2022",
      img: eceImg,
      description:
        'A minigame developed using Embedded C for a microcontroller-based surfing simulation. This project mimicked Google Chrome\'s "Dinosaur Game" that appears on a page not found error. I created this during my Embedded Systems course on an MSP432 microcontroller using C. I created a hardware abstraction layer and worked with Timers, Buttons and Joysticks in order to receive an A on the project.',
    },
  };

  const project = projectData[projectId];

  const scrollToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-[#001b5e] w-full text-center">
        {project?.title}
      </h1>
      <p className="text-md text-gray-600 my-4 text-center w-full">
        {project.timeline}
      </p>
      <img
        src={project.img}
        alt={project.title}
        className="rounded-xl w-[50%] h-auto object-cover my-4"
      />
      <p className="text-lg text-gray-600 text-center my-4 w-[80%] md:w-[80%] lg:w-[80%]">
        {project?.description}
      </p>
      {/* Back button to return to Projects section */}
      <button
        onClick={scrollToProjects}
        className="mt-4 p-2 rounded-lg bg-[#001b5e] text-white font-bold"
      >
        Back to Projects
      </button>
    </div>
  );
};

export default ProjectDetails;
