import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./css/LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/dashboard"); 
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleHold = (value) => {
    setShowPassword(value);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Log In</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            className="login-input"
            required
          />

          <div className="password-fields">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icons"
              onMouseDown={() => handleHold(true)}
              onMouseUp={() => handleHold(false)}
              onMouseLeave={() => handleHold(false)}
              onTouchStart={() => handleHold(true)}
              onTouchEnd={() => handleHold(false)}
            >
              {!showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
          <button type="submit" className="login-button">Log in</button>
          <p className="signup-link">
            Don’t have an account? <a href="/signup">Sign up.</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;


