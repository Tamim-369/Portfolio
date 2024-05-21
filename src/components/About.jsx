import React, { useEffect, useRef } from "react";
import {
  FaCss3,
  FaCss3Alt,
  FaDatabase,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaLinux,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import {
  RiNextjsFill,
  RiNodejsFill,
  RiNodejsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";
import { Element } from "react-scroll";
const About = ({ activeLink, setActiveLink }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("final");
      setActiveLink("about");
    }
  }, [isInView]);
  return (
    <>
      <Element name="about">
        <motion.h1
          variants={{
            init: { opacity: 0, y: 100 },
            final: { opacity: 1, y: 0 },
          }}
          initial="init"
          animate={mainControls}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold sm:mb-2 mb-5  text-center text-white"
        >
          <span className="border-b-[3px] border-b-sky-400 px-1 md:pr-3">
            About me
          </span>
        </motion.h1>

        <div className="min-h-[60dvh] pb-10 md:w-[98%] lg:w-10/12 mx-auto flex md:flex-row flex-col gap-2 justify-center items-center">
          {/* <div className="w-4/12  p-2 flex justify-center items-center text-center mx-auto">
        <img
        src="/me3.png"
        className="  h-full mx-auto md:h-72 object-cover rounded-full md:rounded-3xl   border-[3px] border-sky-400 "
        alt=""
        />
      </div> */}
          <div ref={ref} className=" w-10/12 md:w-8/12  text-white">
            <motion.h1
              variants={{
                init: { opacity: 0, y: 100 },
                final: { opacity: 1, y: 0 },
              }}
              initial="init"
              animate={mainControls}
              transition={{ duration: 0.7 }}
              className="text-2xl font-bold mb-2 "
            >
              <span className="border-b-[3px] border-b-sky-400 px-1 md:pr-3">
                Background
              </span>
            </motion.h1>
            <motion.p
              variants={{
                init: { opacity: 0, y: 100 },
                final: { opacity: 1, y: 0 },
              }}
              initial="init"
              animate={mainControls}
              transition={{ duration: 0.7 }}
              className="text-lg font-medium poppins"
            >
              I'm Tamim Ahmed, a passionate web developer who enjoys building
              complex projects that solve real-world problems. My goal is to
              build applications that are scalable and efficient under the hood
              while providing engaging pixel perfect user experiences. I am a
              life long learner I have learn many technologies and developed
              many projects that solves real world problem. You will find more
              information about me in my resume.
            </motion.p>
            <motion.a
              href="https://drive.google.com/file/d/1NMWn4N_Jk6N3xlwdFY_BpKnnUON5hW97/view?usp=sharing"
              target="_blank"
              variants={{
                init: { opacity: 0, x: -100 },
                final: { opacity: 1, x: 0 },
              }}
              initial="init"
              animate={mainControls}
              transition={{ duration: 0.7 }}
              className="flex text-lg border-b-[2px] border-sky-50   transition-all ease-linear duration-200 hover:text-sky-400 hover:border-sky-400  w-[11rem] justify-start font-semibold mt-3 cursor-pointer mb-10 items-center gap-3"
            >
              <div className="">View my resume</div>
              <div className="text-lg mt-1">
                <FaArrowRightLong />
              </div>
            </motion.a>
            <div>
              <h1 className="text-[1.3rem] font-semibold  mt-4  mb-5">
                <span className="border-b-[3px] border-sky-400 px-1 md:pr-3">
                  Skills
                </span>
              </h1>
              <div className="grid w-full mt-4 grid-cols-4 text-3xl md:text-4xl gap-4">
                <motion.div
                  variants={{
                    init: { opacity: 0, x: -100 },
                    final: { opacity: 1, x: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon flex justify-center items-center  flex-col font-semibold"
                >
                  <FaHtml5 />
                  <p className="text-sm text-center"> HTML</p>
                </motion.div>
                <motion.div
                  variants={{
                    init: { opacity: 0, y: 100 },
                    final: { opacity: 1, y: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon flex justify-center items-center  flex-col font-semibold"
                >
                  <FaCss3Alt />
                  <p className="text-sm text-center"> CSS</p>
                </motion.div>
                <motion.div
                  variants={{
                    init: { opacity: 0, x: 100 },
                    final: { opacity: 1, x: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon flex justify-center items-center  flex-col font-semibold"
                >
                  <RiTailwindCssFill />
                  <p className="text-sm text-center"> Tailwind</p>
                </motion.div>
                <motion.div
                  variants={{
                    init: { opacity: 0, y: -100 },
                    final: { opacity: 1, y: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon flex justify-center items-center  flex-col font-semibold"
                >
                  <FaJsSquare />
                  <p className="text-sm text-center"> Javascript</p>
                </motion.div>
                <motion.div
                  variants={{
                    init: { opacity: 0, x: 100 },
                    final: { opacity: 1, x: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon flex justify-center items-center  flex-col font-semibold"
                >
                  <RiNodejsFill />
                  <p className="text-sm text-center"> Node JS</p>
                </motion.div>
                <motion.div
                  variants={{
                    init: { opacity: 0, y: -100 },
                    final: { opacity: 1, y: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon flex justify-center items-center  flex-col font-semibold"
                >
                  <FaReact />
                  <p className="text-sm text-center"> React JS</p>
                </motion.div>
                <motion.div
                  variants={{
                    init: { opacity: 0, x: 100 },
                    final: { opacity: 1, x: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon text-4xl flex justify-center items-center  flex-col font-semibold"
                >
                  <RiNextjsFill />
                  <p className="text-sm text-center"> Next JS</p>
                </motion.div>
                <motion.div
                  variants={{
                    init: { opacity: 0, y: 100 },
                    final: { opacity: 1, y: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon flex justify-center items-center  flex-col font-semibold"
                >
                  <SiMongodb />
                  <p className="text-sm text-center"> MongoDB</p>
                </motion.div>

                <motion.div
                  variants={{
                    init: { opacity: 0, x: -100 },
                    final: { opacity: 1, x: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon text-2xl md:text-3xl flex justify-center items-center  flex-col font-semibold"
                >
                  <FaDatabase />
                  <p className="text-sm text-center"> SQL</p>
                </motion.div>
                <motion.div
                  variants={{
                    init: { opacity: 0, x: 100 },
                    final: { opacity: 1, x: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon flex justify-center items-center  flex-col font-semibold"
                >
                  <FaLinux />
                  <p className="text-sm text-center"> Linux</p>
                </motion.div>
                <motion.div
                  variants={{
                    init: { opacity: 0, y: -100 },
                    final: { opacity: 1, y: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon flex justify-center items-center  flex-col font-semibold"
                >
                  <FaGitAlt />
                  <p className="text-sm text-center"> Git</p>
                </motion.div>
                <motion.div
                  variants={{
                    init: { opacity: 0, x: -100 },
                    final: { opacity: 1, x: 0 },
                  }}
                  initial="init"
                  animate={mainControls}
                  transition={{ duration: 0.7 }}
                  className="icon  flex justify-center items-center  flex-col font-semibold"
                >
                  <FaGithub />
                  <p className="text-sm text-center"> GIthub</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default About;
