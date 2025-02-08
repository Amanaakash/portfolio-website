import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/amanlogo1.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          src={logo}
          alt="logo"
          className="w-16 h-16 rounded-lg"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(189, 78, 216, 0.85)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.div
          className="rounded-sm"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(189, 78, 216, 0.85)",
          }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/aman-akash-740899242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </motion.div>
        <motion.div
          className="rounded-sm"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(189, 78, 216, 0.85)",
          }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="https://github.com/Amanaakash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </motion.div>
        <motion.div
          className="rounded-sm"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(189, 78, 216, 0.85)",
          }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="https://x.com/AmanAka88593578"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </motion.div>
        <motion.div
          className="rounded-sm"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(189, 78, 216, 0.85)",
          }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="https://www.instagram.com/aakashaman1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
