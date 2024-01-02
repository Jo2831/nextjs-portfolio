"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

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
    title: "Framework Skills",
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
        <li>42 Abu Dhabi</li>
        <p>Associate{'\''}s degree, Software development</p>
        <p>2023- 2025</p>
        <li>ALX Software Engineering Program</li>
        <p>Certificatie of Software Engineer,From Holberton Coding School.</p>
        <p>2021-2022</p>
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certeficate of Software Engineer from ALX with Holberton School</li>
        <Link
              href="https://intranet.alxswe.com/certificates/R7YSZnxJXG"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              verify Certeficate
        </Link>
        <li>MindLuster NextJS Course certifications</li>
        <Link
              href="https://www.mindluster.com/student/certificate/11307571887"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              verify Certeficate
        </Link>
      <li> Meta Introduction to Front-End Development Course certificate</li>
      <Link
              href="https://www.coursera.org/account/accomplishments/certificate/KGE66BJ992JV"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              verify Certeficate
        </Link>
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
        <Image src="/images/update.jpg" width={500} height={500} alt="hello" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I a{'\''}m  a software engineer skilled in both frontend and backend development.
           I completed the ALX Software Engineering Program in collaboration with Holberton School,
            gaining valuable hands-on experience and a knack for delivering high-quality projects on time,
           I have a passion for continuous learning and enjoy embracing new challenges. As a quick learner, I{'\''}m always excited to take on software projects and bring positive value to each one. If you have any questions or want to explore potential collaborations, feel free to reach out. Let{'\''}s connect and create something amazing together!
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
