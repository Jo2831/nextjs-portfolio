"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Transcendence (Real-time Multiplayer Pong Game)",
    description: "A full-stack multiplayer Pong game featuring real-time gameplay, secure authentication (OAuth 2.0 & 2FA), and integrated live chat. Built using Django, WebSockets, and Docker.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Python"],
    gitUrl: "https://github.com/Jo2831/Ft_Transcendence.git",
    previewUrl: "https://github.com/Jo2831/Ft_Transcendence.git",
  },
  {
    id: 2,
    title: "Inception (Dockerized Web Infrastructure)",
    description: "A secure, containerized web infrastructure using Docker, Nginx, and MariaDB. It automates service deployment, ensuring scalability and system security.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jo2831/Inception.git",
    previewUrl: "https://github.com/Jo2831/Inception.git",
  },
   {
    id: 3,
    title: "IRC (Internet Relay Chat Server & Client)",
    description: "A custom IRC chat system built using C++, enabling real-time multi-user communication with authentication, message parsing, and command handling.",
    image: "/images/projects/3.png",
    tag: ["All", "C++"],
    gitUrl: "https://github.com/Jo2831/IRC.git",
    previewUrl: "https://github.com/Jo2831/IRC.git",
  },
  {
    id: 4,
    title: "NextJs Car-show Website",
    description: "Car Show is an immersive Next.js web application that demonstrates my expertise in web development. It allows car enthusiasts to explore and filter cars based on brand, fuel type, and year. Developed using Nextjs, React, Tailwind CSS, Typescript and using APIs.",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "Nextjs],
    gitUrl: "https://github.com/Jo2831/car_show_my_app.git",
    previewUrl: "https://yoseph-car-show.vercel.app/",
  },
  {
    id: 5,
    title: "BlogAPI_APP",
    description: "This blog app is a RESTful API built using NodeJs, Express, and MongoDB. It provides CRUD functionality and authentication, utilizing MongoDB as the database and ExpressJs as the backend framework.",
    image: "/images/projects/5.png",
    tag: ["All", "Web", "JavaScript"],
    gitUrl: "https://github.com/Jo2831/BlogAPI_APP.git",
    previewUrl: "https://github.com/Jo2831/BlogAPI_APP.git",
  },
  {
    id: 6,
    title: "Ketero",
    description: "A hospital appointment booking system that optimizes scheduling and patient management. Built using Flask, MySQL, and REST APIs to improve efficiency in healthcare services.",
    image: "/images/projects/6.png",
    tag: ["All", "Web", "Python"],
    gitUrl: "https://github.com/Jo2831/Ketero.git",
    previewUrl: "https://github.com/eleccrazy/Ketero.git",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="C" isSelected={tag === "C"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

