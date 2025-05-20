import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./css/SmartQnA.css";
import Sidebar from "./Sidebar";

const SmartQnA = () => {
  const [userInput, setUserInput] = useState("");
  const [questions, setQuestions] = useState([]);
  const [chatList, setChatList] = useState([]);
  const chatEndRef = useRef(null);
  const [responses, setResponses] = useState([]);


  const handleSubmit = () => {
    if (userInput.trim() !== "") {
      const newQuestion = userInput.trim();
      setQuestions([...questions, newQuestion]);
      setChatList([
        ...chatList,
        {
          title: newQuestion,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setUserInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [questions]);

  return (
    <div className="smartqna-container">
      <div><Sidebar /></div>
      <div className="profile-section-container">
        <div className="vertical-line"></div>
      </div>

      <div className="chat-section">
        <div className="chat-header">Chats</div>
        <div className="chat-search">
          <input
            type="text"
            placeholder="Search..."
            className="chat-input"
          />
          <button className="search-icon">
            <FaSearch />
          </button>
        </div>
        <div className="chat-list">
          <p className="chat-label">Today</p>
          {chatList.map((item, index) => (
            <ChatItem key={index} title={item.title} time={item.time} />
          ))}
        </div>
        <div className="chat-divider"></div>
      </div>

      <div className="main-section">
        <div>
          <h1 className="main-title">Smart Q&A</h1>
          <hr className="dividers" />
        </div>

        {questions.length === 0 && (
          <div className="welcome-box">
            <p className="emoji">🤖</p>
            <p className="welcome-text">
              Welcome to EduRetrieve!<br />Ready to explore knowledge?
            </p>
          </div>
        )}

        <div className="chat-history">
          {questions.map((q, index) => (
            <div key={index} className="user-question">
              <p>🧑‍🎓 {q}</p>
            </div>
          ))}
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="question-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="submit-button" onClick={handleSubmit}>↑</button>
        </div>
        <div ref={chatEndRef}></div>
      </div>
    </div>
  );
};

const ChatItem = ({ title, time }) => (
  <div className="chat-item">
    <p className="chat-title">{title}</p>
    <p className="chat-snippet">{time}</p>
  </div>
);

export default SmartQnA;
