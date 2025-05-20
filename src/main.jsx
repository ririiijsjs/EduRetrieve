import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Login.jsx";
import "./SignUpForm.jsx";
import "./LoginForm.jsx";
import "./ForgotPassword.jsx";
import "./Dashboard.jsx";
import "./SmartQnA.jsx";
import "./ProgressTracking.jsx";
import "./TopicsAndSubjects.jsx";
import "./Sidebar.jsx";
import "./AccountSettings.jsx";
import "./AccountSidebar.jsx";
import "./AboutPage.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);