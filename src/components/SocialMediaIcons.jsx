import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";

function SocialMediaIcons() {
  return (
    <div className="flex gap-4 flex-wrap justify-center justify-items-center">
      <FaInstagram
        color="white"
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
      />
      <BsTwitterX
        color="white"
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
      />
      <CiLinkedin
        color="white"
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
      />
      <MdOutlineEmail
        color="white"
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
      />
      <FaWhatsapp
        color="white"
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
      />
      <PiTelegramLogo
        color="white"
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
      />
    </div>
  );
}

export default SocialMediaIcons;
