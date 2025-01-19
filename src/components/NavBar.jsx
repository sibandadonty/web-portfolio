import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex justify-between px-8 py-4 bg-primary text-white border-2 border-gray-200 rounded-md">
      <h3>Donty Sibanda</h3>

      {/* Mobile Navigation */}
      <ul
        className={`flex gap-2 md:hidden absolute top-0 bottom-0 flex-col p-4 bg-white w-[50%] text-black ${
          showNav
            ? "left-0 duration-500 ease-in-out"
            : "left-[-1000px] duration-500 ease-in-out"
        }`}
      >
        <li>
          <a href="#">Donty Sibanda</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Technologies</a>
        </li>
        <li>
          <a href="#">Portifolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="md:hidden">
        <CiMenuBurger size={24} onClick={() => setShowNav(!showNav)}/>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-2">
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Technologies</a>
        </li>
        <li>
          <a href="#">Portifolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
