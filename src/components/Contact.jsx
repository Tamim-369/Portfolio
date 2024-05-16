import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGithubAlt,
  FaLinkedinIn,
  FaMailBulk,
  FaPaperPlane,
} from "react-icons/fa";
import {
  PiPaperPlane,
  PiPaperPlaneFill,
  PiPaperPlaneRight,
} from "react-icons/pi";
import { RiMailFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
const Contact = ({ activeLink, setActiveLink }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      setActiveLink("contact");
      mainControls.start("final");
    }
  }, [isInView]);
  return (
    <Element name="contact" className="mt-32 min-h-[70dvh]">
      <div
        ref={ref}
        className="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto  w-11/12 lg:w-10/12  text-white font-[sans-serif]"
      >
        <motion.div
          variants={{
            init: {
              opacity: 0,
              y: 100,
            },
            final: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="init"
          animate={mainControls}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-400 mt-3">
            Have some big idea or brand to develop and need help? Then reach out
            I'd love to hear about your project and provide help.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#1a3c48] border border-[#224d5c] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-2xl">
                  <SiGmail />
                </div>
                <a
                  href="javascript:void(0)"
                  className="text-[#e8e8e8] text-sm ml-3"
                >
                  <small className="block">Mail</small>
                  <strong>ashiqurrahmantamim369@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
              <a
                href=""
                className="text-2xl cursor-pointer bg-[#1a3c48] border border-[#224d5c] text-white   h-10 w-10 rounded-full flex items-center justify-center shrink-0"
              >
                <FaGithubAlt />
              </a>{" "}
              <a
                href=""
                className="text-2xl cursor-pointer bg-[#1a3c48] border border-[#224d5c] text-white   h-10 w-10 rounded-full flex items-center justify-center shrink-0"
              >
                <FaLinkedinIn />
              </a>
              <a
                href=""
                className="text-2xl cursor-pointer bg-[#1a3c48] border border-[#224d5c] text-white  h-10 w-10 rounded-full flex items-center justify-center shrink-0"
              >
                <FaFacebookF />
              </a>
            </ul>
          </div>
        </motion.div>
        <motion.form
          variants={{
            init: {
              opacity: 0,
              y: -100,
            },
            final: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="init"
          animate={mainControls}
          transition={{ duration: 0.7 }}
          className="ml-auo space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl py-3 px-4 bg-[#152331] border-2 border-sky-500  text-white text-sm focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl py-3 px-4 bg-[#152331] border-2 border-sky-500  text-white text-sm focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-xl py-3 px-4 bg-[#152331] border-2 border-sky-500  text-white text-sm focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-xl py-3 px-4 bg-[#152331] border-2 border-sky-500  text-white text-sm focus:outline-none"
            defaultValue={""}
          />
          <button
            type="button"
            className="text-white bg-sky-400 flex justify-center items-center gap-1  font-medium font-sans rounded-md text-sm px-4 py-3 w-full"
          >
            <span className="flex text-xl justify-center items-center">
              <FaPaperPlane />
            </span>
            <span className="flex justify-center items-center text-md ">
              Send Message
            </span>
          </button>
        </motion.form>
      </div>
    </Element>
  );
};

export default Contact;
