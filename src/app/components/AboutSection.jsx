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
        <li>C++</li>
        <li>Python</li>
        <li>Typescript</li>
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
        <li>NextJs</li>
        <li>Flask</li>
        <li>Django</li>
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
        <p>Associate&apos;s degree, Software development</p>
        <p>Completed projects in Linux systems, cybersecurity, web development.</p>
        <p>Developed custom shells, game engines, real-time applications, and microservices</p>
        <p>2023- 2025</p>
        <li>ALX Africa </li>
        <p>Certificatie of Software Engineer.</p>
        <p>Completed a one-year, intensive full-stack development program.</p>
        <p>2022-2023</p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certeficate of Software Engineer from ALX colabration with Holberton School</li>
        <Link
              href="https://intranet.alxswe.com/certificates/R7YSZnxJXG"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              verify Certeficate
        </Link>
        <li>Certificate for ALX AI Starter Kit</li>
        <Link
              href="https://intranet.alxswe.com/certificates/rPN72LfYmM"
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
          Software Engineer specializing in backend development, AI, and full-stack web applications. 
          Passionate about building scalable and secure systems using Django, Node.js, and Next.js. 
            Experienced in real-time applications, microservices. Open to opportunities in software engineering, AI development, and backend infrastructure.
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
