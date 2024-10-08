import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  // Close nav after clicking a link
  const handleNavClick = () => {
    setNav(false);
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle Home button click
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      scrollToTop();
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToTop();
      }, 0);
    }
    handleNavClick();
  };

  // Helper function to check if we're on the main page
  const isMainPage = location.pathname === "/";

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />

      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <div
            onClick={handleHomeClick}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </div>
          {isMainPage ? (
            <>
              <a
                href="#experience"
                onClick={handleNavClick}
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <GrProjects size={20} />
                <span className="pl-4">Experience</span>
              </a>
              <a
                href="#projects"
                onClick={handleNavClick}
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <AiOutlineProject size={20} />
                <span className="pl-4">Projects</span>
              </a>
              <a
                href="#resume"
                onClick={handleNavClick}
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <BsPerson size={20} />
                <span className="pl-4">Resume</span>
              </a>
            </>
          ) : (
            <>
              <Link
                to="/#experience"
                onClick={handleNavClick}
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <GrProjects size={20} />
                <span className="pl-4">Experience</span>
              </Link>
              <Link
                to="/#projects"
                onClick={handleNavClick}
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <AiOutlineProject size={20} />
                <span className="pl-4">Projects</span>
              </Link>
              <Link
                to="/#resume"
                onClick={handleNavClick}
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <BsPerson size={20} />
                <span className="pl-4">Resume</span>
              </Link>
            </>
          )}
        </div>
      ) : null}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <div
            onClick={handleHomeClick}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </div>
          {isMainPage ? (
            <>
              <a
                href="#experience"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <GrProjects size={20} />
              </a>
              <a
                href="#projects"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineProject size={20} />
              </a>
              <a
                href="#resume"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <BsPerson size={20} />
              </a>
            </>
          ) : (
            <>
              <Link
                to="/#experience"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <GrProjects size={20} />
              </Link>
              <Link
                to="/#projects"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineProject size={20} />
              </Link>
              <Link
                to="/#resume"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <BsPerson size={20} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
