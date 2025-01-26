import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";

function TechnologiesSection() {
  return (
    <div className="flex flex-col self-center gap-8 p-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white text-center">Skills</h1>
      <p className="text-white text-center">The skills, tools and technologies i use: </p>
      <div className="flex gap-4 flex-wrap justify-center justify-items-center">
        <FaInstagram color="white" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"/>
        <BsTwitterX color="white" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
        <CiLinkedin color="white" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
        <MdOutlineEmail color="white" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
        <FaWhatsapp color="white" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
        <PiTelegramLogo color="white" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
      </div>
    </div>
  );
}

export default TechnologiesSection;
