import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaFlutter } from "react-icons/fa6";

function TechnologiesSection() {
  return (
    <div className="flex flex-col self-center gap-8 p-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center">
        Skills
      </h1>
      <p className="text-white text-center">
        The skills, tools and technologies i use:{" "}
      </p>
      <div className="flex gap-4 flex-wrap justify-center justify-items-center">
        <FaHtml5
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <FaCss3Alt
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <IoLogoJavascript
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <BiLogoTailwindCss
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <FaReact
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <SiTypescript
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <FaNodeJs
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <FaPython
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <SiFastapi
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <SiTensorflow
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <SiScikitlearn
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <SiPandas
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <SiNumpy
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
        <FaFlutter
          color="white"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
      </div>
    </div>
  );
}

export default TechnologiesSection;
