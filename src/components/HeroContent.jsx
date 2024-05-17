import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion, spring } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaXTwitter } from "react-icons/fa6";

const HeroContent = () => {
  return (
    <>
      <span className="text-xl sm:text-2xl">Hi there 👋 I am </span>
      <h1 className="text-xl sm:text-2xl font-bold">
        <span className="text-4xl sm:text-5xl text-sky-400 ">Tamim Ahmed</span>
      </h1>
      <span className="text-xl sm:text-3xl font-medium text-gray-200 mt-2 flex justify-center sm:justify-start items-center flex-wrap gap-2 sm:flex-row ">
        <div>and I am a passionate </div>
        <TypeAnimation
          sequence={[
            "Web Developer",
            1000,
            "Web Designer",
            1000,
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
          ]}
          speed={50}
          className="text-sky-400 font-bold text-2xl sm:text-3xl"
          repeat={Infinity}
        />
      </span>
      <div className=" text-lg mt-3 text-gray-100 max-w-prose">
        <span>
          I am a passionate web developer. I love building projects that solve
          real world problems and I love to learn new technologies.
        </span>
      </div>
      <div className="flex-col ">
        <div className="links flex  sm:mr-5 mx-auto justify-center sm:justify-start items-center mt-3 gap-4 sm:text-[1.2rem] text-[1.3rem] text-gray-100 ">
          <a
            href="https://github.com/Tamim-369"
            target="_blank"
            className=" hover:text-gray-900 hover:bg-sky-400  icon-shadow-all  transition-all duration-300 ease-linear p-2 rounded-full border-2 text-sky-400 border-sky-400 cursor-pointer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tamim-ahmed369/"
            target="_blank"
            className=" hover:text-gray-900 hover:bg-sky-400  icon-shadow-all  transition-all duration-300 ease-linear p-2 rounded-full border-2 text-sky-400 border-sky-400 cursor-pointer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61553982567839"
            target="_blank"
            className=" hover:text-gray-900 hover:bg-sky-400  icon-shadow-all  transition-all duration-300 ease-linear p-2 rounded-full border-2 text-sky-400 border-sky-400 cursor-pointer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/T369Tamim"
            target="_blank"
            className=" hover:text-gray-900 hover:bg-sky-400  icon-shadow-all  transition-all duration-300 ease-linear p-2 rounded-full border-2 text-sky-400 border-sky-400 cursor-pointer"
          >
            <FaXTwitter />
          </a>
        </div>

        <div className="btn-group flex  sm:justify-start justify-center items-center mt-5 ">
          <ScrollLink
            id="projectLink"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`py-[0.65rem] cursor-pointer border-2 border-sky-400 px-4 bg-sky-700 hover:bg-sky-600 text-gray-200  rounded-full font-semibold transition-all text-[1.13rem] ease-linear  duration-300 `}
          >
            Explore My Work
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
