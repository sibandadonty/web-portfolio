import React from "react";
import profileImg from "../assets/images/prof-2.png";

function HeroSection() {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row">
      <div className="flex-1 flex flex-col gap-8 justify-center text-center md:text-left items-start self-center p-8">
      <h1 className="text-3xl md:5xl font-bold m-auto md:m-0">Fullstack Software Developer</h1>
      <p>
        I am Donty Sibanda, a full-stack software developer with a passion for building
        intuitive, responsive, and visually appealing web and mobile
        applications, as well as designing robust and efficient backend systems
        to power seamless user experiences.
      </p>
      <button className="bg-blue-400 text-white p-2 rounded-md m-auto md:m-0">Download My CV</button>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img src={profileImg} className="w-[50%] md:w-[75%] lg:w-[60%]" alt="profile picture" />
      </div>
    </div>
  );
}

export default HeroSection;
