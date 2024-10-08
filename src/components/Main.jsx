import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      {/* background image */}
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      {/* adds white overlay with 50% opacity */}
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Ryan Clarke
          </h1>
          <h2 className="flex sm:text-3x1 text-2x1 pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I am a developer.",
                2000, // wait 1s before replacing "developer" with "tech enthusiast"
                "I am a tech enthusiast.",
                2000,
                "I am a software engineer.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/ryan-clarke-0/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
