import React, { useState } from "react";
import "./css/TopicsAndSubjects.css";
import Sidebar from "./Sidebar";
import UploadCourseModal from "./components/ModalView"; // Adjust the import path as necessary

const TopicsAndSubjects = () => {
  const [topics, setTopics] = useState(0);
  const [courses, setCourses] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseUpload = (courseData) => {
    console.log("Uploaded course:", courseData);
    setCourses(courses + 1);
    // You can add a MongoDB upload call here later
  };

  const renderBoxes = (label, count, onAdd, isCourseSection = false) => (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div className="cards" key={index}>
          <div className="plus-circle">+</div>
          <p>{label}</p>
        </div>
      ))}
      <div
        className="cards add-card"
        onClick={isCourseSection ? () => setIsModalOpen(true) : onAdd}
      >
        <div className="plus-circle">+</div>
        <p>{isCourseSection ? "Upload Course" : "Add More"}</p>
      </div>
    </>
  );

  return (
    <div className="topics-page">
      <Sidebar />
      <div className="profile-section-container">
        <div className="vertical-line"></div>
      </div>

      <main className="main-content">
        <h1>Organized Storage for Topics & Subjects</h1>
        <div className="divider"></div>
        <section className="content-box">
          <h2><span className="highlight">Manage Your Learning Resources</span></h2>
          <p className="subtext">Save and organize your courses and topics for easy access anytime.</p>

          <div className="section">
            <h3>Saved Topic</h3>
            <div className="grid">
              {renderBoxes('Add a New Topic', topics, () => setTopics(topics + 1))}
            </div>
          </div>

          <div className="section">
            <h3>Upload Courses</h3>
            <div className="grid">
              {renderBoxes('Save a Course', courses, handleCourseUpload, true)}
            </div>
          </div>
        </section>
      </main>

      <UploadCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpload={handleCourseUpload}
      />
    </div>
  );
};

export default TopicsAndSubjects;
