import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaMailBulk,
  FaMailchimp,
  FaPlaneArrival,
} from "react-icons/fa";
import { FaPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion, spring } from "framer-motion";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className=" transition-all  min-h-[100dvh]  flex flex-col  justify-center items-start w-10/12 mx-auto">
      <div className="flex justify-center my-auto items-center z-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-section text-white text-xl my-auto hidden sm:flex flex-col sm:justify-start sm:items-start sm:text-left justify-center items-center text-center"
        >
          <HeroContent />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-section text-white text-xl my-auto flex sm:hidden flex-col sm:justify-start sm:items-start sm:text-left justify-center items-center text-center"
        >
          <HeroContent />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
