import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#182636] fixed z-10 w-full ">
      <div className="max-w-7xl mx-auto px-4">
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
            <div className="ml-10 flex items-baseline space-x-4 text-white">
              <a
                href="/"
                className="  px-2 pt-1 pb-1 transition-all ease-linear duration-150 hover:pb-0 hover:border-b-2 border-sky-400 text-lg font-medium"
              >
                Home
              </a>
              <a
                href="/"
                className="  px-2 pt-1 pb-1 transition-all ease-linear duration-150 hover:pb-0 hover:border-b-2 border-sky-400 text-lg font-medium"
              >
                About
              </a>
              <a
                href="/"
                className="  px-2 pt-1 pb-1 transition-all ease-linear duration-150 hover:pb-0 hover:border-b-2 border-sky-400 text-lg font-medium"
              >
                Projects
              </a>
              <a
                href="/"
                className="   px-2 pt-1 pb-1 transition-all ease-linear duration-150 hover:pb-0 hover:border-b-2 border-sky-400 text-lg font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
