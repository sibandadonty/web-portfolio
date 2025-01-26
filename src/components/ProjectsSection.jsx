import React from "react";
import projectImg from "../assets/images/proj.png";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

function ProjectsSection() {
  const projects = [
    {
      id: "p1",
      description: "A web application to track fitness progress and goals.",
      title: "Fitness Tracker",
      url: "https://www.fittrack.com",
      thumbNail: projectImg,
    },
    {
      id: "p2",
      description: "An e-commerce platform for local handmade products.",
      title: "Handmade Market",
      url: "https://www.handmademarket.com",
      thumbNail: projectImg,
    },
    {
      id: "p3",
      description: "A task management tool to boost productivity.",
      title: "TaskMaster",
      url: "https://www.taskmasterapp.com",
      thumbNail: projectImg,
    },
    {
      id: "p4",
      description: "A portfolio website for showcasing artwork and projects.",
      title: "Art Portfolio",
      url: "https://www.artportfolio.com",
      thumbNail: projectImg,
    },
    {
      id: "p5",
      description:
        "A platform to learn new programming languages interactively.",
      title: "Code Academy",
      url: "https://www.codeacademy.com",
      thumbNail: projectImg,
    },
    {
      id: "p6",
      description: "A blog site for tech enthusiasts and professionals.",
      title: "TechTalks Blog",
      url: "https://www.techtalksblog.com",
      thumbNail: projectImg,
    },
  ];

  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
        Projects
      </h1>
      <div className="grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-start items-start gap-4">
        {projects.map((project) => {
          return (
            <div
              className="rounded-md bg-white text-black shadow-sm"
              key={project.id}
            >
              <img src={project.thumbNail} alt="project" />
              <div className="p-2 flex justify-between items-start">
                <div>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                </div>
                <a target="_blank" href={project.url}>
                  <LiaExternalLinkAltSolid
                    size={24}
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;
