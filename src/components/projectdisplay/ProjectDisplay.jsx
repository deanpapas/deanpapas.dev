import "./ProjectDisplay.css";

const ProjectDisplay = ({
  ProjectTitle,
  ProjectHeaderImage,
  ProjectImageFolder,
  NumberImages,
  handleOpenModal,
}) => {
  if (!handleOpenModal) {
    return null;
  }

  const handleImageClick = () => {
    // Load images from folder and display in modal
    const images = [];
    for (let i = 1; i <= NumberImages; i++) {
      images.push(`${process.env.PUBLIC_URL}${ProjectImageFolder}/${i}.jpg`);
    }
    //print folder name to console
    console.log(ProjectImageFolder);
    handleOpenModal(images);
  };

  return (
    <div className="project-display">
      <h1 className="project-title">{ProjectTitle}</h1>
      <img
        src={`${process.env.PUBLIC_URL}${ProjectHeaderImage}`}
        alt={ProjectTitle}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default ProjectDisplay;