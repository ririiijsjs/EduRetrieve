import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/AboutPage.css";
import AccountSidebar from "./AccountSidebar";

const AboutPage = () => {
  return (
    <div className="about-container">
      <AccountSidebar />
      <div className="vertical-line"></div>
      <main className="about-content">
        <h1>About</h1>
        <hr className="about-divider" />
        <div className="about-box">
          <h2>EduRetrieve</h2>
          <p><strong>EduRetrieve</strong> is an AI-powered learning platform designed for students across various fields. It helps learners find accurate information quickly and efficiently, enhancing their academic journey.</p>

          <h3>Why Choose EduRetrieve?</h3>
          <ul>
            <li>✔ Combines AI-powered answers with full course materials</li>
            <li>✔ Helps students learn efficiently & organize their studies</li>
            <li>✔ Provides real-time updates on new learning resources</li>
            <li>✔ Works across multiple platforms for seamless access</li>
          </ul>

          <h3>How Does EduRetrieve Work?</h3>
          <p>
            Ask a question – Get an instant, AI-powered answer.<br />
            Learn more – EduRetrieve provides entire courses or modules related to your query.<br />
            Save & organize – Keep track of subjects, topics, and discussions for easy access.<br />
            Learn at your own pace – Track your progress and get personalized recommendations.
          </p>
        
        <div className="about-boxs">
          <h3>Our Mission & Vision</h3>
          <p><span>Mission:</span><br />
          EduRetrieve’s mission is to help students achieve their goals by making education accurate, accessible, and easy to explore.</p>

          <p><span>Vision:</span><br />
          We envision a future where all students have seamless access to the resources they need to succeed in their academic and personal development.</p>

          <div className="contact-section">
            <p>Need Help or Have Questions?</p>
            <button className="contact-button">Contact Us</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;

