import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import "../App.css";
import { FaGithub, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiFramer,
  SiGooglegemini,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";
const Projects = ({ activeLink, setActiveLink }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });

  useEffect(() => {
    if (isInView) {
      setActiveLink("projects");
    }
  }, [isInView]);
  const hitekStack = [
    {
      name: "Next",
      icon: <RiNextjsFill />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Shadcn",
      icon: <SiShadcnui />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
  ];
  const wonderfoodStack = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
  ];
  const quoterStack = [
    {
      name: "Next",
      icon: <RiNextjsFill />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
  ];
  const KalestheticsStack = [
    {
      name: "Next",
      icon: <SiNextdotjs />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-lg" />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Framer Motion",
      icon: <SiFramer />,
    },
  ];
  const LinguifyStack = [
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "Gemini",
      icon: <SiGooglegemini />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
    },
  ];
  return (
    <div ref={ref} className="mt-10">
      <Element name="projects">
        <h1 className="text-center  text-2xl font-semibold text-white">
          <span className="border-b-[3px] border-b-sky-400 px-1 md:pr-3">
            My Projects
          </span>
        </h1>
        <div className="  py-5  xl:px-10 mx-auto my-10 text-center min-h-[50dvh] flex flex-col justify-center items-center   sm:gap-3 md:gap-5   ">
          <ProjectCard
            name={"LinguifyAI"}
            image={"/linguifyai.png"}
            description={
              "An ai tool powerd by Gemini API that allows users to chat with thier PDF files. It converts pdf file to text and use that text to answer user's questions."
            }
            stack={LinguifyStack}
            codeLink={"https://github.com/Tamim-369/LinguifyAI"}
            demoLink={"https://linguifyai.onrender.com"}
          />
          <ProjectCard
            name={"HitekBD"}
            description={
              "HitekBD is a Next JS gadget ecommerce store frontend. It have a beautifull and modern design with best ecommerce design practices."
            }
            stack={hitekStack}
            image={"/hitek.png"}
            codeLink={"https://github.com/Tamim-369/Ecommerce"}
            demoLink={"https://ecommerce-tamim-369s-projects.vercel.app"}
          />

          <ProjectCard
            name={"Kalesthetics"}
            image={"/kalesthetics.png"}
            description={
              "A modern AI fitness trainer website landing page with animations and beautiful UI design."
            }
            stack={KalestheticsStack}
            codeLink={"https://github.com/Tamim-369/kalesthetics/"}
            demoLink={"https://kalesthetics.onrender.com/"}
          />
          <ProjectCard
            name={"Wonderfood"}
            image={"/wonderfood.png"}
            description={
              "A social media platform for sharing recipes, built with the MERN Stack. Key features include user authentication, profile pages, recipe CRUD operations, commenting, and a responsive, modern UI."
            }
            stack={wonderfoodStack}
            codeLink={"https://github.com/Tamim-369/Wonder-Food"}
            demoLink={"https://wonderfood.onrender.com"}
          />
          <ProjectCard
            name={"Quoter"}
            image={"/quoter2.png"}
            description={
              "A social media platform for sharing motivational Quotes, built with the NEXT JS. Key features include user authentication, profile pages, Quote CRUD operations and a responsive, modern UI."
            }
            stack={quoterStack}
            codeLink={"https://github.com/Tamim-369/Quoter/"}
            demoLink={"https://quoter-omega-ten.vercel.app/"}
          />
        </div>
      </Element>
    </div>
  );
};

export default Projects;
