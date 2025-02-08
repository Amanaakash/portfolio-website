import React from "react";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 mr-4 pr-2"
            >
              <motion.img
                src={project.image}
                width={400}
                height={400}
                alt={project.title}
                className="mb-6 rounded-lg"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 10px 30px rgba(189, 78, 216, 0.85)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full mb-4 pb-4 max-w-xl lg:w-3/4"
            >
              <div>
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0px 10px 30px rgba(189, 78, 216, 0.85)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 mr-4 rounded bg-purple-600 px-4 py-2 text-white"
                  >
                    Demo
                  </motion.button>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0px 10px 30px rgba(189, 78, 216, 0.85)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 rounded bg-purple-600 px-4 py-2 text-white"
                  >
                    Github
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
