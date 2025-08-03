import React from "react";
import "./ImageModal.css";

function ImageModal({ imageSrc, onClose }) {
  if (!imageSrc) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="확대 이미지" className="modal-image" />
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default ImageModal;
