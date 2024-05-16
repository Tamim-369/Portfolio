import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import "../App.css";
import { FaGithub, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import ProjectCard from "./ProjectCard";
const Projects = ({ activeLink, setActiveLink }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });

  useEffect(() => {
    if (isInView) {
      setActiveLink("projects");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="mt-10">
      <Element name="projects">
        <h1 className="text-center  text-2xl font-semibold text-white">
          <span className="border-b-[3px] border-b-sky-400 px-1 md:pr-3">
            My Projects
          </span>
        </h1>
        <div className="  py-5  xl:px-10 mx-auto my-10 min-h-[50dvh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-3 md:gap-5 xs:px-16 sm:px-5 px-5  ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Element>
    </div>
  );
};

export default Projects;
