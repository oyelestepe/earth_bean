import React from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[rgba(250,245,237,0.3)] backdrop-blur-md p-3 bottom-0 w-full shadow-[0_-2px_5px_rgba(0,0,0,0.1)] z-[1]">
      <ul className="flex justify-center list-none p-0">
        <li className="mx-2.5">
          <a
            href="https://github.com/oyelestepe"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-[#73472e] text-[20px] hover:text-[#a0522d]"
          >
            <IoLogoGithub className="text-[24px] text-[#73472e] hover:text-[#a0522d] transition-colors duration-200" />
          </a>
        </li>

        <li className="mx-2.5">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-[#73472e] text-[20px] hover:text-[#a0522d]"
          >
            <FaInstagram className="text-[24px] text-[#73472e] hover:text-[#a0522d] transition-colors duration-200" />
          </a>
        </li>
      </ul>

      <p className="text-center mt-1.5 text-[14px] text-[#555]">
        All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
