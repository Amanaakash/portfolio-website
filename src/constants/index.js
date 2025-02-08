import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am Aman Aakash, a Computer Science undergrad from Nepal, passionate about building intuitive digital experiences. With a strong foundation in frontend development, I am currently diving deep into backend technologies and exploring the exciting world of Machine Learning. I thrive on learning new technologies and turning ideas into impactful solutions.`;

export const ABOUT_TEXT = `I am a passionate and curious frontend developer from Nepal, currently expanding my expertise into backend development and exploring the world of Machine Learning. With a strong foundation in web technologies, I enjoy building intuitive and responsive user experiences while continuously learning and adapting to new challenges.

My journey into tech started with a fascination for how digital products work, and it has evolved into a drive to create impactful and scalable solutions. I thrive on solving complex problems, experimenting with new technologies, and refining my skills across different domains.

Beyond coding, I love exploring new ideas, editing videos, and staying updated with the latest advancements in AI and web development. Whether it's crafting seamless UIs or diving into the logic of backend systems, I am always eager to push boundaries and grow as a developer.`;

export const PROJECTS = [
  {
    title: "HooBank Website",
    image: project1,
    description:
      "A fully responsive website recreated from figma design file using React and tailwind css to showcase my react skills.",
    technologies: ["HTML", "CSS", "React", "Tailwindcss", "Vite"],
    demo: "https://hoobankwebsitereact.netlify.app/",
    github: "https://github.com/Amanaakash/HooBank-Website",
  },
  {
    title: "ChatGPT Landing Page",
    image: project2,
    description:
      "A fully responsive webpage made using ReactJs to showcase my frontend skills.",
    technologies: ["HTML", "CSS", "React", "Vite"],
    demo: "https://chatgpt3sitewithreact.netlify.app/",
    github: "https://github.com/Amanaakash/Modern-website-react",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Tailwindcss",
      "Vite",
      "Framer Motion",
    ],
    demo: "#",
    github: "https://github.com/Amanaakash/portfolio-website.git",
  },
  {
    title: "Weather App",
    image: project4,
    description:
      "A responsive react app that levrages weather-api to dynamically display the weather conditions of a given city.",
    technologies: ["HTML", "CSS", "React", "API", "Vite"],
    demo: "https://react-weather01.netlify.app/",
    github: "https://github.com/Amanaakash/weatherApp",
  },
];

export const CONTACT = {
  address: "Bhubaneshwar, India",
  phoneNo: "+91 7970803101",
  email: "amanakashofficial@gmail.com",
};
