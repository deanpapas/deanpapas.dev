import React, { useState } from "react";
import "./App.css";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Section from "./components/section/Section";
import Modal from "./components/modal/Modal";
import ProjectDisplay from "./components/projectdisplay/ProjectDisplay";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const handleOpenModal = (images) => {
    setShowModal(true);
    setModalImages(images);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="body" id="scrollID">
      <div className="side-display-left">
        <div className="vertical-line-top"></div>
        <div className="side-display-left-icon">
          <a
            href="https://www.linkedin.com/in/dean-papadofrangakis-22b166247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined />
          </a>
        </div>
        <div className="side-display-left-icon">
          <a
            href="https://github.com/deanpapas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined />
          </a>
        </div>
        <div className="vertical-line-bottom"></div>
      </div>

      <div className="side-display-right">
        <div className="vertical-line-top"></div>
        <a href="mailto:contact@deanpapas.dev">contact@deanpapas.dev</a>
        <div className="vertical-line-bottom-right"></div>
      </div>

      <div className="content">
        <div className="section">
          <h1>G'day, I'm</h1>
          <h2>Dean Papadofrangakis.</h2>
          <h3>Software Engineering Student</h3>
          <p>
            I'm a Software Engineering student at RMIT University in Melbourne,
            Australia, with a passion for problem-solving and all things tech.
          </p>
        </div>

        <Section title="About Me">
          <div className="section">
            <p>
              Hello! My name is Dean, and I'm a final-year Software Engineering
              student at RMIT University in Melbourne, Australia. My passion for
              software development started in high school with simple HTML and
              CSS websites, and since then, I've expanded my skills to include
              various programming languages and frameworks such as Python, Java,
              Delphi, and React. I'm currently looking for graduate positions
              starting next year!
            </p>
            <p>
              Outside of programming, I enjoy building computers, rock climbing,
              and baking. I'm also passionate about high-performance computing
              and custom water cooling.
            </p>
          </div>
        </Section>
        <Section title="Experience" children="">
          <div className="section">
            <h4>
              {" "}
              <a id="hyperlink" href="https://www.integradev.com.au/">
                IntegraDev
              </a>{" "}
              | 2023 - 2025 | Software Developer
            </h4>
            <p>
              Developed in-house software using Delphi for a company
              specializing in financial planning tools, supported development
              and QA teams, tested applications for usability, collaborated on
              issue resolution, and analyzed code for functionality issues.
            </p>
            <h4> Delphi | SQL | Git | GitHub</h4>
          </div>
        </Section>

        <Section title="Projects">
          <div className="section">
            <ProjectDisplay
              ProjectTitle="Custom Rack Mount Desk"
              ProjectHeaderImage={"/assets/RackmountPC/11.jpg"}
              ProjectImageFolder={"/assets/RackmountPC"}
              NumberImages={11}
              handleOpenModal={handleOpenModal}
            />
          </div>
        </Section>

        <Section title="Contact" children="">
          <div className="section">
            <p>
              Although I'm currently in my final year at RMIT, I'm actively
              looking for graduate positions starting next year. My inbox is
              always open, whether for a potential opportunity or just to say
              hi, I'll do my best to respond!
            </p>
            <p>
              <div id="contact-icons">
                {" "}
                <a id="contact-icon" href="mailto:contact@deanpapas.dev">
                  <MailOutlined />
                </a>
              </div>
            </p>
          </div>
        </Section>
      </div>

      <Modal show={showModal} onClose={handleCloseModal} images={modalImages} />
    </div>
  );
}

export default App;