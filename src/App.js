import "./App.css";
import NavMenu from "./components/navmenu/NavMenu";

import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Section from "./components/section/Section";

function App() {
  return (
    <body className="body">
      <header className="header">
        <div className="nav">
          <NavMenu />
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
        <Section title="Curent Interests" children="" />
        <Section title="Contact" children="" />
      </div>
    </body>
  );
}

export default App;
