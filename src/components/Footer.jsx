import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#192939] border-t border-t-[#274e68]">
        <div className="grid grid-cols-2 md:grid-cols-2  text-white text-sm md:text-base py-5 px-10">
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
            <p className="text-center">
              <a
                href="https://github.com/tamim-369"
                target="_blank"
                className="text-2xl"
                rel="noreferrer"
              >
                {" "}
                <FaGithub />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
