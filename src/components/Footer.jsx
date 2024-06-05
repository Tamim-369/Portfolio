import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#192939] border-t border-t-[#274e68]">
        <div className="grid grid-cols-1 sm:gap-0 gap-4 sm:grid-cols-2   text-white text-sm md:text-base py-5 px-10">
          <div className="flex justify-center items-center">
            <p className="text-center">
              © 2022. All rights reserved. Created by
              <a
                href="https://github.com/tamim-369"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Tamim Ahmed
              </a>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-center flex justify-center items-center gap-4">
              <a
                href="https://github.com/Tamim-369"
                target="_blank"
                className="text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tamim-ahmed369/"
                target="_blank"
                className="text-2xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61553982567839"
                target="_blank"
                className="text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/T369Tamim"
                target="_blank"
                className="text-2xl"
              >
                <FaXTwitter />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
