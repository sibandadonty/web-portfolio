import React from "react";
import ContactMeForm from "./ContactMeForm";

function ContactMeSection() {
  return (
    <div className="flex P-8">
      <div className="flex-1">
      <h1 className="text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
          DO YOU HAVE A PROJECT TO DISCUSS
        </h1>
      </div>
      <ContactMeForm />
    </div>
  );
}

export default ContactMeSection;
