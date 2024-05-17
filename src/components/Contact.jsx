import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { injectStyle } from "react-toastify/dist/inject-style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaXTwitter } from "react-icons/fa6";
const Contact = ({ activeLink, setActiveLink }) => {
  const [formData, setFormData] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });
  const mainControls = useAnimation();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_TEMPLATE_NAME);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_NAME,
        import.meta.env.VITE_SERVICE_TEMPLATE,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then((result) => {
        toast("Message Sent Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "bg-[#203548] border border-[#203548] text-white",
        });

        setFormData({});
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        className="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto w-11/12 lg:w-10/12 text-white font-[sans-serif]"
      >
        <motion.div
          variants={{
            init: { opacity: 0, y: 100 },
            final: { opacity: 1, y: 0 },
          }}
          initial="init"
          animate={mainControls}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-400 mt-3">
            Have some big idea or brand to develop and need help? Then reach
            out, I'd love to hear about your project and provide help.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#1a3c48] border border-[#224d5c] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-2xl">
                  <SiGmail />
                </div>
                <a
                  href="mailto:ashiqurrahmantamim369@gmail.com"
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
                href="https://github.com/Tamim-369"
                className="text-2xl cursor-pointer bg-[#1a3c48] border border-[#224d5c] text-white h-10 w-10 rounded-full flex items-center justify-center shrink-0"
              >
                <FaGithubAlt />
              </a>
              <a
                href="https://www.linkedin.com/in/tamim-ahmed369/"
                className="text-2xl cursor-pointer bg-[#1a3c48] border border-[#224d5c] text-white h-10 w-10 rounded-full flex items-center justify-center shrink-0"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/T369Tamim"
                className="text-2xl cursor-pointer bg-[#1a3c48] border border-[#224d5c] text-white h-10 w-10 rounded-full flex items-center justify-center shrink-0"
              >
                <FaXTwitter />
              </a>
            </ul>
          </div>
        </motion.div>
        <motion.form
          variants={{
            init: { opacity: 0, y: -100 },
            final: { opacity: 1, y: 0 },
          }}
          initial="init"
          onSubmit={handleSubmit}
          animate={mainControls}
          ref={form}
          transition={{ duration: 0.7 }}
          className="ml-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl py-3 px-4 bg-[#152331] border-2 border-sky-500 text-white text-sm focus:outline-none"
            onChange={handleChange}
            name="from_name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl py-3 px-4 bg-[#152331] border-2 border-sky-500 text-white text-sm focus:outline-none"
            onChange={handleChange}
            name="from_email"
            required
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-xl py-3 px-4 bg-[#152331] border-2 border-sky-500 text-white text-sm focus:outline-none"
            name="message"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="text-white bg-sky-400 flex justify-center items-center gap-1 font-medium font-sans rounded-md text-sm px-4 py-3 w-full"
          >
            <span className="flex text-xl justify-center items-center">
              <FaPaperPlane />
            </span>
            <span className="flex justify-center items-center text-md">
              Send Message
            </span>
          </button>
        </motion.form>
      </div>
    </Element>
  );
};

export default Contact;
