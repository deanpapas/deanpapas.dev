import "./App.css";
import NavMenu from "./components/navmenu/NavMenu";

import React, { useEffect, useState } from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Section from "./components/section/Section";

function App() {
  const [currentSections, setCurrentSections] = useState(new Set());
  const sectionTitles = document.querySelectorAll(".section-title");

  useEffect(() => {
    const scrollElement = document.getElementById("scrollID");
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    for (let i = 0; i < sectionTitles.length; i++) {
      if (isElementOnScreen(sectionTitles[i])) {
        currentSections.add(sectionTitles[i].textContent);
      } else {
        currentSections.delete(sectionTitles[i].textContent);
      }
    }
    console.log(currentSections);
  };

  const isElementOnScreen = (elem) => {
    const rect = elem.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  return (
    <body className="body" id="scrollID">
      <header className="header">
        <div className="nav">
          {/* <NavMenu currentSections={currentSections} /> */}
        </div>
      </header>

      <div className="side-display-left">
        <div className="vertical-line-top"></div>
        <div className="side-display-left-icon">
          <LinkedinOutlined />
        </div>
        <div className="side-display-left-icon">
          <GithubOutlined />
        </div>
        <div className="side-display-left-icon">
          <MailOutlined />
        </div>
        <div className="vertical-line-bottom"></div>
      </div>

      <div className="side-display-right">
        <div className="vertical-line-top"></div>
        <a href="mailto:contact@deanpapas.dev">contact@deanpapas.dev</a>
        <div className="vertical-line-bottom-right"></div>
      </div>

      <div className="content">
        <div className="section" id="introduction">
          <h1>G'day, I'm</h1>
          <h2>Dean Papas.</h2>
          <h3>Software Engineering Student</h3>
          <p>
            I'm a Software Engieneering student at RMIT University in Melbourne,
            Australia, with a passion for problem-solving and all things tech.
          </p>
        </div>

        <Section title="About Me" children="" />
        <Section title="Experience" children="" />
        <Section title="Projects" children="" />
        <Section title="Contact" children="" />
      </div>
    </body>
  );
}

export default App;
