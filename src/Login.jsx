import React from "react";
import { signUpWithGoogle } from "./auth.jsx";
import { signUpWithFacebook } from "./auth.jsx";
import { useNavigate } from "react-router-dom"; 
import "./css/login.css";

function Login() {
  const navigate = useNavigate(); 

  const handleGoogleSignIn = async () => {
    try {
      await signUpWithGoogle();
      alert('Signed in with Google!');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signUpWithFacebook();
      alert('Signed in with Facebook!');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = () => {
    navigate("/login"); 
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="eduretrieve-container">
      <div className="left-panel">
        <img src="public/eduretrieve-logo.png" alt="EdureTrieve Logo" className="logo-img"/>
        <h2>Welcome to EndureTrieve!</h2>
      </div>

      <div className="right-panel">
        <button className="btn login-btn" onClick={handleLogin}>Login</button>
        <button className="btn signup-btn" onClick={handleSignUp}>SignUp</button>
        <button className="btn social-btn" onClick={handleGoogleSignIn}>
          <img src="public/google.png" alt="Google" className="google-img" />
        </button>
        <button className="btn social-btn" onClick={handleFacebookSignIn}>
          <img src="public/facebook.png" alt="Facebook" className="facebook-img"/>
        </button>
        <button className="btn social-btn">
          <img src="public/apple.png" alt="Apple" className="apple-img"/>
        </button>
      </div>
    </div>
  );
}

export default Login;
