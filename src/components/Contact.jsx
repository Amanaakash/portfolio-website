import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.email}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: +100 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <div className="mx-8 mt-8 flex items-center justify-center gap-10 text-2xl">
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
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
