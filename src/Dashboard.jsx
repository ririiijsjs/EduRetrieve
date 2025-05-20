import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp, onSnapshot, doc, setDoc } from 'firebase/firestore';
import "./css/Dashboard.css";
import Sidebar from "./Sidebar";

const createGlobalStatsDocument = async () => {
  try {
    const docRef = doc(db, 'stats', 'globalStats'); 
    await setDoc(docRef, {
      totalUsers: 0,
      activeToday: 0,
      newSignups: 0,
      questionsAsked: 0
    });
    console.log("Document successfully written!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState(null);
  const [updates, setUpdates] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [totalUsers, setTotalUsers] = useState(0);
  const [activeToday, setActiveToday] = useState(0);
  const [newSignups, setNewSignups] = useState(0);
  const [questionsAsked, setQuestionsAsked] = useState(0);

  const handleStartAsking = async () => {
    navigate('/smart-qna');
    setQuestionsAsked(prev => prev + 1);

    try {
      await addDoc(collection(db, 'userActivity'), {
        type: 'questionAsked',
        timestamp: serverTimestamp()
      });
    } catch (err) {
      console.error("Error logging activity:", err);
    }
  };

  const openModal = (title, time) => {
    setModalContent({ title, time });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    // Call createGlobalStatsDocument only if the stats document doesn't exist yet
    createGlobalStatsDocument(); // Call this function to initialize the document

    const unsub = onSnapshot(collection(db, 'userActivity'), (snapshot) => {
      const newUpdates = snapshot.docs.map(doc => ({
        title: `User did: ${doc.data().type}`,
        time: new Date(doc.data().timestamp?.toDate()).toLocaleTimeString(),
      }));
      setUpdates(newUpdates.reverse());

      if (newUpdates.length > 0) {
        setToastMessage(newUpdates[0].title);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    });

    return () => unsub();
  }, []);

  return (
    <div className="dashboard">
      <div><Sidebar /></div>

      <div className="profile-section-container">
        <div className="vertical-line"></div>
      </div>

      <div className="main-contents">
        {showToast && (
          <div className="toast-notification">
            ✅ New update: {toastMessage}
          </div>
        )}

        <h1>Home</h1>

        <div className="card-welcome">
          <div className="left">
            <h2>Welcome Back!</h2>
            <p>How can I assist you today?</p>
            <button onClick={handleStartAsking}>Start Asking</button>
            <div className="right">
              <img src="public/robot.png" alt="Robot" className="robot-img" />
            </div>
          </div>
        </div>

        <div className="card updates">
          <h2 className="live-header">
            Real-Time Updates <span className="live-dot"></span> 🔔
          </h2>

          <div className="section">
            <h4 className="today">Latest</h4>
            <ul>
              {updates.length === 0 && <li>No updates yet.</li>}
              {updates.map((item, idx) => (
                <li key={idx}>
                  <strong>Notification:</strong> {item.title} <br />
                  <button onClick={() => openModal(item.title, item.time)} className="link-btn">View</button> • {item.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="card analytics">
            <h2>User Analytics 📊</h2>
            <div className="analytics-grid">
              <div className="analytic-item">
                <h3>👥 Total Users</h3>
                <p>{totalUsers}</p>
              </div>
              <div className="analytic-item">
                <h3>🟢 Active Today</h3>
                <p>{activeToday}</p>
              </div>
              <div className="analytic-item">
                <h3>📈 New Signups</h3>
                <p>{newSignups}</p>
              </div>
              <div className="analytic-item">
                <h3>💬 Questions Asked</h3>
                <p>{questionsAsked}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{modalContent.title}</h3>
            <p><strong>Time:</strong> {modalContent.time}</p>
            <p>This is a preview of the selected content.</p>
            <button onClick={closeModal} className="modal-close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;





