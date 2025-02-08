import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiFramer,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opatcity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(64, 145, 244, 0.85)",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(64, 145, 244, 0.85)",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(239, 243, 249, 0.84)",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFramer className="text-7xl text-white-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(244, 64, 64, 0.85)",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiGit className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(10, 233, 48, 0.85)",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(10, 233, 48, 0.85)",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 10px 30px rgba(229, 233, 10, 0.85)",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
