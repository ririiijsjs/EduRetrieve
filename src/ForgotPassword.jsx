import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./css/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleReset = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Password reset link sent to your email!");
  };

  const handleHold = (setter, value) => {
    setter(value);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password?</h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-field">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span
            className="eye-icon"
            onMouseDown={() => handleHold(setShowNewPassword, true)}
            onMouseUp={() => handleHold(setShowNewPassword, false)}
            onMouseLeave={() => handleHold(setShowNewPassword, false)}
            onTouchStart={() => handleHold(setShowNewPassword, true)}
            onTouchEnd={() => handleHold(setShowNewPassword, false)}
          >
                        {!showNewPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <div className="password-field">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            className="eye-icon"
            onMouseDown={() => handleHold(setShowConfirmPassword, true)}
            onMouseUp={() => handleHold(setShowConfirmPassword, false)}
            onMouseLeave={() => handleHold(setShowConfirmPassword, false)}
            onTouchStart={() => handleHold(setShowConfirmPassword, true)}
            onTouchEnd={() => handleHold(setShowConfirmPassword, false)}
          >

            {!showConfirmPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <button onClick={handleReset}>Reset password</button>
        <p className="back-link">
          Back to <a href="/login">Login page</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;



