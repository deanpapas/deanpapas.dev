import "./Section.css";

const Section = (props) => {
  return (
    <div className="section" id="projects">
      <div className="section-title">
        <div className="section-title-text">
          <h2>{props.title}</h2>
        </div>
        <div className="horizontal-line"></div>
      </div>
      <div className="section-content">{props.children}</div>
    </div>
  );
};

export default Section;
