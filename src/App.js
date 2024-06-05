import "./App.css";
import {
  LinkedinOutlined,
  GithubOutlined,
  CaretRightOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Section from "./components/section/Section";

function App() {
  return (
    <body className="body" id="scrollID">

      <div className="side-display-left">
        <div className="vertical-line-top"></div>
        <div className="side-display-left-icon">
          <a
            href="https://www.linkedin.com/in/dean-papadofrangakis-22b166247/"
            target="_blank"
          >
            <LinkedinOutlined />
          </a>
        </div>
        <div className="side-display-left-icon">
          <a href="https://github.com/deanpapas" target="_blank">
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
          <h2>Dean Papas.</h2>
          <h3>Software Engineering Student</h3>
          <p>
            I'm a Software Engieneering student at RMIT University in Melbourne,
            Australia, with a passion for problem-solving and all things tech.
          </p>
        </div>

        <Section title="About Me">
          <div className="section">
            <p>
              Hello! My name is Dean, a Software Engineering student at RMIT
              University in Melbourne, Australia. My passion for software
              development began when I was in high school, starting with simple
              HTML and CSS websites. Since then, I have expanded my knowledge to
              include a variety of programming languages and frameworks,
              including Python, Java, Delphi and React.
            </p>
            <p>
              Outside of programming, I enjoy building computers, rock climbing
              and baking.
            </p>
          </div>
        </Section>
        <Section title="Experience" children="">
          <div className="section">
            <h3>
              IntegraDev | 2023 - Present
            </h3>
            <p>
              Currently I am working as a Software Developer at{" "}
              <a id="hyperlink" href="https://www.integradev.com.au/">
                IntegraDev
              </a>
              , a software company developing financial planning tools for the
              financial services industry.
            </p>
            <p>
              {" "}
              <CaretRightOutlined />
              Object Pascal{" "}
            </p>
            <p>
              {" "}
              <CaretRightOutlined />
              SQL{" "}
            </p>
            <p>
              {" "}
              <CaretRightOutlined />
              Git{" "}
            </p>
            <p>
              {" "}
              <CaretRightOutlined />
              GitHub{" "}
            </p>
          </div>
        </Section>

        {/* <Section title="Projects" children="" /> */}
        <Section title="Contact" children="">
          <div className="section">
            <p>
              Even though I'm not currently looking for new opportunities, my
              inbox is always open. Whether for a potential project or just to
              say hi, I'll try my best to answer your email!
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
    </body>
  );
}

export default App;
