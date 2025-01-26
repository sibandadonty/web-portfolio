import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex justify-between p-4 bg-primary text-white">
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
        {showNav ? (
          <IoClose
            className="cursor-pointer"
            size={24}
            onClick={() => setShowNav(false)}
          />
        ) : (
          <CiMenuBurger
            className="cursor-pointer"
            size={24}
            onClick={() => setShowNav(!showNav)}
          />
        )}
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
