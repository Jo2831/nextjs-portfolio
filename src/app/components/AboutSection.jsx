"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Programing Language Skills",
    id: "languge",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>Python</li>
        <li>Typescript</li>
        <li>Solidity</li>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Freamwork Skills",
    id: "freamwork",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>NextJs</li>
        <li>Flask</li>
        <li>tailwind css</li>
        <li>bootstrap</li>
        <li>Rest-Api</li>
      </ul>
    ),
  },
  {
    title: "Database Skills",
    id: "database",
    content: (
      <ul className="list-disc pl-2">
        <li>Mysql</li>
        <li>Redis</li>
        <li>Postgresql</li>
        <li>Mangodb</li>
  
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Software Enginering</li>
        <li>Holberton Coding School, ALX</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Meta Introduction To Front-end Devlopement</li>
        <li>MindLuster NextJS Course certifications</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languge");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a software engineer skilled in both frontend and backend development.
           I completed the ALX Software Engineering Program in collaboration with Holberton School,
            gaining valuable hands-on experience and a knack for delivering high-quality projects on time,
           I have a passion for continuous learning and enjoy embracing new challenges. As a quick learner, I'm always excited to take on software projects and bring positive value to each one. If you have any questions or want to explore potential collaborations, feel free to reach out. Let's connect and create something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("languge")}
              active={tab === "languge"}
            >
              {" "}
            Language{" "}
          </TabButton>
            <TabButton
              selectTab={() => handleTabChange("database")}
              active={tab === "database"}
            >
            
              {" "}
              Database{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("freamwork")}
              active={tab === "freamwork"}
            >
            
              {" "}
              Freamwork{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
