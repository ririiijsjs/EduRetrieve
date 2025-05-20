import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Login.jsx";
// import "./SignUpForm.jsx";
// import "./LoginForm.jsx";
import "./ForgotPassword.jsx";
import "./Dashboard.jsx";
import "./SmartQnA.jsx";
import "./ProgressTracking.jsx";
import "./TopicsAndSubjects.jsx";
import "./Sidebar.jsx";
import "./AccountSettings.jsx";
import "./AccountSidebar.jsx";
import "./AboutPage.jsx";
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
