import './Modal.css';

const Modal = ({ show, onClose, images }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="image-gallery">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Project ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;