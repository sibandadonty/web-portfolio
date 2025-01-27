import React from "react";

function ContactMeForm() {
  return (
    <div className="flex-1 flex flex-col gap-4 max-w-sm">
      <h1 className="text-left text-1xl md:text-2xl lg:text-3xl">
        Contact Form
      </h1>
      <form className="flex flex-col gap-4 items-center">
        <div className="w-full max-w-sm min-w-[200px]">
          <input
            className="bg-transparent border-gray-300 border-2 rounded-sm p-2 w-full max-w-sm"
            placeholder="Name"
          />
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <input
            className="bg-transparent border-gray-300 border-2 rounded-sm p-2 w-full max-w-sm"
            placeholder="Email"
          />
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <textarea
            name="Message"
            className="bg-transparent border-gray-300 border-2 rounded-sm p-2 w-full max-w-sm"
          ></textarea>
        </div>
        <button className="min-w-[200px] w-full max-w-sm bg-blue-400 text-white p-2 rounded-md">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMeForm;
