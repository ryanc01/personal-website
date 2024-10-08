// ProjectDetails.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const projectData = {
    "scada-system": {
      title: "SCADA System Development",
      description:
        "This project involved building a SCADA system using C++, Python, and PostgreSQL on Linux.",
    },
    "mips-simulator": {
      title: "MIPS Simulator",
      description:
        "The MIPS Simulator was built using C++ and Qt to simulate the MIPS architecture.",
    },
    "flexflow-ios": {
      title: "FlexFlow iOS Fitness App",
      description:
        "An iOS app developed using Swift to help users track and manage fitness goals.",
    },
    "ece-surfers": {
      title: "ECE Surfers Minigame",
      description:
        "A minigame developed using Embedded C for a microcontroller-based surfing simulation.",
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
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">{project?.title}</h1>
      <p className="text-lg text-center">{project?.description}</p>

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
