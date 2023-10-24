
import React from "react";
import "./NavMenu.css";


const NavMenu = () => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__item">
        <a href="#about">About</a>
      </div>
      <div className="nav-menu__item">
        <a href="#projects">Projects</a>
      </div>
      <div className="nav-menu__item">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default NavMenu;
