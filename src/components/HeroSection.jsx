import React from "react";
import profileImg from "../assets/images/profile-1.jpg";

function HeroSection() {
  return (
    <div className="text-white flex h-[25rem]">
      <div className="flex-1 flex flex-col gap-2 items-start self-center">
      <h1>Fullstack Software Developer</h1>
      <p>
        I am Donty, a full-stack software developer with a passion for building
        intuitive, responsive, and visually appealing web and mobile
        applications, as well as designing robust and efficient backend systems
        to power seamless user experiences.
      </p>
      <button>Download My CV</button>
      </div>
      <div className="flex-1">
        <img src={profileImg} className="w-full" alt="profile picture" />
      </div>
    </div>
  );
}

export default HeroSection;
