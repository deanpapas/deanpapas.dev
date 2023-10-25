
import React from "react";
import "./NavMenu.css";

const NavMenu = (props) => {


  console.log(props.currentSections); 
  const currentSectionElements = props.currentSections.map((section) => {
    return (
      <div className="nav-menu__item">
        <a href={"#" + section.title}>{section.title}</a>
      </div>
    );
  });

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
