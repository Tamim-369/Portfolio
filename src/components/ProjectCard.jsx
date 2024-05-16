import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaReact } from "react-icons/fa";
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
        className="project  sm:my-0 my-2 flex bg-[#203548] border-2 border-[#406686] shadow-md  shadow-[#406686]   flex-col rounded-2xl justify-center items-center "
      >
        <div className="w-full group p-2 relative overflow-hidden top-0 bottom-0 right-0 left-0  ">
          <img
            src={image}
            className="h-full w-full  object-contain  rounded-xl object-center filter "
            alt=""
            srcset=""
          />
          <div className="flex absolute z-10 left-0  bottom-1 right-0 lg:mt-5 justify-between px-2 items-center gap-2">
            <a
              href={codeLink}
              target="_blank"
              className="hover:scale-110 transition-all ease-linear shadow-sm shadow-black duration-100 p-[0.6rem] bg-[#203548] rounded-full  flex  justify-center items-center gap-2 text-white"
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
        </div>
        <div className="  mx-auto transition-all ease-linear duration-150 my-auto  flex justify-center items-center flex-col  pb-7 rounded-b-2xl text-white text-center ">
          <h1 className="text-xl mb-2 mt-4 font-bold">{name}</h1>
          <p className=" text-base px-3  font-medium poppins text-gray-200">
            {description}
          </p>

          <span className="lg:mt-5 flex-wrap  w-11/12 mt-2 flex gap-2 justify-center items-center">
            {stack.map((item, index) => (
              <span className="flex justify-center items-center gap-1">
                <div className="text-xl ">{item.icon}</div>
                <div className="text-sm ">{item.name}</div>
              </span>
            ))}
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
