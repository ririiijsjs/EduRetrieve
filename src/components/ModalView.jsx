import React, { useState } from "react";
import "../css/ModalView.css";

const UploadCourseModal = ({ isOpen, onClose, onUpload }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (title && file) {
      onUpload({ title, file });
      setTitle("");
      setFile(null);
      onClose();
    } else {
      alert("Please enter a title and choose a file.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Upload Course</h2>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
          />
        </label>
        <label>
          Upload File:
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        <div className="modal-buttons">
          <button onClick={handleUpload}>Upload</button>
          <button onClick={onClose} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UploadCourseModal;
