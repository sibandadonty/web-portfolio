import React from "react";
import { CiMenuBurger } from "react-icons/ci";

function NavBar() {
  return (
    <nav>
      <h3>Donty Sibanda</h3>

      {/* Mobile Navigation */}
      <ul>
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

      <div>
        <CiMenuBurger />
      </div>

      {/* Desktop Navigation */}
      <ul>
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
