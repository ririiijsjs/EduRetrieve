import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import ForgotPassword from "./ForgotPassword";
import Dashboard from "./Dashboard";
import SmartQnA from "./SmartQnA";
import ProgressTracking from "./ProgressTracking";
import TopicsAndSubjects from "./TopicsAndSubjects";
import Sidebar from "./Sidebar";
import AccountSettings from "./AccountSettings";
import AccountSidebar from "./AccountSidebar";
import Feedback from "./Feedback";
import AboutPage from "./AboutPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/smart-qna" element={<SmartQnA />} />
          <Route path="/progress-tracking" element={<ProgressTracking />} />
          <Route path="/topics-and-subjects" element={<TopicsAndSubjects />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="/account-sidebar" element={<AccountSidebar />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
   