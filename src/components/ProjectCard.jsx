import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaEye, FaGithub, FaLink, FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
const ProjectCard = ({
  name,
  image,
  description,
  stack,
  codeLink,
  demoLink,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("final");
    }
  }, [isInView]);
  return (
    <>
      <motion.div
        variants={{
          init: {
            opacity: 0,
            y: 100,
            // scale: 0.8,
          },
          final: {
            opacity: 1,
            y: 0,
            // scale: 1,
          },
        }}
        initial="init"
        animate={mainControls}
        transition={{ duration: 0.7 }}
        ref={ref}
        className="flex flex-col w-11/12 sm:mb-10 lg:mb-0 lg:px-10 relative md:w-8/12 lg:w-full lg:flex-row lg:even:flex-row-reverse justify-center items-center gap-4 "
      >
        {/* <div className="w-full group  relative  overflow-hidden top-0 bottom-0 right-0 left-0  ">
          <img
            src={image}
            className="h-full w-full  object-contain  rounded-t-2xl  object-center filter "
            alt=""
            srcset=""
          />
          <div className="flex absolute z-10 left-0  bottom-1 right-0 lg:mt-5 justify-between px-2 items-center gap-2">
            <a
              href={codeLink}
              target="_blank"
              className="hover:scale-110 transition-all ease-linear shadow-sm shadow-black bg-[#203548] duration-100 p-[0.6rem]  rounded-full  flex  justify-center items-center gap-2 text-white"
            >
              <div className="text-xl ">
                <FaCode />
              </div>
            </a>
            <a
              href={demoLink}
              target="_blank"
              className=" hover:scale-110 transition-all ease-linear duration-100 shadow-sm shadow-black p-2 bg-[#203548] rounded-full  flex  justify-center items-center gap-2 text-white"
            >
              <div className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 256 256"
                >
                  <g fill="#ffffff" fillRule="nonzero">
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M5,3c-1.09306,0 -2,0.90694 -2,2v14c0,1.09306 0.90694,2 2,2h14c1.09306,0 2,-0.90694 2,-2v-7h-2v7h-14v-14h7v-2zM14,3v2h3.58594l-9.29297,9.29297l1.41406,1.41406l9.29297,-9.29297v3.58594h2v-7z"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div> */}
        <div className="lg:flex-1">
          <img
            src={image}
            className=" sm:flex hidden object-cover sm:object-scale-down filter    rounded-xl"
            alt=""
          />
        </div>

        <div className="lg:flex-1 lg:relative sm:absolute lg:bg-none lg:border-none bg-gradient-to-t sm:from-[#0e324b] to-[#0e324bb4] border-sky-600 border-b sm:border backdrop-blur-[10px] h-full w-full sm:rounded-xl  sm:text-center text-left flex flex-col justify-center text-white p-4 sm:p-10">
          <span className=" text-xl sm:text-3xl font-semibold font-sans">
            {name}
          </span>
          <span className="sm:text-xl font-medium font-sans">
            {description}
          </span>
          <div className=" sm:flex hidden lg:mt-4 justify-center text-center gap-2 flex-wrap">
            {stack.map((item) => (
              <div
                key={item}
                className="flex justify-center items-center gap-2  px-3 rounded-full text-white"
              >
                <div className="text-xl text-center">{item.icon}</div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
          <div className="btn-group sm:mt-0 mt-5 lg:pt-5 flex justify-start sm:justify-center items-center gap-2">
            <a
              href={codeLink}
              target="_blank"
              className="flex gap-2 justify-center items-center border border-sky-600 py-2 px-2 sm:px-3 bg-sky-700 text-white rounded-full"
            >
              <div className="text-xl sm:text-2xl">
                <FaCode />
              </div>
              <div className="text-sm font-semibold  hidden sm:flex ">
                {" "}
                Source Code
              </div>
            </a>
            <a
              href={demoLink}
              target="_blank"
              className="flex gap-2 justify-center items-center border border-sky-600 py-2 px-2 sm:px-3 bg-sky-700 text-white rounded-full"
            >
              <div className="text-xl sm:text-2xl">
                <FaLink />
              </div>
              <div className="text-sm font-semibold  hidden sm:flex ">
                Live Preview
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
