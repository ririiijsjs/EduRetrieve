import React from "react";
import "./css/Feedback.css";
import { FaArrowLeft } from "react-icons/fa";
import AccountSidebar from "./AccountSidebar";

const Feedback = () => {
  return (
    <div className="feedback">
        <AccountSidebar />
        <div className="vertical-line"></div>
      <main className="feedback-content">
        <h1>Feedback</h1>
        <hr className="content-divider" />

        <div className="feedback-card">
          <div className="feedback-text">
            <h2>Rate your learning experience to help us improve!</h2>

            <div className="star-rating">
              {Array(5).fill().map((_, i) => (
                <span key={i} className="star">☆</span>
              ))}
            </div>

            <p><strong>Your feedback helps us grow!</strong> Share your thoughts on how we can make EduRetrieve even better.</p>
            <textarea placeholder="Add your feedback" />

            <p><strong>Would you like a response to your feedback?</strong></p>
            <textarea placeholder="If yes, add your email" />

            <button className="submit-button">Submit</button>
          </div>

          <div className="feedback-image">
            <img src="/robot.png" alt="Robot" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feedback;
