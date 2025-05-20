import React, { useState } from "react";
import "./css/TopicsAndSubjects.css";
import Sidebar from "./Sidebar";

const TopicsAndSubjects = () => {
  const [topics, setTopics] = useState([]);
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("topic"); // "topic" or "course"
  const [newItemName, setNewItemName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEditItem = () => {
    if (!newItemName.trim()) return;

    const updatedList = modalType === "topic" ? [...topics] : [...courses];

    if (editIndex !== null) {
      updatedList[editIndex] = newItemName;
    } else {
      updatedList.push(newItemName);
    }

    modalType === "topic" ? setTopics(updatedList) : setCourses(updatedList);
    setNewItemName("");
    setEditIndex(null);
    setShowModal(false);
  };

  const handleDelete = (index, type) => {
    const updated = type === "topic" ? [...topics] : [...courses];
    updated.splice(index, 1);
    type === "topic" ? setTopics(updated) : setCourses(updated);
  };

  const openModal = (type, index = null) => {
    setModalType(type);
    setEditIndex(index);
    setNewItemName(index !== null ? (type === "topic" ? topics[index] : courses[index]) : "");
    setShowModal(true);
  };

  const renderTopicCards = () => (
    <>
      {topics.map((topic, index) => (
        <div className="cards" key={index}>
          <div className="plus-circle">📘</div>
          <p>{topic}</p>
          <div className="card-actions">
            <button onClick={() => openModal("topic", index)}>✏️</button>
            <button onClick={() => handleDelete(index, "topic")}>🗑️</button>
          </div>
        </div>
      ))}
      <div className="cards add-card" onClick={() => openModal("topic")}>
        <div className="plus-circle">+</div>
        <p>Add a New Topic</p>
      </div>
    </>
  );

  const renderCourseCards = () => (
    <>
      {courses.map((course, index) => (
        <div className="cards" key={index}>
          <div className="plus-circle">🎓</div>
          <p>{course}</p>
          <div className="card-actions">
            <button onClick={() => openModal("course", index)}>✏️</button>
            <button onClick={() => handleDelete(index, "course")}>🗑️</button>
          </div>
        </div>
      ))}
      <div className="cards add-card" onClick={() => openModal("course")}>
        <div className="plus-circle">+</div>
        <p>Save a Course</p>
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
            <div className="grid">{renderTopicCards()}</div>
          </div>

          <div className="section">
            <h3>Saved Courses</h3>
            <div className="grid">{renderCourseCards()}</div>
          </div>
        </section>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>{editIndex !== null ? `Edit ${modalType}` : `Add New ${modalType}`}</h3>
              <input
                type="text"
                placeholder={`Enter ${modalType} name`}
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
              />
              <div className="modal-buttons">
                <button onClick={handleAddOrEditItem}>{editIndex !== null ? "Update" : "Add"}</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TopicsAndSubjects;




