import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={` mx-auto w-full  fixed    z-50 `}>
      <div className=" mx-auto px-8 filter backdrop-blur-2xl bg-sky-400/50">
        <div className="flex justify-between h-16 items-center   ">
          <div className="flex-shrink-0 flex justify-center items-center">
            <Link
              to="/"
              className="text-white text-2xl my-auto poppins  poppins font-semibold"
            >
              Tamim
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-[1.05rem] text-white font-sans ">
              <a
                href="/"
                className="  px-[0.4rem]   transition-all ease-linear duration-150   font-medium"
              >
                Home
              </a>
              <a
                href="/"
                className="  px-[0.4rem]   transition-all ease-linear duration-150 hover:pb-0  font-medium text-gray-100"
              >
                About
              </a>
              <a
                href="/"
                className="   px-[0.4rem]   transition-all ease-linear duration-150 hover:pb-0   font-medium text-gray-100"
              >
                Projects
              </a>
              <a
                href="/"
                className="    px-[0.4rem]   transition-all ease-linear duration-150 hover:pb-0  font-medium text-gray-100"
              >
                Contact
              </a>
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
        <motion.div
          initial={{ display: "none" }}
          animate={{ display: "block" }}
          transition={{ duration: 0.6 }}
          className="md:hidden  absolute w-full  right-0 h-[100dvh]"
        >
          <div className="px-2  space-y-2 sm:px-3 h-full flex flex-col justify-center items-center  backdrop-blur-3xl bg-sky-500/25 shadow-sm shadow-sky-800 text-center">
            <div className="flex flex-col gap-2 mb-44">
              <a
                href="/"
                className="text-gray-300 p-2 w-full    hover:text-white flex justify-center items-center  px-3 py-2 rounded-md text-xl font-medium"
              >
                Home
              </a>
              <a
                href="/"
                className="text-gray-300 p-2 w-full    hover:text-white flex justify-center items-center  px-3 py-2 rounded-md text-xl font-medium"
              >
                About
              </a>
              <a
                href="/"
                className="text-gray-300 p-2 w-full bg  hover:text-white flex justify-center items-center  px-3 py-2 rounded-md text-xl font-medium"
              >
                Projects
              </a>
              <a
                href="/"
                className="text-gray-300 p-2 w-full bg  hover:text-white flex justify-center items-center  px-3 py-2 rounded-md text-xl font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
