import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { Events, Link as ScrollLink, scrollSpy } from "react-scroll";
import { Link } from "react-router-dom";
const Navbar = ({ activeLink, setActiveLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInVIew = useInView(ref, { once: true });
  const mainControls = useAnimation();
  // useEffect(() => {
  //   if (scrollSpy.getActiveLink() == "aboutLink") {
  //     setIsActive("about");
  //   }
  // }, []);
  useEffect(() => {
    if (isInVIew) {
      mainControls.start("final");
    }
  }, [isInVIew, isOpen]);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={` mx-auto w-full  fixed    z-50 `}>
      <div className=" mx-auto px-8 filter backdrop-blur-2xl bg-[#192939] border-b   border-b-[#28425b]">
        <div className="flex justify-between h-16 items-center   ">
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="flex-shrink-0 flex justify-center items-center">
              <Link
                to="/"
                className="text-white flex justify-center items-center text-[1.3rem] my-auto poppins font-bold relative "
              >
                <span>Tamim</span>
                <span className="text-sky-400 text-3xl mb-2">.</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-[1.05rem] text-white font-sans ">
              <ScrollLink
                id="heroLink"
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                href="/"
                className={`  px-[0.2rem]  ${
                  activeLink === "hero" ? "border-b-[3px] border-sky-400" : ""
                }   hover:border-b-[3px] border-sky-400  transition-all ease-linear duration-150   font-medium`}
              >
                Home
              </ScrollLink>
              <ScrollLink
                id="aboutLink"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`${
                  activeLink === "about" ? "border-b-[3px] border-sky-400" : ""
                }  px-[0.2rem] cursor-pointer   hover:border-b-[3px] border-sky-400  transition-all ease-linear duration-150 font-medium `}
              >
                About
              </ScrollLink>
              <ScrollLink
                id="projectLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`${
                  activeLink === "projects"
                    ? "border-b-[3px] border-sky-400"
                    : ""
                }  px-[0.2rem] cursor-pointer   hover:border-b-[3px] border-sky-400  transition-all ease-linear duration-150 font-medium `}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                id="contactLink"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`${
                  activeLink === "contact"
                    ? "border-b-[3px] border-sky-400"
                    : ""
                }  px-[0.2rem] cursor-pointer   hover:border-b-[3px] border-sky-400  transition-all ease-linear duration-150 font-medium `}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white p-2  rounded-lg   hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden  absolute w-full text-white  right-0 h-[100dvh]">
          <div
            ref={ref}
            variants={{
              init: {
                opacity: 0,
                y: -100,
              },
              final: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="init"
            animate={mainControls}
            transition={{ duration: 0.7 }}
            className="px-2  space-y-2 sm:px-3 h-full flex flex-col justify-center items-center  backdrop-blur-3xl bg-[#192939] shadow-sm shadow-sky-800 text-center"
          >
            <div className="flex flex-col gap-2 mb-44 text-xl">
              <ScrollLink
                onClick={() => {
                  setIsOpen(false);
                }}
                id="heroLink"
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                href="/"
                className={`  px-[0.2rem]  ${
                  activeLink === "hero" ? "text-white" : ""
                }   hover:border-b-[3px] border-sky-400  transition-all ease-linear duration-150   font-medium`}
              >
                Home
              </ScrollLink>
              <ScrollLink
                onClick={() => {
                  setIsOpen(false);
                }}
                id="aboutLink"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`${
                  activeLink === "about" ? "text-white" : ""
                }  px-[0.2rem] cursor-pointer   hover:border-b-[3px] border-sky-400  transition-all ease-linear duration-150 font-medium text-gray-300`}
              >
                About
              </ScrollLink>
              <ScrollLink
                onClick={() => {
                  setIsOpen(false);
                }}
                id="projectLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`${
                  activeLink === "projects" ? "text-white" : ""
                }  px-[0.2rem] cursor-pointer   hover:border-b-[3px] border-sky-400  transition-all ease-linear duration-150 font-medium text-gray-300`}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                onClick={() => {
                  setIsOpen(false);
                }}
                id="contactLink"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`${
                  activeLink === "contact" ? "text-white" : ""
                }  px-[0.2rem] cursor-pointer   hover:border-b-[3px] border-sky-400  transition-all ease-linear duration-150 font-medium text-gray-300`}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
