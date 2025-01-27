import React from "react";
import ContactMeForm from "./ContactMeForm";
import SocialMediaIcons from './SocialMediaIcons';

function ContactMeSection() {
  return (
    <div className="flex p-8">
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
          DO YOU HAVE A PROJECT TO DISCUSS
        </h1>
        <h2 className="text-1xl lg:text-2xl xl:text-3xl">
          GET IN TOUCH <span>Message Icon</span>
        </h2>
        <div className="flex gap-12 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-1xl lg:text-2xl xl:text-3xl">Contact</h1>
            <p>sibandadonty@gmail.com</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Social Media</p>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
      <ContactMeForm />
    </div>
  );
}

export default ContactMeSection;
