import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <>
      <span className="text-xl sm:text-2xl">Hi there 👋 I am </span>
      <h1 className="text-xl sm:text-2xl font-bold">
        <span className="text-4xl sm:text-5xl text-sky-400 ">Tamim Ahmed</span>
      </h1>
      <span className="text-2xl sm:text-3xl font-medium text-gray-200 mt-2 flex justify-center sm:justify-start items-center flex-wrap gap-2 sm:flex-row ">
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
          className="text-sky-400 font-bold text-3xl"
          repeat={Infinity}
        />
      </span>
      <div className=" text-lg mt-3 text-gray-100 max-w-prose">
        <span>
          I am a passionate web developer focused on crafting innovative
          solutions to enhance user experiences and drive business growth.
        </span>
      </div>
      <div className="flex-col ">
        <div className="links flex  sm:mr-5 mx-auto justify-center sm:justify-start items-center mt-3 gap-4 sm:text-[1.2rem] text-[1.3rem] text-gray-100 ">
          <div className=" hover:text-gray-900 hover:bg-sky-400  hover:shadow-md hover:shadow-sky-400 transition-all duration-300 ease-linear p-2 rounded-full border-2 text-sky-400 border-sky-400 cursor-pointer">
            <FaGithub />
          </div>
          <div className=" hover:text-gray-900 hover:bg-sky-400  hover:shadow-md hover:shadow-sky-400 transition-all duration-300 ease-linear p-2 rounded-full border-2 text-sky-400 border-sky-400 cursor-pointer">
            <FaLinkedinIn />
          </div>
          <div className=" hover:text-gray-900 hover:bg-sky-400  hover:shadow-md hover:shadow-sky-400 transition-all duration-300 ease-linear p-2 rounded-full border-2 text-sky-400 border-sky-400 cursor-pointer">
            <FaFacebook />
          </div>
          <div className=" hover:text-gray-900 hover:bg-sky-400  hover:shadow-md hover:shadow-sky-400 transition-all duration-300 ease-linear p-2 rounded-full border-2 text-sky-400 border-sky-400 cursor-pointer">
            <FaInstagram />
          </div>
        </div>
        <div className="btn-group flex sm:justify-start justify-center items-center mt-5 ">
          <button className="py-2 px-4 bg-sky-600  shadow-sky-600  text-gray-300 rounded-3xl font-semibold transition-all text-[1.13rem] ease-linear duration-300 hover:scale-105">
            Explore My Work
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
