"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs Car-show Website",
    description: "Car Show is an immersive Next.js web application that demonstrates my expertise in web development. It allows car enthusiasts to explore and filter cars based on brand, fuel type, and year. Developed using Nextjs, React, Tailwind CSS, Typescript and using APIs.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jo2831/car_show_my_app.git",
    previewUrl: "https://yoseph-car-show.vercel.app/",
  },
  {
    id: 2,
    title: "BlogAPI_APP",
    description: "this blog app is RESTful API using NodeJs Express and MongoDB and in this project am created Restfull api service and i used Mangodb as a database and ExpressJs as backed framework.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jo2831/BlogAPI_APP.git",
    previewUrl: "https://github.com/Jo2831/BlogAPI_APP.git",
  },
  {
    id: 3,
    title: "Ketro",
    description: "Ketero, derived from the Amharic word meaning making an appointment, is a collaborative and ambitious full-stack web application that I had the opportunity to contribute to. The project focuses on providing a seamless online booking platform for hospital cards and appointments. It has been a significant team effort, and I am proud to have been part of this project, gaining valuable experience in both technical and soft skills.Ketero simplifies the process of booking hospital cards and appointments through its user-friendly web interface. By leveraging a full-stack approach, it combines the power of backend and frontend technologies to create a comprehensive solution.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jo2831/Ketero.git",
    previewUrl: "https://github.com/eleccrazy/Ketero.git",
  },
  {
    id: 4,
    title: "Senbet",
    description: "Snebet is a comprehensive event organizer web application that I developed. It serves as a full-stack web application, utilizing the Flask framework for the backend and MySQL database for data storage. The frontend is built using HTML, CSS, JavaScript, and Bootstrap, ensuring a seamless user experience.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jo2831/Senbet.git",
    previewUrl: "https://github.com/Jo2831/Senbet.git",
  },
  {
    id: 5,
    title: "Printf-C",
    description: "This repository contains a custom implementation of the printf function in C. The aim of this project was to develop a simplified version of the standard printf function to gain a deeper understanding of its inner workings. Features Supports basic format specifiers, including %d, %s, %c, %p, %x, %X and %f. Handles variable arguments based on the provided format string. Prints the formatted output to the console.",
    image: "/images/projects/5.png",
    tag: ["All", "C"],
    gitUrl: "https://github.com/Jo2831/42-printf.git",
    previewUrl: "https://github.com/Jo2831/42-printf.git",
  },
  {
    id: 6,
    title: "Simple-Shell",
    description: "basic command-line interpreter, or shell, implemented in C. It allows users to execute commands, manage input/output redirection, and handle background processes. By developing this project, you will gain knowledge in command parsing, process creation, signal handling, and basic input/output operations. Explore the code, experiment with commands, and enhance your systems programming skills.",
    image: "/images/projects/6.png",
    tag: ["All", "C"],
    gitUrl: "https://github.com/Jo2831/simple_shell.git",
    previewUrl: "https://github.com/Jo2831/simple_shell.git",
  },
  {
    id: 7,
    title: "higher level programing projects",
    description: "In this repository, you will find a collection of high-level language projects implemented in Python and JavaScript. These projects have provided me with a solid understanding of these languages and their respective ecosystems. If you would like to explore these projects, please visit my GitHub repository. You will find a diverse range of projects that showcase my proficiency in Python and JavaScript. Feel free to browse through the code and witness the depth of my knowledge in these languages.",
    image: "/images/projects/6.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/Jo2831/alx-higher_level_programming.git",
    previewUrl: "https://github.com/Jo2831/alx-higher_level_programming.git",
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
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="C"
          isSelected={tag === "C"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
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
